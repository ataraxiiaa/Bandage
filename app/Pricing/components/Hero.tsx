'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Hero = () => {
    const router = useRouter();
    const prices = [0, 9.99, 19.99];
    const [showModal, setshowModal] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(prices[0]);

    useEffect(() => {
        if (showModal) {
            const modal = document.getElementById('authentication-modal');
            if (modal) {
                modal.classList.remove('hidden');
                modal.classList.add('flex');
            }
        } else {
            const modal = document.getElementById('authentication-modal');
            if (modal) {
                modal.classList.add('hidden');
                modal.classList.remove('flex');
            }
        }
    }, [showModal]);

    const closeModal = () => {
        setshowModal(false);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = (form.elements.namedItem('name') as HTMLInputElement)?.value;
        const email = (form.elements.namedItem('email') as HTMLInputElement)?.value;
        const phone = (form.elements.namedItem('number') as HTMLInputElement)?.value;
        
        if (!name || !email || !phone) {
            alert('Please fill in all fields');
            return;
        }
        const response = await fetch('/api/checkout_session', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            amount: selectedPrice,
            name,
            email,
            phone
            })
        });

        if (!response.ok) {
            alert('Failed to create checkout session');
            return;
        }
        
        if(selectedPrice === 0) {
            const freeResponse = await fetch('/api/free-registration', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    phone
                })
            });

            if (!freeResponse.ok) {
                alert('Failed to register for FREE package');
                return;
            }

            const freeData = await freeResponse.json();
            router.push(`/payment-success?amount=0&plan=FREE&email=${encodeURIComponent(email)}&transactionId=${freeData.transactionId}`);
            
            (form.elements.namedItem('name') as HTMLInputElement).value = '';
            (form.elements.namedItem('email') as HTMLInputElement).value = '';
            (form.elements.namedItem('number') as HTMLInputElement).value = '';
            closeModal();
            return;
        }
        await response.json();

        let planName = 'STANDARD';
        if (selectedPrice === 9.99) {
            planName = 'STANDARD';
        } else if (selectedPrice === 19.99) {
            planName = 'PREMIUM';
        }

        router.push(`/checkout?amount=${selectedPrice}&name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&plan=${planName}`);

        
        (form.elements.namedItem('name') as HTMLInputElement).value = '';
        (form.elements.namedItem('email') as HTMLInputElement).value = '';
        (form.elements.namedItem('number') as HTMLInputElement).value = '';
        closeModal();
    };

    return (
        <section className="bg-gray-100 px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-center">Pricing</h1>
                    <p className="text-sm text-center text-gray-700 max-w-sm mb-2">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                    <label className="inline-flex items-center cursor-pointer mb-2">
                        <input type="checkbox" value="" className="sr-only peer" />
                        <span className="ms-3 text-sm font-bold text-black mr-5">Monthly</span>
                        <div className="relative w-11 h-6 bg-white rounded-full 
                peer-focus:outline-none peer-focus:ring-0 
                peer dark:bg-white peer-checked:after:translate-x-full 
                rtl:peer-checked:after:-translate-x-full 
                peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] 
                after:bg-white after:border-0 
                after:rounded-full after:h-5 after:w-5 after:transition-all 
                peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                    </label>
                </div>
            </div>


            <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 sm:gap-y-2">
                <div className="flex flex-col lg:flex-row justify-center items-start">
                    {/* Pricing Card */}
                    <div className="flex flex-col p-6 w-full lg:w-80 text-center text-black bg-white border border-blue-400 shadow">
                        <h3 className="mb-4 text-2xl font-semibold">FREE</h3>
                        <p className="font-semibold text-gray-500">Optimize across all Apps By Hand</p>
                        <div className="flex justify-center items-baseline my-8">
                            <span className="mr-2 text-5xl font-extrabold text-blue-400">${prices[0]}</span>
                            <span className="text-blue-400">/month</span>
                        </div>
                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-gray-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-semibold">1GB  Cloud storage</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-gray-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-semibold">Email and community support</span>
                            </li>
                        </ul>
                        <button onClick={() => { setshowModal(true); setSelectedPrice(prices[0]) }} className="text-white bg-[#252B42] focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 hover:bg-blue-600 transition">Try For free</button>
                    </div>

                    {/* Pricing Card */}
                    <div className="flex flex-col p-6 w-full lg:w-80 text-center text-gray-900 bg-white border border-blue-400 shadow dark:border-blue-400 dark:bg-gray-800 dark:text-white transform lg:scale-110 lg:-my-4 lg:z-10">
                        <h3 className="mb-4 text-2xl font-semibold">STANDARD</h3>
                        <p className="font-bold text-white">Organize across all apps by hand</p>
                        <div className="flex justify-center items-baseline my-8 text-blue-400">
                            <span className="mr-2 text-5xl font-extrabold">${prices[1]}</span>
                            <span>/month</span>
                        </div>
                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-gray-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-semibold">1GB  Cloud storage</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-gray-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-semibold">Email and community support</span>
                            </li>
                        </ul>
                        <button onClick={() => { setshowModal(true); setSelectedPrice(prices[1]) }} className="text-white bg-[#23A6F0] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 hover:bg-blue-600 transition">Get started</button>
                    </div>
                    {/* Pricing Card */}
                    <div className="flex flex-col p-6 w-full lg:w-80 text-center text-gray-900 bg-white border border-blue-400 shadow">
                        <h3 className="mb-4 text-2xl font-semibold t">PREMIUM</h3>
                        <p className="font-bold text-gray-500">Organize across all apps by hand</p>
                        <div className="flex justify-center items-baseline my-8 text-blue-400">
                            <span className="mr-2 text-5xl font-extrabold">${prices[2]}</span>
                            <span>/month</span>
                        </div>
                        {/* List */}
                        <ul role="list" className="mb-8 space-y-4 text-left">
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-green-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-bold">Unlimited product updates
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-gray-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-semibold">1GB  Cloud storage</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                {/* Icon */}
                                <svg className="flex-shrink-0 w-8 h-8 text-white bg-gray-400 rounded-full" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                <span className="font-semibold">Email and community support</span>
                            </li>
                        </ul>
                        <button onClick={() => { setshowModal(true); setSelectedPrice(prices[2]) }} className="text-white bg-[#23A6F0] hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900 hover:bg-blue-600 transition">Get started</button>
                    </div>
                </div>
            </div>

            {/* Authentication Modal */}
            <div id="authentication-modal" tabIndex={-1} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative p-4 w-full max-w-md max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Enter your details
                            </h3>
                            <button
                                type="button"
                                onClick={closeModal}
                                className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <div className="p-4 md:p-5">
                            <form onSubmit={handleSubmit} className="space-y-4" action="#">
                                <div>
                                    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Your Name"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="name@gmail.com"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Number</label>
                                    <input
                                        type="text"
                                        name="number"
                                        id="number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                        placeholder="+92 300 1234567"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">Price: ${selectedPrice}</label>
                                </div>
                                <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed to Checkout</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;