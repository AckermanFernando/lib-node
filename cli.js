import chalk from "chalk";
import pegarArquivo from "./index.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
  const resultado = await pegarArquivo(caminhoDoArquivo[2]);
  console.log(chalk.yellow("Lista de links"), resultado);
}
processaTexto(caminho);

// console.log(caminho[2]);
