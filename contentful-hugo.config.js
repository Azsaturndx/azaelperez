// go to https://github.com/ModiiMedia/contentful-hugo#configuration for configuration instructions

/**
 * @type {import('contentful-hugo').ContentfulHugoConfig}
 */
module.exports = {
    locales: ['en-US'], // uses default locale if left empty
    contentful: {
        environment: 'master'
    },
    singleTypes: [],
    repeatableTypes: [
        {
            id: 'blogPost',
            directory: 'content/posts',
            mainContent: 'body',
            resolveEntries: {
                categories: 'fields.slug',
                author: 'fields.author',
                relatedPosts: 'sys.id'
            }
        }
    ]
    ,
};