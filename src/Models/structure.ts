import { Textile } from './textile';

export type Structure = {
  id: number;
  value?: string;
  structureid?: number;
  mainTextiles: Textile[];
};
