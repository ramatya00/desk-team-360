import { User, Star, CheckSquare, ThumbsUp, Users, Award, HandHeart } from 'lucide-react';

export default function ExperienceSection() {
	return (
		<div className="w-full">
			{/* Top Section - Dark Background */}
			<div className="bg-slate-900 text-white py-20 px-4 relative overflow-hidden">
				<div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
					{/* Left Content */}
					<div>
						<h1 className="text-5xl md:text-6xl font-bold mb-8">
							<span className="text-red-500">30+</span> Years of Campaign Victory Experience
						</h1>

						<p className="text-lg leading-relaxed text-gray-300">
							<span className="text-red-500 font-bold">Campaign Butler</span> combines decades of political expertise with cutting-edge marketing technology. We've helped candidates at every level—from school board to statewide office—connect with voters and win elections. Our team understands that exposure wins elections, but only when it's strategic, consistent, and targeted. That's why we've built the only truly integrated campaign marketing platform that unites traditional outreach with digital essentials.
						</p>
					</div>

					{/* Right Graphic */}
					<div className="relative">
						<div className="relative w-full h-96 flex items-center justify-center">
							{/* Circular dotted lines */}
							<div className="absolute inset-0 flex items-center justify-center">
								<div className="w-80 h-80 rounded-full border-2 border-dashed border-red-500/30"></div>
								<div className="absolute w-64 h-64 rounded-full border-2 border-dashed border-red-500/20"></div>
								<div className="absolute w-96 h-96 rounded-full border-2 border-dashed border-red-500/20"></div>
							</div>

							{/* Icons positioned around */}
							<div className="absolute top-8 left-1/2 -translate-x-1/2">
								<div className="flex gap-2">
									<Star className="w-8 h-8 text-white" />
									<Star className="w-6 h-6 text-white" />
									<Star className="w-7 h-7 text-white" />
								</div>
							</div>

							<div className="absolute top-1/3 left-8">
								<User className="w-12 h-12 text-red-500 bg-slate-800 p-2 rounded-full" />
							</div>

							<div className="absolute top-1/2 right-8">
								<CheckSquare className="w-16 h-16 text-white border-2 border-white p-2 rounded-lg" />
							</div>

							<div className="absolute bottom-1/3 left-12">
								<ThumbsUp className="w-12 h-12 text-white" />
							</div>

							{/* Center element */}
							<div className="relative z-10 bg-slate-800 rounded-full p-8">
								<div className="w-32 h-32 flex items-center justify-center">
									<div className="text-6xl">📊</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Section - Light Background */}
			<div className="bg-slate-100 py-20 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
						Serving Campaigns Nationwide
					</h2>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
						{/* Card 1 */}
						<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
							<div className="mb-6">
								<svg className="w-16 h-16 text-red-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
									<path d="M10 50 Q 30 30, 50 50 T 90 50" />
									<path d="M10 60 Q 30 40, 50 60 T 90 60" />
									<circle cx="20" cy="40" r="3" fill="currentColor" />
									<circle cx="50" cy="50" r="3" fill="currentColor" />
									<circle cx="80" cy="40" r="3" fill="currentColor" />
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								All 50 States
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Compliant solutions for campaigns anywhere in America
							</p>
						</div>

						{/* Card 2 */}
						<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
							<div className="mb-6">
								<Users className="w-16 h-16 text-red-500 stroke-[1.5]" />
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								Every Race Level
							</h3>
							<p className="text-gray-600 leading-relaxed">
								From city council to congressional campaigns
							</p>
						</div>

						{/* Card 3 */}
						<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
							<div className="mb-6">
								<Award className="w-16 h-16 text-red-500 stroke-[1.5]" />
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								Specialized Knowledge
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Expertise in school board, judicial, and other specialized races
							</p>
						</div>

						{/* Card 4 */}
						<div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
							<div className="mb-6">
								<HandHeart className="w-16 h-16 text-red-500 stroke-[1.5]" />
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								Partisan & Non-Partisan
							</h3>
							<p className="text-gray-600 leading-relaxed">
								Solutions for every type of campaign
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}