import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";

import { motion } from "framer-motion";

export default function Techstack() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex flex-col items-center w-3/5 gap-4 px-4 sm:px-8"
		>
			<h2 className="w-full pb-4 text-xl text-center border-b border-gray-400">
				Tech stack
			</h2>
			<ul className="flex flex-col gap-2 overflow-auto text-sm font-normal tracking-wide duration-200 sm:gap-4">
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
		</motion.section>
	);
}
