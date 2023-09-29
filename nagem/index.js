const regex = new RegExp("^(0[1-9]|1[0-2])\\/(0[1-9]|[12][0-9]|3[01])\\/\\d{4} (0[0-9]|1[0-9]|2[0-3]):([0-5][0-9])$");
const url = "04/04/2023 00:00";

if (regex.test(url)) {
  console.log("válida");
} else {
  console.log("inválida");
}
