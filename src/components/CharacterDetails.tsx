import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHeart, FaRegHeart, FaArrowLeft } from 'react-icons/fa';
import toast from 'react-hot-toast';
import type { Character } from '../types';
import { api } from '../services/api';
import { useUserPreferences } from '../context/UserPreferencesContext';

const CharacterDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [character, setCharacter] = useState<Character | null>(null);
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite } = useUserPreferences();

  useEffect(() => {
    const fetchCharacter = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const data = await api.getCharacterById(id);
        setCharacter(data);
      } catch (error) {
        toast.error('Failed to fetch character details');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-gryffindor-primary border-t-transparent"></div>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-harry text-gray-700">Character not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 btn btn-primary inline-flex items-center space-x-2"
        >
          <FaArrowLeft />
          <span>Go Back</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 btn btn-primary inline-flex items-center space-x-2"
      >
        <FaArrowLeft />
        <span>Go Back</span>
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/3">
            <img
              src={character.image || '/placeholder-wizard.svg'}
              alt={character.name}
              className="w-full h-full object-cover md:h-full"
            />
          </div>

          <div className="p-8 md:w-2/3">
            <div className="flex justify-between items-start">
              <h1 className="font-harry text-3xl mb-4">{character.name}</h1>
              <button
                onClick={() => toggleFavorite(character.id)}
                className="text-2xl text-red-500 hover:scale-110 transition-transform"
              >
                {isFavorite(character.id) ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>

            {character.house && (
              <div className={`inline-block px-4 py-2 rounded-full text-white bg-${character.house.toLowerCase()}-primary mb-4`}>
                {character.house}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="font-spells text-xl mb-2">Basic Information</h2>
                <ul className="space-y-2">
                  <li><span className="font-semibold">Species:</span> {character.species}</li>
                  <li><span className="font-semibold">Gender:</span> {character.gender}</li>
                  <li><span className="font-semibold">Birth:</span> {character.dateOfBirth || 'Unknown'}</li>
                  <li><span className="font-semibold">Ancestry:</span> {character.ancestry || 'Unknown'}</li>
                  <li>
                    <span className="font-semibold">Status:</span>{' '}
                    {character.hogwartsStudent ? 'Student' : character.hogwartsStaff ? 'Staff' : 'Other'}
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="font-spells text-xl mb-2">Magical Details</h2>
                <ul className="space-y-2">
                  {character.wand.wood && (
                    <li>
                      <span className="font-semibold">Wand:</span>{' '}
                      {`${character.wand.wood} wood, ${character.wand.core} core, ${character.wand.length}" length`}
                    </li>
                  )}
                  {character.patronus && (
                    <li><span className="font-semibold">Patronus:</span> {character.patronus}</li>
                  )}
                  <li>
                    <span className="font-semibold">Wizard:</span>{' '}
                    {character.wizard ? 'Yes' : 'No'}
                  </li>
                </ul>
              </div>
            </div>

            {character.alternate_names.length > 0 && (
              <div className="mt-6">
                <h2 className="font-spells text-xl mb-2">Alternate Names</h2>
                <p>{character.alternate_names.join(', ')}</p>
              </div>
            )}

            {character.actor && (
              <div className="mt-6">
                <h2 className="font-spells text-xl mb-2">Portrayed By</h2>
                <p>{character.actor}</p>
                {character.alternate_actors.length > 0 && (
                  <p className="text-sm text-gray-600 mt-1">
                    Also portrayed by: {character.alternate_actors.join(', ')}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetails; 