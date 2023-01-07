import HomeIcon from "components/Icons/HomeIcon";
import SettingsIcon from "components/Icons/SettingsIcon";
import ImgWithLoader from "components/lib/Img/ImgWithLoader";
import NavItem from "components/shared/NavItem";
import { useTranslation } from "react-i18next";
import { AiOutlinePoweroff } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FiBarChart2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import Logo from "routes/unauthenticated/Logo";
import profPic from "./../../../../assets/img/DefaultProfile.png";

function VerticalNavBar() {
	const { i18n } = useTranslation();
	return (
		<div className="h-screen w-[6rem] py-[2.5rem] px-1.5rem bg-thirdGray">
			<nav
				role={"menubar"}
				aria-orientation="vertical"
				className=" h-full flex flex-col "
			>
				{/* Logo Goes here */}
				<Link to="/">
					<div className="flex flex-col justify-center items-center" dir="ltr">
						<div className="h-fit mb-0.5">
							<Logo className="h-9" />
						</div>
						<h1 className="leading-[2rem] text-[1rem] font-poppins font-normal">
							<strong>Aria</strong> Mobile
						</h1>
					</div>
				</Link>

				<div className="flex-1 flex h-full flex-col justify-around">
					<ul
						role={"menu"}
						className="flex flex-col items-center space-y-[1.83rem]"
					>
						<li className="w-fit">
							<NavItem
								Icon={HomeIcon}
								title={"Home"}
								route={`/${i18n.resolvedLanguage}`}
							/>
						</li>
						<li className="w-fit">
							<NavItem
								Icon={FiBarChart2}
								title={"Statistics"}
								route={`/${i18n.resolvedLanguage}/stats`}
							/>
						</li>
						<li className="w-fit">
							<NavItem
								Icon={BiDollar}
								title={"Finance"}
								route={`/${i18n.resolvedLanguage}/finance`}
							/>
						</li>
						<li className="w-fit">
							<NavItem
								Icon={SettingsIcon}
								title={"Settings"}
								route={`/${i18n.resolvedLanguage}/settings`}
							/>
						</li>
					</ul>
				</div>

				<div className="space-y-4 flex flex-col items-center">
					<button className={`w-fit h-fit rounded-lg p-0 self-center`}>
						<AiOutlinePoweroff className={`w-6 h-6 text-appRed`} />
					</button>
					<Link
						to={`/${i18n.resolvedLanguage}/settings/profile`}
						className="w-fit block"
					>
						<ImgWithLoader
							src={profPic}
							className={"rounded-[100%] overflow-hidden"}
							aspectWidth={1}
							aspectHeight={1}
							width={"2.5rem"}
							height={"2.5rem"}
						/>
					</Link>
				</div>
			</nav>
		</div>
	);
}

export default VerticalNavBar;
