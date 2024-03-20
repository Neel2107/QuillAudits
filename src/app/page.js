import AuditOverview from "../components/AuditOverview";
import AuditTrusted from "../components/AuditTrusted";
import BlockchainEnabled from "../components/BlockchainEnabled";
import Hero from "../components/Hero";
import PensionJourney from "../components/PensionJourney";

export default function Home() {
  return (
    <>
    <Hero/>
    <AuditOverview/>
    <AuditTrusted/>
    <BlockchainEnabled/>
    <PensionJourney/>
    </>
  );
}
