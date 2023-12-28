import ProjectCard from "./ProjectCard";
// @ts-ignore
import { projectData } from "../../data/projectsData";

import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

import { Link } from "react-router-dom";
import GithubCard from "./GithubCard";

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
		<main className="flex justify-center h-screen">
			<div className="flex flex-col items-center w-full pt-32 pb-16 duration-200 lg:pb-24 sm:pt-40 max-w-7xl">
				<h1 className="pb-8 text-2xl">Projects</h1>

				<ul className="grid w-full h-full gap-2 px-4 overflow-auto text-gray-200 sm:px-12 lg:grid-cols-5">
					{projectsCardElement}
					<GithubCard />
				</ul>
			</div>

			<div className="fixed bottom-0 w-full gap-6 mb-5 text-sm ">
				<div className="flex justify-center">
					<Link
						to="/skills"
						className="flex items-center w-32 gap-2 pl-2 duration-200 hover:pl-0 group"
					>
						<div className="flex items-center justify-center w-6 h-6 duration-200 border border-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-gray-200">
							<PiCaretLeftLight />
						</div>
						Skills page
					</Link>

					<Link
						to="/contact"
						className="flex items-center justify-end w-32 gap-2 pr-2 duration-200 group hover:pr-0"
					>
						Contact page
						<div className="flex items-center justify-center w-6 h-6 duration-200 border border-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-gray-200">
							<PiCaretRightLight />
						</div>
					</Link>
				</div>
			</div>
		</main>
	);
}
