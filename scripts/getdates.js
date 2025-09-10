const today = new Date();

const year = document.querySelector("#currentyear");
document.getElementById("currentyear").textContent = today.getFullYear();
// use the date object
const lastModifiedElement = document.getElementById("lastModified");
lastModifiedElement.textContent = `Last Updated: ${document.lastModified}`;

