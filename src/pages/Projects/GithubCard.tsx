import { PiArrowSquareOutLight } from "react-icons/pi";

export default function GithubCard() {
	return (
		<a
			href="https://github.com/megatronhehe"
			target="_blank"
			className="flex flex-col justify-between p-4 text-gray-600 duration-200 border border-gray-400 group hover:rounded-3xl h-36 lg:h-full"
		>
			<h2 className="text-lg">My Github Repo</h2>
			<button className="flex items-center self-end justify-center w-20 gap-2 px-5 py-3 duration-200 group-hover:bg-black group-hover:text-gray-200 group-hover:w-28 group-hover:rounded-xl">
				Open{" "}
				<PiArrowSquareOutLight className="hidden text-xl duration-200 group-hover:block" />
			</button>
		</a>
	);
}
