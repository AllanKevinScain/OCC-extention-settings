const regex = new RegExp("\\.(png|jpe?g|gif|bmp|webp)$");
const url = "imagem.bmp";

if (regex.test(url)) {
  console.log("URL válida");
} else {
  console.log("URL inválida");
}
