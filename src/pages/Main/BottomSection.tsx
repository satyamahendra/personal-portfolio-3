import { PiMapPinLight } from "react-icons/pi";

type ResumeModalPropsType = {
	toggleResumeModal: React.MouseEventHandler<HTMLButtonElement>;
};

export default function BottomSection({
	toggleResumeModal,
}: ResumeModalPropsType) {
	return (
		<div className="fixed bottom-0 left-0 flex items-end justify-between w-full p-4 sm:p-12">
			{/* name */}
			<section className="text-2xl sm:text-4xl">
				<h1 className="flex flex-col">
					<span className="text-lg sm:text-2xl">Ida Bagus</span>Satya Mahendra
				</h1>
			</section>

			{/* summaryu */}
			<section className="flex flex-col items-end justify-end gap-2 ">
				<h2 className="text-xl sm:text-2xl text-end ">
					Frontend Web Developer
				</h2>
				<ul>
					<li className="flex flex-row-reverse items-center justify-end gap-2 sm:flex-row">
						<span>Malang, East java</span>
						<PiMapPinLight className="text-xl sm:text-2xl" />
					</li>
				</ul>
				<button
					onClick={toggleResumeModal}
					className="px-3 py-1 text-gray-200 duration-200 bg-black border border-black rounded-xl w-22 hover:bg-gray-100 hover:text-black hover:rounded-none"
				>
					resume
				</button>
			</section>
		</div>
	);
}
