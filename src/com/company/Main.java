package com.company;
import com.company.models.Movie;
import express.Express;
import static express.database.Database.collection;

public class Main {

    public static void main(String[] args) {
        var app = new Express();

        app.enableCollections("database/temp/db/awesome.db");

        app.get("/hello", (req, res) -> {
            // send can only send a string/text
            res.send("<h1>Hello from Java Express!</h1>");
        });

        // skapa endpoint/rout för att hämta alla marvels
        app.get("/rest/marvel", (req, res) -> {
            // find() = alla från collection
            var marvel = collection(Movie.class).find();
            // stringifierar marvel lista. skickar tillbaka listan snyggt och prydligt
            res.json(marvel);
        });

        //choose another port so it doesn't collide with VUE port
        app.listen(5000);
    }
}

