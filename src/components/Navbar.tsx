import { PiDiamondsFourLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";

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
					<NavLink to="/">
						{({ isActive }) => (
							<span
								className={`px-4 py-1 flex justi hover:bg-black hover:text-gray-200 hover:rounded-xl duration-200 ${
									isActive ? "bg-black text-gray-200 " : ""
								}`}
							>
								Main
							</span>
						)}
					</NavLink>
					<NavLink to="/skills">
						{({ isActive }) => (
							<span
								className={`px-4 py-1 flex justi hover:bg-black hover:text-gray-200 hover:rounded-xl duration-200 ${
									isActive ? "bg-black text-gray-200 " : ""
								}`}
							>
								Skills
							</span>
						)}
					</NavLink>
					<NavLink to="/projects">
						{({ isActive }) => (
							<span
								className={`px-4 py-1 flex justi hover:bg-black hover:text-gray-200 hover:rounded-xl duration-200 ${
									isActive ? "bg-black text-gray-200 " : ""
								}`}
							>
								Projects
							</span>
						)}
					</NavLink>
					<NavLink to="/Contact">
						{({ isActive }) => (
							<span
								className={`px-4 py-1 flex justi hover:bg-black hover:text-gray-200 hover:rounded-xl duration-200 ${
									isActive ? "bg-black text-gray-200 " : ""
								}`}
							>
								Contact
							</span>
						)}
					</NavLink>
				</nav>
			</section>
		</div>
	);
}
