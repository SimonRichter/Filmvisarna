package com.company;

import com.company.models.Member;
import com.company.utilities.HashPassword;
import express.Express;
import org.dizitart.no2.objects.filters.ObjectFilters;

import static express.database.Database.collection;

public class Authentication {
    private Express app;

    public Authentication(Express app) {
        this.app = app;
        initAuth();
    }

    private void initAuth() {
        String secretSalt = "djhjw-12-312@@£@£sdawdwaddffkkf";

        // register
        app.post("/api/register", (req, res) -> {
            if(req.session("current-member") != null) {
                res.send("Already logged in");
                return;
            }

            var member = req.body(Member.class);

            Member memberInColl = collection("Member").findOne(ObjectFilters.eq("email", member.getEmail()));
            if(memberInColl != null) {
                res.send("Email already in use");
                return;
            }


            String hashedPassword = HashPassword.hash(member.getPassword() + secretSalt);
            member.setPassword(hashedPassword);

            collection("Member").save(member);


            member.setPassword(null);


            req.session("current-member", member);

            res.json(member);
        });

        app.post("/api/login", (req, res) -> {
            var x = req.body();
            System.out.println(x);
            if(req.session("current-member") != null) {
                res.send("Already logged in");
                return;
            }

            var member = req.body(Member.class);
            Member memberInColl = collection("Member").findOne(ObjectFilters.eq("email", member.getEmail()));

            if(memberInColl == null) {

                res.send("Bad credentials");
                return;
            }


            if(HashPassword.match(member.getPassword() + secretSalt, memberInColl.getPassword())) {

                memberInColl.setPassword(null);


                req.session("current-member", memberInColl);

                res.json(memberInColl);
            } else {

                res.send("Bad credentials");
            }
        });

        app.get("/api/whoami", (req, res) -> {
            Member member = req.session("current-member");
            res.json(member);
        });

        app.get("/api/logout", (req, res) -> {
            req.session("current-member", null);
            res.send("Logged out");
        });
    }
}
