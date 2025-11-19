import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { useState } from 'react';
import person1 from '../assets/images/people-1.jpeg';
import person2 from '../assets/images/people-2.jpeg';
import person3 from '../assets/images/people-3.jpeg';

export default function Section3() {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);

	const testimonials = [
		{
			quote: "The volunteer walking app revolutionized our ground game. We knocked 40% more doors with the same number of volunteers.",
			name: "Michael Thompson",
			title: "County Commissioner",
			metric: "40%",
			image: person1
		},
		{
			quote: "Our team's efficiency skyrocketed. The real-time data helped us target key districts and maximize our volunteer impact.",
			name: "Sarah Martinez",
			title: "State Representative",
			metric: "55%",
			image: person2
		},
		{
			quote: "Game-changing technology. We connected with voters more effectively than ever before and won by a landslide.",
			name: "James Chen",
			title: "City Council Member",
			metric: "62%",
			image: person3
		}
	];

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
	};

	return (
		<div className="min-h-screen py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<h1 className="text-5xl md:text-6xl font-bold text-center mb-20">
					Trusted by Winning Candidates
				</h1>

				<div className="relative flex items-center justify-center gap-6">
					{/* Left Preview */}
					<div className="hidden lg:block w-64 h-96 rounded-2xl overflow-hidden opacity-40">
						<img
							src={testimonials[(currentTestimonial - 1 + testimonials.length) % testimonials.length].image}
							alt="Previous candidate"
							className="w-full h-full object-cover grayscale"
						/>
					</div>

					{/* Left Arrow */}
					<button
						onClick={prevTestimonial}
						className="absolute left-0 lg:left-72 z-10 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors"
					>
						<ChevronLeft className="w-6 h-6" />
					</button>

					{/* Main Testimonial Card */}
					<div className="relative w-full max-w-5xl bg-black rounded-3xl overflow-hidden shadow-2xl">
						<div className="aspect-video relative h-[300px] w-full">
							<img
								src={testimonials[currentTestimonial].image}
								alt={testimonials[currentTestimonial].name}
								className="w-full h-full object-cover"
							/>

							{/* Play Button Overlay */}
							<div className="absolute inset-0 bg-black/40 flex items-center justify-center">
								<button className="bg-slate-800/80 hover:bg-slate-700/80 rounded-full p-6 transition-colors">
									<Play className="w-12 h-12 text-red-500 fill-red-500" />
								</button>
							</div>

							{/* Metric Badge */}
							<div className="absolute top-6 right-6 text-right">
								<div className="text-5xl font-bold text-slate-400 mb-2">
									{testimonials[currentTestimonial].metric}
								</div>
								<div className="flex items-center justify-end gap-2">
									<div className="h-0.5 w-12 bg-red-500"></div>
									<ChevronRight className="w-4 h-4 text-red-500" />
									<ChevronRight className="w-4 h-4 text-red-500 -ml-3" />
								</div>
							</div>
						</div>

						{/* Quote Section */}
						<div className="p-8 md:p-12">
							<blockquote className="text-white text-xl md:text-2xl font-medium italic mb-6">
								"{testimonials[currentTestimonial].quote}"
							</blockquote>

							<div className="border-t border-slate-700 pt-6">
								<div className="text-white font-semibold text-lg">
									{testimonials[currentTestimonial].name}
								</div>
								<div className="text-slate-400">
									{testimonials[currentTestimonial].title}
								</div>
							</div>
						</div>
					</div>

					{/* Right Arrow */}
					<button
						onClick={nextTestimonial}
						className="absolute right-0 lg:right-72 z-10 bg-red-500 hover:bg-red-600 text-white p-3 rounded-lg transition-colors"
					>
						<ChevronRight className="w-6 h-6" />
					</button>

					{/* Right Preview */}
					<div className="hidden lg:block w-64 h-96 rounded-2xl overflow-hidden opacity-40">
						<img
							src={testimonials[(currentTestimonial + 1) % testimonials.length].image}
							alt="Next candidate"
							className="w-full h-full object-cover grayscale"
						/>
					</div>
				</div>

				{/* Logo Section */}
				<div className="mt-20 opacity-50 grayscale">
					<div className="flex flex-wrap items-center justify-center gap-12">
						<div className="text-gray-900 text-sm font-semibold">HUMAN RIGHTS CAMPAIGN</div>
						<div className="text-gray-900 text-sm font-semibold">PLANNED PARENTHOOD</div>
						<div className="text-gray-900 text-sm font-semibold">NATIONAL CHILDREN'S CANCER SOCIETY</div>
						<div className="text-gray-900 text-sm font-semibold">U.S. IMMIGRATION</div>
						<div className="text-gray-900 text-sm font-semibold">NARAL PRO-CHOICE</div>
					</div>
				</div>
			</div>
		</div>
	);
}