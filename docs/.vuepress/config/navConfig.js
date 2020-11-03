module.exports = [
    {text: '首页', link: '/'},
    {
        text: '笔记',
        link: '/note/',  //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
            {
                text: 'PHP',
                items: [
                    {text: 'PHP', link: '/note/javascript/'},
                    {text: 'Python', link: '/note/es6/'},
                ]
            }
        ]
    },
    {
        text: '更多',
        link: '/more/',
        items: [
            {text: '学习', link: '/pages/f2a556/'},
            {text: '面试', link: '/pages/aea6571b7a8bae86/'},
            {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
            {text: '友情链接', link: '/friends/'},
        ]
    },
    {text: '关于', link: '/about/'},
    {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
        items: [
            {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
            {text: '资源', link: '/pages/eee83a9211a70f9d/'},
            {text: 'Vue资源', link: '/pages/12df8ace52d493f6/'},
        ]
    },
    {
        text: '索引',
        link: '/archives/',
        items: [
            {text: '分类', link: '/categories/'},
            {text: '标签', link: '/tags/'},
            {text: '归档', link: '/archives/'},
        ]
    }
]