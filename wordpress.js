const axios = require("axios");

require("dotenv").config({
    path: "/mnt/c/Projects/wordpress-mcp-v2/.env"
});


console.error("WP_URL:", process.env.WP_URL);
console.error("WP_USERNAME:", process.env.WP_USERNAME);

console.error(
    "WP_APP_PASSWORD:",
    process.env.WP_APP_PASSWORD ? "FOUND" : "MISSING"
);



const wp = axios.create({

    baseURL: `${process.env.WP_URL}/wp-json/wp/v2`,

    auth: {

        username: process.env.WP_USERNAME,

        password: process.env.WP_APP_PASSWORD

    }

});




// =======================
// CREATE NORMAL POST
// =======================

async function createPost(
    title,
    content,
    status = "draft"
) {

    try {


        const response =
            await wp.post("/posts", {

                title,

                content,

                status

            });


        return response.data;


    } catch(error){

        console.log(
            "Create Post Error:",
            error.response?.data || error.message
        );

        throw error;

    }

}





// =======================
// GET LATEST POSTS
// =======================

async function getLatestPosts(limit = 3){

    try{


        const response =
            await wp.get("/posts",{

                params:{

                    per_page:limit,

                    _embed:true

                }

            });



        return response.data.map(post=>{


            let image = "";


            if(
                post._embedded &&
                post._embedded["wp:featuredmedia"]
            ){

                image =
                post._embedded["wp:featuredmedia"][0]
                .source_url;

            }


            return {

                id:post.id,

                title:
                post.title.rendered,


                excerpt:
                post.excerpt.rendered,


                link:
                post.link,


                image

            };


        });



    }catch(error){

        console.log(
            "Get Posts Error:",
            error.response?.data || error.message
        );

        throw error;

    }

}






// =======================
// GET ELEMENTOR TEMPLATE
// =======================

async function getElementorTemplate(id){

    try{


        const response =
            await wp.get(
                `/elementor_library/${id}`,
                {

                    params:{

                        context:"edit"

                    }

                }
            );


        return response.data;


    }catch(error){

        console.log(
            "Elementor Template Error:",
            error.response?.data || error.message
        );

        throw error;

    }

}







// =======================
// CREATE ELEMENTOR BLOG POST
// =======================


async function createElementorBlogPost(
    title,
    elementorData,
    categoryId
){

    try{


        const post =
            await wp.post("/posts",{


                title,


                status:"draft",


                categories:[
                    categoryId
                ]

            });



        await wp.post(

            `/posts/${post.data.id}`,

            {

                meta:{

                    _elementor_edit_mode:
                    "builder",


                    _elementor_data:
                    elementorData

                }

            }

        );



        return post.data;



    }catch(error){

        console.log(
            "Create Elementor Blog Error:",
            error.response?.data || error.message
        );

        throw error;

    }

}







// =======================
// CREATE OR GET CATEGORY
// =======================


async function getOrCreateCategory(name){


    try{


        if(!name){

            name = "AI Generated";

        }



        const existing =
            await wp.get("/categories",{

                params:{

                    search:name

                }

            });



        if(existing.data.length){

            return existing.data[0].id;

        }




        const created =
            await wp.post("/categories",{

                name

            });



        return created.data.id;



    }catch(error){


        console.log(
            "Category Error:",
            error.response?.data || error.message
        );


        throw error;

    }

}






module.exports = {


    createPost,


    getLatestPosts,


    getElementorTemplate,


    createElementorBlogPost,


    getOrCreateCategory


};