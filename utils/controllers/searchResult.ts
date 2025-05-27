import { VideoItem } from "@/type/type";

/**
 * on recherche une liste de video
 *
 * @param query  il s'agit du terme de rechrche de la video entrer dans le champ de recherche par l'utilisateur
 *
 *
 * @returns il nous retourne la liste de video de chercher dans l'api
 */
export const getSearchResults = async (
  query: string
): Promise<VideoItem[] | []> => {
  console.log("Query:", query);

  const url = `https://youtube138.p.rapidapi.com/search/?q=${query}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "a6aa443e7fmsh804bbe7f0b7163ep1720e0jsn92e74f12e0b7",
      "x-rapidapi-host": "youtube138.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    return result.contents;
  } catch (error) {
    console.log("L'erreur est : ", error);
    return [];
  }
};
