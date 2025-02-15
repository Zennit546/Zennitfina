document.getElementById("workerBtn").addEventListener("click", async () => {
    try {
        const response = await fetch("/worker"); // Cambia la URL según tu ruta
        const text = await response.text();
        document.getElementById("workerResponse").innerText = text;
    } catch (error) {
        console.error("Error al consultar el Worker:", error);
    }
});
