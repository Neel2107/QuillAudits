import AuditOverview from "./components/AuditOverview";
import AuditTrusted from "./components/AuditTrusted";
import BlockchainEnabled from "./components/BlockchainEnabled";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import PensionJourney from "./components/PensionJourney";
import Remediation from "./components/Remediation";
import StrategicApproach from "./components/StrategicApproach";
import Strategies from "./components/Strategies";
import UserCard from "./components/UserCard";


export default function Home() {
  return (
    <>
    <Hero/>
    <AuditOverview/>
    <AuditTrusted/>
    <BlockchainEnabled/>
    <PensionJourney/>
    <StrategicApproach/>
    <Strategies/>
    <Remediation/>
    <UserCard/>
    <Newsletter/>
    <Footer/>
    </>
  );
}
