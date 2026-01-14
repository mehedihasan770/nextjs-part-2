import { Facebook, Twitter, Instagram, Youtube, Github, Mail, Globe, Shield, Award, Download } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-gray-900 to-black text-white pt-16 pb-12 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#7c3aed] via-[#06b6d4] to-[#7c3aed]"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-linear(to right, #7c3aed 1px, transparent 1px),
                            linear-linear(to bottom, #7c3aed 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative max-w-11/12 md:max-w-10/12 lg:max-w-9/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-7">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] rounded-xl flex items-center justify-center transform rotate-3 shadow-lg">
                  <span className="text-white font-bold text-2xl">3D</span>
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-linear-to-r from-purple-500 to-cyan-400 rounded-full flex items-center justify-center">
                  <Award className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold bg-linear-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
                  Nexus3D
                </h2>
                <p className="text-sm text-gray-400 font-medium">Premium 3D Models</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed text-base max-w-md">
              World's leading marketplace for premium 3D models, textures, 
              and animations. Empowering creators worldwide since 2018.
            </p>

            <div className="pt-2">
              <p className="text-gray-400 text-sm mb-4">Follow us</p>
              <div className="flex space-x-3">
                {[
                  { icon: <Facebook className="w-5 h-5" />, color: "hover:bg-[#1877F2]", label: "Facebook" },
                  { icon: <Twitter className="w-5 h-5" />, color: "hover:bg-[#1DA1F2]", label: "Twitter" },
                  { icon: <Instagram className="w-5 h-5" />, color: "hover:bg-linear-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]", label: "Instagram" },
                  { icon: <Youtube className="w-5 h-5" />, color: "hover:bg-[#FF0000]", label: "YouTube" },
                  { icon: <Github className="w-5 h-5" />, color: "hover:bg-gray-700", label: "GitHub" },
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`group relative w-11 h-11 bg-gray-800/70 backdrop-blur-sm rounded-xl flex items-center justify-center transition-all duration-300 ${social.color} border border-gray-700 hover:border-transparent hover:scale-110`}
                    aria-label={social.label}
                  >
                    <div className="group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                      {social.label}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700 inline-block">
              <span className="bg-linear-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
                Quick Links
              </span>
            </h3>
            <ul className="space-y-3">
              {['Home', 'Browse Models', 'Categories', 'Featured', 'New Arrivals', 'Top Sellers'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group text-gray-400 hover:text-white transition-all flex items-center gap-2">
                    <span className="w-1 h-1 bg-[#7c3aed] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="group-hover:translate-x-1 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700 inline-block">
              <span className="bg-linear-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
                Top Categories
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                { name: 'Characters', count: '1.2K' },
                { name: 'Vehicles', count: '856' },
                { name: 'Architecture', count: '2.1K' },
                { name: 'Nature', count: '734' },
                { name: 'Weapons', count: '423' },
              ].map((category, index) => (
                <li key={index}>
                  <a href="#" className="group text-gray-400 hover:text-white transition-all flex justify-between items-center">
                    <span className="group-hover:text-[#7c3aed] transition-colors">{category.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6 pb-2 border-b border-gray-700 inline-block">
              <span className="bg-linear-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
                Support
              </span>
            </h3>
            <ul className="space-y-3">
              {[
                { icon: <Shield className="w-4 h-4" />, text: 'Privacy Policy' },
                { icon: <Globe className="w-4 h-4" />, text: 'Terms of Service' },
                { icon: <Download className="w-4 h-4" />, text: 'License Agreement' },
                { icon: <Mail className="w-4 h-4" />, text: 'Contact Support' },
                { icon: <Award className="w-4 h-4" />, text: 'Become a Seller' }
              ].map((item, index) => (
                <li key={index}>
                  <a href="#" className="group text-gray-400 hover:text-white transition-all flex items-center gap-3">
                    <div className="text-[#7c3aed] opacity-70 group-hover:opacity-100">
                      {item.icon}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">{item.text}</span>
                  </a>
                </li>
              ))}
            </ul>
           
          </div>
        </div>

        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="px-4 bg-gray-900">
              <div className="w-20 h-1 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm flex items-center gap-2">
            <span>© {currentYear} Nexus3D Marketplace</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">All rights reserved</span>
          </div>          
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 text-sm">
            {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'DMCA', 'Sitemap'].map((item, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-[#7c3aed] to-[#06b6d4] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;