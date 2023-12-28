import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import ImageContainer from "./ImageContainer";
import { useState } from "react";
import ResumeModal from "./ResumeModal";

export default function Main() {
	const [showResumeModal, setShowResumeModal] = useState(false);

	function toggleResumeModal(): void {
		setShowResumeModal((prev) => !prev);
	}

	return (
		<main className="flex items-center justify-center h-screen bg-gray-100">
			{/* IMAGE SECITON */}
			<ImageContainer />

			{/* MIDDLE SIDE SECTION */}
			<MiddleSection />

			{/* BOTTOM SECTION */}
			<BottomSection toggleResumeModal={toggleResumeModal} />

			{showResumeModal && <ResumeModal toggleResumeModal={toggleResumeModal} />}
		</main>
	);
}
