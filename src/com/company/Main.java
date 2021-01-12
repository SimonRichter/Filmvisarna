package com.company;
import com.company.models.Booking;
import com.company.models.Movie;
import com.company.models.Showing;
import express.Express;
import static express.database.Database.collection;

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

            var showings = collection(Showing.class).find();

            res.json(showings);
        });

        app.get("/rest/bookings", (req, res) -> {

            var bookings = collection(Booking.class).find();

            res.json(bookings);
        });
        //choose another port so it doesn't collide with VUE port
        app.listen(5000);
    }
}

