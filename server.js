require("dotenv").config({
    quiet: true
});
const createElementorBlog =
    require("./tools/createElementorBlog");

const createElementorPage =
    require("./tools/createElementorPage");

const { Server } = require("@modelcontextprotocol/sdk/server/index.js");
const { StdioServerTransport } = require("@modelcontextprotocol/sdk/server/stdio.js");

const {
    ListToolsRequestSchema,
    CallToolRequestSchema
} = require("@modelcontextprotocol/sdk/types.js");

const createPost = require("./tools/createPost");


const server = new Server(
    {
        name: "wordpress-mcp",
        version: "1.0.0"
    },
    {
        capabilities: {
            tools: {}
        }
    }
);


server.setRequestHandler(
    ListToolsRequestSchema,
    async () => {
        return {
            tools: [
                {
                    name: createPost.name,
                    description: createPost.description,
                    inputSchema: createPost.inputSchema
                },
                {
                    name: createElementorPage.name,
                    description: createElementorPage.description,
                    inputSchema: createElementorPage.inputSchema
                },
                {
                    name: createElementorBlog.name,
                    description: createElementorBlog.description,
                    inputSchema: createElementorBlog.inputSchema
                }
            ]
        };
    }
);


server.setRequestHandler(
    CallToolRequestSchema,
    async (request) => {

        if (request.params.name === createPost.name) {

            try {

                const result = await createPost.execute(
                    request.params.arguments
                );

                return {
                    content: [
                        {
                            type: "text",
                            text: JSON.stringify(result)
                        }
                    ],
                    isError: false
                };

            } catch (error) {

                console.error(
                    "CREATE POST ERROR:",
                    error
                );

                return {
                    content: [
                        {
                            type: "text",
                            text: error.message || "Unknown error"
                        }
                    ],
                    isError: true
                };
            }
        }


        if (request.params.name === createElementorPage.name) {

            try {

                const result = await createElementorPage.execute(
                    request.params.arguments
                );

                return {
                    content: [
                        {
                            type: "text",
                            text: JSON.stringify(result)
                        }
                    ],
                    isError: false
                };

            } catch (error) {

                console.error(
                    "CREATE ELEMENTOR PAGE ERROR:",
                    error
                );

                return {
                    content: [
                        {
                            type: "text",
                            text: error.message || "Unknown error"
                        }
                    ],
                    isError: true
                };
            }
        }

        if (request.params.name === createElementorBlog.name) {

            try {

                const result = await createElementorBlog.execute(
                    request.params.arguments
                );

                return {
                    content: [
                        {
                            type: "text",
                            text: JSON.stringify(result)
                        }
                    ],
                    isError: false
                };

            } catch (error) {

                console.error(
                    "CREATE ELEMENTOR BLOG ERROR:",
                    error
                );

                return {
                    content: [
                        {
                            type: "text",
                            text: error.message || "Unknown error"
                        }
                    ],
                    isError: true
                };
            }
        }

        throw new Error("Unknown tool");
    }
);


const transport = new StdioServerTransport();

server.connect(transport).catch(error => {
    console.error(error);
});
