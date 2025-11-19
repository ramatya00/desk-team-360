import { Instagram, Facebook, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="bg-slate-950 text-white py-12 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-4 gap-12 mb-12">
					{/* Brand Column */}
					<div className="md:col-span-1">
						<h3 className="text-2xl font-bold mb-4">
							Campaign<span className="text-red-500">Butler</span>
						</h3>
						<p className="text-gray-400 text-sm">
							Win Your Next Election with Campaign Butler's All-in-One Solution
						</p>
					</div>

					{/* Links Columns */}
					<div>
						<ul className="space-y-3">
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
						</ul>
					</div>

					<div>
						<ul className="space-y-3">
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support Center</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors">Campaign Resources</a></li>
							<li><a href="#" className="text-gray-300 hover:text-white transition-colors">Blog</a></li>
						</ul>
					</div>

					{/* Scroll to Top */}
					<div className="flex justify-start md:justify-end">
						<button
							onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
							className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg transition-colors h-min"
						>
							<ArrowUp className="w-6 h-6" />
						</button>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<p className="text-gray-400 text-sm">
						© 2025 Campaign Butler. All Rights Reserved.
					</p>

					<div className="flex gap-6">
						<a href="#" className="text-gray-400 hover:text-white transition-colors">
							<Instagram className="w-6 h-6" />
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition-colors">
							<Facebook className="w-6 h-6" />
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition-colors">
							<Youtube className="w-6 h-6" />
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition-colors">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition-colors">
							<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
							</svg>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}