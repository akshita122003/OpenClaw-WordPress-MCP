const { 
    createElementorPage,
    getLatestPosts
} = require("../wordpress");


const { 
    generateElementorJSON 
} = require("../utils/elementorBuilder");



module.exports = {

    name: "create_elementor_page",


    description:
    "Create a WordPress page with Elementor layout",



    inputSchema: {

        type:"object",

        properties: {


            title: {

                type:"string",

                description:"Page title"

            },


            sections: {

                type:"array",

                description:
                "Elementor sections to create",

                items:{

                    type:"string"

                }

            }

        },


        required:[

            "title",
            "sections"

        ]

    },



    async execute(args) {


        let latestPosts = [];


        // Fetch latest 3 posts only if blog-grid exists

        if(
            args.sections.includes("blog-grid")
        ){

            latestPosts = await getLatestPosts(3);


            console.log(
                "LATEST POSTS:",
                latestPosts
            );

        }



        const elementorData = 
            generateElementorJSON({

                ...args,

                latestPosts

            });



        return await createElementorPage(

            args.title,

            elementorData

        );

    }

};