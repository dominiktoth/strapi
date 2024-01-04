// Interface automatically generated by schemas-to-ts

import { KapcsolatKartya } from '../../../../components/kapcsolat/interfaces/KapcsolatKartya';
import { KapcsolatKartya_Plain } from '../../../../components/kapcsolat/interfaces/KapcsolatKartya';
import { KapcsolatKartya_NoRelations } from '../../../../components/kapcsolat/interfaces/KapcsolatKartya';

export interface Kapcsolat {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Cim: string;
    Alcim?: string;
    Kartyak: KapcsolatKartya[];
    locale: string;
    localizations?: { data: Kapcsolat[] };
  };
}
export interface Kapcsolat_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Kartyak: KapcsolatKartya_Plain[];
  locale: string;
  localizations?: Kapcsolat[];
}

export interface Kapcsolat_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Kartyak: KapcsolatKartya_NoRelations[];
  locale: string;
  localizations?: Kapcsolat[];
}

export interface Kapcsolat_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Kartyak: KapcsolatKartya_Plain[];
  locale: string;
  localizations?: Kapcsolat[];
}