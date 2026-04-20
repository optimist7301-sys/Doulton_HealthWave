import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import StemCellInfo from './components/StemCellInfo';
import WhyChooseDH from './components/WhyChooseDH';
import Differentiation from './components/Differentiation';
import TreatmentAreas from './components/TreatmentAreas';
import ScientificEffects from './components/ScientificEffects';
import Certifications from './components/Certifications';
import MedicalTeam from './components/MedicalTeam';
import Process from './components/Process';
import ConsultationForm from './components/ConsultationForm';
import Footer from './components/Footer';
import MobileStickyCta from './components/MobileStickyCta';

export default function App() {
  return (
    <div className="min-h-screen bg-paper">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <StemCellInfo />
        <WhyChooseDH />
        <Differentiation />
        <TreatmentAreas />
        <ScientificEffects />
        <Certifications />
        <MedicalTeam />
        <Process />
        <ConsultationForm />
      </main>
      <Footer />
      <MobileStickyCta />
    </div>
  );
}

