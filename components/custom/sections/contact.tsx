import { Mail, Github, Linkedin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" px-12 flex flex-col justify-center items-center py-20 bg-slate-950 text-slate-50"
    >
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="text-lg text-gray-300 mb-8 text-center">
        Feel free to reach out via email or connect with me on social media!
      </p>

      {/* Contact Info */}
      <div className="flex flex-col items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Mail size={20} />
          <a
            href="mailto:vishwaprasad11@gmail.com"
            className="text-lg hover:text-fuchsia-400 transition-colors"
          >
            vishwaprasad11@gmail.com
          </a>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex gap-6">
        <a
          href="https://github.com/vp21-sudo"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-400 transition-transform hover:scale-110"
        >
          <Github size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sudovp"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-400 transition-transform hover:scale-110"
        >
          <Linkedin size={30} />
        </a>
        <a
          href="https://www.instagram.com/vishwa_prasad_1/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-fuchsia-400 transition-transform hover:scale-110"
        >
          <Instagram size={30} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
