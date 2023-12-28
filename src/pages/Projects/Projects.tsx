import ProjectCard from "./ProjectCard";
// @ts-ignore
import { projectData } from "../../data/projectsData";

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
					<li className="flex flex-col items-end justify-between p-4 text-gray-600 duration-200 border border-gray-400 hover:rounded-3xl h-36 lg:h-full group">
						<h2 className="text-lg">My Github Repo</h2>
						<button className="px-3 py-2 text-gray-200 bg-black border-black ">
							Visit
						</button>
					</li>
				</ul>
			</div>
		</main>
	);
}
