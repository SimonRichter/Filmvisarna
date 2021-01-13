package com.company.models;

import express.database.Model;
import org.dizitart.no2.objects.Id;

@Model
public class Booking {
    @Id
    private String id;
}
