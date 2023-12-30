import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
	return (
		<div className="font-light text-gray-600 bg-gray-100">
			<Navbar />
			<Outlet />
		</div>
	);
}
