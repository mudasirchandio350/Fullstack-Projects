import { StaticImageData } from "next/image";

export interface CompIconsType {
  id: number;
  Icon: StaticImageData;
}

export interface FeatureType {
  id: number;
  title: string;
  description: string;
}

export interface ReviewType {
  quote: string;
  title: string;
  name: string;
}
