'use client';

import { ReactNode, createContext, useContext, useMemo, useState } from 'react';
import type { SectionNameType } from '@/types';

// Props for the ActiveSectionProvider component
type ActiveSectionProviderProps = {
  children: ReactNode;
};

// Type definition for the context value
type ActiveSectionContextType = {
  activeSection: SectionNameType;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionNameType>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

// Create a context for managing the active section state
const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

// ActiveSectionProvider component responsible for managing the active section state
export default function ActiveSectionProvider({
  children,
}: ActiveSectionProviderProps) {
  // State to track the currently active section
  const [activeSection, setActiveSection] = useState<SectionNameType>('Home');
  // we need to keep track of this to disable the observer temporarily when user clicks on a link
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  // Memoized context value to avoid unnecessary renders
  const value = useMemo(
    () => ({
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    }),
    [activeSection, timeOfLastClick]
  );

  return (
    <ActiveSectionContext.Provider value={value}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

// Custom hook for accessing the ActiveSectionContext
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  // Throw an error if the hook is used outside of the ActiveSectionProvider
  if (!context)
    throw new Error(
      'useActiveSectionContext must be used within the ActiveSectionProvider!'
    );

  return context;
};
