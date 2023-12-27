import { PiPlayFill, PiCode, PiImageSquareFill } from "react-icons/pi";

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
	const { title, image } = project;

	return (
		<li className="relative overflow-hidden h-36 lg:h-full group">
			<img
				src={image[1]}
				className="absolute object-cover w-full h-full duration-200 group-hover:scale-110 "
			/>
			<div className="absolute z-10 flex flex-row-reverse justify-between w-full h-full p-4 duration-200 bg-black lg:flex-col bg-opacity-70 backdrop-blur-sm group-hover:bg-opacity-85">
				<div className="flex flex-col items-end justify-between text-lg lg:gap-4 sm:text-2xl">
					<button>
						<PiPlayFill />
					</button>
					<button>
						<PiCode />
					</button>
					<button>
						<PiImageSquareFill />
					</button>
				</div>
				<h1>{title}</h1>
			</div>
		</li>
	);
}
