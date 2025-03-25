import fs from "fs/promises";
import path from "path";

const getFileEmoji = (filename) => {
	const ext = path.extname(filename).toLowerCase();

	switch (ext) {
		case '.aac':
		case '.flac':
		case '.m4a':
		case '.mp3':
		case '.wav':
			return '🎶';
		case '.bmp':
		case '.gif':
		case '.ico':
		case '.jpeg':
		case '.jpg':
		case '.png':
		case '.svg':
		case '.webp':
			return '🖼️';
		case '.bz2':
		case '.gzip':
		case '.lmza':
		case '.rar':
		case '.tar':
		case '.xz':
		case '.zip':
			return '🗃️';
		case '.doc':
		case '.docx':
		case '.pdf':
		case '.ppt':
		case '.pptx':
		case '.xls':
		case '.xlsx':
			return '📄';
		case '.md':
		case '.tex':
		case '.txt':
			return '📜';
		case '.avi':
		case '.flv':
		case '.mkv':
		case '.mp4':
		case '.mov':
			return '🎬';
		default:
			return '📎';
	}
};

const removeExtension = (filename) => {
	return path.basename(filename, path.extname(filename));
  };

const formatData = (filename) => {
	const match = filename.match(/^(\d{4})(\d{2})(\d{2})-(.*)$/);
	
	if (match) {
	  const [_, year, month, day, cleanFilename] = match;
	  const date = new Date(`${year}-${month}-${day}`);
	  const formattedDate = date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
	  const cleanFilenameWithoutExt = removeExtension(cleanFilename);
	  return { formattedDate, cleanFilename: cleanFilenameWithoutExt };
	}
	
	return { formattedDate: null, cleanFilename: removeExtension(filename) };
  };

const PostList = ({ title, filenames, pathPrefix }) => (
	<div className="bg-neutral-950 p-8 rounded-2xl shadow-lg max-w-1/2 w-full">
		<h1 className="text-2xl font-bold mb-4">{title}</h1>
		<ul className="flex flex-col-reverse">
			{filenames.map((filename) => {
				const { formattedDate, cleanFilename } = formatData(filename);
				return (
					<li key={filename} className="post-item">
						<a href={`/posts/${pathPrefix}/${filename}`} target="_blank">
							<div className="flex items-center gap-2">
								{formattedDate && (
									<span className="text-sm text-neutral-400">({formattedDate})</span>
								)}
								{getFileEmoji(filename)} {cleanFilename}
							</div>
						</a>
					</li>
				);
			})}
		</ul>
	</div>
);

export default async function Posts() {
	const postsDir = path.join(process.cwd(), "public/posts/current");
	const legacyPostsDir = path.join(process.cwd(), "public/posts/legacy");

	try {
		const latestFilenames = await fs.readdir(postsDir);
		const legacyFilenames = await fs.readdir(legacyPostsDir);

		return (
			<div className="flex flex-col items-center justify-center space-y-12">
				<PostList title="Latest Posts" filenames={latestFilenames} pathPrefix="current" />
				<PostList title="Legacy Posts" filenames={legacyFilenames} pathPrefix="legacy" />
			</div>
		);
	} catch (error) {
		console.error(error);
		return <h1>Error: Unable to load files</h1>;
	}
}
