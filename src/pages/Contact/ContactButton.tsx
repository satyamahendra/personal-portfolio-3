type ContactPropsType = {
	name: string;
	icon: any;
	url: string;
};

export default function ContactButton({ name, icon, url }: ContactPropsType) {
	return (
		<li className="flex items-center gap-2">
			<a
				href={url}
				target="_blank"
				className="flex items-center w-full gap-3 px-3 py-2 duration-200 hover:bg-black hover:text-gray-200 hover:rounded-xl"
			>
				<div className="text-xl">{icon}</div>

				{name}
			</a>
		</li>
	);
}
