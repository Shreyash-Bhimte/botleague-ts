import type { Category, Discipline, JourneyStep, Advantage, Sponsor } from '../types';

export const categories: Category[] = [
  { id: 1, icon: '🔧', name: 'Mini Makers',       tagline: 'Where Creativity Meets',               description: 'Benchmark your skills against the best engineers in India.' },
  { id: 2, icon: '💡', name: 'Junior Innovators',  tagline: 'Engineering & Strategy',               description: 'Benchmark your skills against the best engineers in India.' },
  { id: 3, icon: '👷', name: 'Young Engineers',    tagline: 'Advanced Wireless & Autonomous Control', description: 'Benchmark your skills against the best engineers in India.' },
  { id: 4, icon: '🤖', name: 'Robo Minds',         tagline: 'Elite Professional Sports & Robotics', description: 'Benchmark your skills against the best engineers in India.' },
];

export const disciplines: Discipline[] = [
  { id: 1, name: 'Robo Race',                      emoji: '🏎️' },
  { id: 2, name: 'Line Follower',                   emoji: '➡️' },
  { id: 3, name: 'RC Racing',                      emoji: '🕹️' },
  { id: 4, name: 'FPV Drone Racing & Aeromodeling', emoji: '🚁' },
  { id: 5, name: 'Robo Hockey',                    emoji: '🏒' },
  { id: 6, name: 'Robo War',                       emoji: '⚔️' },
];

export const journeySteps: JourneyStep[] = [
  { step: 1, icon: '🔩', title: 'Build Your Team',              desc: 'From one-off events to a year-round competitive season.' },
  { step: 2, icon: '🗺️', title: 'Compete Across India',         desc: 'From one-off events to a year-round competitive season.' },
  { step: 3, icon: '🏅', title: 'Earn National Ranking & Value', desc: 'Your professional robotics legacy tracked and verified.' },
  { step: 4, icon: '🏆', title: 'Join The League',              desc: 'Training leads pathways into real-world industry opportunities.' },
];

export const advantages: Advantage[] = [
  { id: 1, icon: '🏅', title: 'National Recognition', desc: 'Benchmark your skills against the best engineers in India.' },
  { id: 2, icon: '⚖️', title: 'Fair Judging',          desc: 'Transparent and consistent evaluation across all events.' },
  { id: 3, icon: '💼', title: 'Career Ops',            desc: 'Bridge the gap between arena victories and top-tier tech placements.' },
  { id: 4, icon: '⚡', title: 'High-Energy Eco',       desc: 'Join a nationwide community of elite innovators and robotics athletes.' },
];

export const sponsors: Sponsor[] = [
  { id: 1, name: 'NIT Delhi' },
  { id: 2, name: 'Indian BIT' },
  { id: 3, name: 'NIT Silchar' },
  { id: 4, name: 'IIT Bombay' },
  { id: 5, name: 'Robo Company' },
  { id: 6, name: 'Robo Company' },
];
