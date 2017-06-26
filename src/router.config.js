/**
 * Created by ccc on 2017/6/21.
 */
import Home from './components/Home.vue'
import Topic from './components/Topic.vue'

export default[
    {
        path: '/home',
        component: Home
    },
    {
        path: '/topic',
        component: Topic
    },
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '*',
        component: Home
    }
]