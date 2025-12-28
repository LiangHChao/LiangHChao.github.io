import { FaAward, FaBrain, FaGraduationCap, FaHome, FaPaperPlane, FaProjectDiagram } from 'react-icons/fa';
import WrapperBody from './wrapper';
import { SecondaryButton } from '../components/button';
import { DiReact } from 'react-icons/di';

export default function Header() {
  const scrollTo = (elementId: string) => {
    const targetElement = document.querySelector(elementId);
    if (!targetElement) return;
    const headerHeight = 64;
    const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  return (
    <div className="sticky top-0 bg-zinc-950/10 backdrop-blur-xl w-full h-16 border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="h-full flex justify-between items-center gap-12">
          <a href="/" className="flex gap-2 items-center font-['Geist'] text-white font-semibold">
            <DiReact size={24} /> Vite.Dev
          </a>
          <div className='flex items-center justify-start gap-1'>
            <SecondaryButton onClick={() => scrollTo('#bio')} label="Bio" icon={<FaHome size={16} />} />
            <SecondaryButton onClick={() => scrollTo('#education')} label="Education" icon={<FaGraduationCap size={16} />} />
            <SecondaryButton onClick={() => scrollTo('#experience')} label="Experience" icon={<FaAward size={16} />} />
            <SecondaryButton onClick={() => scrollTo('#projects')} label="Projects" icon={<FaProjectDiagram size={16} />} />
            <SecondaryButton onClick={() => scrollTo('#skills')} label="Skills" icon={<FaBrain size={16} />} />
            <SecondaryButton onClick={() => scrollTo('#contacts')} label="Contacts" icon={<FaPaperPlane size={16} />} />
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}