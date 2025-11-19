import { Player, Store, Match } from './types';

export const STORES: Store[] = [
  {
    id: 'vudugaming',
    name: 'Vudugaming',
    address: 'Av. Providencia 1108, 7500571 Providencia',
    logoUrl: 'https://picsum.photos/seed/vudu/200/200',
    color: 'bg-purple-600',
    points: 24,
    wins: 8,
    losses: 2,
    draws: 0,
  },
  {
    id: 'rcomics',
    name: 'Rcomics',
    address: 'Av. Providencia 1108, 7500571 Providencia',
    logoUrl: 'https://picsum.photos/seed/rcomics/200/200',
    color: 'bg-red-600',
    points: 19,
    wins: 6,
    losses: 3,
    draws: 1,
  },
  {
    id: 'metagame',
    name: 'Metagame TCG',
    address: 'José Manuel Infante 100, Local 90, Providencia',
    logoUrl: 'https://picsum.photos/seed/meta/200/200',
    color: 'bg-blue-600',
    points: 18,
    wins: 6,
    losses: 4,
    draws: 0,
  },
  {
    id: 'tcg_tea',
    name: 'TCG Tea Coffee Games',
    address: 'Portugal 412, Oficina 707, Santiago',
    logoUrl: 'https://picsum.photos/seed/tea/200/200',
    color: 'bg-amber-600',
    points: 12,
    wins: 4,
    losses: 6,
    draws: 0,
  },
  {
    id: 'funnyko',
    name: 'Funnyko',
    address: 'Padre Alonso de Ovalle 1060, Piso 3 Local 7, Santiago',
    logoUrl: 'https://picsum.photos/seed/funny/200/200',
    color: 'bg-pink-500',
    points: 9,
    wins: 3,
    losses: 7,
    draws: 0,
  },
];

export const PLAYERS: Player[] = [
  {
    id: 'p1',
    name: 'Ash Ketchum',
    nickname: 'RedMaster',
    storeId: 'vudugaming',
    avatarUrl: 'https://picsum.photos/seed/ash/150/150',
    points: 120,
    wins: 12,
    losses: 0,
    isMVP: true,
  },
  {
    id: 'p2',
    name: 'Gary Oak',
    nickname: 'SmellYaLater',
    storeId: 'metagame',
    avatarUrl: 'https://picsum.photos/seed/gary/150/150',
    points: 95,
    wins: 9,
    losses: 3,
    wasPastMVP: true,
  },
  {
    id: 'p3',
    name: 'Misty Waterflower',
    nickname: 'StarmieQueen',
    storeId: 'tcg_tea',
    avatarUrl: 'https://picsum.photos/seed/misty/150/150',
    points: 88,
    wins: 8,
    losses: 4,
  },
  {
    id: 'p4',
    name: 'Brock Slate',
    nickname: 'RockSolid',
    storeId: 'funnyko',
    avatarUrl: 'https://picsum.photos/seed/brock/150/150',
    points: 85,
    wins: 8,
    losses: 4,
  },
];

export const UPCOMING_MATCHES: Match[] = [
  {
    id: 'm1',
    date: '2024-06-15',
    time: '15:00',
    location: 'Metagame TCG (José Manuel Infante 100)',
    homeStoreId: 'metagame',
    awayStoreId: 'vudugaming',
    completed: false,
  },
  {
    id: 'm2',
    date: '2024-06-16',
    time: '11:00',
    location: 'Funnyko (Padre Alonso de Ovalle 1060)',
    homeStoreId: 'funnyko',
    awayStoreId: 'tcg_tea',
    completed: false,
  },
  {
    id: 'm3',
    date: '2024-06-22',
    time: '18:30',
    location: 'Rcomics (Av. Providencia 1108)',
    homeStoreId: 'rcomics',
    awayStoreId: 'metagame',
    completed: false,
  },
  {
    id: 'm4',
    date: '2024-06-23',
    time: '16:00',
    location: 'TCG Tea Coffee Games (Portugal 412)',
    homeStoreId: 'tcg_tea',
    awayStoreId: 'rcomics',
    completed: false,
  },
  {
    id: 'm5',
    date: '2024-06-29',
    time: '17:00',
    location: 'Vudugaming (Av. Providencia 1108)',
    homeStoreId: 'vudugaming',
    awayStoreId: 'funnyko',
    completed: false,
  },
];

export const PAST_MATCHES: Match[] = [
  {
    id: 'pm1',
    date: '2024-06-01',
    time: '18:00',
    location: 'Rcomics (Av. Providencia 1108)',
    homeStoreId: 'rcomics',
    awayStoreId: 'vudugaming',
    completed: true,
    homeScore: 1,
    awayScore: 2,
  },
];

export const SYSTEM_INSTRUCTION = `Eres el "Oráculo de la Liga Gym Masters", un experto juez y comentarista de Pokémon TCG.
El contexto actual es la "Gym Masters League" entre tiendas de Santiago: Vudugaming, Rcomics, Metagame TCG, TCG Tea Coffee Games y Funnyko.
Vudugaming y Rcomics están en Providencia, Metagame en Infante, TCG Tea en Portugal y Funnyko en Alonso de Ovalle.
Tu trabajo es responder dudas sobre reglas, comentar sobre el meta actual, y dar ánimos a los jugadores.
Si te preguntan quién va ganando, menciona a Vudugaming.
Se breve, conciso y mantén un tono de comentarista deportivo de esports.`;