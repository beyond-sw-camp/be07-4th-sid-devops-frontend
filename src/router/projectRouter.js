
import projectCreate from "@/views/project/ProjectCreate2.vue"
import ProjectEdit from "@/views/project/ProjectEdit2.vue"
import ProjectList from "@/views/project/ProjectList.vue"
import ChatroomView from '@/views/member/ChatroomView.vue';
import ProjectView from "@/views/project/ProjectView.vue"
export const projectRouter = [

    {
        path: '/project-create',
        name: 'projectCreate',
        component: projectCreate
    },
    {
        path: '/project/list',
        name: 'ProjectList',
        component: ProjectList
    },
    {
        path: '/project-edit/:projectId',
        name: 'ProjectEdit',
        component: ProjectEdit
    },
    {
        path: '/project/:projectId',
        name: 'ProjectView',
        component: ProjectView
    },
    {
        path: '/project/:projectId/chatroom/:chatroomId',
        name: 'ChatroomView',
        component: ChatroomView,
    },

]
