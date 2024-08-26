type GetUserDataResponse = {
  name: string;
  lastName: string;
  birthDay: string;
};

const ENDPOINT = "https://rimac-front-end-challenge.netlify.app/api/user.json";

export const getUserData = async () => {
  const response = await fetch(ENDPOINT);
  const data: GetUserDataResponse = await response.json();
  return data;
};
