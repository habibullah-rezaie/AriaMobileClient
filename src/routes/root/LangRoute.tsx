import { useRenewTkQuery } from "hooks/cache/auth";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function LangRoute() {
	const navigate = useNavigate();
	const location = useLocation();
	const [refetchToken, setRefetchToken] = useState(
		!location.pathname.includes("/login")
	);
	const { i18n } = useTranslation();

	const errorHandler = useCallback(
		(err: any) => {
			setRefetchToken(false);
			navigate(`/${i18n.resolvedLanguage}/login`);
		},
		[i18n.resolvedLanguage, navigate]
	);

	const query = useRenewTkQuery(refetchToken, errorHandler);

	console.log(query.status, query.isStale, query.isFetching);

	return (
		<div
			className={`overflow-hidden text-appBase-normal text-appBase ${
				i18n.resolvedLanguage === "fa" ? "font-iranSansX" : ""
			}`}
		>
			<Outlet />
		</div>
	);
}

export default LangRoute;
