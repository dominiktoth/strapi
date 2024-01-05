// Interface automatically generated by schemas-to-ts

import { Media } from '../../../common/schemas-to-ts/Media';

export interface IconBox {
  Ikon: { data: Media };
  Cim: string;
  Tartalom: string;
}
export interface IconBox_Plain {
  Ikon: Media;
  Cim: string;
  Tartalom: string;
}

export interface IconBox_NoRelations {
  Ikon: number;
  Cim: string;
  Tartalom: string;
}

