import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter , FaLinkedin} from "react-icons/fa6";


const FreeTrial = () => {
    return (
        <section className="bg-white px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Start your 14 days free trial
                </h2>

                <p className="text-gray-600 text-sm md:text-base max-w-md mx-auto mb-8">
                    Met minim Mollie non desert Alamo est sit cliquey dolor
                    do met sent. RELIT official consequent.
                </p>

                <div className="mb-10">
                    <Link
                        href="/signup"
                        className="bg-[#23A6F0] hover:bg-blue-600 text-white px-12 py-4 rounded-lg font-medium text-lg transition-colors inline-block"
                    >
                        Try it free now
                    </Link>
                </div>

                <div className="flex justify-center items-center space-x-8">
                    <Link
                        href="#"
                        className="text-blue-400 hover:text-blue-500 transition-colors"
                        aria-label="Twitter"
                    >
                        <FaXTwitter className="text-blue-600" size={30} />
                    </Link>
                    <Link
                        href="#"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                        aria-label="Facebook"
                    >
                        <FaFacebook className="text-blue-600" size={30} />
                    </Link>

                    <Link
                        href="#"
                        className="text-pink-600 hover:text-pink-700 transition-colors"
                        aria-label="Instagram"
                    >
                        <FaInstagram className="text-blue-600" size={30} />
                    </Link>

                    <Link
                        href="#"
                        className="text-blue-700 hover:text-blue-800 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin className="text-blue-600" size={30} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FreeTrial;
