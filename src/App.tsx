import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { UserPreferencesProvider } from './context/UserPreferencesContext';
import Navbar from './components/Navbar';
import CharacterList from './components/CharacterList';
import CharacterDetails from './components/CharacterDetails';
import HouseSelection from './components/HouseSelection';
import SpellList from './components/SpellList';

function App() {
  return (
    <UserPreferencesProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-hogwarts-darker to-hogwarts-dark">
          <Navbar />
          <main className="container mx-auto px-4 py-8 flex-grow relative z-10">
            <Routes>
              <Route path="/" element={<CharacterList type="all" />} />
              <Route path="/students" element={<CharacterList type="students" />} />
              <Route path="/staff" element={<CharacterList type="staff" />} />
              <Route path="/character/:id" element={<CharacterDetails />} />
              <Route path="/spells" element={<SpellList />} />
              <Route path="/house-selection" element={<HouseSelection />} />
            </Routes>
          </main>
          <div className="fixed bottom-0 left-0 right-0 z-0">
            <div className="h-[200px] w-full bg-hogwarts-night bg-repeat-x opacity-50" />
          </div>
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#1C3A6E',
                color: '#F0F0F2',
                border: '1px solid #C4A747'
              }
            }}
          />
        </div>
      </Router>
    </UserPreferencesProvider>
  );
}

export default App;
