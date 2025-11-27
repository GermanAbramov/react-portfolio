import { Header, Footer, Home, Aboutme, SkillsInfo, Services, Portfolio, GetInTouch, Clients, Contact, ScrollToTop, ThemeToggle } from "./components"

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Aboutme />
        <SkillsInfo />
        <Services />
        <Portfolio />
        <GetInTouch />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
      <ThemeToggle />
    </>
  )
}

export default App
