import Image from 'next/image';

const Hero = () => {
    return (
        <section>
            <div className='flex flex-between items-center'>
                <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col items-start justify-center space-y-4">
                    <h3 className="text-black text-base font-bold font-montserrat">
                        ABOUT COMPANY
                    </h3>
                    <h1 className="text-6xl font-bold text-black font-montserrat">
                        ABOUT US
                    </h1>
                    <p className="text-xl font-monsterrat text-gray-700 mt-4 max-w-xs" >
                        We know how large objects will act,
                        but things on a small scale
                    </p>
                    <button
                        className="px-4 py-2 rounded transition text-white"
                        style={{ backgroundColor: '#23A6F0' }}
                    >
                        Get Quote Now
                    </button>

                </div>
                <div className="relative mr-5">
                    <div
                        className="absolute top-3 -left-16 rounded-full w-[520px] h-[520px] bg-[#FFE9EA] z-0"
                    />
                    <Image
                        src="/technology3.png"
                        alt="Shopping Girl"
                        className="relative z-10 text-black top-0 right-0"
                        width={470}
                        height={250}
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero