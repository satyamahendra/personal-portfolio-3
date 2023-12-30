import MiddleSection from "./MiddleSection";
import BottomSection from "./BottomSection";
import ImageContainer from "./ImageContainer";
import { useState } from "react";
import ResumeModal from "./ResumeModal";
import SummaryModal from "./SummaryModal";
import { AnimatePresence } from "framer-motion";

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

			<AnimatePresence>
				{showSummaryModal && (
					<SummaryModal toggleSummaryModal={toggleSummaryModal} />
				)}
			</AnimatePresence>

			<AnimatePresence>
				{showResumeModal && (
					<ResumeModal toggleResumeModal={toggleResumeModal} />
				)}
			</AnimatePresence>
		</main>
	);
}
