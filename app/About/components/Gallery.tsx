import Image from "next/image";

const Gallery = () => {
    const galleryItems = [
        {
            id: 1,
            src: "/unsplash5.png",
            alt: "unsplash image",
            className: "col-span-2 row-span-2", 
            overlay: false
        },
        {
            id: 2,
            src: "/unsplash4.png", 
            alt: "COAT collection",
            className: "col-span-1 row-span-1",
            overlay: true,
            text: "COAT"
        },
        {
            id: 3,
            src: "/unsplash3.png",
            alt: "Woman in denim jacket", 
            className: "col-span-1 row-span-1",
            overlay: false
        },
        {
            id: 4,
            src: "/unsplash2.png",
            alt: "Woman in black outfit",
            className: "col-span-1 row-span-1", 
            overlay: false
        },
        {
            id: 5,
            src: "/unsplash1.png",
            alt: "Woman in blue patterned shirt",
            className: "col-span-1 row-span-1",
            overlay: false
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                {galleryItems.map((item) => (
                    <div 
                        key={item.id}
                        className={`relative overflow-hidden rounded-lg ${item.className}`}
                    >
                        <Image
                            src={item.src}
                            alt={item.alt}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                        

                        
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
