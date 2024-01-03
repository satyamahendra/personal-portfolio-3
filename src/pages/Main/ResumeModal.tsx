import { PiReadCvLogoLight, PiXLight } from "react-icons/pi";

import { motion } from "framer-motion";

type ResumeModalPropsType = {
	toggleResumeModal: React.MouseEventHandler<HTMLDivElement>;
};

export default function ResumeModal({
	toggleResumeModal,
}: ResumeModalPropsType) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 10 }}
			exit={{ opacity: 0, y: -10 }}
			onClick={toggleResumeModal}
			className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full backdrop-blur-sm"
		>
			<div className="relative flex flex-col items-center justify-center gap-8 p-4 bg-gray-100 shadow-lg rounded-xl">
				<div className="absolute flex items-center justify-center w-16 h-16 text-4xl text-gray-200 rotate-45 bg-gray-100 border border-gray-400 -top-8">
					<PiReadCvLogoLight className="text-gray-500 -rotate-45" />
				</div>
				<h1 className="flex flex-col items-center gap-4 mt-10 text-2xl">
					View my resume/cv in...
				</h1>
				<div className="flex items-center gap-4">
					<a
						href="https://drive.google.com/file/d/1a-aIr6FPmX5RG9BU31yDV2eYXr54Q0pq/view?usp=drive_link"
						target="_blank"
						className="px-3 py-2 text-center text-gray-200 duration-200 bg-black border border-black hover:bg-gray-100 hover:text-gray-500 hover:border-gray-500 hover:rounded-none rounded-xl"
					>
						Bahasa Indonesia
					</a>
					<span>or</span>
					<a
						href="https://drive.google.com/file/d/1uQ8mm74HYG93aiFDr-OuEOcIzsSS61db/view?usp=drive_link"
						target="_blank"
						className="px-3 py-2 text-center text-gray-200 duration-200 bg-black border border-black hover:bg-gray-100 hover:text-gray-500 hover:border-gray-500 hover:rounded-none rounded-xl"
					>
						English
					</a>
				</div>
				<button className="absolute flex items-center justify-center text-white duration-200 bg-red-300 rounded-full w-7 h-7 -right-3 -top-3 hover:bg-red-400 hover:scale-110 ">
					<PiXLight />
				</button>
			</div>
		</motion.div>
	);
}
