import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import toast from 'react-hot-toast';
import type { Character } from '../types';
import { api } from '../services/api';
import { useUserPreferences } from '../context/UserPreferencesContext';

interface CharacterListProps {
  type: 'all' | 'students' | 'staff';
}

const CharacterList = ({ type }: CharacterListProps) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite } = useUserPreferences();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        let data: Character[];
        switch (type) {
          case 'students':
            data = await api.getStudents();
            break;
          case 'staff':
            data = await api.getStaff();
            break;
          default:
            data = await api.getAllCharacters();
        }
        setCharacters(data);
      } catch (error) {
        toast.error('Failed to fetch characters');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [type]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-hogwarts-gold border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {characters.map((character) => (
        <div key={character.id} className="group">
          <div className="card relative overflow-hidden">
            <button
              onClick={() => toggleFavorite(character.id)}
              className="absolute top-2 right-2 z-10 text-2xl text-hogwarts-gold opacity-70 hover:opacity-100 hover:scale-110 transition-all"
            >
              {isFavorite(character.id) ? <FaHeart /> : <FaRegHeart />}
            </button>
            
            <Link to={`/character/${character.id}`} className="block">
              <div className="aspect-[3/4] relative mb-4 overflow-hidden rounded-lg bg-hogwarts-dark/50">
                <img
                  src={character.image || '/placeholder-wizard.svg'}
                  alt={character.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {character.house && (
                  <div className={`absolute bottom-0 left-0 right-0 py-2 px-4 text-hogwarts-light bg-${character.house.toLowerCase()}-primary/90 backdrop-blur-sm`}>
                    {character.house}
                  </div>
                )}
              </div>
              
              <div className="text-center">
                <h3 className="font-harry text-xl mb-2 text-hogwarts-gold group-hover:text-hogwarts-light transition-colors">
                  {character.name}
                </h3>
                <p className="text-sm text-hogwarts-light/70">
                  {character.hogwartsStudent ? 'Student' : character.hogwartsStaff ? 'Staff' : 'Other'}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterList; 