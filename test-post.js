const { createPost } = require("./wordpress");

(async () => {
  try {
    const post = await createPost(
      "Node Test",
      "Testing from Node"
    );

    console.log(post);
  } catch (e) {
    console.log("========== ERROR ==========");
    console.log("Message:", e.message);
    console.log("Code:", e.code);
    console.log("Response:", e.response?.data);
    console.log("Stack:");
    console.log(e.stack);
  }
})();
