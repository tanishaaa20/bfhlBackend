const express = require("express");
const server = express();

server.use(express.json());
server.use(express.urlencoded({extended : false}))

server.post("/bfhl", (req, res) => {
  try {
    const details = req.body.data

    const data = {
      is_success: false,
      user_id: "tanisha_gupta_20082002",
      email: "tanisha1181.be20@chitkarauniversity.edu.in",
      roll_number: "2011981181",
      odd_numbers: [],
      even_numbers: [],
      alphabets: [],
    };

    details.forEach((ele) => {
      const no = parseInt(ele);
      if (no != NaN) {
        if (no % 2 !== 0) {
          data.odd_numbers.push(no.toString());
        } else {
          data.even_numbers.push(no.toString());
        }
      } else {
        data.alphabets.push(ele.toUpperCase());
      }
    });

    data.is_success = true;
    res.send(data);
  } catch (e) {
    console.log(e.message);
  }
});

server.listen(8080, () => {
  console.log("Server Started!!");
});
