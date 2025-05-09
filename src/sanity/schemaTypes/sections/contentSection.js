import { defineField, defineType } from "sanity";


export const contentSection = defineType({
    name: 'contentSection',
    title: 'Content',
    type: 'object',
    fields: [
        defineField({
            name: 'headline',
            type: 'string'
        }),
        defineField({
            name: 'text',
            title: 'Text',
            type: 'string'
        }),
        defineField({
            name: 'image',
            type: 'image',
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string'
                })
            ]
        })
    ]
})