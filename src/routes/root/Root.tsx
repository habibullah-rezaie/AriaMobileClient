import config from "app.config";
import { queryClient } from "context/react-query/QueryProvider";
import { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import { QueryClientProvider } from "react-query";
import { Outlet, useNavigate, useParams } from "react-router-dom";

// Using suspense
function Root() {
	const params = useParams();
	const navigate = useNavigate();

	const { i18n } = useTranslation();

	// Choose the right language
	useLayoutEffect(() => {
		if (i18n.isInitialized) {
			if (params.lang === i18n.resolvedLanguage) {
				document.dir = i18n.dir(params.lang);
				console.log(i18n.dir(params.lang), params.lang);
				return;
			}

			if (
				params.lang &&
				config.languages[params.lang as keyof typeof config.languages]
			) {
				i18n.changeLanguage(params.lang).then(() => {
					document.dir = i18n.dir(params.lang);
					navigate(`/${params.lang}`);
				});
			} else {
				document.dir = i18n.dir(i18n.resolvedLanguage);
				navigate(`/${i18n.resolvedLanguage}`);
			}
		}
	}, [i18n, navigate, params.lang]);

	return (
		<div>
			<QueryClientProvider client={queryClient}>
				<Outlet />
			</QueryClientProvider>
		</div>
	);
}

export default Root;
