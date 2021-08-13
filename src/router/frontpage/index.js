export default{
    path: '/frontpage',
    component: () => import('@/views/frontpage'),
    children: [
        {
            path: 'gametype',
            component: () => import('@/components/Gametype')
        },
        {
            path: 'recommend',
            component: () => import('@/components/Recommend')
        },
        {
            path: 'comingsoon',
            component: () => import('@/components/Comingsoon')
        },
        {
            path: 'search',
            component: () => import('@/components/Search')
        },
        {
          path : '/frontpage',
          redirect : '/frontpage/recommend'
        }
    ]
}