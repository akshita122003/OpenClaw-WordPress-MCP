require("dotenv").config();

const { createPost } = require("./wordpress");

(async () => {
    try {
        console.log("WP_URL:", process.env.WP_URL);

        const result = await createPost(
            "Test from Node",
            "Testing WordPress REST API"
        );

        console.log("SUCCESS:");
        console.log(result);

    } catch (err) {

        console.error("ERROR:", err.message);

        if (err.config) {
            console.log("Base URL:", err.config.baseURL);
            console.log("Request URL:", err.config.url);
        }

        if (err.response) {
            console.log("Status:", err.response.status);
            console.log("Response:", err.response.data);
        }
    }
})();
