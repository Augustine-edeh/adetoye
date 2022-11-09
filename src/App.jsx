import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import SkillCard from "./components/SkillCard";
import SocialIcon from "./components/SocialIcon";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <section className="section about-me" id="about-me">
        <AboutMe />
      </section>
      <section className="section my-skills container">
        <div className="section-title">
          <h1>My Skills</h1>
        </div>
        <div className="skills-icon-container">
          <SkillCard icon="fa-brands fa-html5" name="HTML" />
          <SkillCard icon="fa-brands fa-css3-alt" name="CSS" />
          <SkillCard icon="fa-brands fa-js-square" name="JavaScript" />
          <SkillCard icon="fa-brands fa-react" name="React" />
          <SkillCard icon="fa-brands fa-git-alt" name="Git" />
          <SkillCard icon="devicon-tailwindcss-plain" name="Tailwind" />
          <SkillCard icon="devicon-figma-plain" name="Figma" />
        </div>
      </section>
      <section className="section recent-projects container">
        <div className="section-title">
          <h1>Recent Projects</h1>
        </div>
        <div className="projects-card-container">
          <ProjectCard
            img="country-search-app.jpeg"
            title="Country Search App"
            desc="Search and learn about countries in the world"
            liveSite="https://world-countries-search.vercel.app/"
            github="https://github.com/adetoye-dev/rest-countries-api"
            tags={["react", "css", "api"]}
          />
          <ProjectCard
            img="space-tourism-site.jpeg"
            title="Space Tourism Site"
            desc="Multi-page website"
            liveSite="https://space-tourism-site-self.vercel.app/"
            github="https://github.com/adetoye-dev/space-tourism-site"
            tags={["react", "css"]}
          />
          <ProjectCard
            img="ip-address-tracker.jpeg"
            title="Ip Address Tracker"
            desc="Track user location with ip address search"
            liveSite="https://ip-address-tracker-1y6t.vercel.app/"
            github="https://github.com/adetoye-dev/ip-address-tracker"
            tags={["react", "css", "api"]}
          />
          <ProjectCard
            img="tenzie-game.jpeg"
            title="Tenzie Game"
            desc="Tenzie dice game"
            liveSite="https://tenzie-alpha.vercel.app/"
            github="https://github.com/adetoye-dev/tenzie"
            tags={["react", "css"]}
          />
          <ProjectCard
            img="shortly.jpeg"
            title="URL Shortener App"
            desc="URL shortener app"
            liveSite="https://shortly-umber-one.vercel.app/"
            github="https://github.com/adetoye-dev/shortly"
            tags={["html", "css", "javascript", "api"]}
          />
        </div>
        <div className="view-more">
          <a href="https://github.com/adetoye-dev" className="view-more-btn">
            <i className="fab fa-github"></i> View More
          </a>
        </div>
      </section>
      <section className="section socials container">
        <div className="section-title">
          <h1>Let's Connect</h1>
        </div>
        <div className="social-icons-container">
          <SocialIcon
            icon="fab fa-github"
            link="https://github.com/adetoye-dev"
          />
          <SocialIcon
            icon="fab fa-instagram"
            link="https://instagram.com/adetoye_dev"
          />
          <SocialIcon
            icon="fab fa-twitter"
            link="https://twitter.com/adetoye_dev"
          />
          <SocialIcon
            icon="fab fa-linkedin-in"
            link="https://linkedin.com/in/adetoye-dev"
          />
        </div>
      </section>
      <section className="section contact-me container" id="contact-me">
        <div className="section-title">
          <h1>Get In Touch</h1>
        </div>
        <ContactForm />
      </section>
      <Footer />
    </>
  );
}

export default App;
