import fetch from "node-fetch";

function manejaErros(erro) {
  throw new Error(errp.message);
}

async function checaStatus(arraysURLs) {
  try {
    const statusCodes = await Promise.all(
      arraysURLs.map(async (arrayURL) => {
        const arrayLinks = await Promise.all(
          arrayURL.map(async (url) => {
            const res = await fetch(url);
            return `${res.status} - ${res.statusText}`;
          })
        );
        return arrayLinks;
      })
    );

    return statusCodes;
  } catch (error) {
    manejaErros(error);
  }
}

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks.map((arrayObjetos) =>
    arrayObjetos.map((arrayLink) => Object.values(arrayLink).join())
  );
}

