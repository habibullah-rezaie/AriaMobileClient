import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import QueryProvider from "context/react-query/QueryProvider";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/routes";

function App() {
	return (
		<>
			<div className="App">
				<RouterProvider router={router} />
			</div>
		</>
	);
}

export default App;
