import { NavLink } from "react-router-dom";

type NavbarButtonType = {
	url: string;
	isEnd: boolean;
	name: string;
};

export default function NavbarButton({ url, isEnd, name }: NavbarButtonType) {
	return (
		<NavLink to={url} end={isEnd}>
			{({ isActive }) => (
				<div
					className={`px-2 py-2 hover:rounded-xl duration-200 hover:bg-black hover:text-gray-200 ${
						isActive ? "bg-black text-gray-200" : ""
					}`}
				>
					{name}
				</div>
			)}
		</NavLink>
	);
}
