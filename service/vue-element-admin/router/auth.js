const express = require('express');

let router = express.Router();

router.get('/role', (req, res, next) => {
    res.status(200).json({
        code: 200,
        data: {
            list: [
                {
                    name: '管理员1'
                }
            ],
            total: 1
        },
        msg: 'OK'
    })
})

router.get('/platform_per_info', (req, res, next) => {
    res.status(200).json({
        code: 200,
        data: {
            routes: [
                {
                    route: 'dashboard',
                    title: '控制台'
                },
                {
                    route: 'role-manage',
                    title: '角色管理'
                },
                {
                    route: 'user-manage',
                    title: '用户管理'
                },
                {
                    route: 'my-profile',
                    title: '个人资料'
                }
            ],
            actions: [
                {
                    name: '添加角色',
                    value: 'role/add'
                },
                {
                    name: '添加用户',
                    value: 'user/add'
                }
            ]
        },
        msg: 'OK'
    })
})

module.exports = router;