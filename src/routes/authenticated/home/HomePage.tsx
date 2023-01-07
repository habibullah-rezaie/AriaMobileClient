import TodaysIncomeLineChart from "components/pages/HomePage/home/TodaysIncomeLineChart";
import React from "react";
import { Outlet } from "react-router-dom";

function HomePage() {
	return (
		<div className="w-full h-full">
			<div style={{ height: "50rem" }}>
				<TodaysIncomeLineChart />
			</div>
			<Outlet />
		</div>
	);
}

export default HomePage;
