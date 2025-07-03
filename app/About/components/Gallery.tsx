import Image from "next/image";

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            src: "/unsplash6.jpg",
            alt: "unsplash image",
            className: "col-span-2 row-span-2",
            overlay: false
        },
        {
            id: 2,
            src: "/unsplash7.jpg",
            alt: "COAT collection",
            className: "col-span-1 row-span-1",
            overlay: true,
            text: "COAT"
        },
        {
            id: 3,
            src: "/unsplash8.jpg",
            alt: "Woman in denim jacket",
            className: "col-span-1 row-span-1",
            overlay: false
        },
        {
            id: 4,
            src: "/unsplash11.jpg",
            alt: "Woman in black outfit",
            className: "col-span-1 row-span-1",
            overlay: false
        },
        {
            id: 5,
            src: "/unsplash10.jpg",
            alt: "Woman in blue patterned shirt",
            className: "col-span-1 row-span-1",
            overlay: false
        }
    ];

    return (
        <section className="max-w-full md:max-w-7xl mx-auto md:px-4 px-1 py-8 md:py-16">
            <div className="grid md:grid-cols-4 grid-cols-2 md:grid-rows-2 gap-2 md:gap-4 h-[800px] md:h-[600px]">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className={`relative overflow-hidden ${item.className}`}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        {item.overlay && (
                            <div className="absolute inset-0 flex items-center justify-center transform rotate-y-180 hover:scale-105 transition-transform duration-300">
                                <span className="text-white text-6xl font-bold">{item.text}</span>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
