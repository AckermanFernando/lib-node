import chalk from "chalk";
import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function extraiLinks(texto) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResultados = [];
  let temp;
  while ((temp = regex.exec(texto)) !== null) {
    arrayResultados.push({ [temp[1]]: temp[2] });
  }
  return arrayResultados.length === 0
    ? chalk.red("Não há links")
    : arrayResultados;
}

function tratarErro(erro) {
  throw new Error(chalk.red(erro));
}

async function pegarArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const caminhoAbsoluto = path.join(__dirname, caminhoDoArquivo);
    const arquivos = await fs.promises.readdir(caminhoAbsoluto, { encoding });
    const arrayLinks = await lerTextos(caminhoAbsoluto, arquivos, encoding);

    return arrayLinks;
  } catch (error) {
    tratarErro(error);
  } finally {
    console.log(chalk.yellow("operação concluida com sucesso!!"));
  }
}

async function lerTextos(caminhoDoArquivo, arquivosDeTexto, encoding) {
  let listaDeLinks = [];
  await Promise.all(
    arquivosDeTexto.map(async (item) => {
      let texto = await fs.promises.readFile(`${caminhoDoArquivo}${item}`, {
        encoding,
      });

      listaDeLinks.push(extraiLinks(texto));
    })
  );
  return listaDeLinks;
}

export default pegarArquivo;

// Promise
// return new Promise((resolve, reject) => {
//   if (erro) {
//     reject(tratarErro(erro));
//   }
//   resolve(chalk.green(texto));
// });
