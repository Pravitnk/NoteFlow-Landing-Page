import Logo from "./components/section/Logo";
import Header from "./components/section/Header";
import Hero from "./components/section/Hero";
import Main from "./components/section/Main";
import Navigation from "./components/section/Navigation";
import Page from "./components/section/Page";
import Reviews from "./components/section/Reviews";

function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
        <Reviews />
      </Header>
      <Main>
        <Logo />
      </Main>
    </Page>
  );
}

export default App;
