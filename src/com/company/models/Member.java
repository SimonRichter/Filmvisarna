package com.company.models;
import express.database.Model;
import org.dizitart.no2.objects.Id;

import java.util.ArrayList;


@Model
public class Member {
    @Id
    private String id;
    private String name;
    private String lastName;
    private String password;
    private String telephone;
    private String email;
    private ArrayList<String> bookingsId = new ArrayList<>();

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public ArrayList<String> getBookingsId() {
        return bookingsId;
    }

    public void setBookingsId(ArrayList<String> bookingsId) {
        this.bookingsId = bookingsId;
    }
}