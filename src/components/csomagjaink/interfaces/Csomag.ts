// Interface automatically generated by schemas-to-ts

import { CsomagOpcio } from './CsomagOpcio';
import { CsomagOpcio_Plain } from './CsomagOpcio';
import { CsomagOpcio_NoRelations } from './CsomagOpcio';

export interface Csomag {
  Nev: string;
  Gomb?: string;
  Kiemelt?: boolean;
  Opciok: CsomagOpcio[];
  Kedvezmeny?: string;
}
export interface Csomag_Plain {
  Nev: string;
  Gomb?: string;
  Kiemelt?: boolean;
  Opciok: CsomagOpcio_Plain[];
  Kedvezmeny?: string;
}

export interface Csomag_NoRelations {
  Nev: string;
  Gomb?: string;
  Kiemelt?: boolean;
  Opciok: CsomagOpcio_NoRelations[];
  Kedvezmeny?: string;
}

