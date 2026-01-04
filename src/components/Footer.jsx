import { FaFacebook, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: FaGithub,
      url: "https://",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: FaLinkedin,
      url: "https://",
      color: "hover:text-blue-400"
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "https://",
      color: "hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "https://",
      color: "hover:text-pink-500"
    }
  ];

  return (
    <footer className="mac-taskbar">
      <div className="mac-taskbar-left">
      </div>
      
      <div className="mac-dock">
        {socialLinks.map((social) => {
          const Icon = social.icon;
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`mac-dock-item ${social.color}`}
              title={social.name}
            >
              <Icon className="text-2xl" />
              <span className="mac-dock-label">{social.name}</span>
            </a>
          );
        })}
      </div>
      
      <div className="mac-taskbar-right">
        <span className="text-xs text-white/60 font-medium">
          &copy; Nischal Shrestha ,{new Date().getFullYear()}
        </span>
      </div>
      

    </footer>
  );
}