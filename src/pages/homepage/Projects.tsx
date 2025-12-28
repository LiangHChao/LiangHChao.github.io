import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaProjectDiagram } from "react-icons/fa";

export default function Projects() {
  return (
    <div id="projects" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaProjectDiagram />Projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
            {profile.projects.map((project) => (
              <div
                key={project.name}
                className="flex flex-col justify-between items-center gap-2 p-6 rounded-lg overflow-hidden border border-zinc-800 hover:border-zinc-600 cursor-pointer"
              >
                <div className="flex flex-col justify-start items-center gap-2">
                  <img src={project.logo} alt="logo" className=" max-w-36 max-h-18 w-full h-full py-2 object-contain" />
                  <p className="w-full text-center text-md font-medium text-zinc-50 px-4 py-2 rounded-lg">{project.name}</p>
                  <a href={project.link} className="text-sm text-zinc-400 hover:underline">{project.link}</a>
                  <p className="text-sm">{project.description}</p>
                </div>
                <div className="w-full flex flex-wrap justify-start gap-1">
                  {project.skills?.map((skill) => (
                    <p key={skill} className="text-[12px] border border-zinc-800 px-3 py-1 rounded-full">{skill}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}