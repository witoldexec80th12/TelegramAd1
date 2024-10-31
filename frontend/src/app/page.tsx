import Image from "next/image";

export default function Home() {
	return (
		<div
			className='h-screen w-screen flex justify-around items-center flex-col '
			style={{
				backgroundColor: "#1a1a1a",
			}}
		>
			<div className='text-white text-4xl'>Use Telegram to access the game</div>
		</div>
	);
}
