import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const footerLinks = [
    {
        title: "Company Info",
        links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
        title: "Legal",
        links: ["About Us", "Carrier", "We are hiring", "Blog"],
    },
    {
        title: "Features",
        links: [
            "Business Marketing",
            "User Analytic",
            "Live Chat",
            "Unlimited Support",
        ],
    },
    {
        title: "Resources",
        links: [
            "IOS & Android",
            "Watch a Demo",
            "Customers",
            "API",
        ],
    },
];

const Footer = () => {
    return (
        <footer className="bg-white">
            <div className="max-w-6xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10 border-b border-gray-200 pb-6 space-y-4 md:space-y-0">
                    <h1 className="text-2xl font-bold text-black text-center md:text-left">Bandage</h1>
                    <div className="flex items-center justify-center md:justify-end space-x-4">
                        <FaFacebook className="text-blue-600 hover:cursor-pointer" size={24} />
                        <FaInstagram className="text-blue-600 hover:cursor-pointer" size={24} />
                        <FaXTwitter className="text-blue-600 hover:cursor-pointer" size={24} />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Links Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 flex-1">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="text-center md:text-left">
                                <h3 className="font-bold mb-3 text-gray-900">{section.title}</h3>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="text-gray-700 hover:text-blue-600 text-sm">{link}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Newsletter Section */}
                    <div className="w-full lg:w-80 text-center lg:text-left">
                        <h3 className="font-bold mb-3 text-gray-900">Get In Touch</h3>
                        <div className="flex flex-col sm:flex-row mb-2 max-w-md mx-auto lg:mx-0">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 px-4 py-2 border border-gray-300 bg-gray-50 rounded-l-md sm:rounded-l-md rounded-r-md sm:rounded-r-none mb-2 sm:mb-0"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded-l-md sm:rounded-l-none rounded-r-md hover:bg-blue-600 whitespace-nowrap"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-xs text-gray-500">Lore imp sum dolor Amit</p>
                    </div>
                </div>
            </div>
            
            {/* Bottom Section */}
            <div className="bg-[#FAFAFA] py-5">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center">
                        <p className="text-[#737373] text-sm">Made With Love By Finland All Right Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;