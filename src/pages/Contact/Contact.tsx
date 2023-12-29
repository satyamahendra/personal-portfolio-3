import {
	FaLinkedin,
	FaInstagram,
	FaDiscord,
	FaGithub,
	FaPhone,
	FaWhatsapp,
	FaRegEnvelope,
} from "react-icons/fa6";
import ContactButton from "./ContactButton";

import { PiDiamondLight } from "react-icons/pi";
import BottomNav from "../../components/BottomNav";

export default function Contact() {
	return (
		<main className="flex justify-center h-screen">
			<div className="flex flex-col items-center w-full duration-200 max-w-7xl">
				<div className="flex flex-col items-center justify-center w-full h-full gap-8 px-4 sm:px-12">
					<section className="flex flex-col items-center">
						<h1 className="mb-4 text-xl">Social media</h1>
						<ul className="flex flex-col">
							<ContactButton
								name="Ida Bagus Satya Mahendra"
								icon={<FaLinkedin />}
								url=""
							/>
							<ContactButton name="007satya_" icon={<FaInstagram />} url="" />
							<ContactButton name="007satya_" icon={<FaDiscord />} url="" />
							<ContactButton name="007satya_" icon={<FaGithub />} url="" />
						</ul>
					</section>

					<PiDiamondLight className="border-gray-400 border-y" />

					<section className="flex flex-col items-center">
						<h1 className="mb-4 text-xl">General contact</h1>
						<ul className="flex flex-col">
							<ContactButton
								name="satyamahendra09@gmail.com"
								icon={<FaRegEnvelope />}
								url=""
							/>
							<ContactButton name="0822 5410 3639" icon={<FaPhone />} url="" />
							<ContactButton
								name="0822 5410 3639"
								icon={<FaWhatsapp />}
								url=""
							/>
						</ul>
					</section>
				</div>
			</div>

			<BottomNav
				prevPageName="Projects"
				prevUrl="/projects"
				nextPageName="Main"
				nextUrl="/"
			/>
		</main>
	);
}
