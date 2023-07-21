import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

import { heroType } from "@/types/hero-type";
import { featuresType } from "@/types/features-type";

export async function getHero(): Promise<heroType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "hero"] {
      _id,
      _createdAt,
      heading,
      description,
      url,
    }`
  );
}

export async function getFeatures(): Promise<featuresType[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type =="features"]{
    _id,
    _createdAt,
    icon,
    heading,
    description,
  }`

  );

}
