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
		<div className="card-container">
			<div className="card">
				<h1 className="card-title">GitHub Projects 🧪</h1>
				<ul>
					{repos.map((repo) => (
						<li key={repo.id} className="list-item">
							<Link href={repo.html_url} target="_blank" rel="noopener noreferrer" className="list-item-container">
								<span className="list-item-title break-words">{repo.name}</span>
								{repo.description && <span className="list-item-description">{repo.description}</span>}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}