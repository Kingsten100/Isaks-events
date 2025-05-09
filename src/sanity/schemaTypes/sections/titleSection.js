import { defineField, defineType } from "sanity";


export const titleSection = defineType({
    name: 'titleSection',
    title: 'Title',
    type: 'object',
    fields: [
        defineField({
            name: 'headline',
            title: 'Title',
            type: 'string'
        })
    ]
})