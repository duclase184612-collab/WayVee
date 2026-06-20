import { createContext, useContext, useState, ReactNode } from 'react';

type Season = 'spring' | 'summer' | 'autumn' | 'winter';

interface SeasonContextType {
  season: Season;
  setSeason: (season: Season) => void;
  nextSeason: () => void;
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export const SeasonProvider = ({ children }: { children: ReactNode }) => {
  const [season, setSeason] = useState<Season>('spring');

  const nextSeason = () => {
    const seasons: Season[] = ['spring', 'summer', 'autumn', 'winter'];
    const currentIndex = seasons.indexOf(season);
    setSeason(seasons[(currentIndex + 1) % seasons.length]);
  };

  return (
    <SeasonContext.Provider value={{ season, setSeason, nextSeason }}>
      {children}
    </SeasonContext.Provider>
  );
};

export const useSeason = () => {
  const context = useContext(SeasonContext);
  if (context === undefined) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }
  return context;
};
