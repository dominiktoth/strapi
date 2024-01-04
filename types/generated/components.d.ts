import type { Schema, Attribute } from '@strapi/strapi';

export interface FooldalBemutatkozasSzekcio extends Schema.Component {
  collectionName: 'components_bemutatkozas_bemutatkozas_szekcios';
  info: {
    displayName: 'Bemutatkozas szekcio';
    icon: 'layout';
    description: '';
  };
  attributes: {
    Cim: Attribute.Blocks & Attribute.Required;
    Alcim: Attribute.String;
    Tartalom: Attribute.Blocks & Attribute.Required;
    Gomb_szoveg: Attribute.String;
    Kep: Attribute.Media;
  };
}

export interface FooldalGyakoriKerdesek extends Schema.Component {
  collectionName: 'components_gyik_gyakori_kerdeseks';
  info: {
    displayName: 'Gyakori_szekcio';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Cim: Attribute.String & Attribute.Required;
    Gyik_tartalom: Attribute.Component<'fooldal.gyik-tartalom', true>;
  };
}

export interface FooldalGyikTartalom extends Schema.Component {
  collectionName: 'components_gyik_gyik_tartaloms';
  info: {
    displayName: 'Gyik tartalom';
    icon: 'layer';
    description: '';
  };
  attributes: {
    Gyik_kerdes: Attribute.Text;
    Gyik_valasz: Attribute.Blocks;
  };
}

export interface FooldalIconBox extends Schema.Component {
  collectionName: 'components_icon_box_icon_boxes';
  info: {
    displayName: 'IconBox';
    icon: 'cube';
    description: '';
  };
  attributes: {
    Ikon: Attribute.Media & Attribute.Required;
    Cim: Attribute.String & Attribute.Required;
    Tartalom: Attribute.String & Attribute.Required;
  };
}

export interface FooldalVelemeny extends Schema.Component {
  collectionName: 'components_fooldal_velemenies';
  info: {
    displayName: 'Velemeny';
    icon: 'quote';
  };
  attributes: {
    Nev: Attribute.String & Attribute.Required;
    Munka_tipusa: Attribute.String;
    Velemeny: Attribute.Blocks & Attribute.Required;
  };
}

export interface FooterCtaFooterFelettCta extends Schema.Component {
  collectionName: 'components_footer_cta_footer_felett_ctas';
  info: {
    displayName: 'Footer_felett_cta';
    icon: 'earth';
    description: '';
  };
  attributes: {
    Cta_cim: Attribute.Text &
      Attribute.Required &
      Attribute.DefaultTo<'Tekintse meg csomagaj\u00E1nlatainkat!'>;
    Cta_szoveg: Attribute.String &
      Attribute.DefaultTo<'Kattints a legjobb aj\u00E1nlatok\u00E9rt'>;
    Cta_gomb: Attribute.String &
      Attribute.DefaultTo<'Csomagaj\u00E1nlatok megtekint\u00E9se'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fooldal.bemutatkozas-szekcio': FooldalBemutatkozasSzekcio;
      'fooldal.gyakori-kerdesek': FooldalGyakoriKerdesek;
      'fooldal.gyik-tartalom': FooldalGyikTartalom;
      'fooldal.icon-box': FooldalIconBox;
      'fooldal.velemeny': FooldalVelemeny;
      'footer-cta.footer-felett-cta': FooterCtaFooterFelettCta;
    }
  }
}
