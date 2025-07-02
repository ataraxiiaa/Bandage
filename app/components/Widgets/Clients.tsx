
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
        <section className="bg-gray-100 px-4 py-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold text-center mb-2">Big Companies Are Here</h1>
                    <p className="text-sm text-center text-gray-700 max-w-sm mb-12">
                        Problems trying to resolve the conflict between
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className="flex flex-wrap justify-center items-center gap-8 mb-5">
                    {clientLogos.map((client, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <Image
                                src={client.src}
                                alt={`${client.name} logo`}
                                width={120}
                                height={60}
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Clients;