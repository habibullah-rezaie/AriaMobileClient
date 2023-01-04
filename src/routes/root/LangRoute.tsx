import { useRenewTkQuery } from "hooks/cache/auth";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";

function LangRoute() {
	const navigate = useNavigate();
	const { i18n } = useTranslation();
	const errorHandler = useCallback(
		(err: any) => {
			navigate(`/${i18n.resolvedLanguage}/login`);
		},
		[i18n.resolvedLanguage, navigate]
	);

	const query = useRenewTkQuery(errorHandler);

	console.log(query.status, query.isStale, query.isFetching);

	return (
		<div>
			<Outlet />
		</div>
	);
}

export default LangRoute;
