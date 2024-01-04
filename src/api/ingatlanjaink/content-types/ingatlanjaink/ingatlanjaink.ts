// Interface automatically generated by schemas-to-ts

import { FooterFelettCta } from '../../../../components/footer-cta/interfaces/FooterFelettCta';
import { FooterFelettCta_Plain } from '../../../../components/footer-cta/interfaces/FooterFelettCta';
import { FooterFelettCta_NoRelations } from '../../../../components/footer-cta/interfaces/FooterFelettCta';

export interface Ingatlanjaink {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Cim: string;
    Alcim?: string;
    Cta_szekcio?: FooterFelettCta;
    locale: string;
    localizations?: { data: Ingatlanjaink[] };
  };
}
export interface Ingatlanjaink_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Cta_szekcio?: FooterFelettCta_Plain;
  locale: string;
  localizations?: Ingatlanjaink[];
}

export interface Ingatlanjaink_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Cta_szekcio?: FooterFelettCta_NoRelations;
  locale: string;
  localizations?: Ingatlanjaink[];
}

export interface Ingatlanjaink_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Cta_szekcio?: FooterFelettCta_Plain;
  locale: string;
  localizations?: Ingatlanjaink[];
}