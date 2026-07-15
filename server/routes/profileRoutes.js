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

    } catch (error) {

        console.log(error.message);

        res.status(500).json({
            message: "Something went wrong"
        });

    }

});