const year = document.querySelector("#currentyear");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
const lastMod = document.querySelector("#lastModified");
const lastModified = new Date(document.lastModified);
const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
lastMod.textContent = `Last Modified: ${lastModified.toLocaleDateString('en-US', options)}`;