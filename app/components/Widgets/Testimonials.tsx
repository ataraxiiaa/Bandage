import Image from "next/image";

const Testimonials = () => {
    return (
        <section>
            <div className="bg-[#2A7CC7] text-white py-16 px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 max-w-7xl mx-auto">
                    <div className="text-center md:text-left md:flex-1">
                        <h3 className="text-sm font-bold mb-4 tracking-wider">WORK WITH US</h3>
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                            Now Let&apos;s grow Yours
                        </h1>
                        <p className="text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
                            The gradual accumulation of information about atomic and small-scale
                            behavior during the first quarter of the 20th
                        </p>
                        <button className="px-8 py-3 border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#2A7CC7] transition-colors duration-300 rounded font-medium">
                            Button
                        </button>
                    </div>

                    <div className="hidden md:flex justify-end">
                        <Image
                            src="/photo.avif"
                            alt="Testimonials background"
                            width={590}
                            height={640}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;