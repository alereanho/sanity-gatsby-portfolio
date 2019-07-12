export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d28aab73011450b77c0ccef',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oep6ki92',
                  apiId: '40fdba54-bbbd-4a8e-aefc-bb206e2522a7'
                },
                {
                  buildHookId: '5d28aab7d3950eb8d524983d',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-mrkt9x7u',
                  apiId: '52370f87-0258-43a6-9afe-6f2adde1f333'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/alereanho/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-mrkt9x7u.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
