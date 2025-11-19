import { Play } from "lucide-react";

export default function Section2() {
	return (
		<div className="bg-gray-900 min-h-screen text-white rounded-tl-[300px] py-20">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-6xl font-semibold text-center max-w-4xl mx-auto mb-10">Why Winning Campaigns Choose
					Campaign Butler</h1>
				<div className="flex items-center justify-between gap-12">
					<div className="flex-1 h-[600px]">
						<svg viewBox="0 0 1024 1024" className="icon h-full w-full" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M63.9 159v706h896.2V159H63.9z m852.2 662H107.9v-11.6l193.6-193.6 118.8 118.8 11.3 11.3 11.3-11.3 323-323 150.2 150.2V821z m0-281.9L765.9 388.9 431.6 723.3 301.5 593.1 107.9 786.7V203h808.2v336.1z" fill="#ddd"></path><path d="M306.7 446.9c-43.6 0-79.1-35.5-79.1-79.1s35.5-79.1 79.1-79.1c43.6 0 79.1 35.5 79.1 79.1s-35.5 79.1-79.1 79.1z m0-142.2c-34.8 0-63.1 28.3-63.1 63.1s28.3 63.1 63.1 63.1 63.1-28.3 63.1-63.1-28.3-63.1-63.1-63.1z" fill="#E73B37"></path><path d="M306.3 252.3m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M248.6 267.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M206.4 310.4m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M191.1 368.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M206.8 425.9m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M249.2 468m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M307 483.3m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M364.8 467.7m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M406.9 425.2m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M422.2 367.4m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M406.5 309.7m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path><path d="M364.1 267.6m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#E73B37"></path></g></svg>
					</div>
					<div className="flex-1">
						<div className="flex gap-2 items-center">
							<Play className="text-rose-500 fill-rose-500 shrink-0 size-6" />
							<h3 className="text-3xl font-semibold">Unified Strategy, Maximum Impact</h3>
						</div>
						<p className="text-lg font-medium ml-8 mt-2">Stop juggling multiple vendors. Our integrated platform
							ensures your message stays consistent across every
							voter touchpoint—saving you time, money, and
							headaches.</p>
						<div className="text-gray-700 mt-4 flex items-center gap-2">
							<Play className="fill-gray-700 size-6" />
							<h3 className="text-3xl font-semibold">Built for Political Success</h3>
						</div>
						<div className="text-gray-700 mt-4 flex items-center gap-2">
							<Play className="fill-gray-700 size-6" />
							<h3 className="text-3xl font-semibold">Scale to Your Race</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}