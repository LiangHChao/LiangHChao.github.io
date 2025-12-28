import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin, FaPaperPlane, FaPhone, FaTelegram, FaTwitter } from "react-icons/fa";

export default function Contacts() {
  return (
    <div id="contacts" className="w-full border-b border-dashed border-zinc-800">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaPaperPlane />Contacts</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <FaEnvelope size={20} />
              {profile.contacts.email}
            </div>
            <div className="flex items-center gap-4">
              <FaPhone size={20} />
              {profile.contacts.phone}
            </div>
            <div className="flex items-center gap-4">
              <FaTwitter size={20} />
              {profile.contacts.twitter}
            </div>
            <div className="flex items-center gap-4">
              <FaLinkedin size={20} />
              {profile.contacts.linkedin}
            </div>
            <div className="flex items-center gap-4">
              <FaGithub size={20} />
              {profile.contacts.github}
            </div>
            <div className="flex items-center gap-4">
              <FaTelegram size={20} />
              {profile.contacts.telegram}
            </div>
            <div className="flex items-center gap-4">
              <FaDiscord size={20} />
              {profile.contacts.discord}
            </div>
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}