import { createClient, groq } from "next-sanity";
import clientConfig from "@/sanity/config/client-config";

import { heroType } from "@/sanity/types/hero-type";

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
