import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
	return (
		<div className="text-gray-600 font-light bg-gray-100">
			<Navbar />
			<Outlet />
		</div>
	);
}
