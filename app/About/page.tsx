import FreeTrial from "../components/Widgets/FreeTrial";
import Team from "../components/Widgets/MeetOurTeam";
import Gallery from "./components/Gallery";

const Page = () => {
    return (
        <>
            <div className='text-center mt-15 py-10'>
                <div className='text-color-[#6c6c6c] text-bold mb-4'>
                    WHAT WE DO
                </div>
                <h1 className="text-[56px] font-bold text-black m-0">
                    Innovation tailored for you
                </h1>
                <div className="mt-8 text-[#6c6c6c] text-base">
                    <span className="text-[#232742] font-bold">Home</span>
                    <span className="mx-2">{'>'}</span>
                    <span>Team</span>
                </div>
            </div>

            <Gallery />
            <Team />
            <FreeTrial />
        </>
    );
}

export default Page;