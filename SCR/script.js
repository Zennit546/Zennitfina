document.getElementById("workerBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("https://zenittechsolutions.com/worker");
        const text = await response.text();
        document.getElementById("workerResponse").innerText = text;
    } catch (error) {
        console.error("Error al consultar el Worker:", error);
    }
});
