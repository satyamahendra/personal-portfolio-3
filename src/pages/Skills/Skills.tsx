import { Outlet } from "react-router-dom";

import { PiGearLight } from "react-icons/pi";
import NavbarButton from "./NavbarButton";

export default function Skills() {
	return (
		<main className="flex justify-center h-screen">
			<div className="flex w-full max-w-3xl pt-32 pb-12 pr-4 sm:pr-8">
				<Outlet />
				<section className="flex flex-col justify-center w-2/5 gap-4 px-4 duration-200 border-l border-gray-400 sm:mb-40">
					<h2 className="flex items-center gap-2 pb-4 text-xl border-b border-gray-400">
						<PiGearLight /> Skills
					</h2>
					<nav className="flex flex-col text-sm duration-200 sm:text-base">
						<NavbarButton url="." isEnd={true} name="Tech stack" />
						<NavbarButton url="code" isEnd={false} name="Coding style" />
						<NavbarButton url="uiux" isEnd={false} name="UI/UX" />
						<NavbarButton
							url="communication"
							isEnd={false}
							name="Communication"
						/>
						<NavbarButton url="environment" isEnd={false} name="Environment" />
					</nav>
				</section>
			</div>
		</main>
	);
}
