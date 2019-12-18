interface Parameters {
  [U: string]: string
}

const getQueryParamsFromUrl = (url: string = '') => {
  if (!url) throw Error("No url provided");

  const parameters: Parameters = {};
  url.replace(/[?&]+([^=&]+)=([^&]*)/gi, (_, key: string, value: string) => {
    return parameters[key] = value;
  });

  return parameters;
};

export default getQueryParamsFromUrl;
