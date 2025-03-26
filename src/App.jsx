import Logo from "./components/section/Logo";
import Header from "./components/section/Header";
import Hero from "./components/section/Hero";
import Main from "./components/section/Main";
import Navigation from "./components/section/Navigation";
import Page from "./components/section/Page";
import Reviews from "./components/section/Reviews";
import Features from "./components/section/Features";
import FAQs from "./components/section/FAQ/FAQs";
import Testimonials from "./components/section/Testimonials/Testimonials";
import Footer from "./components/section/Footer";
import Modal from "./components/section/modal/Modal";
import SignUp_Modal from "./components/section/modal/SignUp_Modal";

import { ModalContextProvider } from "./context/ModalContext";

function App() {
  return (
    <ModalContextProvider>
      <Page>
        <Header>
          <Navigation />
          <Hero />
          <Reviews />
        </Header>
        <Main>
          <Logo />
          <Features />
          <FAQs />
          <Testimonials />
        </Main>
        <Footer />

        <Modal modal="sign-up">
          <SignUp_Modal />
        </Modal>
      </Page>
    </ModalContextProvider>
  );
}

export default App;
