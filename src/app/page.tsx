import Link from 'next/link'

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="bg-neutral-950 p-8 rounded-2xl shadow-lg max-w-1/2 w-full text-justify text-neutral-400">
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


				<div className="m-6 flex justify-center space-x-4">
					<Link href="/projects" className="bg-blue-500 hover:bg-blue-600 hover:scale-110 text-white py-2 px-4 rounded-lg transition">Projects</Link>
					<Link href="/posts" className="bg-gray-500 hover:bg-gray-600 hover:scale-110 text-white py-2 px-4 rounded-lg transition">Posts</Link>
					<Link href="/donate" className="bg-green-500 hover:bg-green-600 hover:scale-110 text-white py-2 px-4 rounded-lg transition">Donate</Link>
				</div>

				<div className="m-6 text-center">
					<p className="text-neutral-400">
						📨 <Link href="mailto:public@rafaelmarcalo.xyz" className="text-blue-400 hover:underline">public@rafaelmarcalo.xyz</Link>
					</p>
				</div>
			</div>
		</div>
	);
}