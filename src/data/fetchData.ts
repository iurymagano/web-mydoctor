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

interface OptionsParams {
  method: string;
  headers: { [key: string]: string };
  body?: string;
}

export async function fetchData({
  data,
  path,
  method,
  token,
}: FetchDataParams): Promise<ResponseData> {
  try {
    const METHOD = method || "POST";

    const options: OptionsParams = {
      method: METHOD,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    };

    if (METHOD !== "GET") {
      options.body = JSON.stringify(data);
    }
    const respFetch = await fetch(
      `${process.env.NEXT_PUBLIC_API}/${path}`,
      options,
    );
    const resp: ResponseData = await respFetch.json();

    return resp;
  } catch (error) {
    return { error: "Ocorreu um erro ao processar a requisição." };
  }
}
