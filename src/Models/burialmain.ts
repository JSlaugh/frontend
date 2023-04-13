import { Textile } from './textile';

export type Burialmain = {
  id: number;
  squarenorthsouth?: string; //
  headdirection?: string;
  sex?: string;
  northsouth?: string; //
  depth?: string;
  eastwest?: string; //
  adultsubadult?: string;
  facebundles?: string;
  southtohead?: string;
  preservation?: string;
  fieldbookpage?: string;
  squareeastwest?: string; //
  goods?: string;
  text?: string;
  wrapping?: string;
  haircolor?: string;
  westtohead?: string;
  samplescollected?: string;
  area?: string;
  burialid?: string;
  length?: string;
  burialnumber?: string;
  dataexpertinitials?: string;
  westtofeet?: string;
  ageatdeath?: string;
  southtofeet?: string;
  excavationrecorder?: string;
  photos?: string;
  hair?: string;
  burialmaterials?: string;
  dateofexcavation?: Date;
  fieldbookexcavationyear?: string;
  clusternumber?: string;
  shaftnumber?: string;
  mainTextiles?: Textile[];
};
