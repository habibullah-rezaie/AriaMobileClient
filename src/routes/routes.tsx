import React from "react";
import { createBrowserRouter, LoaderFunction } from "react-router-dom";
import HomePage from "./HomePage";

function configureRouter() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <HomePage />,
			children: [],
		},
	]);

	return router;
}

const loader: LoaderFunction = ({}) => {};

export default configureRouter;
