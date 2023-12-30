import { PiDiamondsFourLight, PiDiamondsFourFill } from "react-icons/pi";
import NavbarButton from "./NavbarButton";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<>
			{/* logo */}
			<section className="fixed top-0 left-0 p-4 duration-200 sm:p-12">
				<Link
					to="/"
					className="flex flex-col items-center text-xl group sm:text-2xl"
				>
					<PiDiamondsFourLight className="block group-hover:hidden" />
					<PiDiamondsFourFill className="hidden group-hover:block" />
					<span>satya.dev</span>
				</Link>
			</section>

			{/* trademark */}
			<section className="fixed top-0 left-0 w-full p-4 text-center duration-200 sm:p-12">
				2023 - satya.dev
			</section>

			{/* navigation */}
			<section className="fixed top-0 right-0 p-4 duration-200 sm:p-12">
				<nav className="flex flex-col items-end text-lg sm:text-2xl">
					<NavbarButton to="/" name="Main" />
					<NavbarButton to="/skills" name="Skills" />
					<NavbarButton to="/projects" name="Projects" />
					<NavbarButton to="/contact" name="Contact" />
				</nav>
			</section>
		</>
	);
}
