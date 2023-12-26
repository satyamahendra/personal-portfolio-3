import profilePic from "../../assets/satya.png";

export default function ImageContainer() {
	return (
		<div className="fixed group border w-48 h-48 sm:w-64 sm:h-64 border-gray-500  z-10 duration-500 rotate-45 overflow-hidden flex justify-center items-center ">
			<img
				src={profilePic}
				className="absolute -rotate-45 ml-8 mt-8 group-hover:scale-95 duration-500"
			/>
		</div>
	);
}
