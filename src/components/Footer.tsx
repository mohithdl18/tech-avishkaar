
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">TechAvishkar</h3>
            <p className="text-gray-300 mb-4">
            Where ideas ignite and innovation never sleeps — join the 24-hour coding revolution!.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-300 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-primary">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" aria-label="GitHub" className="text-gray-300 hover:text-primary">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-300 hover:text-white">About</a></li>
              <li><a href="#schedule" className="text-gray-300 hover:text-white">Schedule</a></li>
              <li><a href="#sponsors" className="text-gray-300 hover:text-white">Sponsors</a></li>
              <li><a href="#faq" className="text-gray-300 hover:text-white">FAQ</a></li>
              <li><a href="#register" className="text-gray-300 hover:text-white">Register</a></li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Code of Conduct</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Past Events</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
            </ul>
          </div> */}
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=techavishkar.2.o@gmail.com.com" className="hover:text-white">techavishkar.2.o@gmail.com</a>
              </li>
              <li>ATME College of Engineering, Mysuru</li>
              <li>May 15-16, 2025</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Student Co-ordinators</h3>
            <ul className="space-y-2">
              <li><p className="text-gray-300 hover:text-white">Kushal S M - 72043 65752</p></li>
              <li><p className="text-gray-300 hover:text-white">Hemanth Kumar - 88848 62170</p></li>
              <li><p className="text-gray-300 hover:text-white">Mohith D L - 87624 89064</p></li>
              <li><p className="text-gray-300 hover:text-white">Janya U Singh - 93533 37905</p></li>
            </ul>
          </div>
          

        </div>

        
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>© 2025 TechAvishkar • ATMECE . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
