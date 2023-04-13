import { Textile } from './textile';

export type Photodatum = {
  id: number;
  description?: string;
  filename?: string;
  photodataid?: number;
  date?: Date;
  url?: string;
  mainTextiles: Textile[];
};
