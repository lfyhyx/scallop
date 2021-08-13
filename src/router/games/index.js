export default{
    path: '/games',
    component: () => import('@/views/games'),
    children: [
        {
            path: 'gamelist',
            component: () => import('@/components/Gamelist')
        }
    ]
}