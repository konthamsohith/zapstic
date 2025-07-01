import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
	{
		name: 'Shiva Rama Krishna',
		title: 'Software developer',
		quote:
			'Big thanks to Zapstic for helping me automate my Instagram and LinkedIn! Super smooth process, saved me tons of time!',
		rating: 5,
		image: '/images/Shiva Rama Krishna.png', // <-- Updated to use your local image
	},
	{
		name: 'Deepak Puram',
		title: 'Startup founder',
		quote:
			'Their team helped us identify key opportunities for AI, then built tools that boosted both our speed and accuracy. We’re already seeing results.',
		rating: 5,
		image: '/images/tbd.jpg',
	},
	{
		name: 'Eli R',
		title: 'COO at GridFrame',
		quote:
			'From ideation to final delivery, they were incredibly proactive and sharp. Our new AI-powered assistant reduced manual work and improved user satisfaction.',
		rating: 4,
		image: 'https://ik.imagekit.io/ji2lkjg53/tbd.jpg?updatedAt=1751384039710',
	},
];

export default function Testimonials() {
	return (
		<section id="testimonials" className="bg-[#F5F5F5] py-16 px-4">
			<div className="max-w-6xl mx-auto text-center">
				<span className="text-sm font-medium text-gray-600 uppercase bg-white border border-gray-200 rounded-full px-3 py-1 shadow-sm">
					❤️ Customers
				</span>

				{/* ✅ Gradient Text */}
				<h2 className="mt-6 text-4xl font-bold bg-gradient-to-b from-gray-300 to-black bg-clip-text text-transparent">
					What Our Clients Say
				</h2>

				<p className="text-gray-600 mt-2">
					Join customers who trust AI to transform their business.
				</p>

				{/* Top Section */}
				<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Left Quote Box with White Background Behind */}
					<div className="relative h-80">
						{/* Back White Box */}
						<div className="absolute -top-1 left-0 w-full h-full bg-white rounded-2xl shadow-md z-0" />
						{/* Foreground Quote Box */}
						<div className="relative bg-[#F5F5F5] rounded-2xl shadow-md p-8 text-left text-gray-800 text-2xl font-bold leading-relaxed h-full flex flex-col justify-between z-10">
							<p>
								Their{' '}
								<span className="text-gray-500">AI-driven</span> approach helped us
								reach the right audience and{' '}
								<span className="text-gray-500">grow faster</span> with smarter
								insights—streamlining our strategy, improving engagement, and{' '}
								<span className="text-gray-500">delivering results</span> we
								couldn’t achieve before.
							</p>
							<div className="mt-6 text-3xl text-gray-900 text-center">❝❞</div>
						</div>
					</div>

					{/* Right Image */}
					<div className="rounded-2xl overflow-hidden shadow-md h-80 bg-white flex items-center justify-center">
						<img
							src="/images/testimonial.jpg"
							alt="testimonial"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>

				{/* Lower Testimonials */}
				<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
					{testimonials.map((t, idx) => (
						<div key={idx} className="relative">
							{/* Back White Box */}
							<div className="absolute -top-1 left-0 w-full h-full bg-white rounded-xl z-0" />

							{/* Foreground Testimonial Card */}
							<div className="relative bg-[#F5F5F5] p-6 rounded-xl shadow-md text-left z-10">
								{/* Stars */}
								<div className="flex items-center text-yellow-500 mb-3">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											className={`h-5 w-5 ${
												i < t.rating ? 'opacity-100' : 'opacity-30'
											}`}
										/>
									))}
								</div>

								{/* Quote */}
								<p className="text-gray-700 mb-4">{t.quote}</p>

								{/* User Info */}
								<div className="flex items-center">
									<img
										src={t.image}
										alt={t.name}
										className="w-10 h-10 rounded-full object-cover mr-3"
									/>
									<div>
										<p className="font-semibold text-gray-900">{t.name}</p>
										<p className="text-sm text-gray-500">{t.title}</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
