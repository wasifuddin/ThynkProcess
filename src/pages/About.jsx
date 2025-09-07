import FloatingCTA from '../components/sections/FloatingCTA'
import PageHero from '../components/PageHero'
import WhoWeAre from '../components/sections/WhoWeAre'
import OurStory from '../components/sections/OurStory'
import MissionValues from '../components/sections/MissionValues'
import LeadershipTeam from '../components/sections/LeadershipTeam'
import Partnerships from '../components/sections/Partnerships'
import GlobalReach from '../components/sections/GlobalReach'
import ClientTestimonials from '../components/sections/ClientTestimonials'
import WorkWithUs from '../components/sections/WorkWithUs'

const About = () => {
  return (
    <div>
      <FloatingCTA />
      <PageHero 
        title="About Us – ThynkProcess"
        subtitle="Proudly Melbourne-Based ERP Consulting Experts"
        backgroundClass="bg-gradient-to-br from-[#D8F4FA] to-[#AEE7F2]"
      />
      <WhoWeAre />
      <OurStory />
      <MissionValues />
      <LeadershipTeam />
      <Partnerships />
      <GlobalReach />
      <ClientTestimonials />
      <WorkWithUs />
    </div>
  )
}

export default About
