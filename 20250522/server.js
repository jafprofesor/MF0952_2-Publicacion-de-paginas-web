const express = require("express");
const app = express();

// Ruta principal
app.get("/", (req, res) => {
  res.send("<h1>¡Aplicación Node.js en Alwaysdata funcionando!</h1>");
});

// Puerto asignado por Alwaysdata o 3000 en local
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Servidor activo en puerto ${PORT}`);
});
