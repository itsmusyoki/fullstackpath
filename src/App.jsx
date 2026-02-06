import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Footer from "./components/Footer"
import Counter from "./components/Counter"


function App() {

  return (
    <>
      <Header />
      <ProfileCard 
      name='Peter Musyoki'
      role= 'junior full-stack dev'
      />
      <Counter />
      <Footer />
      
    </>
  )
}

export default App
