    package com.company.models;

    import express.database.Model;
    import org.dizitart.no2.objects.Id;

    import java.util.ArrayList;
    import java.util.Arrays;
    import java.util.Collections;
    import java.util.List;

    @Model
public class Showing {
    @Id
    private String id;
    private String title;
    private String date;
    private String theatre;
    private String salon;
    private String time;
    private int totalSeats;
    private Boolean[] seats = new Boolean[this.totalSeats];

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getTheatre() {
        return theatre;
    }

    public void setTheatre(String theatre) {
        this.theatre = theatre;
    }

    public String getSalon() {
        return salon;
    }

    public void setSalon(String salon) {
        this.salon = salon;
    }

    public String getTime() {
        return time;
    }

    public void setTime(String time) {
        this.time = time;
    }

    public Boolean[] getSeats() {
        return seats;
    }

    public void setSeats(Boolean[] seats) {
        this.seats = seats;
    }

    public int getTotalSeats() { return totalSeats; }

    public void setTotalSeats(int totalSeats) { this.totalSeats = totalSeats; }

    public Showing() {
    }
}