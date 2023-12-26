import { PiCaretUpLight } from "react-icons/pi";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function MiddleSection() {
	return (
		<div className="w-full flex justify-between sm:p-12 p-4">
			<section className="flex flex-col justify-center">
				<nav className="flex flex-col gap-8 text-2xl sm:text-4xl duration-200">
					<FaLinkedin />
					<FaInstagram />
					<FaGithub />
				</nav>
			</section>

			<section className="flex flex-col justify-center mt-32">
				<Link
					to="/skills"
					className="group text-gray-500  rotate-90 origin-top-right flex  items-center gap-4"
				>
					<div className="border p-1 border-gray-400 group-hover:border-black duration-200 group-hover:bg-black group-hover:text-gray-200">
						<PiCaretUpLight />
					</div>
					<span className="group-hover">Next page</span>
				</Link>
			</section>
		</div>
	);
}
