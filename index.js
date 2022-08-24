import chalk from "chalk";
import fs from "fs";

function tratarErro(erro) {
  throw new Error(chalk.red(erro));
}

async function pegarArquivo(caminhoDoArquivo) {
  const encoding = "utf-8";
  try {
    const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
    console.log(texto);
  } catch (error) {
    tratarErro(error);
  } finally {
    console.log(chalk.yellow("operação concluida com sucesso!!"));
  }
}

pegarArquivo("./arquivos/texto1.md");

// Promise
// return new Promise((resolve, reject) => {
//   if (erro) {
//     reject(tratarErro(erro));
//   }
//   resolve(chalk.green(texto));
// });
