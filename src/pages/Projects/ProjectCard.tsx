import { PiArrowRightLight } from "react-icons/pi";
import { Link } from "react-router-dom";

type ProjectPropsType = {
	project: {
		id: number;
		title: string;
		logo: string;
		description: string;
		features: string[];
		image: string[];
		sc: string;
	};
};

export default function ProjectCard({ project }: ProjectPropsType) {
	const { id, title, image } = project;

	return (
		<Link
			to={`/projects/${id}`}
			className="relative overflow-hidden text-gray-300 duration-200 h-36 lg:h-full group hover:rounded-3xl"
		>
			<img
				src={image[1]}
				className="absolute object-cover w-full h-full duration-200 group-hover:scale-110 "
			/>
			<div className="absolute z-10 flex flex-col justify-between w-full h-full p-4 duration-200 bg-black bg-opacity-70 backdrop-blur-sm group-hover:bg-opacity-85">
				<h1 className="flex flex-col items-start text-lg duration-200 lg:text-xl lg:self-auto group-hover:text-white">
					{title}
				</h1>
				<div className="flex items-center self-end gap-2 mr-2 duration-200 group-hover:mr-0 group-hover:text-white">
					view project <PiArrowRightLight />
				</div>
			</div>
		</Link>
	);
}
