export default function Donate() {
	const wallets = [
		{
			name: "Bitcoin",
			address: "1MvzcDqAVfuQLYZKNCcBoVNYe2neta3pkM",
			qr: "/images/bitcoin.png",
		},
		{
			name: "Ethereum",
			address: "0x21014f842718B5f05d5A555825d72D6aA96e5ff4",
			qr: "/images/ethereum.png",
		},
		{
			name: "Monero",
			address: "4254FmcCGBNbaq9CcqkUSk8eY3cqACjrGXRWkxXxXbjD1Up3Nu4BsCA1YCkrnrzG4SUmwDJQnBYJoeLrucWSDRhyRchRAHP",
			qr: "/images/monero.png",
		},
	];

	return (
		<div className="flex flex-col items-center justify-center space-y-12">
			<div className="bg-neutral-950 p-8 rounded-2xl shadow-lg max-w-1/2 w-full text-center">
				<h1 className="text-2xl font-bold mb-4">Support me with crypto 💰</h1>
				<p className="text-neutral-400 mb-6">Scan the QR code or copy the address to donate.</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{wallets.map((wallet, index) => (
						<div key={index} className="bg-neutral-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
							<h2 className="text-xl font-semibold">{wallet.name}</h2>
							<img src={wallet.qr} alt={`${wallet.name} QR Code`} className="w-32 h-32 my-4" />
							<p className="text-sm text-neutral-400 break-all">{wallet.address}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
