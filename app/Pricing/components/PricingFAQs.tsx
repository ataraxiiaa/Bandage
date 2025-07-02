"use client";

import { ChevronRight } from 'lucide-react';
import Link from "next/link";

const PricingFAQs = () => {
    const faqs = [
        {
            question: "the quick fox jumps over the lazy dog",
            answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        },
        {
            question: "the quick fox jumps over the lazy dog",
            answer: "Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met."
        }
    ];

    return (
        <section className="max-w-4xl mx-auto px-4 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQs</h2>
                <p className="text-gray-600 max-w-sm mx-auto">
                    Problems trying to resolve the conflict between
                    the two major realms of Classical physics
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4">
                        <button
                            className="w-full text-left flex items-start justify-between py-4 focus:outline-none"
                        >
                            <div className="flex items-start space-x-3">
                                <div className="text-blue-500">
                                     <ChevronRight />
                                </div>
                                <span className="font-medium text-gray-900">
                                    {faq.question}
                                </span>
                            </div>
                        </button>
                        <div className="ml-8 pb-4">
                            <p className="text-gray-600 text-sm">
                                {faq.answer}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <p className="text-gray-600 mb-4">Havent got your answer? Contact our <span><Link href='/' className="hover:text-blue-500">Support</Link></span></p>
            </div>
        </section>
    );
};

export default PricingFAQs;
