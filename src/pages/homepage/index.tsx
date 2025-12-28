import Layout from "../../layouts";
import Bio from "./Bio";
import Contacts from "./Contacts";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Homepage() {
  return (
    <Layout>
      <Bio />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Contacts />
    </Layout>
  )
}