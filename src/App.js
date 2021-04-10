import './App.css'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import BackgroundSection from './components/BackgroundInfoSection'
import ProjectSectionBanner from './components/ProjectSectionBanner'
import ProjectSection from './components/ProjectsSection'
import ContactSectionBanner from './components/ContactSectionBanner'
import Footer from './components/Footer'
import 'materialize-css';


function App() {
  return (
    <div className='App'>
      <Header />
      <Jumbotron />
      <BackgroundSection />
      <ProjectSectionBanner />
      <ProjectSection />
      <ContactSectionBanner />
      <Footer />
    </div>
  );
}

export default App;
