import { PrimaryButton, SecondaryButton } from "../../components/button";
import profile from "../../configs/portfolio.json";
import WrapperBody from "../../layouts/wrapper";

export default function Bio() {
  return (
    <div id="bio" className="w-full">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <h1 className="font-['Geist'] font-[700] text-4xl">👋 我叫 {profile.name}</h1>
          <p className="w-full 2xl:w-2/3">{profile.bio}</p>
        </div>
        <div className="flex mt-4 gap-4">
          <PrimaryButton href="#contacts" label="查看联系方式" />
          <SecondaryButton href={profile.meetingLink} label="Schedule a meeting" />
        </div>
      </WrapperBody>
    </div>
  );
}