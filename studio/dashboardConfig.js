export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1bbfdf9e05aa1f80ada554',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-npz9sofu',
                  apiId: 'd1aca45c-9c71-4c04-a979-dce459a0c807'
                },
                {
                  buildHookId: '5e1bbfe0fba3937d3f35a7b3',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ansahpz8',
                  apiId: '5a44e988-9c09-4a36-81a5-627ae59a9cf5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/shiggityshwah/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ansahpz8.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
