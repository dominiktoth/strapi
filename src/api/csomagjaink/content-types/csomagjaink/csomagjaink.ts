// Interface automatically generated by schemas-to-ts

import { Csomag } from '../../../../components/csomagjaink/interfaces/Csomag';
import { Media } from '../../../../common/schemas-to-ts/Media';
import { Csomag_Plain } from '../../../../components/csomagjaink/interfaces/Csomag';
import { Csomag_NoRelations } from '../../../../components/csomagjaink/interfaces/Csomag';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Csomagjaink {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Cim1: string;
    Alcim1?: string;
    Cim2: string;
    Alcim2: string;
    Csomagok: Csomag[];
    Nyilatkozat?: any;
    Hero?: { data: Media };
    locale: string;
    localizations?: { data: Csomagjaink[] };
  };
}
export interface Csomagjaink_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim1: string;
  Alcim1?: string;
  Cim2: string;
  Alcim2: string;
  Csomagok: Csomag_Plain[];
  Nyilatkozat?: any;
  Hero?: Media;
  locale: string;
  localizations?: Csomagjaink[];
}

export interface Csomagjaink_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim1: string;
  Alcim1?: string;
  Cim2: string;
  Alcim2: string;
  Csomagok: Csomag_NoRelations[];
  Nyilatkozat?: any;
  Hero?: number;
  locale: string;
  localizations?: Csomagjaink[];
}

export interface Csomagjaink_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim1: string;
  Alcim1?: string;
  Cim2: string;
  Alcim2: string;
  Csomagok: Csomag_Plain[];
  Nyilatkozat?: any;
  Hero?: AdminPanelRelationPropertyModification<Media>;
  locale: string;
  localizations?: Csomagjaink[];
}
