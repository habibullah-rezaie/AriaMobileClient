import { queryClient } from "context/react-query/QueryProvider";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import AuthenticatedPage, {
	getHomeLoader,
} from "./authenticated/AuthenticatedPage";
import HomePage from "./authenticated/home/HomePage";
import LoginPage, { getLoginAction } from "./unauthenticated/LoginPage";
import LangRoute from "./root/LangRoute";
import Root from "./root/Root";
import Stats from "./authenticated/Stats";
import Finance from "./authenticated/Finance";
import Settings from "./authenticated/Settings";
import HomeWrapperPage from "./authenticated/home/HomeWrapperPage";
import NewBillPage from "./authenticated/home/NewBillPage";
import NewItemPage from "./authenticated/home/NewItemPage";
import ForgotPassword from "./unauthenticated/ForgotPassword";

export default createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="/:lang" element={<LangRoute />}>
				<Route
					path="/:lang"
					element={<AuthenticatedPage />}
					loader={getHomeLoader(queryClient)}
				>
					<Route path="" element={<HomeWrapperPage />}>
						<Route index element={<HomePage />} />
						<Route path="new-bill" element={<NewBillPage />} />
						<Route path="new-item" element={<NewItemPage />} />
					</Route>
					<Route path="stats" element={<Stats />} />
					<Route path="finance" element={<Finance />} />
					<Route path="settings" element={<Settings />} />
				</Route>

				<Route
					path="login"
					element={<LoginPage />}
					action={getLoginAction(queryClient)}
				/>
				<Route path="forgot-password" element={<ForgotPassword />} />
			</Route>
		</Route>
	)
);
