import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const Card = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="bg-white p-6">
            {children}

            <div className="flex items-center justify-center space-x-4 mt-4">
                <FaFacebook className="text-blue-600 hover:cursor-pointer" size={24} />
                <FaInstagram className="text-blue-600 hover:cursor-pointer" size={24} />
                <FaXTwitter className="text-blue-600 hover:cursor-pointer" size={24} />
            </div>
        </div>
    );
}

export default Card;