import { Outlet, Link } from "react-router-dom";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

import { PiGearLight } from "react-icons/pi";
import NavbarButton from "./NavbarButton";

export default function Skills() {
	return (
		<main className="flex justify-center h-screen">
			<div className="flex w-full max-w-3xl pt-32 pb-16 pr-4 sm:pr-8">
				<Outlet />

				<section className="flex flex-col justify-center w-2/5 gap-4 px-4 duration-200 border-l border-gray-400 sm:px-8 sm:mb-40">
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

			<div className="fixed bottom-0 w-full gap-6 mb-5 text-sm ">
				<div className="flex justify-center">
					<Link
						to="/"
						className="flex items-center w-32 gap-2 pl-2 duration-200 hover:pl-0 group"
					>
						<div className="flex items-center justify-center w-6 h-6 duration-200 border border-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-gray-200">
							<PiCaretLeftLight />
						</div>
						Main page
					</Link>

					<Link
						to="/projects"
						className="flex items-center justify-end w-32 gap-2 pr-2 duration-200 group hover:pr-0"
					>
						Projects page
						<div className="flex items-center justify-center w-6 h-6 duration-200 border border-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-gray-200">
							<PiCaretRightLight />
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
