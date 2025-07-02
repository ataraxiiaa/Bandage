import { defineType } from 'sanity'

export const member = defineType({
    name: 'member',
    title: 'Member',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'position',
            title: 'Position',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'url',
        },
    ],
})