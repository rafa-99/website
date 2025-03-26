export default function Library() {
	const books = [
		{ title: "Absolute OpenBSD", author: "Lucas, Michael" },
		{ title: "Against Method", author: "Feyerabend, Paul" },
		{ title: "Algorithms", author: "Sedgewick, Robert and Wayne, Kevin" },
		{ title: "Antifragile", author: "Taleb, Nassim" },
		{ title: "Anti-Tech Revolution: Why and How", author: "Kaczynski, Theodore" },
		{ title: "Bullshit Jobs", author: "Graeber, David" },
		{ title: "The C Programming Language", author: "Kernighan, Brian and Ritchie, Dennis" },
		{ title: "Capitalism, Socialism and Democracy", author: "Schumpeter, Joseph" },
		{ title: "The Cathedral and The Bazaar", author: "Raymond, Eric" },
		{ title: "Fashionable Nonsense", author: "Sokal, Alan and Bricmont, Jean" },
		{ title: "Google Data Collection", author: "Digital Content Next" },
		{ title: "The Holy Bible (KJV)", author: "King James Version" },
		{ title: "Industrial Society and Its Future", author: "Kaczynski, Theodore" },
		{ title: "Introduction to Algorithms", author: "Cormen, Thomas" },
		{ title: "Mindless Statistics", author: "Gigerenzer, Greg" },
		{ title: "Programming Notes for Professionals Books", author: "Various" },
		{ title: "Simulacra and Simulation", author: "Baudrillard, Jean" },
		{ title: "Structure and Interpretation of Computer Programs", author: "Abelson, Harold and Sussman, Geral Jay" }
	];

	const sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title));

	const categorizedBooks: { [key: string]: { title: string; author: string }[] } = {};
	sortedBooks.forEach((book) => {
		const firstLetter = book.title.charAt(0).toUpperCase();
		if (!categorizedBooks[firstLetter]) categorizedBooks[firstLetter] = [];
		categorizedBooks[firstLetter].push(book);
	});

	return (
		<div className="card-container">
			<div className="card">
				<h1 className="card-title">Library 📚</h1>
				{Object.keys(categorizedBooks)
					.sort()
					.map((letter) => (
						<div key={letter} className="mb-6">
							<h2 className="text-xl font-bold border-b border-neutral-600 pb-2">{letter}</h2>
							<ul>
								{categorizedBooks[letter].map((book, index) => (
									<li key={index} className="text-sm">
										<span className="font-semibold">{book.title}</span> - {book.author}
									</li>
								))}
							</ul>
						</div>
					))}
			</div>
		</div>
	);
}