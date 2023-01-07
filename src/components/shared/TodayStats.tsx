import { useTranslation } from "react-i18next";

function TodayStats() {
	const { t } = useTranslation();
	return (
		<section className="w-fit bg-thirdGray pt-[2.50rem] px-[1.67rem] flex flex-col">
			<h2 className="heading-4">{t("todays-stats")}</h2>

			<div className="flex flex-1 items-center">
				<div className="flex flex-col space-y-[1.67rem]">
					<div className="p-[0.83rem] bg-white space-y-[0.83rem]">
						<p className="heading-2">{t("formatNumber", { val: 240000 })}</p>
						<h2 className="text-caption">{t(`todays-total-income`)}</h2>
					</div>
					<div className="p-[0.83rem] bg-white space-y-[0.83rem]">
						<p className="heading-2">{t("formatNumber", { val: 240000 })}</p>
						<h2 className="text-caption">{t(`todays-total-billed-sell`)}</h2>
					</div>
					<div className="p-[0.83rem] bg-white space-y-[0.83rem]">
						<p className="heading-2">{t("formatNumber", { val: 240000 })}</p>
						<h2 className="text-caption">{t(`todays-total-unbilled-sell`)}</h2>
					</div>
					<div className="p-[0.83rem] bg-white space-y-[0.83rem]">
						<p className="heading-2">{t("formatNumber", { val: 240000 })}</p>
						<h2 className="text-caption">{t(`todays-total-withdraws`)}</h2>
					</div>
					<div className="p-[0.83rem] bg-white space-y-[0.83rem]">
						<p className="heading-2">{t("formatNumber", { val: 240000 })}</p>
						<h2 className="text-caption">{t(`todays-new-items`)}</h2>
					</div>
				</div>
			</div>
		</section>
	);
}

export default TodayStats;
