import { Link, useParams } from "react-router-dom";
// @ts-ignore
import { projectData } from "../../data/projectsData";

import {
	PiDiamondLight,
	PiCaretLeftLight,
	PiCaretRightLight,
} from "react-icons/pi";
import { useState } from "react";

import { motion } from "framer-motion";

import { PiArrowSquareOutLight, PiCodeLight, PiPlayFill } from "react-icons/pi";

type ProjectType = {
	id: number;
	title: string;
	logo: string;
	techs: string[];
	description: string;
	features: string[];
	image: string[];
	sc: string;
};

export default function ProjectDetails() {
	const [index, setIndex] = useState(0);

	const { id } = useParams();

	const thisProject = projectData.find(
		(project: ProjectType) => project.id.toString() === id
	);

	const { title, description, features, image, techs, sc } = thisProject;

	const imagesIndexElement = image.map((img: string, i: number) => (
		<button
			key={img}
			onClick={() => setIndex(i)}
			className={`duration-200 h-2 w-2  rotate-45 ${
				i === index ? "scale-150 bg-white" : "bg-gray-400"
			}`}
		></button>
	));

	const techsElement = techs.map((tech: string, i: number) => (
		<li
			key={i}
			className="flex-grow px-3 py-2 text-sm text-center border border-gray-400 "
		>
			{tech}
		</li>
	));

	const featuresElement = features.map((feature: string, i: number) => (
		<li key={i} className="flex items-center gap-2 text-sm">
			<PiDiamondLight /> {feature}
		</li>
	));

	function nextIndex() {
		setIndex((prev) => (prev === image.length - 1 ? 0 : prev + 1));
	}
	function prevIndex() {
		setIndex((prev) => (prev === 0 ? image.length - 1 : prev - 1));
	}

	return (
		<motion.main
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="flex justify-center h-screen"
		>
			<div className="flex flex-col w-full pt-40 pb-16 duration-200 lg:pb-24 sm:pt-48 max-w-7xl">
				<div className="flex flex-col w-full h-full gap-4 px-4 pt-8 overflow-auto sm:flex-row sm:px-12">
					<section className="relative flex justify-center border border-gray-400 sm:w-2/3 aspect-video">
						<div className="absolute z-10 flex w-full h-full ">
							<button
								className="flex items-center justify-start w-1/2 px-2 duration-200 group"
								onClick={prevIndex}
							>
								<div className="flex items-center justify-center w-8 h-8 text-xl text-white duration-200 bg-black group-hover:bg-opacity-75 group-hover:scale-110 sm:w-12 sm:h-12 rounded-xl bg-opacity-40 backdrop-blur-sm">
									<PiCaretLeftLight />
								</div>
							</button>

							<button
								className="flex items-center justify-end w-1/2 px-2 group"
								onClick={nextIndex}
							>
								<div className="flex items-center justify-center w-8 h-8 text-xl text-white duration-200 bg-black group-hover:scale-110 group-hover:bg-opacity-75 sm:w-12 sm:h-12 rounded-xl bg-opacity-40 backdrop-blur-sm">
									<PiCaretRightLight />
								</div>
							</button>
						</div>
						<img
							src={image[index]}
							className="object-cover w-full h-full aspect-square lg:aspect-video"
						/>
						<div className="absolute bottom-0 z-10 flex gap-3 p-3 bg-black rounded-full bg-opacity-45 backdrop-blur-sm">
							{imagesIndexElement}
						</div>
					</section>

					<aside className="flex flex-col items-center gap-4 sm:w-1/3">
						<section className="w-full p-4 border border-gray-400">
							<h1 className="w-full mb-4 text-xl text-center ">{title}</h1>
							<p className="text-sm">{description}</p>
						</section>

						<section>
							<ul className="flex flex-wrap gap-4">{techsElement}</ul>
						</section>

						<section className="w-full p-4 border border-gray-400">
							<h2 className="w-full mb-4 text-xl text-center ">Features</h2>
							<ul className="flex flex-col w-full gap-2">{featuresElement}</ul>
						</section>

						<section className="flex w-full h-full gap-4">
							<a
								href={sc}
								target="_blank"
								className="flex flex-row-reverse items-end justify-between w-1/2 p-4 text-gray-200 duration-200 bg-black border border-black group hover:bg-gray-100 hover:rounded-xl hover:border-gray-400 hover:text-gray-500 lg:flex-col"
							>
								<PiArrowSquareOutLight className="hidden text-2xl group-hover:block" />
								<PiCodeLight className="block text-2xl group-hover:hidden" />
								<span className="self-start">Source code</span>
							</a>
							<button className="flex flex-row-reverse items-end justify-between w-1/2 p-4 text-gray-500 duration-200 bg-gray-300 border border-gray-300 cursor-not-allowed group hover:bg-gray-100 hover:rounded-xl hover:border-gray-400 hover:text-gray-500 lg:flex-col">
								<PiArrowSquareOutLight className="hidden text-2xl group-hover:block" />
								<PiPlayFill className="block text-2xl group-hover:hidden" />
								<span className="self-start block group-hover:hidden">
									Live demo
								</span>
								<span className="self-start hidden group-hover:block">
									not available yet, sorry!
								</span>
							</button>
						</section>
					</aside>
				</div>
			</div>

			<Link
				to="/projects"
				className="fixed bottom-0 flex items-center gap-2 mb-5 text-sm duration-200 group hover:-ml-4"
			>
				<div className="flex items-center justify-center w-6 h-6 duration-200 border border-gray-400 group-hover:bg-black group-hover:border-black group-hover:text-gray-200">
					<PiCaretLeftLight />
				</div>
				Back to all projects
			</Link>
		</motion.main>
	);
}
