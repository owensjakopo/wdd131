document.addEventListener("DOMContentLoaded", () => {
    const yearElement = document.querySelector("#currentyear");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    const lastModElement = document.querySelector("#lastModified");
    if (lastModElement) {
        const lastModifiedDate = new Date(document.lastModified);
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        };
        lastModElement.textContent = `Last Modified: ${lastModifiedDate.toLocaleString('en-US', options)}`;
    }
});
