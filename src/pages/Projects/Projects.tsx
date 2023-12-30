import ProjectCard from "./ProjectCard";
// @ts-ignore
import { projectData } from "../../data/projectsData";

import { motion } from "framer-motion";

import GithubCard from "./GithubCard";
import BottomNav from "../../components/BottomNav";

type ProjectType = {
	id: number;
	title: string;
	logo: string;
	description: string;
	features: string[];
	image: string[];
	sc: string;
};

export default function Projects() {
	const projectsCardElement = projectData.map((project: ProjectType) => (
		<ProjectCard key={project.id} project={project} />
	));

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex justify-center h-screen"
		>
			<div className="flex flex-col items-center w-full pt-32 pb-16 duration-200 lg:pb-24 sm:pt-40 max-w-7xl">
				<h1 className="self-start px-4 pb-4 text-2xl sm:px-12">Projects</h1>

				<ul className="grid w-full h-full gap-2 px-4 overflow-auto text-gray-200 sm:px-12 lg:grid-cols-5">
					{projectsCardElement}
					<GithubCard />
				</ul>
			</div>

			<BottomNav
				prevPageName="Skills"
				prevUrl="/skills"
				nextPageName="Contact"
				nextUrl="/contact"
			/>
		</motion.main>
	);
}
