import axios from "axios";

interface FetchDataParams {
  data?: object;
  method?: "POST" | "PUT" | "DELETE" | "GET";
  token?: string;
  path?: string;
}

interface ResponseData {
  respData?: any;
  error?: string;
}

export async function fetchData({
  data,
  path,
  method,
  token,
}: FetchDataParams): Promise<ResponseData> {
  try {
    const METHOD = method || "post";

    const options = {
      method: METHOD,
      baseURL: process.env.NEXT_PUBLIC_API,
      url: `${process.env.NEXT_PUBLIC_API}/${path}`,
      headers: {
        Authorization: "Bearer " + token,
      },
      data: data,
    };

    const resp = await axios.request(options);

    return resp.data;
  } catch (error) {
    //@ts-ignore
    return { error: error?.response?.data?.error };
  }
}
