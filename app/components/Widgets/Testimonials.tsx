import Image from "next/image";

const Testimonials = () => {
    return (
        <section>
            <div className="bg-[#2A7CC7] text-white flex items-center justify-between gap-8">

                <div className="max-w-2xl mx-auto px-4 py-4 mt-4">
                    <h3 className="text-base font-bold">WORK WITH US</h3>
                    <h1 className="text-[40px] font-bold">Now Let&apos;s grow Yours</h1>
                    <p className="text-sm max-w-sm">The gradual accumulation of information about atomic and small-scale
                        behavior during the first quarter of the 20th
                    </p>
                    <button
                        className="px-7 py-2 rounded transition text-white border border-white bg-[#2A7CC7] mt-6"
                    >
                        Button
                    </button>
                </div>
                
                <div className="flex justify-end">
                    <Image
                        src="/photo.avif"
                        alt="Testimonials background"
                        width={590}
                        height={640}
                    />
                </div>
            </div>
        </section >
    );
}

export default Testimonials;