import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { UserPreferencesProvider } from './context/UserPreferencesContext';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import HouseSelection from './components/HouseSelection';

function App() {
  return (
    <UserPreferencesProvider>
      <Router>
        <div className="min-h-screen bg-slate-100">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<CharacterList type="all" />} />
              <Route path="/students" element={<CharacterList type="students" />} />
              <Route path="/staff" element={<CharacterList type="staff" />} />
              <Route path="/character/:id" element={<CharacterDetails />} />
              <Route path="/house-selection" element={<HouseSelection />} />
            </Routes>
          </main>
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </UserPreferencesProvider>
  );
}

export default App;
