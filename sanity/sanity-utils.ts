import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

import { heroType } from "@/types/hero-type";

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
