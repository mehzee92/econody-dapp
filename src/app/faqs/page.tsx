"use client";
import React, { useState } from 'react';

const faqs = [
	{
		question: 'What is Econody?',
		answer:
			'Econody is a platform for tokenizing real-world and digital assets, enabling users to invest, manage, and track their holdings in a secure and transparent way.',
	},
	{
		question: 'How do I tokenize a new asset?',
		answer:
			'Go to the admin dashboard, select "TOKENIZATOR", and fill out the asset tokenization form. You can upload documents, set supply, and configure revenue distribution.',
	},
	{
		question: 'Is my wallet secure on Econody?',
		answer:
			'Yes, Econody uses industry-standard security practices and non-custodial wallet integration to keep your assets safe.',
	},
	{
		question: 'What types of assets can I invest in?',
		answer:
			'You can invest in real estate, precious metals, crypto coins, and more. The marketplace offers a curated selection of both digital and real-world assets.',
	},
	{
		question: 'How do I claim staking rewards?',
		answer:
			'Navigate to the Staking page in your profile, and click the “Claim” button next to any eligible stake.',
	},
	{
		question: 'Where can I find support?',
		answer:
			'For support, visit our Help Center or contact us via the support email provided in the footer.',
	},
];

export default function FaqsPage() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	return (
		<div className=" mx-auto max-w-[800px] px-4 py-12">
			<h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
				Frequently Asked Questions
			</h1>
			<div className="space-y-4">
				{faqs.map((faq, idx) => (
					<div
						key={faq.question}
						className="border border-gray-300 rounded-xl bg-white shadow-sm overflow-hidden"
					>
						<button
							className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold text-gray-800 focus:outline-none hover:bg-gray-50 transition"
							onClick={() =>
								setOpenIndex(openIndex === idx ? null : idx)
							}
							aria-expanded={openIndex === idx}
						>
							<span>{faq.question}</span>
							<svg
								className={`w-5 h-5 ml-2 transform transition-transform duration-200 ${
									openIndex === idx ? 'rotate-180' : ''
								}`}
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>
						{openIndex === idx && (
							<div className="px-6 pb-5 text-gray-700 text-base animate-fade-in">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
