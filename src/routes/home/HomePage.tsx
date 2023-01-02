import { userQuery } from "api/cache/queryBuilders/user";
import PageLoader from "components/lib/loaders/PageLoader";
import i18next from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { QueryClient, useQuery } from "react-query";
import { LoaderFunction, redirect, useNavigate } from "react-router-dom";

function HomePage() {
	const query = useQuery<{ email: string; role: string }>(userQuery());
	const { i18n } = useTranslation();
	const navigate = useNavigate();

	useEffect(() => {
		if (!query.isLoading && !query.isSuccess) {
			navigate(`/${i18n.language}/login`);
		}
	}, [i18n.language, navigate, query.isLoading, query.isSuccess]);

	if (query.isLoading) {
		return (
			<div className="w-screen h-screen flex items-center justify-center">
				<PageLoader className="w-40 h-40 fill-[#16161A]/50" />
			</div>
		);
	}

	return (
		<div>
			Hello {query.data?.email}, You are a {query.data?.role}
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

export default HomePage;
