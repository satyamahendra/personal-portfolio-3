type TechStackItemProps = {
	icon: any;
	name: string;
	color: string;
};

export default function TechStackItem({
	icon,
	name,
	color,
}: TechStackItemProps) {
	return (
		<li className={`flex items-center gap-4 p-2 ${color} `}>
			<div className="text-3xl">{icon}</div>
			{name}
		</li>
	);
}
