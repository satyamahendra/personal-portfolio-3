import {
	PiDeviceMobileCameraLight,
	PiDevicesLight,
	PiSquareLight,
	PiCircleLight,
} from "react-icons/pi";

export default function UIUX() {
	return (
		<section className="flex flex-col items-center w-3/5 gap-4 px-4 sm:px-8">
			<h2 className="w-full pb-4 text-xl text-center border-b border-gray-400">
				UI/UX
			</h2>
			<ul className="flex flex-col gap-8 overflow-auto">
				<li className="flex items-center gap-4">
					<div>
						<h3 className="flex items-center gap-2 mb-1">
							<PiDevicesLight /> Fully responsive design
						</h3>
						<p className="pl-2 text-sm border-l border-gray-400">
							I can build a flexible interface regardless of the user's screen
							sizes.
						</p>
					</div>
				</li>
				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<PiDeviceMobileCameraLight /> Mobile first design
					</h3>
					<p className="pl-2 text-sm border-l border-gray-400">
						I'm following best practices as making a design from a mobile device
						perspective first.
					</p>
				</li>
				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<PiSquareLight /> Pixel perfect
					</h3>
					<p className="pl-2 text-sm border-l border-gray-400">
						I create clean pixel perfect design to keep it tidy and nice.
					</p>
				</li>
				<li>
					<h3 className="flex items-center gap-2 mb-1">
						<PiCircleLight /> Simplicity
					</h3>
					<p className="pl-2 text-sm border-l border-gray-400">
						I'm obsessed with simplicity. I hate complex stuff but im open to
						challenges.
					</p>
				</li>
			</ul>
		</section>
	);
}
