export const checkDomain = (domain) => {
  const ipRegex =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(
      domain.value
    );

  return ipRegex;
};
