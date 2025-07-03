import Image from 'next/image';

const Hero = () => {
    return (
        <section className="px-4 py-12 md:py-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
                
                {/* Left Side Content */}
                <div className="flex flex-col  tems-start space-y-4 text-center md:text-left">
                    <h3 className="text-black text-sm md:text-base font-bold font-montserrat">
                        ABOUT COMPANY
                    </h3>
                    <h1 className="text-4xl md:text-6xl font-bold text-black font-montserrat leading-tight">
                        ABOUT US
                    </h1>
                    <p className="text-base md:text-xl font-montserrat text-gray-700 mt-2 md:mt-4 max-w-xs md:max-w-md">
                        We know how large objects will act, but things on a small scale
                    </p>
                    <button
                        className="px-6 py-3 rounded bg-[#23A6F0] transition text-white text-sm md:text-base hover:bg-blue-600 cursor-pointer"
                    >
                        Get Quote Now
                    </button>
                </div>


                <div className="relative flex justify-center items-center w-full md:w-auto">
                    <div className="absolute -top-3 mx-auto md:top-1  w-[300px] h-[300px] md:w-[520px] md:h-[520px] bg-[#FFE9EA] rounded-full z-0" />
                    <Image
                        src="/technology3.png"
                        alt="Shopping Girl"
                        className="relative z-10"
                        width={320}
                        height={320}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
