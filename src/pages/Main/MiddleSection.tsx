import { PiCaretUpLight } from "react-icons/pi";

import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

type SummaryModalPropsType = {
	toggleSummaryModal: React.MouseEventHandler<HTMLButtonElement>;
};

export default function MiddleSection({
	toggleSummaryModal,
}: SummaryModalPropsType) {
	const word = "HELLO";
	const button = word.split("").map((letter) => (
		<span key={letter} className="-my-0.5">
			{letter}
		</span>
	));

	return (
		<div className="flex justify-between w-full p-4 sm:p-12">
			<section className="flex flex-col justify-center">
				<ul className="flex flex-col gap-8 text-3xl duration-200 sm:text-4xl">
					<li className="duration-200 hover:scale-125 hover:text-blue-400">
						<a
							href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
							target="_blank"
						>
							<FaLinkedin />
						</a>
					</li>
					<li className="duration-200 hover:scale-125 hover:text-red-400">
						<a href="https://www.instagram.com/007satya_/" target="_blank">
							<FaInstagram />
						</a>
					</li>
					<li className="duration-200 hover:scale-125 hover:text-blue-600">
						<a href="https://github.com/megatronhehe" target="_blank">
							<FaGithub />
						</a>
					</li>
					<li className="relative group">
						<button
							onClick={toggleSummaryModal}
							className="flex flex-col items-center w-full py-2 text-base duration-200 border border-gray-400 hover:border-black hover:bg-black hover:text-gray-200 hover:rounded-xl"
						>
							{button}
						</button>
						<div className="absolute group-hover:hidden rotate-45 -top-1.5 -right-1.5 w-3 h-3 bg-black"></div>
						<div className="animate-ping group-hover:hidden absolute  -top-1.5 -right-1.5 rounded-full w-3 h-3 bg-black"></div>
					</li>
				</ul>
			</section>

			<section className="flex flex-col justify-center mt-32">
				<Link
					to="/skills"
					className="flex items-center gap-4 text-gray-500 duration-200 origin-top-right rotate-90 group hover:-mr-1"
				>
					<div className="p-1 duration-200 border border-gray-400 group-hover:border-black group-hover:bg-black group-hover:text-gray-200">
						<PiCaretUpLight />
					</div>
					<span className="group-hover">Next page</span>
				</Link>
			</section>
		</div>
	);
}
