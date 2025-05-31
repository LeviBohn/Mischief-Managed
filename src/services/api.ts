import type { Character, Spell } from '../types';

const BASE_URL = 'https://hp-api.onrender.com/api';

export const api = {
  async getAllCharacters(): Promise<Character[]> {
    const response = await fetch(`${BASE_URL}/characters`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    return response.json();
  },

  async getStudents(): Promise<Character[]> {
    const response = await fetch(`${BASE_URL}/characters/students`);
    if (!response.ok) {
      throw new Error('Failed to fetch students');
    }
    return response.json();
  },

  async getStaff(): Promise<Character[]> {
    const response = await fetch(`${BASE_URL}/characters/staff`);
    if (!response.ok) {
      throw new Error('Failed to fetch staff');
    }
    return response.json();
  },

  async getCharacterById(id: string): Promise<Character> {
    const response = await fetch(`${BASE_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }
    const characters = await response.json();
    if (!characters.length) {
      throw new Error('Character not found');
    }
    return characters[0];
  },

  async getSpells(): Promise<Spell[]> {
    const response = await fetch(`${BASE_URL}/spells`);
    if (!response.ok) {
      throw new Error('Failed to fetch spells');
    }
    return response.json();
  },
}; 