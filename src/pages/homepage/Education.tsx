import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaGraduationCap } from "react-icons/fa";
import dayjs from "dayjs";

export default function Education() {
  return (
    <div id="education" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaGraduationCap />Education</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4 border border-zinc-800 hover:border-zinc-600 rounded-lg py-8 px-6">
              <img src={profile.education.logo} alt="university-logo" className="h-16 object-contain" />
              <p className="text-xl text-center">{profile.education.university}</p>
              <p className="flex items-center gap-1 text-sm text-zinc-400">
                <p className="text-white font-bold">Location:</p>
                {profile.education.location}
              </p>
              <p className="flex items-center gap-1 text-sm text-zinc-400">
                <p className="text-white font-bold">Degree:</p>
                {profile.education.degree}
              </p>
              <p className="flex items-center gap-1 text-sm text-zinc-400">
                <p className="text-white font-bold">Graduated:</p>
                {dayjs(profile.education.graduation).format("MMM YYYY")}
              </p>
              <p className="flex items-center gap-1 text-sm text-zinc-400">
                <p className="text-white font-bold">Relevant Coursework:</p>
                {profile.education.courseWork.join(', ')}
              </p>
              <p className="flex items-center gap-1 text-sm text-zinc-400">
                <p className="text-white font-bold">Senior Project:</p>
                {profile.education.project}
              </p>
            </div>
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}