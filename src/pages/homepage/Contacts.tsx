import WrapperBody from "../../layouts/wrapper";
import profile from "../../configs/portfolio.json";
import {  FaEnvelope, FaGithub, FaPaperPlane, FaPhone,} from "react-icons/fa";

export default function Contacts() {
  const contacts = profile.contacts;
  
  return (
    <div id="contacts" className="w-full">
      <WrapperBody>
        <div className="flex flex-col gap-4">
          <p className="flex gap-2 items-center font-['Geist'] font-bold text-2xl"><FaPaperPlane />联系方式</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="flex items-center gap-4">
              <FaEnvelope size={20} />
              <a href={`mailto:${contacts.email}`} className="hover:underline">{contacts.email}</a>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone size={20} />
              <a href={`tel:${contacts.phone}`} className="hover:underline">{contacts.phone}</a>
            </div>
            {/*<div className="flex items-center gap-4">*/}
            {/*  <FaTwitter size={20} />*/}
            {/*  <a href={contacts.twitter} target="_blank" rel="noopener noreferrer" className="hover:underline">{contacts.twitter.replace('https://', '')}</a>*/}
            {/*</div>*/}
            {/*<div className="flex items-center gap-4">*/}
            {/*  <FaLinkedin size={20} />*/}
            {/*  <a href={contacts.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">{contacts.linkedin.replace('https://', '')}</a>*/}
            {/*</div>*/}
            <div className="flex items-center gap-4">
              <FaGithub size={20} />
              <a href={contacts.github} target="_blank" rel="noopener noreferrer" className="hover:underline">{contacts.github.replace('https://', '')}</a>
            </div>
            {/*<div className="flex items-center gap-4">*/}
            {/*  <FaTelegram size={20} />*/}
            {/*  <a href={contacts.telegram} target="_blank" rel="noopener noreferrer" className="hover:underline">{contacts.telegram.replace('https://', '')}</a>*/}
            {/*</div>*/}
            {/*<div className="flex items-center gap-4">*/}
            {/*  <FaDiscord size={20} />*/}
            {/*  {contacts.discord}*/}
            {/*</div>*/}
          </div>
        </div>
      </WrapperBody>
    </div>
  )
}