import { NavLink } from "react-router-dom";

type NavbarButtonType = {
	to: string;
	name: string;
};

export default function NavbarButton({ to, name }: NavbarButtonType) {
	return (
		<NavLink to={to}>
			{({ isActive }) => (
				<span
					className={`px-4 py-1 flex justi hover:bg-black hover:text-gray-200 hover:rounded-xl duration-200 ${
						isActive ? "bg-black text-gray-200 " : ""
					}`}
				>
					{name}
				</span>
			)}
		</NavLink>
	);
}
