import { defineField, defineType } from "sanity";


export const textSection = defineType({
    name: 'textSection',
    title: 'Text',
    type: 'object',
    fields: [
        defineField({
            name: 'text',
            title: 'Text',
            type: 'blockContent'

        })
    ]
})