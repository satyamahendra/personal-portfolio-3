import { PiXLight, PiHandWavingLight, PiTrophyLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

type SummaryModalPropsType = {
	toggleSummaryModal: React.MouseEventHandler<HTMLDivElement>;
};

export default function SummaryModal({
	toggleSummaryModal,
}: SummaryModalPropsType) {
	return (
		<motion.div
			initial={{ opacity: 0, y: -10 }}
			animate={{ opacity: 1, y: 10 }}
			exit={{ opacity: 0, y: -10 }}
			onClick={toggleSummaryModal}
			className="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full p-8 backdrop-blur-sm"
		>
			<div className="relative flex flex-col items-center justify-center w-full max-w-lg gap-4 p-4 bg-gray-100 shadow-lg rounded-xl">
				<h1 className="flex items-center gap-2 text-lg">
					<PiHandWavingLight />
					Hello,
				</h1>
				<p>
					My name is Satya. I'm a front-end web developer. I live in Malang and
					am willing to go out of town to seek experience. I strongly understand
					HTML, CSS, JavaScript, ReactJS, TailwindCSS, UI/UX Fundamentals, and
					API Consumption. good understanding of Typescript, NodeJS, and
					MongoDB. I want to be better as a developer and as a person in
					general. I keep learning as a developer. Soon enough, I will be a
					full-stack web developer!
				</p>

				<h2 className="flex items-center gap-2 text-lg">
					<PiTrophyLight /> Proudest Accomplishment:
				</h2>
				<p>
					I was qualified to be one of 51 other participants out of almost 3000.
					registrants to be invited by GoTo (Gojek Tokopedia) to join GoTo
					Devcamp 2023 at Tokopedia Tower in Jakarta!
				</p>
				<span>Thank you and nice to meet you!</span>

				<Link
					to="/contact"
					className="px-3 py-1 text-gray-200 duration-200 bg-black border border-black hover:border-gray-400 hover:bg-gray-100 hover:text-gray-500 rounded-xl hover:rounded-none"
				>
					contact me!
				</Link>
				<button className="absolute flex items-center justify-center text-white duration-200 bg-red-300 rounded-full w-7 h-7 -right-3 -top-3 hover:bg-red-400 hover:scale-110 ">
					<PiXLight />
				</button>
			</div>
		</motion.div>
	);
}
