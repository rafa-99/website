import Link from "next/link";

export default function Web() {
	const web = [
		{ name: "Android AARCH64 Compiling Toolchain", url: "https://github.com/LineageOS/android_prebuilts_gcc_linux-x86_aarch64_aarch64-linux-android-4.9" },
		{ name: "Android ARM Compiling Toolchain", url: "https://github.com/LineageOS/android_prebuilts_gcc_linux-x86_arm_arm-linux-androideabi-4.9" },
		{ name: "Arch Linux dm-crypt/Device encryption", url: "https://wiki.archlinux.org/title/dm-crypt/Device_encryption" },
		{ name: "Arch Linux dm-crypt/System configuration", url: "https://wiki.archlinux.org/title/Dm-crypt/System_configuration" },
		{ name: "Arch Linux Installation Guide", url: "https://wiki.archlinux.org/title/installation_guide" },
		{ name: "Arch Linux Package Archive", url: "https://archive.archlinux.org/" },
		{ name: "Gentoo Linux amd64 Handbook", url: "https://wiki.gentoo.org/wiki/Handbook:AMD64/Full/Installation" },
		{ name: "Gentoo Safe CFLAGS", url: "https://wiki.gentoo.org/wiki/Safe_CFLAGS" },
		{ name: "Gentoo USE Flags", url: "https://www.gentoo.org/support/use-flags/" },
		{ name: "Landscape and Vegetation Guide", url: "https://www.scribblemaps.com/maps/view/Landscape-and-Vegetation-Guide/U1ZwTHRDGL" },
		{ name: "Nanyang Technological University - Programming Notes", url: "https://www3.ntu.edu.sg/home/ehchua/programming/index.html" },
		{ name: "OpenBSD Public Repositories", url: "https://ftp.openbsd.org/pub/OpenBSD/" },
		{ name: "Plonk It", url: "https://www.plonkit.net/" },
		{ name: "SearXNG and searx instances", url: "https://searx.space/" },
		{ name: "Suckless Stuff That Rocks", url: "https://suckless.org/rocks/" },
		{ name: "XDG Base Directory", url: "https://wiki.archlinux.org/title/XDG_Base_Directory" },
	];

	return (
		<div className="card-container">
			<div className="card">
				<h1 className="card-title">Web Markers 🌎</h1>
				<ul>
					{web.map((page, index) => (
						<li key={index} className="list-item">
							<Link href={page.url} target="_blank" rel="noopener noreferrer" className="list-item-container">
								<span className="list-item-title">{page.name}</span>
								<span className="list-item-description">{page.url}</span>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}