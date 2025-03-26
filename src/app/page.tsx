import Link from 'next/link'

export default function Home() {
	return (
		<div className="card-container">
			<div className="card text-justify text-neutral-400">
				<h1 className="text-3xl font-bold mb-4 text-white text-center">Welcome to My Corner of the Internet 👨‍💻</h1>
				<p className="m-4">
					{`Hey there! I'm `}
					<strong>Rafael Marçalo</strong>, a <strong>software developer</strong>, <strong>tech enthusiast</strong>, and <strong>problem solver</strong> with a passion for <strong>open-source</strong>, <strong>privacy-focused computing</strong>, and <strong>low-level programming</strong>.
				</p>


				<p className="m-4">
					{`I enjoy working with `}
					<strong>C, Python, Java, JavaScript, and Shell scripting</strong>,
					{` and I'm always looking to push the boundaries of what's possible with technology. Whether it's tinkering with `}
					<strong>Linux</strong>, automating workflows, or diving into <strong>systems programming</strong>,
					{` I love building things that are both `}
					<strong>efficient</strong> and <strong>elegant</strong>.
				</p>


				<p className="m-4">
					{`This site is a collection of my `}
					<strong>interests, projects, and resources</strong>.
					{` Feel free to explore, and if you share similar interests, don’t hesitate to reach out!`}
				</p>


				<div className="flex flex-wrap justify-center">
					<Link href="/projects" className="button bg-blue-500 hover:bg-blue-600 ">Projects</Link>
					<Link href="/posts" className="button bg-gray-500 hover:bg-gray-600">Posts</Link>
					<Link href="/donate" className="button bg-green-500 hover:bg-green-600">Donate</Link>
				</div>

				<div className="m-6 text-center">
					<p className="text-neutral-400">
						📨 <Link href="mailto:public@rafaelmarcalo.xyz" className="text-blue-400 hover:underline break-words">public@rafaelmarcalo.xyz</Link>
					</p>
				</div>
			</div>
		</div>
	);
}