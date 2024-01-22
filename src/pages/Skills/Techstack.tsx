import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa6";
import {
	SiTailwindcss,
	SiTypescript,
	SiJavascript,
	SiNextdotjs,
} from "react-icons/si";

import { motion } from "framer-motion";
import TechStackItem from "../../components/TechStackItem";

export default function Techstack() {
	const techStacks = [
		{ name: "HTML5", icon: <FaHtml5 />, color: "text-orange-400" },
		{ name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
		{ name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
		{ name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
		{ name: "React.JS", icon: <FaReact />, color: "text-blue-300" },
		{
			name: "Tailwind.CSS",
			icon: <SiTailwindcss />,
			color: "text-purple-400",
		},
		{ name: "Next.JS", icon: <SiNextdotjs />, color: "" },
	];

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex flex-col items-center w-3/5 gap-4 px-4 sm:px-8"
		>
			<h2 className="w-full pb-4 text-xl text-center border-b border-gray-400">
				Tech stack
			</h2>
			<ul className="flex flex-col gap-2 overflow-auto text-sm font-bold tracking-widest duration-200 sm:gap-4">
				{techStacks.map((item) => (
					<TechStackItem
						key={item.name}
						icon={item.icon}
						name={item.name}
						color={item.color}
					/>
				))}
			</ul>
		</motion.section>
	);
}
