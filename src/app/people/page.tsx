import Link from 'next/link'

export default function People() {
	const people = [
		{ name: "Ashwin Nanjappa", url: "https://codeyarns.com/" },
		{ name: "Bryce Vandegrift", url: "https://brycevandegrift.xyz/" },
		{ name: "Criptography Engineering", url: "https://blog.cryptographyengineering.com/" },
		{ name: "DistroTube", url: "https://distro.tube/" },
		{ name: "Drew DeVault's blog", url: "https://drewdevault.com/" },
		{ name: "Eric Murphy", url: "https://ericmurphy.xyz/" },
		{ name: "Gentoomen", url: "https://g.sicp.me/" },
		{ name: "Kris Occhipinti", url: "https://filmsbykris.com/" },
		{ name: "Luke Smith", url: "https://lukesmith.xyz/" },
		{ name: "Mental Outlaw", url: "https://www.youtube.com/c/MentalOutlaw/" },
		{ name: "Michael Mob", url: "https://michaelmob.com/" },
		{ name: "Romain Trystram", url: "https://romaintrystram.myportfolio.com/" },
		{ name: "Roosh Valizadeh", url: "https://www.rooshv.com/" },
		{ name: "Spyware Watchdog", url: "https://spyware.neocities.org/" },
		{ name: "Wolfgang's blog", url: "https://notthebe.ee/" },
	];

	return (
		<div className="flex flex-col items-center justify-center space-y-12">
			<div className="bg-neutral-950 p-8 rounded-2xl shadow-lg max-w-1/2 w-full">
				<h1 className="text-2xl font-bold mb-4 text-white">People 🗣️</h1>
				<ul>
					{people.map((person, index) => (
						<li key={index} className="list-item">
							<Link href={person.url} target="_blank" rel="noopener noreferrer" className="flex flex-col">
								<span className="text-lg font-semibold">{person.name}</span>
								<span className="text-sm text-neutral-400">{person.url}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}