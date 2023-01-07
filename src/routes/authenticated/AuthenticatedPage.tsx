import { userQuery } from "api/cache/queryBuilders/user";
import PageLoader from "components/lib/loaders/PageLoader";
import TopBar from "components/pages/HomePage/shared/TopBar";
import VerticalNavBar from "components/pages/HomePage/shared/VerticalNavBar";
import TodayStats from "components/shared/TodayStats";
import i18next from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { QueryClient, useQuery } from "react-query";
import {
	LoaderFunction,
	Outlet,
	redirect,
	useNavigate,
} from "react-router-dom";

function AuthenticatedPage() {
	const query = useQuery<{ email: string; role: string }>(userQuery());

	const { i18n } = useTranslation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!query.isLoading && !query.isSuccess) {
			navigate(`/${i18n.resolvedLanguage}/login`);
		}
	}, [i18n.resolvedLanguage, navigate, query.isLoading, query.isSuccess]);

	if (query.isLoading) {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<PageLoader className="w-40 h-40 fill-[#16161A]/50" />
			</div>
		);
	}

	return (
		<div className={`grid grid-flow-col grid-rows-1 grid-cols-[auto_1fr]`}>
			<div className={`w-fit grid grid-flow-col grid-rows-1`}>
				<VerticalNavBar />
				<TodayStats />
			</div>
			<div className="w-full h-full flex flex-col space-x-1  pt-[3.33rem] px-[1.67rem]">
				<TopBar />
				<Outlet />
			</div>
		</div>
	);
}

// hit the GET /user in here so that you make sure
export function getHomeLoader(queryClient: QueryClient): LoaderFunction {
	return async () => {
		try {
			const query = userQuery();
			queryClient.fetchQuery(query);
		} catch (err) {
			return redirect("/" + i18next.language + "/login");
		}

		return { user: null };
	};
}

export default AuthenticatedPage;
