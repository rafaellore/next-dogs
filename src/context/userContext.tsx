'use client';

import React from 'react';

type User = {
  id: number;
  nome: string;
  username: string;
  email: string;
};

type IUserContext = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = React.createContext<IUserContext | null>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === null) {
    throw new Error('useUser must be used within a UserContextProvider');
  }
  return context;
};

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUser] = React.useState<User | null>(user);

  return (
    <UserContext.Provider value={{ user: userState, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
