import { Link } from "react-router-dom";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

type BottomNavProps = {
	prevPageName: string;
	prevUrl: string;
	nextPageName: string;
	nextUrl: string;
};

export default function BottomNav({
	prevPageName,
	prevUrl,
	nextPageName,
	nextUrl,
}: BottomNavProps) {
	return (
		<nav className="fixed bottom-0 w-full gap-6 mb-5 text-sm ">
			<div className="flex justify-center">
				<Link
					to={prevUrl}
					className="flex items-center w-32 gap-2 pl-2 duration-200 hover:pl-0 group"
				>
					<div className="flex items-center justify-center w-6 h-6 duration-200 border border-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-gray-200">
						<PiCaretLeftLight />
					</div>
					{prevPageName} page
				</Link>

				<Link
					to={nextUrl}
					className="flex items-center justify-end w-32 gap-2 pr-2 duration-200 group hover:pr-0"
				>
					{nextPageName} page
					<div className="flex items-center justify-center w-6 h-6 duration-200 border border-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-gray-200">
						<PiCaretRightLight />
					</div>
				</Link>
			</div>
		</nav>
	);
}
