import { Textile } from './textile';

export type Color = {
  id: number;
  value?: string;
  colorid?: number;
  mainTextiles: Textile[];
};
