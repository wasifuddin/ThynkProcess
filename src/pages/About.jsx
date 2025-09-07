import PageHero from '../components/PageHero'
import CompanyStory from '../components/sections/CompanyStory'
import LeadershipTeam from '../components/sections/LeadershipTeam'
import GlobalExperience from '../components/sections/GlobalExperience'
import Partnerships from '../components/sections/Partnerships'

const About = () => {
  return (
    <div>
      <PageHero 
        title="About YourCompany"
        subtitle="Empowering businesses worldwide with innovative technology solutions and exceptional service delivery."
        backgroundClass="bg-gradient-to-br from-[#D8F4FA] to-[#AEE7F2]"
      />
      <CompanyStory />
      <LeadershipTeam />
      <GlobalExperience />
      <Partnerships />
    </div>
  )
}

export default About
