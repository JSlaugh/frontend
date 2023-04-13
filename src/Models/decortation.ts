import { Textile } from './textile';

export type Decoration = {
  id: number;
  decorationid?: number;
  value?: string;
  mainTextiles: Textile[];
};
