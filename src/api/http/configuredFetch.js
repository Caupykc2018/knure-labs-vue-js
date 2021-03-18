const configuredFetch = async (url = '', method = 'GET', headers = {}, body) => {
  const response = await fetch(`https://dog.ceo${url}`, {
    method,
    headers,
    body
  });

  const result = await response.json();

  return {
    response,
    result
  }
}

export default configuredFetch;
