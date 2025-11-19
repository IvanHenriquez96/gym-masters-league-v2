export interface Player {
  id: string;
  name: string;
  nickname: string;
  storeId: string;
  avatarUrl: string;
  points: number;
  wins: number;
  losses: number;
  isMVP?: boolean; // For current league MVP
  wasPastMVP?: boolean; // For past league MVP
}

export interface Store {
  id: string;
  name: string;
  address?: string; // Added address field
  logoUrl: string;
  color: string; // Tailwind color class or hex
  points: number;
  wins: number;
  losses: number;
  draws: number;
}

export interface Match {
  id: string;
  date: string;
  time: string;
  location: string;
  homeStoreId: string;
  awayStoreId: string;
  completed: boolean;
  homeScore?: number;
  awayScore?: number;
}

export enum TabView {
  DASHBOARD = 'DASHBOARD',
  STANDINGS = 'STANDINGS',
  SCHEDULE = 'SCHEDULE',
  ORACLE = 'ORACLE', // AI Assistant
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isLoading?: boolean;
}