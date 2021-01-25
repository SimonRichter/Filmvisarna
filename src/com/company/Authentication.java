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
        // Best Practise, load salt from environment
        String secretSalt = "djhjw-12-312@@£@£sdawdwaddffkkf";

        // register
        app.post("/api/register", (req, res) -> {
            if(req.session("current-member") != null) {
                res.send("Already logged in");
                return;
            }

            var member = req.body(Member.class);
            System.out.println(member);

            // validera att email inte är upptaget
            Member memberInColl = collection("Member").findOne(ObjectFilters.eq("email", member.getEmail()));
            if(memberInColl != null) {
                // email upptagen
                res.send("Email already in use");
                return; // spara inte användaren
            }

            // hash password för högre säkerhet
            String hashedPassword = HashPassword.hash(member.getPassword() + secretSalt);
            member.setPassword(hashedPassword);

            collection("Member").save(member);

            // STOR säkerhetsrisk!
            // skicka ALDRIG tillbaka lösenord till frontend
            member.setPassword(null);

            // spara användaren i sessionen
            req.session("current-member", member);

            res.json(member);
        });

        app.post("/api/login", (req, res) -> {
            if(req.session("current-member") != null) {
                res.send("Already logged in");
                return;
            }

            var member = req.body(Member.class);
            Member memberInColl = collection("Member").findOne(ObjectFilters.eq("email", member.getEmail()));

            if(memberInColl == null) {
                // ingen användare med detta email
                res.send("Bad credentials");
                return;
            }

            // validera lösenordet
            if(HashPassword.match(member.getPassword() + secretSalt, memberInColl.getPassword())) {
                // rätt email och lösenord
                memberInColl.setPassword(null);

                // spara användaren i sessionen
                req.session("current-member", memberInColl);

                res.json(memberInColl);
            } else {
                // fel lösenord
                res.send("Bad credentials");
            }
        });

        app.get("/api/whoami", (req, res) -> {
//            testar url queries
//            http://localhost:5000/api/whoami?rememberMe=true
//            String rememberMe = req.query("rememberMe");
//            System.out.println(rememberMe);

            Member member = req.session("current-member");
            res.json(member);
        });

        app.get("/api/logout", (req, res) -> {
            req.session("current-member", null);
            res.send("Logged out");
        });
    }
}
