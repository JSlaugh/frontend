import { Textile } from './textile';
export type Analysis = {
  id: number;
  analysistype?: number;
  doneby?: string;
  analysisid?: number;
  date?: Date;
  mainTextiles: Textile[];
};
