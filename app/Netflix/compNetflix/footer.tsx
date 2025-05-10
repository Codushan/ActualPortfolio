'use client';
import { useState } from 'react';
import { Globe, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';

export default function PortfolioFooter() {
  const [language, setLanguage] = useState('English');
  const [isOpen, setIsOpen] = useState(false);
  
  const languages = ['English', 'Español', 'Français', '中文', 'العربية', 'Português', '한국어'];
  
  return (
    <footer id='footer' className="bg-black text-gray-300 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-wrap">
        {/* Column 1 - Brand and Social */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 pr-4">
          <h2 className="text-white text-xl font-semibold mb-4">Portfoliox</h2>
          <p className="text-sm mb-6">
            Connecting top talent with amazing opportunities. Find the perfect professional for your next project.
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Column 2 - Explore */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 pr-4">
          <h3 className="text-white text-lg font-medium mb-4">Explore</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white">Software Engineers</a></li>
            <li><a href="#" className="hover:text-white">Designers</a></li>
            <li><a href="#" className="hover:text-white">Civil Engineers</a></li>
            <li><a href="#" className="hover:text-white">Management</a></li>
          </ul>
        </div>
        
        {/* Column 3 - Resources */}
        <div className="w-full md:w-1/4 mb-8 md:mb-0 pr-4">
          <h3 className="text-white text-lg font-medium mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Case Studies</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
            <li><a href="#" className="hover:text-white">FAQ</a></li>
          </ul>
        </div>
        
        {/* Column 4 - Contact */}
        <div className="w-full md:w-1/4">
          <h3 className="text-white text-lg font-medium mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <Mail size={16} className="mr-2" />
              <a href="mailto:contact@portfoliohub.com" className="hover:text-white">contact@portfoliohub.com</a>
            </li>
            <li className="flex items-center">
              <Phone size={16} className="mr-2" />
              <a href="tel:+15551234567" className="hover:text-white">+1 (555) 123-4567</a>
            </li>
            <li className="flex items-center">
              <MapPin size={16} className="mr-2" />
              <span>123 Portfolio St, San Francisco, CA</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Portfoliox. All rights reserved.</p>
      </div>
    </footer>
  );
}