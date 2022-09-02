import fetch from "node-fetch";

function geraArrayDeURLs(arrayLinks) {
  return arrayLinks.map((arrayObjetos) =>
    arrayObjetos.map((arrayLink) => Object.values(arrayLink).join())
  );
}

