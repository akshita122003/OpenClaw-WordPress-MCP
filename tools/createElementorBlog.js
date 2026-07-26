const {
    getOrCreateCategory,
    getElementorTemplate,
    createElementorBlogPost
} = require("../wordpress");



module.exports = {


    name:"create_elementor_blog",


    description:
    "Create WordPress blog using saved Elementor template",



    inputSchema:{


        type:"object",


        properties:{


            title:{
                type:"string"
            },


            author:{
                type:"string"
            },


            category:{
                type:"string"
            },


            introduction:{
                type:"string"
            },


            content:{
                type:"string"
            },


            faq_question_1:{
                type:"string"
            }


        },


        required:[

            "title",

            "content"

        ]

    },




    async execute(args){


        // Get Elementor Template

        const template =
            await getElementorTemplate(76);



        let elementorData =
            template.meta._elementor_data;





        const replacements = {


            "{{TITLE}}":
            args.title,


            "{{AUTHOR}}":
            args.author || "AI",


            "{{DATE}}":
            new Date().toLocaleDateString(),


            "{{INTRODUCTION}}":
            args.introduction || "",


            "{{CONTENT}}":
            args.content || "",


            "{{FAQ_QUESTION_1}}":
            args.faq_question_1 || ""


        };




        Object.keys(replacements).forEach(key=>{


            elementorData =
            elementorData.replaceAll(
                key,
                replacements[key]
            );


        });





        // Create category

        const categoryId =
            await getOrCreateCategory(
                args.category
            );





        // Create Elementor blog post

        return await createElementorBlogPost(

            args.title,

            elementorData,

            categoryId

        );


    }


};