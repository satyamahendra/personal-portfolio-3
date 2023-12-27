import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";

export default function Techstack() {
	return (
		<section className="flex flex-col items-center w-3/5 gap-4 px-4 sm:px-8">
			<h2 className="w-full pb-4 text-2xl text-center border-b border-gray-400">
				Tech stack
			</h2>
			<ul className="flex flex-col gap-2 text-sm font-normal tracking-wide duration-200 sm:gap-4">
				<li className="flex items-center gap-4 ">
					<div className="p-2 bg-orange-400 rounded-xl">
						<FaHtml5 className="text-3xl text-white" />
					</div>
					HTML5
				</li>
				<li className="flex items-center gap-4 ">
					<div className="p-2 bg-blue-400 rounded-xl">
						<FaCss3Alt className="text-3xl text-white" />
					</div>
					CSS3
				</li>
				<li className="flex items-center gap-4 ">
					<div className="p-2 bg-yellow-400 rounded-xl">
						<SiJavascript className="text-3xl text-white" />
					</div>
					JavaScript
				</li>
				<li className="flex items-center gap-4 ">
					<div className="p-2 bg-blue-300 rounded-xl">
						<FaReact className="text-3xl text-white" />
					</div>
					ReactJS
				</li>
				<li className="flex items-center gap-4 ">
					<div className="p-2 bg-purple-400 rounded-xl">
						<SiTailwindcss className="text-3xl text-white" />
					</div>
					TailwindCSS
				</li>

				<li className="flex items-center gap-4 ">
					<div className="p-2 bg-blue-400 rounded-xl">
						<SiTypescript className="text-3xl text-white" />
					</div>
					TypeScript
				</li>
			</ul>
		</section>
	);
}

{
	/* <ul className="flex flex-col gap-4 text-sm font-bold">
				<li className="flex flex-col items-center justify-between w-20 h-20 p-2 text-gray-200 bg-orange-400 border border-orange-400">
					<FaHtml5 className="text-4xl" />
					HTML5
				</li>
				<li className="flex flex-col items-center justify-between w-20 h-20 p-2 text-gray-200 bg-blue-400 border border-blue-400">
					<FaCss3Alt className="text-4xl" />
					CSS
				</li>
				<li className="flex flex-col items-center justify-between w-20 h-20 p-2 text-gray-200 bg-yellow-400 border border-yellow-400">
					<FaJs className="text-4xl" />
					JavaScript
				</li>
				<li className="flex flex-col items-center justify-between w-20 h-20 p-2 text-gray-200 bg-blue-300 border border-blue-300">
					<FaReact className="text-4xl" />
					ReactJS
				</li>
				<li className="flex flex-col items-center justify-between w-20 h-20 p-2 text-gray-200 bg-blue-300 border border-blue-300">
					<SiTailwindcss className="text-4xl" />
					TailwindCSS
				</li>
			</ul> */
}
