import Hero from "./components/Hero";
import Clients from "./components/Clients";
import PricingFAQs from "./components/PricingFAQs";
import FreeTrial from "../components/Widgets/FreeTrial";

const Page = () => {
    return (
        <>
            <div className='text-center mt-15 py-10'>
                <div className='text-color-[#6c6c6c] text-bold mb-4'>
                    PRICING
                </div>
                <h1 className="text-[56px] font-bold text-black m-0">
                    Simple Pricing
                </h1>
                <div className="mt-8 text-[#6c6c6c] text-base">
                    <span className="text-[#232742] font-bold">Home</span>
                    <span className="mx-2">{'>'}</span>
                    <span>Pricing</span>
                </div>
            </div>

            <Hero />
            <Clients />
            <PricingFAQs />
            <FreeTrial />
        </>
    );
}

export default Page;