import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { House, UserPreferences } from '../types';

interface UserPreferencesContextType {
  preferences: UserPreferences;
  toggleFavorite: (characterId: string) => void;
  setPreferredHouse: (house: House) => void;
  isFavorite: (characterId: string) => boolean;
}

const UserPreferencesContext = createContext<UserPreferencesContextType | null>(null);

export const UserPreferencesProvider = ({ children }: { children: ReactNode }) => {
  const [preferences, setPreferences] = useState<UserPreferences>(() => {
    const savedPreferences = localStorage.getItem('userPreferences');
    return savedPreferences
      ? JSON.parse(savedPreferences)
      : {
          favoriteCharacters: [],
          preferredHouse: null,
        };
  });

  useEffect(() => {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
  }, [preferences]);

  const toggleFavorite = (characterId: string) => {
    setPreferences(prev => ({
      ...prev,
      favoriteCharacters: prev.favoriteCharacters.includes(characterId)
        ? prev.favoriteCharacters.filter(id => id !== characterId)
        : [...prev.favoriteCharacters, characterId],
    }));
  };

  const setPreferredHouse = (house: House) => {
    setPreferences(prev => ({
      ...prev,
      preferredHouse: house,
    }));
  };

  const isFavorite = (characterId: string) => {
    return preferences.favoriteCharacters.includes(characterId);
  };

  return (
    <UserPreferencesContext.Provider
      value={{
        preferences,
        toggleFavorite,
        setPreferredHouse,
        isFavorite,
      }}
    >
      {children}
    </UserPreferencesContext.Provider>
  );
};

export const useUserPreferences = () => {
  const context = useContext(UserPreferencesContext);
  if (!context) {
    throw new Error('useUserPreferences must be used within a UserPreferencesProvider');
  }
  return context;
}; 