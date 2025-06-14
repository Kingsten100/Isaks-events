import { BlockContentIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";


export const heroSection = defineType({
    name: 'heroSection',
    title: 'Hero',
    type: 'object',
    icon: BlockContentIcon,
    fields: [
        defineField({
            name: 'headline',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'image',
            type: 'image',
            options: { hotspot: true},
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string'
                }),
                defineField({
                    name: 'darken',
                    type: 'number',
                    description: 'Darkness overlay of the image in percentage'
                })
            ]
        })
    ]
})