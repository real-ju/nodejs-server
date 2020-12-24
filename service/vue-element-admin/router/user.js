const express = require('express');

let router = express.Router();

router.post('/login', (req, res, next) => {
    let params = req.body;
    if(params.username == 'admin'&&params.password == '123456') {
        res.status(200).json({
            code: 200,
            data: {
                token: 'token_text',
                user: {
                    platform: {
                        symbol: 'default'
                    },
                    role: {
                        name: '系统管理员',
                        pers: ['dashboard/view-order-chart', 'per-manage/add-action-per']
                    }
                }
            },
            msg: '登陆成功'
        })
    }
    else {
        res.status(400).json({
            code: 400,
            data: null,
            msg: '用户名或密码错误'
        })
    }
})

router.get('/route', (req, res, next) => {
    res.status(200).json({
        code: 200,
        data: [
            {
                name: 'dashboard',
                route: 'dashboard',
                title: '控制台',
                common: 1
            },
            {
                name: 'role-manage',
                route: 'role-manage',
                title: '角色管理',
                common: 1
            },
            {
                name: 'user-manage',
                route: 'user-manage',
                title: '用户管理',
                common: 1
            },
            {
                name: 'platform-manage',
                route: 'platform-manage',
                title: '平台管理',
                common: 0
            },
            {
                name: 'route-per',
                route: 'route-per',
                title: '路由权限',
                common: 0
            },
            {
                name: 'action-per',
                route: 'action-per',
                title: '功能权限',
                common: 0
            },
            {
                name: 'menu-manage',
                route: 'menu-manage',
                title: '菜单管理',
                common: 0
            }
        ],
        msg: 'OK'
    })
})

router.get('/menu', (req, res, next) => {
    res.status(200).json({
        code: 200,
        data: [
            {
                name: 'dashboard',
                title: '控制台',
                icon: 'el-icon-odometer',
                is_link: 1,
                route: 'dashboard',
                children: null
            },
            {
                name: 'system-manage',
                title: '系统配置',
                icon: 'el-icon-set-up',
                is_link: 0,
                route: null,
                children: [
                    {
                        name: 'role-manage',
                        title: '角色管理',
                        icon: null,
                        is_link: 1,
                        route: 'role-manage',
                        children: null
                    },
                    {
                        name: 'user-manage',
                        title: '用户管理',
                        icon: null,
                        is_link: 1,
                        route: 'user-manage',
                        children: null
                    }
                ]
            },
            {
                name: 'per-manage',
                title: '鉴权管理',
                icon: 'el-icon-warning',
                is_link: 0,
                route: null,
                children: [
                    {
                        name: 'platform-manage',
                        title: '平台管理',
                        icon: null,
                        is_link: 1,
                        route: 'platform-manage',
                        children: null
                    },
                    {
                        name: 'route-per',
                        title: '路由权限',
                        icon: null,
                        is_link: 1,
                        route: 'route-per',
                        children: null
                    },
                    {
                        name: 'action-per',
                        title: '功能权限',
                        icon: null,
                        is_link: 1,
                        route: 'action-per',
                        children: null
                    }
                ]
            },
            {
                name: 'menu-manage',
                title: '菜单管理',
                icon: 'el-icon-menu',
                is_link: 1,
                route: 'menu-manage',
                children: null
            }
        ],
        msg: 'OK'
    })
})

module.exports = router;