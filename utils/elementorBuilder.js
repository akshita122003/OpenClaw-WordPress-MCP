function generateElementorJSON(data) {

    const sections = [];

    const sectionsList = data.sections || [];

    const latestPosts = data.latestPosts || [];


    // ==========================
    // HERO SECTION
    // ==========================

    if (sectionsList.includes("hero")) {

        sections.push({

            id: "hero001",

            elType: "section",

            settings: {
                layout: "boxed"
            },

            elements: [

                {

                    id: "hero-left-column",

                    elType: "column",

                    settings: {
                        _column_size: 50
                    },

                    elements: [

                        {
                            id: "hero-heading",

                            elType: "widget",

                            widgetType: "heading",

                            settings: {

                                title:
                                data.title || "AI Web Development Blog"

                            }

                        },


                        {
                            id: "hero-text",

                            elType: "widget",

                            widgetType: "text-editor",

                            settings: {

                                editor:
                                "Learn latest trends, tutorials and insights about AI and modern web development."

                            }

                        },


                        {
                            id: "hero-button",

                            elType: "widget",

                            widgetType: "button",

                            settings: {

                                text:
                                "Read Latest Blogs"

                            }

                        }

                    ]

                },


                {

                    id:"hero-right-column",

                    elType:"column",

                    settings:{
                        _column_size:50
                    },

                    elements:[


                        {

                            id:"hero-image",

                            elType:"widget",

                            widgetType:"image",

                            settings:{

                                image:{

                                    url:
                                    "http://localhost/elementor/wp-content/uploads/2026/06/OIP.jpg"

                                }

                            }

                        }


                    ]

                }

            ]

        });

    }




    // ==========================
    // FEATURED POSTS
    // ==========================

    if (sectionsList.includes("featured-posts")) {


        sections.push({

            id:"featured001",

            elType:"section",

            settings:{},

            elements:[


                {

                    id:"featured-column",

                    elType:"column",

                    settings:{
                        _column_size:100
                    },


                    elements:[


                        {

                            id:"featured-heading",

                            elType:"widget",

                            widgetType:"heading",

                            settings:{

                                title:
                                "Featured Articles"

                            }

                        },


                        {

                            id:"featured-box",

                            elType:"widget",

                            widgetType:"image-box",

                            settings:{

                                title_text:
                                "AI Web Development Trends",


                                description_text:
                                "Explore how AI is changing modern websites."

                            }

                        }


                    ]

                }


            ]

        });


    }




    // ==========================
    // DYNAMIC BLOG GRID
    // ==========================

    if (sectionsList.includes("blog-grid")) {


        const blogColumns = latestPosts.map((post,index)=>{


            return {


                id:`blog-column-${index}`,

                elType:"column",

                settings:{

                    _column_size:33

                },


                elements:[


                    {

                        id:`blog-image-${index}`,

                        elType:"widget",

                        widgetType:"image",

                        settings:{

                            image:{

                                url:
                                post.image || ""

                            }

                        }

                    },


                    {

                        id:`blog-title-${index}`,

                        elType:"widget",

                        widgetType:"heading",

                        settings:{

                            title:
                            post.title

                        }

                    },


                    {

                        id:`blog-excerpt-${index}`,

                        elType:"widget",

                        widgetType:"text-editor",

                        settings:{

                            editor:
                            post.excerpt

                        }

                    },


                    {

                        id:`blog-button-${index}`,

                        elType:"widget",

                        widgetType:"button",

                        settings:{

                            text:
                            "Read More",

                            link:{

                                url:
                                post.link

                            }

                        }

                    }


                ]

            };


        });



        sections.push({

            id:"blog-grid001",

            elType:"section",

            settings:{},


            elements:[


                {

                    id:"blog-heading-column",

                    elType:"column",

                    settings:{

                        _column_size:100

                    },


                    elements:[


                        {

                            id:"latest-blog-heading",

                            elType:"widget",

                            widgetType:"heading",

                            settings:{

                                title:
                                "Latest Blogs"

                            }

                        }


                    ]

                },


                ...blogColumns


            ]

        });


    }





    // ==========================
    // FAQ
    // ==========================

    if (sectionsList.includes("faq")) {


        sections.push({

            id:"faq001",

            elType:"section",

            settings:{},


            elements:[


                {

                    id:"faq-column",

                    elType:"column",

                    settings:{
                        _column_size:100
                    },


                    elements:[


                        {

                            id:"faq-heading",

                            elType:"widget",

                            widgetType:"heading",

                            settings:{

                                title:
                                "Frequently Asked Questions"

                            }

                        },


                        {

                            id:"faq-widget",

                            elType:"widget",

                            widgetType:"accordion",

                            settings:{

                                tabs:[

                                    {
                                        tab_title:
                                        "What is AI Web Development?"
                                    },


                                    {
                                        tab_title:
                                        "How can AI help developers?"
                                    }

                                ]

                            }

                        }


                    ]

                }


            ]

        });


    }





    // ==========================
    // NEWSLETTER
    // ==========================

    if (sectionsList.includes("newsletter")) {


        sections.push({

            id:"newsletter001",

            elType:"section",

            settings:{},


            elements:[


                {

                    id:"newsletter-column",

                    elType:"column",

                    settings:{
                        _column_size:100
                    },


                    elements:[


                        {

                            id:"newsletter-title",

                            elType:"widget",

                            widgetType:"heading",

                            settings:{

                                title:
                                "Subscribe For Latest Updates"

                            }

                        },


                        {

                            id:"newsletter-button",

                            elType:"widget",

                            widgetType:"button",

                            settings:{

                                text:
                                "Subscribe Now"

                            }

                        }


                    ]

                }


            ]

        });


    }



    return JSON.stringify(sections);

}



module.exports = {

    generateElementorJSON

};