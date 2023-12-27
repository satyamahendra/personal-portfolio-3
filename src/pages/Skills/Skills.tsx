import { NavLink, Outlet } from "react-router-dom";

import { PiGearLight } from "react-icons/pi";

export default function Skills() {
	return (
		<main className="flex justify-center h-screen">
			<div className="flex w-full max-w-3xl py-32 pr-4 sm:pr-8">
				<Outlet />
				<section className="flex flex-col justify-center w-2/5 gap-4 px-4 border-l border-gray-400">
					<h2 className="flex items-center gap-2 pb-4 text-2xl border-b border-gray-400">
						<PiGearLight /> Skills
					</h2>
					<nav className="flex flex-col text-sm duration-200 sm:text-base">
						<NavLink to="." end>
							{({ isActive }) => (
								<div
									className={`px-2 py-2 hover:rounded-xl duration-200 hover:bg-black hover:text-gray-200 ${
										isActive ? "bg-black text-gray-200" : ""
									}`}
								>
									Tech Stack
								</div>
							)}
						</NavLink>
						<NavLink to="code">
							{({ isActive }) => (
								<div
									className={`px-2 py-2 hover:rounded-xl duration-200 hover:bg-black hover:text-gray-200 ${
										isActive ? "bg-black text-gray-200" : ""
									}`}
								>
									Code
								</div>
							)}
						</NavLink>
						<NavLink to="uiux">
							{({ isActive }) => (
								<div
									className={`px-2 py-2 hover:rounded-xl duration-200 hover:bg-black hover:text-gray-200 ${
										isActive ? "bg-black text-gray-200" : ""
									}`}
								>
									UI/UX
								</div>
							)}
						</NavLink>
						<NavLink to="communication">
							{({ isActive }) => (
								<div
									className={`px-2 py-2 hover:rounded-xl duration-200 hover:bg-black hover:text-gray-200 ${
										isActive ? "bg-black text-gray-200" : ""
									}`}
								>
									Communication
								</div>
							)}
						</NavLink>
						<NavLink to="environment">
							{({ isActive }) => (
								<div
									className={`px-2 py-2 hover:rounded-xl duration-200 hover:bg-black hover:text-gray-200 ${
										isActive ? "bg-black text-gray-200" : ""
									}`}
								>
									Environment
								</div>
							)}
						</NavLink>
					</nav>
				</section>
			</div>
		</main>
	);
}
