import { ArrowUpRight } from "lucide-react";
import heroImg from "../assets/images/conncet.svg";

export default function Hero() {
	return (
		<div className="bg-gray-900 text-white min-h-screen rounded-br-[300px]">
			<div className="max-w-6xl mx-auto h-full">
				<div className="flex items-center justify-between pt-40">
					<div className="space-y-5 flex-3">
						<h1 className="text-6xl font-semibold">Win Your Next Election
							with Campaign Butler's
							All-in-One Solution</h1>
						<p className="font-medium text-xl">From digital presence to boots on the ground, we deliver the tools,
							technology, and expertise that modern campaigns need to connect
							with voters and secure victory.</p>
					</div>
					<div className="flex-2">
						<img src={heroImg} alt="hero image" />
					</div>
				</div>

				<form onSubmit={(e) => e.preventDefault()} className="flex gap-4 items-center">
					<label htmlFor="domain" className="text-xl font-medium">Find Your Domain</label>
					<input type="text" id="domain" placeholder="Type Here" className="placeholder:text-white bg-gray-800 rounded-sm px-4 py-3 w-80" />
					<button type="submit" className="flex items-center gap-2 text-white border border-white rounded-sm text-lg font-medium px-4 py-2 cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-200">Search <ArrowUpRight className="text-rose-400" /></button>
				</form>

				<div className="mt-52 flex items-center gap-4 justify-between">
					<button className="shrink-0 flex items-center gap-2 text-white bg-rose-500 rounded-sm text-lg font-medium px-4 py-2 cursor-pointer hover:bg-white hover:text-gray-900 transition-all duration-200">Launch Your Campaign Today <ArrowUpRight /></button>
					<div className="bg-white h-px w-full" />
					<div className="shrink-0 flex text-lg font-medium items-center gap-4">
						<a href="#" className="flex items-center gap-2 cursor-pointer">See Our Pricing <ArrowUpRight className="text-rose-400" /></a>
						<div className="bg-white h-5 w-[2px]" />
						<a href="#" className="flex items-center gap-2 cursor-pointer">Schedule a Demo <ArrowUpRight className="text-rose-400" /></a>
					</div>
				</div>
			</div>
		</div>
	)
}