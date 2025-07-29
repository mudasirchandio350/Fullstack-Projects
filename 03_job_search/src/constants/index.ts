import { CompIconsType, FeatureType, ReviewType } from "@/types";
import airbnb from "@/public/assets/airbnb.svg";
import google from "@/public/assets/google.svg";
import netflix from "@/public/assets/netflix.svg";
import spotify from "@/public/assets/spotify.svg";
import meta from "@/public/assets/meta.svg";
import amazon from "@/public/assets/amazon.svg";
import apple from "@/public/assets/apple.svg";
import samsung from "@/public/assets/samsung.svg";
import nvidia from "@/public/assets/nvidia.svg";
import openai from "@/public/assets/openai.svg";
import nasa from "@/public/assets/nasa.svg";

export const ComIcons: CompIconsType[] = [
  { id: 1, Icon: airbnb },
  { id: 2, Icon: google },
  { id: 3, Icon: netflix },
  { id: 4, Icon: spotify },
  { id: 5, Icon: meta },
  { id: 6, Icon: amazon },
  { id: 7, Icon: apple },
  { id: 8, Icon: samsung },
  { id: 9, Icon: nvidia },
  { id: 10, Icon: openai },
  { id: 11, Icon: nasa },
];

export const navItems = [
  { name: "Index", href: "/" },
  { name: "Jobs", href: "/jobs" },
];

export const US: FeatureType[] = [
  {
    id: 3,
    title: "Realtime Application Status",
    description:
      "Track your job applications as they move through the pipeline—no guessing, just progress.",
  },
];

export const Reviews: ReviewType[] = [
  {
    quote:
      "This platform has transformed my job search experience. The real-time updates keep me informed and engaged.",
    title: "Alex Mark",
    name: "Software Engineer at TechCorp",
  },
  {
    quote:
      "I love the intuitive design and the way it simplifies the application process. Highly recommend!",
    title: "Jane",
    name: "Product Manager at InnovateX",
  },
];
