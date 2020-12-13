
import axios from "axios";

const url = 'https://fortnite-api.theapinetwork.com/upcoming/get';

export const fetchData = async () => {
  try {
    const {
      data: { data },
    } = await axios.get(url);

    return { data };
  } catch (error) {}
};