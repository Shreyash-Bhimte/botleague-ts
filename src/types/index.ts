export interface Event {
  id: number;
  name: string;
  date: string;
  location: string;
  category: string;
}

export interface BracketMatch {
  team1: string;
  team2: string;
  winner: string;
}

export interface LiveEvent {
  name: string;
  status: string;
  bracket: BracketMatch[];
}

export interface PastResult {
  id: number;
  name: string;
  subtitle: string;
}

export interface Category {
  id: number;
  icon: string;
  name: string;
  tagline: string;
  description: string;
}

export interface Discipline {
  id: number;
  name: string;
  emoji: string;
}

export interface JourneyStep {
  step: number;
  icon: string;
  title: string;
  desc: string;
}

export interface Advantage {
  id: number;
  icon: string;
  title: string;
  desc: string;
}

export interface Sponsor {
  id: number;
  name: string;
}

export interface RegistrationForm {
  name: string;
  location: string;
  email: string;
}

export type EcosystemRole = 'judge' | 'volunteer' | 'member';
export type FormStatus = 'idle' | 'loading' | 'success' | 'error' | string;
