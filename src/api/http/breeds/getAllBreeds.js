import configuredFetch from "@/api/http/configuredFetch";
import { parserBreeds } from "@/utils";

const getAllBreeds = async () => {
  const { result } = await configuredFetch('/api/breeds/list/all');

  return parserBreeds(result.message);
}

export default getAllBreeds;
