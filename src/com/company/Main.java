package com.company;

import com.company.models.*;
import express.Express;
import express.database.CollectionOptions;

import static express.database.Database.collection;

public class Main {

    public static void main(String[] args) {
        var app = new Express();

        app.enableCollections("database/temp/db/movies.db", CollectionOptions.ENABLE_WATCHER);
        new Authentication(app);


        app.get("/rest/movies", (req, res) -> {

            var movies = collection(Movie.class).find();

            res.json(movies);
        });

        app.get("/rest/bookings", (req, res) -> {
            var bookings = collection(Booking.class).find();
            res.json(bookings);
        });


        app.post("/rest/bookings", (req, res) -> {
            if(req.session("current-member") == null) {
                res.send("No one is logged in");
                return;
            }
            var booking = req.body(Booking.class);
            var savedBooking = collection(Booking.class).save(booking);
            res.json(savedBooking);

        });


        // removing/deleting bookings (by selecting its ID)
        app.delete("/rest/bookings/:id", (req, res) -> {
            var id = (req.params("id"));
            collection(Booking.class).deleteById(id);
        });

        // Delete (cancel membership) member
        app.delete("/rest/members/:id", (req, res) -> {
            var id = (req.params("id"));
            collection(Member.class).deleteById(id);
        });

        // All 896 !!  showings available
        app.get("/rest/showings", (req, res) -> {
            var showings = collection(Showing.class).find();
            res.json(showings);
        });

        // removing/updating seats left
        app.put("/rest/showings/:id", (req, res) -> {
            var update = req.body(Showing.class);
            var savedUpdate = collection(Showing.class).save(update);
            res.json(savedUpdate);

        });

        // Get messages sent in by question form
        app.get("/rest/messages", (req, res) -> {
            var message = collection(Message.class).find();
            res.json(message);
        });

        // Add new messages sent in by question form
        app.post("/rest/messages", (req, res) -> {
            var message = req.body(Message.class);
            var savedMessage = collection(Message.class).save(message);
            res.json(savedMessage);

        });

        // choose another port so it doesn't collide with VUE port
        app.listen(5000);
    }
}
