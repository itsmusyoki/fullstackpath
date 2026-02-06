import Header from "./components/Header"
import ProfileCard from "./components/ProfileCard"
import Footer from "./components/Footer"

function App() {

  return (
    <>
      <Header />
      <ProfileCard 
      name='Peter Musyoki'
      role= 'junior full-stack dev'
      />
      <Footer />
      
    </>
  )
}

export default App
