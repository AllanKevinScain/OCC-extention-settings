const regex = new RegExp("^(https?:\\/\\/)?([\\w.-]+)\\.([a-z]{2,})(\\/\\S*)?$", "i");
const url = "htt://www.example.com/path";

if (regex.test(url)) {
  console.log("URL válida");
} else {
  console.log("URL inválida");
}
