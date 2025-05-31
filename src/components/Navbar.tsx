import { Link, useLocation } from 'react-router-dom';
import { useUserPreferences } from '../context/UserPreferencesContext';

const Navbar = () => {
  const location = useLocation();
  const { preferences } = useUserPreferences();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-hogwarts-dark border-b border-hogwarts-gold/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-harry text-2xl text-hogwarts-gold hover:text-hogwarts-light transition-colors">
            Mischief Managed
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'text-hogwarts-gold font-semibold' : 'text-hogwarts-light/80 hover:text-hogwarts-light'}`}
            >
              All Characters
            </Link>
            <Link
              to="/students"
              className={`nav-link ${isActive('/students') ? 'text-hogwarts-gold font-semibold' : 'text-hogwarts-light/80 hover:text-hogwarts-light'}`}
            >
              Students
            </Link>
            <Link
              to="/staff"
              className={`nav-link ${isActive('/staff') ? 'text-hogwarts-gold font-semibold' : 'text-hogwarts-light/80 hover:text-hogwarts-light'}`}
            >
              Staff
            </Link>
            <Link
              to="/house-selection"
              className={`nav-link flex items-center space-x-2 ${
                isActive('/house-selection') ? 'text-hogwarts-gold font-semibold' : 'text-hogwarts-light/80 hover:text-hogwarts-light'
              }`}
            >
              <span>House Selection</span>
              {preferences.preferredHouse && (
                <div
                  className={`w-3 h-3 rounded-full bg-${preferences.preferredHouse.toLowerCase()}-primary`}
                />
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 