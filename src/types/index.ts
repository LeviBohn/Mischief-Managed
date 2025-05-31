export type House = 'Gryffindor' | 'Slytherin' | 'Hufflepuff' | 'Ravenclaw';

export interface Spell {
  id: string;
  name: string;
  description: string;
  type?: string;
}

export interface Character {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: House;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: {
    wood: string;
    core: string;
    length: number;
  };
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

export interface UserPreferences {
  favoriteCharacters: string[];
  preferredHouse: House | null;
} 