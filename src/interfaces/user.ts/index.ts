import { createHttpEndpoint } from "../api";

interface Email {
  email: string;
  verified: boolean;
}

interface User {
  name: string;
  first_name: string;
  last_name: string;
  is_public: string;
  image_id: string;
  emails: Email[]
}

const createUserEndpoint = () => {
  const { get } = createHttpEndpoint<User>();

  const baseUrl = '/api/users';

  const getMe = () => get(`${baseUrl}/me`);
  const getUser = (id: number) => get(`${baseUrl}/${id}`);

  return {
    getMe,
    getUser
  };
};

const main = async () => {
  const { getMe } = createUserEndpoint();

  const me = await getMe();
  me.
};
