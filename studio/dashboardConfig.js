export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
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
                  buildHookId: '62d3155235667d4b6471561f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-g6iervd4',
                  apiId: '196bd576-a734-4fbd-b33a-dd7a8c57db6e'
                },
                {
                  buildHookId: '62d31552a9f0614a6377c3c8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-4rgp8jtf',
                  apiId: '6c34fbe8-51aa-4dab-ad16-6dc5de329a75'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/micrometre/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-4rgp8jtf.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
