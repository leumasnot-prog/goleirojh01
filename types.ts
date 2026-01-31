
export interface AthleteStats {
  label: string;
  value: number;
  fullMark: number;
}

export interface AthleteData {
  name: string;
  mainPosition: string;
  secondaryPosition: string;
  foot: string;
  nationality: string;
  age: number;
  birthDate: string;
  height: string;
  weight: string;
  club: string;
  clubLogo?: string;
  instagram: string;
  email: string;
  whatsapp: string;
  stats: {
    matches: number;
    minutes: number;
  };
}
