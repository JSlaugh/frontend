import { Textile } from './textile';

export type TextileFunction = {
  id: number;
  value?: string;
  textilefunctionid?: number;
  mainTextiles: Textile[];
};
