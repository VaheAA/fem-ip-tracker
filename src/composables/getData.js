import { ref } from 'vue';

export const getData = () => {
  const address = ref(null);
  const getUserData = async () => {
    const res = await fetch(
      'https://geo.ipify.org/api/v2/country?apiKey=at_HE9nGhnpFkoIfoNLlwIchHCyRGajj'
    );
    const data = await res.json();
    address.value = data;
  };

  const fetchUserIp = async (ip) => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country?apiKey=at_HE9nGhnpFkoIfoNLlwIchHCyRGajj&ipAddress=${ip}`
    );
    const data = await res.json();
    address.value = data;
  };

  return { address, getUserData, fetchUserIp };
};
