const { createPost } = require("../wordpress");

module.exports = {
    name: "create_wordpress_post",

    description: "Create a WordPress blog post",

    inputSchema: {
        type: "object",
        properties: {
            title: {
                type: "string"
            },
            content: {
                type: "string"
            }
        },
        required: [
            "title",
            "content"
        ]
    },

    async execute(args) {
        return await createPost(
            args.title,
            args.content
        );
    }
};
