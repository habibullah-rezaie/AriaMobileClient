import PageLoader from "components/lib/loaders/PageLoader";
import "i18/i18";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<React.Suspense
			fallback={
				<div className="w-screen h-screen flex items-center justify-center">
					<PageLoader className="w-40 h-40 fill-[#16161A]/50" />
				</div>
			}
		>
			<App />
		</React.Suspense>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
