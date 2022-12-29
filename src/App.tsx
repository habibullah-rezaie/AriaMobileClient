import { RouterProvider } from "react-router-dom";
import "./App.css";
import configureRouter from "./routes/routes";

function App() {
	const router = configureRouter();
	return (
		<>
			<div className="App">
				<RouterProvider router={router} />
			</div>
			<div>
				{/* onSubmit={(e) => {
						e.preventDefault();

						fetch("http://localhost:8000/login", {
							body: JSON.stringify({
								email: "habibullah.rezaie.8@gmail.com",
								password: "hi123456",
							}),
							headers: {
								"Content-Type": "application/json",
							},
							credentials: "include",
							method: "POST",
						})
							.then((res) => res.json())
							.then((json) => console.log(json, "hitting login"));
					}} */}
				{/* onClick={() => {
							fetch("http://localhost:8000/", {
								credentials: "include",
							}).then((x) => console.log(x.ok, "hitting home")); */}
				{/* onClick={() => {
							fetch("http://localhost:8000/token", {
								method: "POST",
								credentials: "include",
							}).then((x) => console.log(x.ok, "getting new token"));
						}} */}
			</div>
		</>
	);
}

export default App;
