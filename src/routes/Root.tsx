import QueryProvider from "context/react-query/QueryProvider";
import { Outlet } from "react-router-dom";

// TODO: should render a loader until user is recieved
// Using suspense
function Root() {
	return (
		<div>
			<QueryProvider>
				<Outlet />
			</QueryProvider>
		</div>
	);
}

export default Root;
