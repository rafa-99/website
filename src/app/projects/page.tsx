"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

type Repo = {
	id: number;
	name: string;
	html_url: string;
	description?: string;
};

const GITHUB_USERNAME = "rafa-99";

const fetchRepos = async () => {
	const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
	if (!res.ok) throw new Error("Failed to fetch repositories");
	return res.json();
};

export default function Projects() {
	const [repos, setRepos] = useState<Repo[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		fetchRepos()
			.then((data) => {
				setRepos(data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, []);

	if (loading) return <div className="text-white text-center">Loading...</div>;
	if (error) return <div className="text-red-500 text-center">{error}</div>;

	return (
		<div className="flex flex-col items-center justify-center space-y-12">
			<div className="bg-neutral-950 p-8 rounded-2xl shadow-lg max-w-1/2 w-full">
				<h1 className="text-2xl font-bold mb-4">GitHub Projects 🧪</h1>
				<ul>
					{repos.map((repo) => (
						<li key={repo.id} className="list-item">
							<Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
								{repo.name}
								{repo.description && <span className="text-sm text-neutral-400">{repo.description}</span>}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}