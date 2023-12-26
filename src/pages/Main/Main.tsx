import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import ImageContainer from "./ImageContainer";

export default function Main() {
	return (
		<main className="h-screen bg-gray-100 flex justify-center items-center">
			{/* IMAGE SECITON */}
			<ImageContainer />

			{/* MIDDLE SIDE SECTION */}
			<MiddleSection />

			{/* BOTTOM SECTION */}
			<BottomSection />
		</main>
	);
}
