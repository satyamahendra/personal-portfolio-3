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

import BottomNav from "../../components/BottomNav";

export default function Contact() {
	return (
		<main className="flex justify-center h-screen">
			<div className="flex flex-col items-center w-full duration-200 pt-14 sm:pt-0 max-w-7xl">
				<div className="flex flex-col items-center justify-center w-full h-full gap-4 px-4 sm:px-12">
					<section className="flex flex-col items-center">
						<h1 className="self-start mb-4 text-xl">Social media</h1>
						<ul className="flex flex-col">
							<ContactButton
								name="Ida Bagus Satya Mahendra"
								icon={<FaLinkedin />}
								url="https://www.linkedin.com/in/ida-bagus-satya-mahendra-544129253/"
							/>
							<ContactButton
								name="007satya_"
								icon={<FaInstagram />}
								url="https://www.instagram.com/007satya_/"
							/>
							<ContactButton
								name="007satya_"
								icon={<FaDiscord />}
								url="https://discordapp.com/users/225262332157100034"
							/>
							<ContactButton
								name="007satya_"
								icon={<FaGithub />}
								url="https://github.com/megatronhehe"
							/>
						</ul>
					</section>

					<section className="flex flex-col items-center">
						<h1 className="self-start mb-4 text-xl">General contact</h1>
						<ul className="flex flex-col">
							<ContactButton
								name="satyamahendra09@gmail.com"
								icon={<FaRegEnvelope />}
								url="mailto:satyamahendra09@gmail.com"
							/>
							<ContactButton
								name="0822 5410 3639"
								icon={<FaPhone />}
								url="https://wa.me/6282254103639"
							/>
							<ContactButton
								name="0822 5410 3639"
								icon={<FaWhatsapp />}
								url="https://wa.me/6282254103639"
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
