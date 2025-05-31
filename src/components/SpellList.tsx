import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import type { Spell } from '../types';
import { api } from '../services/api';

const SpellList = () => {
  const [spells, setSpells] = useState<Spell[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchSpells = async () => {
      try {
        setLoading(true);
        const data = await api.getSpells();
        setSpells(data);
      } catch (error) {
        toast.error('Failed to fetch spells');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpells();
  }, []);

  const filteredSpells = spells.filter(spell =>
    spell.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    spell.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-hogwarts-gold border-t-transparent"></div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search spells..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 bg-hogwarts-dark border border-hogwarts-gold/30 rounded-lg text-hogwarts-light focus:outline-none focus:border-hogwarts-gold/60"
        />
      </div>

      <div className="grid gap-6">
        {filteredSpells.map((spell) => (
          <div
            key={spell.id}
            className="card hover:transform hover:scale-[1.01] transition-all duration-200"
          >
            <h3 className="font-spells text-xl mb-2 text-hogwarts-gold">
              {spell.name}
            </h3>
            <p className="text-hogwarts-light/80">
              {spell.description}
            </p>
            {spell.type && (
              <span className="inline-block mt-2 px-3 py-1 bg-hogwarts-blue/50 text-hogwarts-light/90 text-sm rounded-full">
                {spell.type}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpellList; 