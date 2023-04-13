import { Textile } from './textile';

export type YarnManipulation = {
  id: number;
  thickness?: string;
  angle?: string;
  manipulation?: string;
  material?: string;
  count?: string;
  component?: string;
  ply?: string;
  yarnmanipulationid?: number;
  direction?: string;
  mainTextiles: Textile[];
};
