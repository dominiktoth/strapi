// Interface automatically generated by schemas-to-ts

import { Csomag } from '../../../../components/csomagjaink/interfaces/Csomag';
import { Csomag_Plain } from '../../../../components/csomagjaink/interfaces/Csomag';
import { Csomag_NoRelations } from '../../../../components/csomagjaink/interfaces/Csomag';

export interface Csomagjaink {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Cim1: string;
    Alcim1?: string;
    Cim2: string;
    Alcim2: string;
    Csomagok: Csomag[];
    Nyilatkozat?: any;
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
  locale: string;
  localizations?: Csomagjaink[];
}
