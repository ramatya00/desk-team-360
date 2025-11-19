import { Smartphone, Monitor, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function RemainingSections() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		agreed: false
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
	};

	return (
		<div className="w-full">
			{/* Pricing Section */}
			<div className="bg-white py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
						Campaign Solutions for Every Budget
					</h2>

					<div className="grid md:grid-cols-3 gap-8">
						{/* Card 1 - Light */}
						<div className="bg-blue-50 rounded-3xl p-8 flex flex-col">
							<div className="mb-8">
								<Smartphone className="w-16 h-16 text-gray-900 stroke-[1.5]" />
							</div>

							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								À La Carte Services
							</h3>

							<p className="text-gray-700 mb-6 grow">
								Build your custom campaign toolkit Starting at <span className="font-bold">$99/month</span>
							</p>

							<button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
								See Options <ArrowRight className="w-5 h-5" />
							</button>
						</div>

						{/* Card 2 - Dark (Featured) */}
						<div className="bg-slate-900 text-white rounded-3xl p-8 flex flex-col transform md:scale-105 shadow-xl">
							<div className="mb-8">
								<Monitor className="w-16 h-16 text-white stroke-[1.5]" />
							</div>

							<h3 className="text-2xl font-bold mb-4">
								Full Suite Package
							</h3>

							<p className="text-gray-300 mb-6 grow">
								Everything you need to launch and run a professional campaign <span className="font-bold text-white">$500/month</span>
							</p>

							<button className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2">
								Get Started <ArrowRight className="w-5 h-5" />
							</button>
						</div>

						{/* Card 3 - Light */}
						<div className="bg-blue-50 rounded-3xl p-8 flex flex-col">
							<div className="mb-8">
								<User className="w-16 h-16 text-gray-900 stroke-[1.5]" />
							</div>

							<h3 className="text-2xl font-bold text-gray-900 mb-4">
								Custom Solutions
							</h3>

							<p className="text-gray-700 mb-6 grow">
								For larger campaigns with specialized needs
							</p>

							<button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
								Request Quote <ArrowRight className="w-5 h-5" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* CTA Section */}
			<div className="bg-slate-900 text-white py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						{/* Left Content */}
						<div>
							<h2 className="text-4xl md:text-5xl font-bold mb-6">
								Ready to Launch Your <span className="text-red-500">Winning Campaign?</span>
							</h2>

							<p className="text-xl text-gray-300 mb-8">
								Get started today with Campaign Butler and receive:
							</p>

							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="shrink-0 mt-1">
										<div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-red-500 border-b-6 border-b-transparent"></div>
									</div>
									<p className="text-gray-300">
										<span className="font-bold text-white">Same-day</span> domain and email setup
									</p>
								</div>

								<div className="flex items-start gap-3">
									<div className="shrink-0 mt-1">
										<div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-red-500 border-b-6 border-b-transparent"></div>
									</div>
									<p className="text-gray-300">
										<span className="font-bold text-white">Professional</span> website within 72 hours
									</p>
								</div>

								<div className="flex items-start gap-3">
									<div className="shrink-0 mt-1">
										<div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-red-500 border-b-6 border-b-transparent"></div>
									</div>
									<p className="text-gray-300">
										<span className="font-bold text-white">Dedicated</span> campaign strategist
									</p>
								</div>

								<div className="flex items-start gap-3">
									<div className="shrink-0 mt-1">
										<div className="w-0 h-0 border-t-6 border-t-transparent border-l-8 border-l-red-500 border-b-6 border-b-transparent"></div>
									</div>
									<p className="text-gray-300">
										<span className="font-bold text-white">Complete</span> onboarding and training
									</p>
								</div>
							</div>
						</div>

						{/* Right Form */}
						<div className="bg-slate-800 rounded-2xl p-8">
							<div className="space-y-4">
								<input
									type="text"
									placeholder="First Name"
									value={formData.firstName}
									onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
									className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
								/>

								<input
									type="text"
									placeholder="Last Name"
									value={formData.lastName}
									onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
									className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
								/>

								<input
									type="email"
									placeholder="Email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
								/>

								<input
									type="tel"
									placeholder="Phone Number (optional)"
									value={formData.phone}
									onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
									className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
								/>

								<label className="flex items-start gap-3 text-sm text-gray-400 cursor-pointer">
									<input
										type="checkbox"
										checked={formData.agreed}
										onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
										className="mt-1"
									/>
									<span>
										I agree to receive text messages from Campaign Butler. By checking this box and providing your phone number, <span className="text-red-500">Read more...</span>
									</span>
								</label>

								<button
									onClick={handleSubmit}
									className="w-full bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
								>
									Launch My Campaign <ArrowRight className="w-5 h-5" />
								</button>
							</div>
						</div>
					</div>

					{/* Bottom Section with Image */}
					<div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
						<div className="order-2 lg:order-1">
							<img
								src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop"
								alt="Campaign strategist"
								className="rounded-2xl w-full h-[500px] object-cover"
							/>
						</div>

						<div className="order-1 lg:order-2">
							<h3 className="text-3xl md:text-4xl font-bold mb-6">
								Visibility Starts Here. Victory Follows.
							</h3>

							<p className="text-gray-300 text-lg leading-relaxed mb-8">
								Don't leave your campaign success to chance. Partner with the experts who understand what it takes to win in today's complex political landscape.
							</p>

							<button className="bg-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center gap-2">
								Get Started Today <ArrowRight className="w-5 h-5" />
							</button>
						</div>
					</div>
				</div>
			</div>


		</div>
	);
}