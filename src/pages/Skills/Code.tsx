import {
	PiFolderLight,
	PiCodeLight,
	PiThumbsUpLight,
	PiCubeLight,
} from "react-icons/pi";

import { motion } from "framer-motion";

export default function Code() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex flex-col items-center w-3/5 gap-4 px-4 sm:px-8"
		>
			<h2 className="w-full pb-4 text-xl text-center border-b border-gray-400">
				Code
			</h2>
			<ul className="flex flex-col gap-8 overflow-auto">
				<li className="flex items-center gap-4">
					<div>
						<h3 className="flex items-center gap-2 mb-1">
							<PiCodeLight /> Clean code
						</h3>
						<p className="pl-2 ml-2 text-sm border-l border-gray-400">
							I'm capable of creating clean and easy to read code.
						</p>
					</div>
				</li>
				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<PiFolderLight /> Clean architecture
					</h3>
					<p className="pl-2 ml-2 text-sm border-l border-gray-400">
						The way i structure my codebase is clean and easy to navigate.
					</p>
				</li>
				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<PiThumbsUpLight /> Following best practices
					</h3>
					<p className="pl-2 ml-2 text-sm border-l border-gray-400">
						I keep on up to date to follow the most recent coding best
						practices.
					</p>
				</li>
				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<PiCubeLight /> Reusable components
					</h3>
					<p className="pl-2 ml-2 text-sm border-l border-gray-400">
						I can build reusable components for future use.
					</p>
				</li>
			</ul>
		</motion.section>
	);
}
