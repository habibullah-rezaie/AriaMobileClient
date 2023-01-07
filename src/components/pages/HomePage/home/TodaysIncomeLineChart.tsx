import { Card, LineChart, Title } from "@tremor/react";
import { useTranslation } from "react-i18next";

const chartdata = [
	{
		year: 1951,
		"Population growth rate": 1.74,
	},
	{
		year: 1952,
		"Population growth rate": 1.93,
	},
	{
		year: 1953,
		"Population growth rate": 1.9,
	},
	{
		year: 1954,
		"Population growth rate": 1.98,
	},
	{
		year: 1955,
		"Population growth rate": 2,
	},
];

const dataFormatter = (number: number) =>
	`${Intl.NumberFormat("us").format(number).toString()}%`;

function TodaysIncomeLineChart() {
	const { t } = useTranslation();
	return (
		// <Card>
		// 	<Text>{t("home-chart-today-income-stats")}</Text>

		// 	<LineChart
		// 		categories={["time"]}
		// 		data={data}
		// 		dataKey="income"
		// 		colors={["blue"]}
		// 		height="h-80"
		// 		marginTop="mt-3"
		// 		showXAxis={true}
		// 		showYAxis={true}
		// 		yAxisWidth={"w-20"}
		// 		showTooltip={true}
		// 		valueFormatter={(num: number) => {
		// 			return `${Intl.NumberFormat("en").format(num).toString()}`;
		// 		}}
		// 	/>
		// </Card>
		<Card>
			<Title>Population growth rate (1951 to 2021)</Title>
			<LineChart
				data={chartdata}
				dataKey="year"
				categories={["Population growth rate"]}
				colors={["blue"]}
				valueFormatter={dataFormatter}
				marginTop="mt-6"
				yAxisWidth="w-10"
				height="h-40"
			/>
		</Card>
	);
}

// import { Card, Title, LineChart } from "@tremor/react";

export default TodaysIncomeLineChart;
