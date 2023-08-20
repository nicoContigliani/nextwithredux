import axios, { Method } from 'axios';

interface AxiosProps {
  url: string;
  method: Method;
  body?: any;
  idParams?:number |string | null;
}

const useAxios = async (props: AxiosProps): Promise<any> => {
  const { url, method, body, idParams } = props;

  try {
    const token: string = 'tu_token_aqui' || '';

    const headers: { [key: string]: string } = {};

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    const urls = idParams !== null
      ? `${url}/${idParams}`
      : `${url}`;

    const response = await axios({
      method,
      url: urls,
      data: body,
      headers: headers
    });

    return response.data;

  } catch (error) {
    console.log("Error in useAxios:", error);
    throw error;
  }
};

export default useAxios;