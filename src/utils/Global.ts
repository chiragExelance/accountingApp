import axios from 'axios';
export type State = {
  method: string;
  url: string;
  data: any;
  headers: unknown;
  params: unknown;
  baseURL: string;
};

export const makeAPIRequest = ({
  method,
  url,
  data,
  headers,
  params,
  baseURL,
}: State) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      baseURL,
      url,
      data,
      headers,
      params,
    };
    axios(options)
      .then(response => {
        if (response.status === 200) {
          resolve(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
