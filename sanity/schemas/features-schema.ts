const features = {
    name: "feature",
    title: "Features",
    type: "document",
    fields: [
        {
            name: "icon",
            title: "Icon",
            type: "image",
            fields: [{
                name: "alt",
                title: "Alt",
                type: "string"
            }]
        },
        {
            name: "heading",
            title: "Heading",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            rows: 5,
        },
    ]


};

export default features;