import chalk from "chalk";
import pegarArquivo from "./index.js";
import validarURLs from "./http-validacao.js";

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo) {
  const resultado = await pegarArquivo(caminhoDoArquivo[2]);
  if (caminho[3] == "validar") {
    console.log(
      chalk.yellow("Links validados: "),
      await validarURLs(resultado)
    );
  } else {
    console.log(chalk.yellow("Lista de links: "), resultado);
  }
  // console.log(chalk.yellow("Lista de links"), resultado);
}
processaTexto(caminho);

// console.log(caminho[2]);
