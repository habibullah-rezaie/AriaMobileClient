import SectionCard from "components/lib/cards/SectionCard";
import { useMemo } from "react";
import { AxisOptions, Chart } from "react-charts";
import { useTranslation } from "react-i18next";

export type TodayIncomeGraphData = {
	time: Date;
	income: number;
};

const curTimeStamp = get7AMToday();

function TodaysIncomeLineChart() {
	const { t } = useTranslation();

	const chartdata = [
		{
			label: "Sells",
			data: [...new Array(10)].map((_, i) => {
				let time = new Date(curTimeStamp + i * 3600 * 1000);

				let money = Math.random() * 10000;

				return { time, income: money };
			}),
		},
	];

	const primaryAxis = useMemo(
		(): AxisOptions<TodayIncomeGraphData> => ({
			getValue: (dataObj) => dataObj.time,
			scaleType: "localTime",
		}),
		[]
	);

	const secondaryAxes = useMemo(
		(): AxisOptions<TodayIncomeGraphData>[] => [
			{
				getValue: (dataObj) => dataObj.income,
				elementType: "line",
			},
		],
		[]
	);

	return (
		<SectionCard title={t("todays-income-stats")} className="w-full">
			<div
				style={{
					width: "calc(100%-3.34rem)",
					height: "16rem",
					minWidth: "24.5rem",
				}}
				className="flex items-center justify-center relative"
			>
				<Chart
					options={{
						data: chartdata,
						primaryAxis,
						secondaryAxes,
						tooltip: {
							show: false,
						},
					}}
				/>
			</div>
		</SectionCard>
	);
}

// import { Card, Title, LineChart } from "@tremor/react";

export default TodaysIncomeLineChart;
function get7AMToday() {
	let now = Date.now();
	let curTimeStamp = now - (now % (86400 * 1000));
	const curDate = new Date(curTimeStamp);
	curTimeStamp -= curDate.getHours() * 3600 * 1000;

	curTimeStamp += 7 * 3600 * 1000;
	return curTimeStamp;
}
