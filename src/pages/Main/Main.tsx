import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import ImageContainer from "./ImageContainer";
import { useState } from "react";
import ResumeModal from "./ResumeModal";
import SummaryModal from "./SummaryModal";

export default function Main() {
	const [showResumeModal, setShowResumeModal] = useState(false);
	const [showSummaryModal, setShowSummaryModal] = useState(false);

	function toggleResumeModal(): void {
		setShowResumeModal((prev) => !prev);
	}

	function toggleSummaryModal(): void {
		setShowSummaryModal((prev) => !prev);
	}

	return (
		<main className="flex items-center justify-center h-screen bg-gray-100">
			{/* IMAGE SECITON */}
			<ImageContainer />

			{/* MIDDLE SIDE SECTION */}
			<MiddleSection toggleSummaryModal={toggleSummaryModal} />

			{/* BOTTOM SECTION */}
			<BottomSection toggleResumeModal={toggleResumeModal} />

			{showSummaryModal && (
				<SummaryModal toggleSummaryModal={toggleSummaryModal} />
			)}

			{showResumeModal && <ResumeModal toggleResumeModal={toggleResumeModal} />}
		</main>
	);
}
