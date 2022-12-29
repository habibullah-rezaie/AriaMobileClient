import React from "react";
import { RouteObject } from "react-router-dom";
import LoginPage from "./LoginPage";

function loginRoutes(): RouteObject {
	return { path: "/login", element: <LoginPage /> };
}

export default loginRoutes;
