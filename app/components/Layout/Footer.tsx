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
                <div className="flex items-center justify-between mb-10 border-b border-gray-200 pb-6">
                    <h1 className="text-2xl font-bold text-black mb-4">Bandage</h1>
                    <div className="flex items-center space-x-4">
                        <FaFacebook className="text-blue-600" size={24} />
                        <FaInstagram className="text-blue-600" size={24} />
                        <FaXTwitter className="text-blue-600" size={24} />
                    </div>
                </div>

                <div className="flex gap-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
                        {footerLinks.map((section) => (
                            <div key={section.title}>
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

                    <div className="w-80">
                        <h3 className="font-bold mb-3 text-gray-900">Get In Touch</h3>
                        <form className="flex mb-2">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 px-4 py-2 border border-gray-50 bg-gray-50 rounded-l-md"
                            />
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-6 py-2 rounded-r-md hover:bg-blue-600"
                            >
                                Subscribe
                            </button>
                        </form>
                        <p className="text-xs text-gray-500">Lore imp sum dolor Amit</p>
                    </div>
                </div>
            </div>
            <div className="bg-[#FAFAFA] py-5 ">
                <div className="max-w-2xl">
                    <div className="text-center">
                        <p className="text-[#737373] text-sm ">Made With Love By Finland All Right Reserved </p>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;