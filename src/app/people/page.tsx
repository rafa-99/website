import Link from 'next/link'

export default function People() {
	const people = [
		{ name: "Ashwin Nanjappa", url: "https://codeyarns.com/" },
		{ name: "Bryce Vandegrift", url: "https://brycevandegrift.xyz/" },
		{ name: "Criptography Engineering", url: "https://blog.cryptographyengineering.com/" },
		{ name: "DistroTube", url: "https://distro.tube/" },
		{ name: "Drew DeVault's blog", url: "https://drewdevault.com/" },
		{ name: "Eric Murphy", url: "https://ericmurphy.xyz/" },
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
		<div className="card-container">
			<div className="card">
				<h1 className="card-title">People 🗣️</h1>
				<ul>
					{people.map((person, index) => (
						<li key={index} className="list-item">
							<Link href={person.url} target="_blank" rel="noopener noreferrer" className="list-item-container">
								<span className="list-item-title">{person.name}</span>
								<span className="list-item-description">{person.url}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}