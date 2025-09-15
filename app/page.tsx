import { Star } from 'lucide-react';
import Image from 'next/image';
import bookCoverImage from '@/app/assets/what-is-normal-book-cover.jpg';
export default function Home() {
	return (
		<div className="min-h-screen bg-stone-50">
			{/* Header Section */}
			<div className="text-center  pt-4 sm:pt-8 lg:pt-12 pb-8 max-w-[1300px] mx-auto flex gap-6 justify-center items-center">
				<div className="h-[1px] bg-stone-500 flex-1 "></div>
				<p className="text-stone-500 text-sm font-medium tracking-widest uppercase ">
					“Core reading for anyone interested in the idea that all people are
					unique.”
				</p>
				<div className="h-[1px] bg-stone-500 flex-1 "></div>
			</div>
			{/* Logo Section */}
			<div className="flex flex-wrap justify-center items-center gap-2 lg:gap-16 px-8 pb-4 lg:pb-16">
				<div className="flex items-center gap-1 lg:gap-2 text-stone-700">
					<span className="text-lg font-bold">→</span>
					<span className="font-serif text-lg">Waterstones</span>
				</div>
				<div className="flex items-center gap-1 lg:gap-2 text-stone-700">
					<span className="text-lg font-bold">→</span>
					<span className="font-serif text-lg">KOBO</span>
				</div>
				<div className="flex items-center gap-1 lg:gap-2 text-stone-700">
					<span className="text-lg font-bold">→</span>
					<span className="font-sans text-lg font-bold">amazon</span>
				</div>
				<div className="flex items-center gap-1 lg:gap-2 text-stone-700">
					<span className="text-lg font-bold">→</span>
					<span className="font-sans text-lg">Apple</span>
				</div>
			</div>
			{/* Main Content Section */}
			<div className="max-w-7xl mx-auto px-8 pb-16 pt-4 sm:pt-8 lg:pt-0">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
					{/* Left Testimonial */}
					<div className="text-center lg:text-right order-2 lg:order-1">
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
					<div className="relative text-center order-1 lg:order-2">
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
								<span>7500</span>
								<span>COPIES</span>
								<span>SOLD</span>
							</div>
						</div>
						<div className="mt-6">
							{/* <h2 className="text-2xl font-bold text-stone-900 mb-2">
								Tiny Changes,
							</h2>
							<h2 className="text-2xl font-bold text-stone-900">
								Remarkable Results
							</h2> */}
						</div>
					</div>

					{/* Right Testimonial */}
					<div className="text-center lg:text-left order-3">
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
			<div className="text-center pb-16 text-xl md:text-4xl lg:text-4xl text-stone-900 leading-tight mx-auto px-8">
				<h1 className=" font-semibold max-w-5xl mx-auto  pb-2">
					Psychotherapists Explore the Question:
				</h1>
				<h1 className="font-bold  max-w-4xl mx-auto px-8">What is Normal?</h1>
			</div>
			<div>
				<p className="font-light text-lg text-center max-w-4xl mx-auto px-4">
					At a time of rapid social change, the freedom to be oneself whatever
					form that takes is at the core of contemporary debate, and this volume
					makes a vital contribution to that project.
				</p>
			</div>
			<div className="h-[200px]"></div>
			<div className="text-center">
				<h1 className="text-xl lg:text-2xl  font-bold text-stone-900 leading-tight max-w-4xl mx-auto px-8">
					.
				</h1>
				<h1 className="text-xl lg:text-2xl  font-bold text-stone-900 leading-tight max-w-4xl mx-auto px-8">
					.
				</h1>
				<h1 className="text-xl lg:text-2xl  font-bold text-stone-900 leading-tight max-w-4xl mx-auto px-8">
					.
				</h1>
				<div className="h-[40px]"></div>
				<h1 className="text-xl lg:text-2xl font-bold text-stone-900 leading-tight max-w-4xl mx-auto px-8 pb-[100px]">
					This is a draft, contact{' '}
					<a
						className="underline"
						href="mailto:alex_braatz@icloud.com"
					>
						alex_braatz@icloud.com
					</a>
				</h1>
			</div>
		</div>
	);
}
