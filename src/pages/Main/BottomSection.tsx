import { PiMapPinLight } from "react-icons/pi";

export default function BottomSection() {
	return (
		<div className="w-full fixed left-0 bottom-0 flex justify-between items-end sm:p-12 p-4">
			{/* name */}
			<section className="text-2xl sm:text-4xl">
				<h1 className="flex flex-col">
					<span className="text-lg sm:text-2xl">Ida Bagus</span>Satya Mahendra
				</h1>
			</section>

			{/* summaryu */}
			<section className="flex flex-col justify-end items-end gap-2 ">
				<h2 className="text-xl sm:text-2xl text-end ">
					Frontend Web Developer
				</h2>
				<ul>
					<li className="flex items-center gap-2 justify-end flex-row-reverse sm:flex-row">
						<span>Malang, East java</span>
						<PiMapPinLight className="text-xl sm:text-2xl" />
					</li>
				</ul>
				<button className="bg-black border border-black text-gray-200 rounded-xl py-1 px-3 w-22 hover:bg-gray-100 hover:text-black duration-200 hover:rounded-none">
					resume
				</button>
			</section>
		</div>
	);
}
