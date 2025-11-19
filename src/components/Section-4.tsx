import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function CampaignToolkit() {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slides = [
		{
			category: "Digital Presence",
			items: [
				{
					title: "Official .Vote Domain",
					description: "Secure instant credibility with a trusted .vote domain that voters recognize and trust"
				},
				{
					title: "Professional Campaign Website",
					description: "Launch a mobile-friendly, conversion-focused site that tells your story and drives action"
				},
				{
					title: "Official .Vote Email",
					description: "Create a professional, branded email address that enhances your campaign's legitimacy"
				}
			],
			image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
		},
		{
			category: "Voter Outreach",
			items: [
				{
					title: "Door-to-Door Canvassing App",
					description: "Optimize your ground game with real-time tracking and data-driven route planning"
				},
				{
					title: "SMS Campaign Tools",
					description: "Reach voters instantly with personalized text message campaigns that drive engagement"
				},
				{
					title: "Social Media Management",
					description: "Streamline your social presence with scheduling tools and analytics across all platforms"
				}
			],
			image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop"
		},
		{
			category: "Campaign Analytics",
			items: [
				{
					title: "Voter Data Dashboard",
					description: "Access real-time insights on voter sentiment, demographics, and engagement patterns"
				},
				{
					title: "Fundraising Tracker",
					description: "Monitor donations, set goals, and identify top contributors with detailed reporting"
				},
				{
					title: "Performance Metrics",
					description: "Track campaign effectiveness across all channels with comprehensive analytics"
				}
			],
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
		},
		{
			category: "Volunteer Management",
			items: [
				{
					title: "Team Coordination Hub",
					description: "Organize volunteers, assign tasks, and communicate seamlessly from one central platform"
				},
				{
					title: "Event Planning Tools",
					description: "Schedule rallies, meetings, and events with automated reminders and RSVP tracking"
				},
				{
					title: "Training Resources",
					description: "Equip your team with video tutorials, best practices, and campaign materials"
				}
			],
			image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
		}
	];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % slides.length);
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
	};

	return (
		<div className="min-h-screen bg-gray-50 py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<div className="flex items-start justify-between mb-16">
					<h1 className="text-5xl md:text-6xl font-bold text-gray-900 max-w-2xl leading-tight">
						Your Complete Campaign Toolkit
					</h1>

					<div className="hidden md:flex gap-3">
						<button
							onClick={prevSlide}
							className="bg-slate-600 hover:bg-slate-700 text-white p-4 rounded-lg transition-colors"
						>
							<ChevronLeft className="w-6 h-6" />
						</button>
						<button
							onClick={nextSlide}
							className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg transition-colors"
						>
							<ChevronRight className="w-6 h-6" />
						</button>
					</div>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<div>
						<h2 className="text-3xl font-bold text-gray-900 mb-8">
							{slides[currentSlide].category}
						</h2>

						<div className="space-y-6">
							{slides[currentSlide].items.map((item, index) => (
								<div key={index} className="flex gap-4">
									<div className="shrink-0 mt-1">
										<div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-red-500 border-b-8 border-b-transparent"></div>
									</div>
									<div>
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											{item.title}
										</h3>
										<p className="text-gray-600 leading-relaxed">
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Progress Dots */}
						<div className="flex gap-3 mt-12">
							{slides.map((_, index) => (
								<button
									key={index}
									onClick={() => setCurrentSlide(index)}
									className={`h-3 rounded-full transition-all ${index === currentSlide
										? 'w-12 bg-slate-700'
										: 'w-3 bg-slate-300 hover:bg-slate-400'
										}`}
								/>
							))}
						</div>
					</div>

					{/* Right Image */}
					<div className="relative">
						<div className="relative rounded-3xl overflow-hidden shadow-2xl">
							<img
								src={slides[currentSlide].image}
								alt={slides[currentSlide].category}
								className="w-full h-[600px] object-cover"
							/>
							{/* Optional overlay for phone mockup effect */}
							<div className="absolute inset-0 bg-linear-gradient-to-t from-black/20 to-transparent"></div>
						</div>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div className="flex md:hidden justify-center gap-3 mt-8">
					<button
						onClick={prevSlide}
						className="bg-slate-600 hover:bg-slate-700 text-white p-4 rounded-lg transition-colors"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>
					<button
						onClick={nextSlide}
						className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-lg transition-colors"
					>
						<ChevronRight className="w-6 h-6" />
					</button>
				</div>
			</div>
		</div>
	);
}