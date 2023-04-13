import { Textile } from './textile';

export type Dimension = {
  id: number;
  dimensiontype?: string;
  value?: string;
  dimensionid?: number;
  mainTextiles: Textile[];
};
