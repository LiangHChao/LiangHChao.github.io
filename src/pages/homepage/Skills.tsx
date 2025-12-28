import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaBrain } from "react-icons/fa";

export default function Skills() {
  const skillSection = (skillName: string, skills: Array<string>) => (
    <div className="flex flex-wrap items-center gap-4">
      <p className="w-full"><b>{skillName}</b></p>
      {skills.map((skill) => (
        <div key={skill}>
          <p className="text-sm border border-zinc-800 hover:border-zinc-600 px-4 py-2 rounded-lg cursor-pointer">{skill}</p>
        </div>
      ))}
    </div>
  );
  return (
    <div id="skills" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaBrain />Skills</p>
          {skillSection("Language", profile.skills.languages)}
          {skillSection("Frameworks", profile.skills.frameworks)}
        </div>
      </WrapperBody>
    </div>
  )
}