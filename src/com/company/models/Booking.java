        package com.company.models;

        import express.database.Model;
        import org.dizitart.no2.objects.Id;

        import java.util.ArrayList;

        @Model
public class Booking {
    @Id
    private String id;
    private String showingId;
    private String tickets;
    private String seatIndexes;
    private String totalSum;


    public Booking(){}

            public String getId() {
                return id;
            }

            public void setId(String id) {
                this.id = id;
            }

            public String getShowingId() {
                return showingId;
            }

            public void setShowingId(String showingId) {
                this.showingId = showingId;
            }

            public String getTickets() {
                return tickets;
            }

            public void setTickets(String tickets) {
                this.tickets = tickets;
            }

            public String getSeatIndexes() {
                return seatIndexes;
            }

            public void setSeatIndexes(String seats) {
                this.seatIndexes = seats;
            }

            public String getTotalSum() {
                return totalSum;
            }

            public void setTotalSum(String totalSum) {
                this.totalSum = totalSum;
            }
        }