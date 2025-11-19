import { ArrowUpRight } from "lucide-react";

export default function Navbar() {
	return (
		<div className="bg-gray-900 text-white absolute top-0 left-0 right-0">
			<nav className="max-w-6xl mx-auto py-4 flex justify-between items-center border-b border-white pb-8">
				<h1 className="text-3xl font-semibold">Campaign<span className="text-rose-500">Butler</span></h1>
				<ul className="flex items-center space-x-10 font-medium text-lg">
					<li>Services</li>
					<li>Pricing</li>
					<li>Quick Start</li>
					<li>Support</li>
					<li>Blog</li>
					<li><button className="bg-rose-500 text-white px-4 py-2 rounded flex items-center gap-1.5 cursor-pointer">Contact <ArrowUpRight className="size-6" /></button></li>
				</ul>

			</nav>
		</div>
	)
}