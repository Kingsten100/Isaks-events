import { defineArrayMember, defineField, defineType } from "sanity";



export const pageType = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            validation: rule => rule.required()
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
            title: 'Meta description',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'sections',
            type: 'array',
            of: [
                defineArrayMember({ type: 'heroSection' }),
                defineArrayMember({ type: 'eventsSection' }),
                defineArrayMember({ type: 'contentSection' }),
                defineArrayMember({ type: 'titleSection' }),
                defineArrayMember({ type: 'textSection' }),
                defineArrayMember({ type: 'pictureSection' })
            ]
        })

    ]
})