function shotUrl(url) {
  const apiUrl = ` https://api.shrtco.de/v2/shorten?url=${url}`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      if (data.ok) {
        return data.result.full_short_link;
      } else {
        throw new Error(`ERROR: ${data.error}`);
      }
    })
    .catch((error) => {
      throw new Error(`ERROR: ${error.message}`);
    });
}

const url = "https://www.facebook.com/ngochongz";

shotUrl(url)
  .then((result) => console.log(`Shorten link: ${result}`))
  .catch((error) => console.log(error.message));
