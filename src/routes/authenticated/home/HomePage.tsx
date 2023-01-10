import UnbilledSellForm from "components/pages/HomePage/home/NewUnbilledSell";
import TodaysIncomeLineChart from "components/pages/HomePage/home/TodaysIncomeLineChart";
import { useTranslation } from "react-i18next";

function HomePage() {
	const { t, i18n } = useTranslation();
	return (
		<div className="w-full h-full bg-white">
			<div className="grid grid-flow-col grid-cols-[auto_1fr] gap-1 mt-[6.08rem] ">
				<UnbilledSellForm />
				<TodaysIncomeLineChart />
			</div>
		</div>
	);
}

export default HomePage;
