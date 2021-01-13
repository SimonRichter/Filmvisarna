package com.company;

//import com.company.models.Booking;
import com.company.models.Movie;
//import com.company.models.Showing;
import express.Express;
import static express.database.Database.collection;
import com.company.models.Member;

public class Main {

    public static void main(String[] args) {
        var app = new Express();

        app.enableCollections("database/temp/db/movies.db");

        app.get("/hello", (req, res) -> res.send("<h1>Hello from Java Express!</h1>"));

        app.get("/rest/movies", (req, res) -> {
            var movies = collection(Movie.class).find();
            res.json(movies);
        });

        app.get("/rest/showings", (req, res) -> {

            // var showings = collection(Showing.class).find();

            // res.json(showings);
        });

        // var bookings = collection(Booking.class).find();

        // res.json(bookings);

        // removing/deleting bookings (by selecting its ID)
        app.delete("/rest/bookings/:id", (req, res) -> {
            var id = (req.params("id"));
            collection(Booking.class).deleteById(id);
        });

        // Adding a new member
        app.post("/rest/members", (req, res) -> {
            var member = req.body(Member.class);
            var savedMember = collection(Member.class).save(member);
            res.json(savedMember);

        });

        // Delete (cancel membership) member
        app.delete("/rest/members/:id", (req, res) -> {
            var id = (req.params("id"));
            collection(Member.class).deleteById(id);
        });

        // choose another port so it doesn't collide with VUE port
        app.listen(5000);
    }
}
