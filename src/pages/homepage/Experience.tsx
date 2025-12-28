import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaAward } from "react-icons/fa";
import dayjs from "dayjs";

export default function Experience() {
  return (
    <div id="experience" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaAward />Experience</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {profile.experience.map((experience) => (
              <div
                key={experience.from}
                className="flex flex-col gap-6 border border-zinc-800 hover:border-zinc-600 p-8 rounded-lg cursor-pointer"
              >
                <div className="flex flex-col justify-start items-center gap-4">
                  <img src={experience.logo} alt="logo" className=" max-w-36 max-h-18 w-full h-full object-contain" />
                  <p className="font-['Geist'] text-center text-white font-semibold cursor-pointer">
                    {experience.company}
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-zinc-50 font-semibold">{experience.role}</p>
                    <p className="text-sm text-zinc-500">
                      {dayjs(experience.from).format('MMM YYYY')}
                        {/*~ {experience.to === 'present' ? 'Present' : dayjs(experience.to).format('MMM YYYY')}*/}
                    </p>
                  </div>
                  <ul className="text-sm text-zinc-300 mt-3 pl-4">
                    {experience.descriptions.map((description, index) => (
                      <li key={`${experience.from}-${index}`} className="list-disc">
                        {description}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}