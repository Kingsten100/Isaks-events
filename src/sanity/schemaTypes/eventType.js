import { defineField, defineType } from "sanity";


export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'date'
        }),
        defineField({
            name: 'time',
            title: 'Time',
            type: 'string'
        }),
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: { hotspot: true},
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt text',
                    type: 'string'
                })
            ]
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string'
        })
    ]
})