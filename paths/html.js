const path = require('path')

function paths(app) {
  app.get("/notes", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    })
      app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}

module.exports = paths;
