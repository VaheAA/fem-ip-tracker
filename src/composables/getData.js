export const getData = () => {
  const getUserData = async () => {
    const res = await fetch(
      'https://geo.ipify.org/api/v2/country?apiKey=at_HE9nGhnpFkoIfoNLlwIchHCyRGajj'
    );
    const data = await res.json();
    console.log(data);
  };

  return { getUserData };
};
