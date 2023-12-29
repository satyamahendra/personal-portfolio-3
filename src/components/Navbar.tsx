import { PiDiamondsFourLight, PiDiamondsFourFill } from "react-icons/pi";
import NavbarButton from "./NavbarButton";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<div className="fixed top-0 left-0 flex justify-between w-full p-4 sm:p-12 ">
			{/* site name */}
			<section>
				<Link
					to="/"
					className="flex flex-col items-center text-xl group sm:text-2xl"
				>
					<PiDiamondsFourLight className="block group-hover:hidden" />
					<PiDiamondsFourFill className="hidden group-hover:block" />
					<span>satya.dev</span>
				</Link>
			</section>

			<section className="text-xs">2023 - satya.dev</section>

			{/* navigation */}
			<section>
				<nav className="flex flex-col items-end text-lg sm:text-2xl">
					<NavbarButton to="/" name="Main" />
					<NavbarButton to="/skills" name="Skills" />
					<NavbarButton to="/projects" name="Projects" />
					<NavbarButton to="/contact" name="Contact" />
				</nav>
			</section>
		</div>
	);
}
