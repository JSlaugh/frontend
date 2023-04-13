import { Analysis } from './analysis';
import { Burialmain } from './burialmain';
import { Color } from './color';
import { Decoration } from './decortation';
import { Dimension } from './dimension';
import { Photodatum } from './photodatum';
import { Structure } from './structure';
import { TextileFunction } from './textilefunction';
import { YarnManipulation } from './yarnmanipulation';

/* global BigInt */
export type Textile = {
  id: number;
  locale?: string;
  textileid?: number;
  description?: string;
  burialnumber?: string;
  estimatedperiod?: string;
  sampledate?: Date;
  photographeddate?: Date;
  direction?: string;
  mainAnalyses: Analysis[];
  mainBurialmains?: Burialmain[];
  mainColors: Color[];
  mainDecorations: Decoration[];
  mainDimensions: Dimension[];
  mainPhotodata: Photodatum[];
  mainStructures: Structure[];
  mainTextilefunctions: TextileFunction[];
  mainYarnmanipulations: YarnManipulation[];
};
