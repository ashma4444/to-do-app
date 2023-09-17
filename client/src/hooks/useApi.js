import { useCallback, useState } from "react";
import axios from "axios";
import { URLS } from "../constants";
import { useToastContext } from "../contexts/ToastContext";

export default function useApi() {
  const { setShow, setToast } = useToastContext();
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      const data = await axios.post(url, payload);
      if (data) {
        setShow(true);
        setToast({
          msg: `${payload.title} created`,
          title: url.includes("todos") ? "Todo created" : "Subtask created",
        });
      }
    } catch (e) {
      setError(e);
    } finally {
      await list(URLS.TODOS);
      setLoading(false);
    }
  };

  const list = useCallback(async () => {
    try {
      setLoading(true);
      const { data: result } = await axios(URLS.TODOS);
      setData(result.data);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, []);

  const updateById = async ({ url, id, payload }) => {
    try {
      const API_URL = url + "/" + id;
      setLoading(true);
      const data = await axios.patch(API_URL, payload);
      if (data) {
        setShow(true);
        setToast({
          msg: `Status changed to ${payload.status}`,
          title: url.includes("todos") ? "Todo updated" : "Subtask updated",
        });
      }
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      await list(URLS.TODOS);
    }
  };

  const deleteById = async ({ url, id }) => {
    try {
      const API_URL = url + "/" + id;
      setLoading(true);
      await axios.delete(API_URL); //http://loacalhost:5555/api/v1/suntasks/123
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      await list(URLS.TODOS);
    }
  };

  return { data, error, loading, create, list, updateById, deleteById };
}
