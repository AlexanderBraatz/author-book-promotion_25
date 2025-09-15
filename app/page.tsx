import { Star } from 'lucide-react';
import Image from 'next/image';
import bookCoverImage from '@/app/assets/what-is-normal-book-cover.jpg';
export default function Home() {
	return (
		<div className="min-h-screen bg-stone-50">
			{/* Header Section */}
			<div className="text-center pt-12 pb-8">
				<p className="text-stone-500 text-sm font-medium tracking-widest uppercase">
					“Core reading for anyone interested in the idea that all people are
					unique.”
				</p>
			</div>

			{/* Logo Section */}
			<div className="flex justify-center items-center gap-16 px-8 pb-16">
				<div className="flex items-center gap-2 text-stone-700">
					{/* Amazon, Kobo, Apple Waterstones */}
					<span className="text-lg font-bold">→</span>
					<span className="font-serif text-lg">Waterstones</span>
				</div>
				<div className="flex items-center gap-2 text-stone-700">
					<span className="text-lg font-bold">→</span>
					<span className="font-serif text-lg">KOBO</span>
				</div>
				<div className="flex items-center gap-2 text-stone-700">
					<span className="text-lg font-bold">→</span>
					<span className="font-sans text-lg font-bold">amazon</span>
				</div>
				<div className="flex items-center gap-2 text-stone-700">
					<span className="text-lg font-bold">→</span>
					<span className="font-sans text-lg">Apple</span>
				</div>
			</div>

			{/* Main Content Section */}
			<div className="max-w-7xl mx-auto px-8 pb-16">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
					{/* Left Testimonial */}
					<div className="text-center lg:text-right">
						<div className="flex justify-center lg:justify-end gap-1 mb-6">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className="w-6 h-6 fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>
						<blockquote className="text-lg leading-relaxed mb-6 text-stone-800">
							&quot;A stunning array of provocations to anyone who thinks
							there’s anything normal about normality&quot;
						</blockquote>
						<div>
							<p className="font-bold text-stone-900 text-lg">Anouchka Grose</p>
							<p className="text-stone-600 text-sm">psychoanalyst and writer</p>
						</div>
					</div>

					{/* Center Book Cover */}
					<div className="relative text-center">
						<div className="relative inline-block">
							<Image
								src={bookCoverImage}
								alt="what is normal book cover"
								className="w-80 h-auto mx-auto shadow-2xl"
								width={2185}
								height={1524}
							/>
							{/* Golden Badge */}
							<div className="absolute -top-4 -right-4 bg-amber-600 text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-xs font-bold leading-tight shadow-lg">
								<span>OVER</span>
								<span>500</span>
								<span>COPIES</span>
								<span>SOLD</span>
							</div>
						</div>
						<div className="mt-6">
							<h2 className="text-2xl font-bold text-stone-900 mb-2">
								Tiny Changes,
							</h2>
							<h2 className="text-2xl font-bold text-stone-900">
								Remarkable Results
							</h2>
						</div>
					</div>

					{/* Right Testimonial */}
					<div className="text-center lg:text-left">
						<div className="flex justify-center lg:justify-start gap-1 mb-6">
							{[...Array(5)].map((_, i) => (
								<Star
									key={i}
									className="w-6 h-6 fill-yellow-400 text-yellow-400"
								/>
							))}
						</div>
						<blockquote className="text-lg leading-relaxed mb-6 text-stone-800">
							&quot;Candid, diverse, soulful, political and provocative.&quot;
						</blockquote>
						<div>
							<p className="font-bold text-stone-900 text-lg">Jon Blend</p>
							<p className="text-stone-600 text-sm">
								Senior Accredited Member of the NCPS
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Title Section */}
			<div className="text-center pb-16">
				<h1 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight max-w-4xl mx-auto px-8">
					Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad
					Ones
				</h1>
			</div>
		</div>
	);
}
