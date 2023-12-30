import { PiHeartLight, PiDoorOpenLight } from "react-icons/pi";
import { IoLanguageOutline } from "react-icons/io5";

import { motion } from "framer-motion";

export default function Communication() {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex flex-col items-center w-3/5 gap-4 px-4 sm:px-8"
		>
			<h2 className="w-full pb-4 text-xl text-center border-b border-gray-400">
				Communication
			</h2>
			<ul className="flex flex-col gap-8 overflow-auto">
				<li className="flex items-center gap-4">
					<div>
						<h3 className="flex items-center gap-2 mb-1">
							<PiHeartLight /> Polite & respectful
						</h3>
						<p className="pl-2 ml-2 text-sm border-l border-gray-400">
							I always communicate in the most respectful and polite way to
							whoever.
						</p>
					</div>
				</li>
				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<IoLanguageOutline /> Fluent in english & native
					</h3>
					<p className="pl-2 ml-2 text-sm border-l border-gray-400">
						I'm a native speaker and also fluently speak english.
					</p>
				</li>
				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<PiDoorOpenLight /> Open minded
					</h3>
					<p className="pl-2 ml-2 text-sm border-l border-gray-400">
						I'm open to criticism from other people regardless of who they are.
					</p>
				</li>
			</ul>
		</motion.section>
	);
}
