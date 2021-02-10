package com.company;

import java.time.LocalDate;

public class ShowingGenerator {

    //Run this method to get a JSON-file of showings in the terminal
    public static void generateShowings() {

        String[] titles = new String[14];
        titles[0] = "Blade";
        titles[1] = "Pulp Fiction";
        titles[2] = "Soul";
        titles[3] = "It";
        titles[4] = "Interstellar";
        titles[5] = "The Hitchhiker's Guide to the Galaxy";
        titles[6] = "Sin City";
        titles[7] = "The Intouchables";
        titles[8] = "The Shawshank Redemption";
        titles[9] = "Fight Club";
        titles[10] = "Finding Nemo";
        titles[11] = "Avengers: Infinity War";
        titles[12] = "Star Wars: Episode IV A New Hope";
        titles[13] = "The Hunger Games";

        String[] theatres = new String[2];
        theatres[0] = "Theatre 1";
        theatres[1] = "Theatre 2";

        String[] salons = new String[4];
        salons[0] = "Big room 1";
        salons[1] = "Big room 2";
        salons[2] = "Small room 1";
        salons[3] = "Small room 2";

        int[] totalSeats = new int[salons.length];
        totalSeats[0] = 100; // salons[0]
        totalSeats[1] = 100; // salons[1]
        totalSeats[2] = 50; // salons[2]
        totalSeats[3] = 50; // salons[3]

        String[] times = new String[4];
        times[0] = "15:30";
        times[1] = "18:00";
        times[2] = "20:30";
        times[3] = "23:00";

        LocalDate date = java.time.LocalDate.now();
        final int DAYS = 28;

        System.out.println((DAYS * theatres.length * salons.length * times.length) + " showings");
        System.out.println("[");
        for(int i = 0; i < DAYS; i++) {
            String text1 = "\"date\": \"" + date.plusDays(i) + "\",";
            for(int ii = 0; ii < theatres.length; ii++) {
                String text2 = text1 + "\n" + "\"theatre\": \"" + theatres[ii] + "\",";
                for(int iii = 0; iii < salons.length; iii++) {
                    String text3 = text2 + "\n" + "\"salon\": \"" + salons[iii] + "\",";
                    for(int iiii = 0; iiii < times.length; iiii++) {
                        System.out.println("{\n\"title\": \"" + titles[(int) (Math.random() * titles.length)] + "\",");
                        System.out.println(text3);
                        System.out.println("\"time\": \"" + times[iiii] + "\",");
                        System.out.println("\"totalSeats\": \"" + totalSeats[iii] + "\",");
                        System.out.println("\"seats\":" + "[]");
                        System.out.println("}" + (i == DAYS - 1 && ii == theatres.length - 1 && iii == salons.length - 1 && iiii == times.length - 1? "":","));
                    }
                }
            }
        }
        System.out.println("]");
    }
}
