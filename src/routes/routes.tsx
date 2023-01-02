import { queryClient } from "context/react-query/QueryProvider";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import HomePage, { getHomeLoader } from "./home/HomePage";
import LoginPage, { getLoginAction } from "./login/LoginPage";
import Root from "./Root";

export default createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />}>
			<Route path="/:lang" element={<AppWithLang />}>
				<Route
					index
					element={<HomePage />}
					loader={getHomeLoader(queryClient)}
				/>
				<Route
					path="login"
					element={<LoginPage />}
					action={getLoginAction(queryClient)}
				/>
			</Route>
		</Route>
	)
);

function AppWithLang() {
	return (
		<div>
			<Outlet />
		</div>
	);
}
