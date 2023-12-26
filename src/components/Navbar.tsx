import { PiDiamondsFourLight } from "react-icons/pi";
import NavbarButton from "./NavbarButton";

export default function Navbar() {
	return (
		<div className="w-full flex justify-between fixed top-0 left-0 sm:p-12 p-4 ">
			{/* site name */}
			<section>
				<h1 className="text-2xl flex items-center flex-col">
					<PiDiamondsFourLight />
					<span>satya.dev</span>
				</h1>
			</section>

			<section className="text-xs">2023 - satya.dev</section>

			{/* navigation */}
			<section>
				<nav className="text-2xl flex flex-col items-end">
					<NavbarButton to="/" name="Main" />
					<NavbarButton to="/skills" name="Skills" />
					<NavbarButton to="/projects" name="Projects" />
					<NavbarButton to="/contact" name="Contact" />
				</nav>
			</section>
		</div>
	);
}
