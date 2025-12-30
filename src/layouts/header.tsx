import { FaAward,FaHome, FaPaperPlane, FaProjectDiagram, FaChartBar } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import WrapperBody from './wrapper';
import { SecondaryButton, ThemeToggleButton } from '../components/button';
import { DiReact } from 'react-icons/di';
import { useTheme } from '../contexts/ThemeContext';
import profile from '../configs/portfolio.json';

export default function Header() {
  const { toggleTheme } = useTheme();
  const navigate = useNavigate();

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
    <div className="sticky top-0 bg-zinc-950/10 backdrop-blur-xl w-full h-16">
      <WrapperBody>
        <div className="h-full flex justify-between items-center gap-12">
          <Link to="/" className="flex gap-2 items-center font-['Geist'] font-semibold">
            <DiReact size={24} />By LiangHChao
          </Link>
          <div className='flex items-center justify-start gap-1'>
            <SecondaryButton onClick={() => scrollTo('#bio')} label="个人简介" icon={<FaHome size={16} />} />
            <SecondaryButton href={profile.docsLink} label="文档" icon={<FaPaperPlane size={16} />} />
            <SecondaryButton onClick={() => scrollTo('#experience')} label="工作履历" icon={<FaAward size={16} />} />
            <SecondaryButton onClick={() => scrollTo('#projects')} label="项目履历" icon={<FaProjectDiagram size={16} />} />
            <SecondaryButton onClick={() => scrollTo('#contacts')} label="联系方式" icon={<FaPaperPlane size={16} />} />
            <SecondaryButton onClick={() => navigate('/data')} label="数据" icon={<FaChartBar size={16} />} />
            <ThemeToggleButton onClick={toggleTheme} />
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}