import { CotizationSteps, Footer, Header } from "@/shared/components";
import HomeView from "@/views/home";
import CotizationView from "@/views/cotization";
import ResumenView from "@/views/resumen";
import { useCotizationStore } from "@/shared/store";

function App() {
  const stepInsuranceCotization = useCotizationStore(
    (state) => state.stepInsuranceCotization
  );
  return (
    <>
      <Header />
      {stepInsuranceCotization && <CotizationSteps />}
      {stepInsuranceCotization === 1 ? (
        <CotizationView />
      ) : stepInsuranceCotization === 2 ? (
        <ResumenView />
      ) : (
        <HomeView />
      )}
      {!stepInsuranceCotization && <Footer />}
    </>
  );
}

export default App;
