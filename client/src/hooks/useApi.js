import { useState } from "react";
import axios from "axios";
import { URLS } from "../constants";

export default function useApi() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const create = async ({ url, payload }) => {
    await axios.post(url, payload);
  };

  const list = async () => {
    const { data } = await axios(URLS.TODOS);
    setData(data.data);
  };

  const updateById = () => {};

  const deleteById = () => {};

  return { data, error, loading, create, list, updateById, deleteById };
}
