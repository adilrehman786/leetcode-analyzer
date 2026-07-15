const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to LeetCode Analyzer!");
});

app.get("/api/profile/:username", async (req, res) => {

    const username = req.params.username;

    try {

        const response = await axios.post(
            "https://leetcode.com/graphql",
            {
                query: `
                query getUserProfile($username: String!) {
                    matchedUser(username: $username) {
                        username

                        profile {
                            ranking
                        }

                        submitStats {
                            acSubmissionNum {
                                difficulty
                                count
                            }
                        }
                    }
                }
                `,
                variables: {
                    username
                }
            }
        );

        res.json(response.data.data.matchedUser);

    } catch (err) {

        console.log(err.message);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});