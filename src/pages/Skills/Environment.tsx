import { PiUsersThreeLight, PiUserLight } from "react-icons/pi";

export default function Environment() {
	return (
		<section className="flex flex-col items-center w-3/5 gap-4 px-4 sm:px-8">
			<h2 className="w-full pb-4 text-xl text-center border-b border-gray-400">
				Environment
			</h2>
			<ul className="flex flex-col gap-8 overflow-auto">
				<li className="flex items-center gap-4">
					<div>
						<h3 className="flex items-center gap-2 mb-1">
							<PiUsersThreeLight /> Effective team player
						</h3>
						<p className="pl-2 ml-2 text-sm border-l border-gray-400">
							I collaborate with every type of personality and make it work.
						</p>
					</div>
				</li>

				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<PiUserLight /> Efficient solo worker
					</h3>
					<p className="pl-2 ml-2 text-sm border-l border-gray-400">
						I don't have to be in a team to be effective. I also find working
						alone is fun.
					</p>
				</li>
			</ul>
		</section>
	);
}
