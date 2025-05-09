import { defineField, defineType } from "sanity";


export const pictureSection = defineType({
    name: 'pictureSection',
    title: 'Picture',
    type: 'object',
    fields: [
        defineField({
            name: 'picture',
            title: 'Picture',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                })
            ]
        })
    ]
})