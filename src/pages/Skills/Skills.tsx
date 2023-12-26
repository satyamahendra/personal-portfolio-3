import { NavLink, Outlet } from "react-router-dom";

export default function Skills() {
	return (
		<main className="h-screen flex justify-center">
			<div className="max-w-3xl w-full py-40 flex">
				<Outlet />
				<section className="border-l border-gray-400 w-2/5 justify-center flex flex-col gap-4 px-4">
					<h2>Skills</h2>
					<nav className="flex flex-col">
						<NavLink to=".">Tech Stack</NavLink>
						<NavLink to="code">Code</NavLink>
						<NavLink to="uiux">UI/UX</NavLink>
						<NavLink to="communication">Communication</NavLink>
						<NavLink to="environment">Environment</NavLink>
					</nav>
				</section>
			</div>
		</main>
	);
}
