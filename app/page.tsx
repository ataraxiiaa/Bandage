import Description from './components/Widgets/Description';
import Hero from './components/Widgets/Hero';
import Stats from './components/Widgets/Stats';
import VideoCard from './components/Widgets/VideoCard';
import Team from './components/Widgets/MeetOurTeam';
import Clients from './components/Widgets/Clients';
import Testimonials from './components/Widgets/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Description />
      <Stats />
      <VideoCard />
      <Team totalNumber={3} />
      <Clients />
      <Testimonials/>
    </>
  );
}
