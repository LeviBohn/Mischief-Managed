import type { House } from '../types';
import { useUserPreferences } from '../context/UserPreferencesContext';
import toast from 'react-hot-toast';

const houses: House[] = ['Gryffindor', 'Slytherin', 'Hufflepuff', 'Ravenclaw'];

const HouseSelection = () => {
  const { preferences, setPreferredHouse } = useUserPreferences();

  const handleHouseSelect = (house: House) => {
    setPreferredHouse(house);
    toast.success(`Welcome to ${house}!`, {
      style: {
        background: '#1C3A6E',
        color: '#F0F0F2',
        border: '1px solid #C4A747'
      }
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="font-harry text-3xl text-center mb-8 text-hogwarts-gold">Choose Your House</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {houses.map((house) => (
          <button
            key={house}
            onClick={() => handleHouseSelect(house)}
            className={`
              relative overflow-hidden bg-hogwarts-dark p-6 text-center transition-all duration-300 rounded-xl
              ${preferences.preferredHouse === house ? 'ring-2' : 'hover:scale-105'}
              ring-${house.toLowerCase()}-primary border border-hogwarts-gold/30 hover:border-hogwarts-gold/60
            `}
          >
            <div className={`w-24 h-24 mx-auto mb-4 rounded-full bg-${house.toLowerCase()}-primary/20 flex items-center justify-center p-2`}>
              <img
                src={`/${house.toLowerCase()}-crest.svg`}
                alt={`${house} crest`}
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <h2 className="font-harry text-2xl mb-2 text-hogwarts-gold">{house}</h2>
            
            <p className="text-sm text-hogwarts-light/70">
              {getHouseDescription(house)}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

const getHouseDescription = (house: House): string => {
  switch (house) {
    case 'Gryffindor':
      return 'Where dwell the brave at heart. Their daring, nerve, and chivalry set Gryffindors apart.';
    case 'Slytherin':
      return 'Those cunning folk use any means to achieve their ends.';
    case 'Hufflepuff':
      return 'Where they are just and loyal, those patient Hufflepuffs are true and unafraid of toil.';
    case 'Ravenclaw':
      return "Wit beyond measure is man's greatest treasure.";
  }
};

export default HouseSelection; 