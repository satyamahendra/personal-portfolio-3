import {
	PiDiamondFill,
	PiDiamondLight,
	PiDiamondsFourLight,
	PiDiamondsFourFill,
} from "react-icons/pi";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function MiddleSection() {
	return (
		<div className="w-full flex item-center justify-between sm:p-12 p-4">
			<section className="flex flex-col justify-center">
				<nav className="flex flex-col gap-8 text-2xl sm:text-4xl duration-200">
					<FaLinkedin />
					<FaInstagram />
					<FaGithub />
				</nav>
			</section>

			<section className="flex flex-col justify-center">
				<div className="flex flex-col gap-8 text-xl">
					<PiDiamondLight />
					<PiDiamondFill />
					<PiDiamondsFourLight />
					<PiDiamondsFourFill />
				</div>
			</section>
		</div>
	);
}
