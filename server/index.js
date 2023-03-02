const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); // because this is whats being exported form module.exports on the otyher page


//middleware is needed or we will get an error
app.use(cors());
app.use(express.json());

//submitting the data
app.post("/gericka", async (req, res) => {
    try {
        const { first, last, birthdate, phone, target, email, money, love, other } = req.body // we decontructed the body object in the cleint
        const newInfo = await pool.query(
            "INSERT INTO readings(id,first,last,email,phone,birthdate,target,money,love,other) VALUES(nextval('readings_id_seq'),$1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *",
            [first, last, email, phone, birthdate, target, money, love, other]
        );

        // const id = newInfo.rows[0].id // extract id from retirned row

        // const radio = await pool.query(
        //     "INSERT INTO readings(money,love,other) VALUES($1,$2,$3) RETURNING *",
        //     [money,love,other]
        // )


        res.json(
            newInfo.rows
            // radio: radio.rows
        )// this is what we sending back to the browser

    } catch (error) {
        console.log(error.message)
        console.log("no")
    }
})




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("server works")
})
