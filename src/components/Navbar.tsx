import { Link, useLocation } from 'react-router-dom';
import { useUserPreferences } from '../context/UserPreferencesContext';

const Navbar = () => {
  const location = useLocation();
  const { preferences } = useUserPreferences();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-harry text-2xl text-gryffindor-primary hover:text-gryffindor-secondary transition-colors">
            Mischief Managed
          </Link>
          
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'font-semibold text-gryffindor-primary' : ''}`}
            >
              All Characters
            </Link>
            <Link
              to="/students"
              className={`nav-link ${isActive('/students') ? 'font-semibold text-gryffindor-primary' : ''}`}
            >
              Students
            </Link>
            <Link
              to="/staff"
              className={`nav-link ${isActive('/staff') ? 'font-semibold text-gryffindor-primary' : ''}`}
            >
              Staff
            </Link>
            <Link
              to="/house-selection"
              className={`nav-link flex items-center space-x-2 ${
                isActive('/house-selection') ? 'font-semibold text-gryffindor-primary' : ''
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