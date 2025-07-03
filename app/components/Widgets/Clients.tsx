
import Image from "next/image";

const Clients = () => {
    const clientLogos = [
        { name: "Hooli", src: "/col-md-1.png" },
        { name: "Lyft", src: "/col-md-2.png" },
        { name: "Leaf", src: "/col-md-3.png" },
        { name: "Stripe", src: "/col-md-4.png" },
        { name: "AWS", src: "/col-md-5.png" },
    ];

    return (
        <section className="bg-gray-100 px-4 py-8 md:py-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl md:text-3xl font-bold text-center mb-2">Big Companies Are Here</h1>
                    <p className="text-sm md:text-base text-center text-gray-700 max-w-sm md:max-w-md mb-8 md:mb-12">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-5 place-items-center">
                    {clientLogos.map((client, index) => (
                        <div key={index} className="flex items-center justify-center p-2">
                            <Image
                                src={client.src}
                                alt={`${client.name} logo`}
                                width={120}
                                height={60}
                                className="object-contain w-30 h-20 md:w-30 md:h-30 lg:w-24 lg:h-12 max-w-full"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Clients;