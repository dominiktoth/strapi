// Interface automatically generated by schemas-to-ts

import { KapcsolatKartya } from '../../../../components/kapcsolat/interfaces/KapcsolatKartya';
import { FooterFelettCta } from '../../../../components/footer-cta/interfaces/FooterFelettCta';
import { Media } from '../../../../common/schemas-to-ts/Media';
import { KapcsolatKartya_Plain } from '../../../../components/kapcsolat/interfaces/KapcsolatKartya';
import { FooterFelettCta_Plain } from '../../../../components/footer-cta/interfaces/FooterFelettCta';
import { KapcsolatKartya_NoRelations } from '../../../../components/kapcsolat/interfaces/KapcsolatKartya';
import { FooterFelettCta_NoRelations } from '../../../../components/footer-cta/interfaces/FooterFelettCta';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface Kapcsolat {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    Cim: string;
    Alcim?: string;
    Kartyak: KapcsolatKartya[];
    Cta_szekcio?: FooterFelettCta;
    Hero?: { data: Media };
    locale: string;
    localizations?: { data: Kapcsolat[] };
  };
}
export interface Kapcsolat_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Kartyak: KapcsolatKartya_Plain[];
  Cta_szekcio?: FooterFelettCta_Plain;
  Hero?: Media;
  locale: string;
  localizations?: Kapcsolat[];
}

export interface Kapcsolat_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Kartyak: KapcsolatKartya_NoRelations[];
  Cta_szekcio?: FooterFelettCta_NoRelations;
  Hero?: number;
  locale: string;
  localizations?: Kapcsolat[];
}

export interface Kapcsolat_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  Cim: string;
  Alcim?: string;
  Kartyak: KapcsolatKartya_Plain[];
  Cta_szekcio?: FooterFelettCta_Plain;
  Hero?: AdminPanelRelationPropertyModification<Media>;
  locale: string;
  localizations?: Kapcsolat[];
}
