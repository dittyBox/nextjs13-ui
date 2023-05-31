import Link from 'next/link';

export type Mom = {
	id: string;
	name: string;
	avgRating: number;
	description: string;
};

async function getMoms() {
	let res = await fetch('http://localhost:3000/api/mom');
	return res.json();
}

export default async function Page({
	children,
}: {
	children: React.ReactNode;
}) {
	const moms = await getMoms();

	return (
		<div className="flex">
			<ul className="p-4 space-y-4">
				{moms.map((mom: Mom) => (
					<li key={mom.id}>
						<Link href={`/mom/${mom.id}`}>{mom.name}</Link>
					</li>
				))}
			</ul>
			<div className="p-4">{children}</div>
		</div>
	);
}