import ProjectCard from "./ProjectCard";

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
			<div className="flex flex-col items-center w-full duration-200 pt-28 sm:pt-40 max-w-7xl">
				<h1 className="pb-8 text-2xl">Projects</h1>

				<ul className="grid w-full h-full gap-2 px-4 pb-24 overflow-auto text-gray-200 sm:px-8 lg:grid-cols-5">
					{projectsCardElement}

					<li className="flex flex-col justify-between w-full p-4 text-gray-600 border border-gray-400 sm:h-full h-36 group">
						<div className="self-end">
							<button>x</button>
							<button>x</button>
							<button>x</button>
						</div>
						<div>
							<h1 className="text-xl "> Github repo</h1>
						</div>
					</li>
				</ul>
			</div>
		</main>
	);
}
