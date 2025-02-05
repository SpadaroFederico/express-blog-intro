const express = require("express");
const path = require("path");

const app = express();

// Serve la cartella "public" per le immagini
app.use("/images", express.static(path.join(__dirname, "public")));

// Array di post del blog
const posts = [
  {
    title: "Crackers alla barbabietola",
    content: "Deliziosi crackers con barbabietola.",
    image: "/images/cracker_barbabietola.jpeg",
    tags: ["snack", "vegetariano", "salutare"],
  },
  {
    title: "Pane fritto dolce",
    content: "Dolce tradizionale fritto con zucchero.",
    image: "/images/pane_fritto_dolce.jpeg",
    tags: ["dolce", "tradizione", "fritto"],
  },
  {
    title: "ciambellone",
    content: "Un dolce perfetto per la colazione.",
    image: "/images/ciambellone.jpeg",
    tags: ["primo", "italiano", "zafferano"],
  },
  {
    title: "Torta paesana",
    content: "torta con cioccolato e burro.",
    image: "/images/torta_paesana.jpeg",
    tags: ["dolce", "torta", "paesana"],
  },
  {
    title: "pasta barbabietola",
    content: "pasta con barbabietole.",
    image: "/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "verdura", "barbabietole"],
  },
];

// Rotta principale
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// Rotta per ottenere i post
app.get("/bacheca", (req, res) => {
  res.json(posts);
});

// Avvio il server sulla porta 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});

app.use("/images", express.static(path.join(__dirname, "public", "images")));

