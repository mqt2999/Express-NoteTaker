const fs = require("fs");
const uuid = require("uuid");


function rout(app) {

    app.get("/api/notes", function (req, response) {
        
        fs.readFile("./db/db.json", {encoding:"utf8",flag:"rs+"},(err,data) => {
            if (err) throw err;
            // JSON.parse(data)
            response.end(data)
            console.log("Note read!")
        });
    });

    app.post('/api/notes', (req, res) => {
        const noteId = uuid.v4()
        console.log("write note",noteId);
        const currentNote = {
            id: noteId,
            title: req.body.title,
            text: req.body.text
        }
        fs.readFile("./db/db.json", {encoding:"utf8",flag:"rs+"}, (err, data) => {
            if (err) throw err;

            const allNotes = JSON.parse(data);

            allNotes.push(currentNote);

            fs.writeFile("./db/db.json", JSON.stringify(allNotes), (err)=> {
                if (err) throw err;
                res.json(currentNote);
                console.log("Note created!")
            });
            
        });
    })
    

}
module.exports = rout;