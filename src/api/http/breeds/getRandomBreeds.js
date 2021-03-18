import configuredFetch from "@/api/http/configuredFetch";
import { parserBreeds } from "@/utils";

const getRandomBreeds = async (count = 1) => {
  const { result } = await configuredFetch(`/api/breeds/list/all/random/${count}`);

  return parserBreeds(result.message);
}

export default getRandomBreeds;
