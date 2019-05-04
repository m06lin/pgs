import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '@/components/LoginPage';
import Header from '@/components/Header';
import IndexPage from '@/components/IndexPage';
import Main from '@/components/Main';
import MonitorSidebar from '@/components/Monitor/Sidebar';
import MonitorPage from '@/components/Monitor/MonitorPage';
import SettingSidebar from '@/components/Setting/Sidebar';
import MapContentPage from '@/components/Setting/MapContentPage';
// import ToDoList from '@/components/ToDoList';
// import TimeCounter from '@/components/TimeCounter';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      components: {
        main: LoginPage,
      },
    },
    {
      path: '/index',
      name: 'index',
      components: {
        nav: Header,
        main: IndexPage,
      },
    },
    {
      path: '/monitor',
      name: 'monitor',
      components: {
        nav: Header,
        main: Main,
      },
      children: [{
        path: '/monitor',
        components: {
          sidebar: MonitorSidebar,
          content: MonitorPage,
        },
      }],
    },
    {
      path: '/setting',
      name: 'setting',
      components: {
        nav: Header,
        main: Main,
      },
      children: [{
        path: '/setting',
        components: {
          sidebar: SettingSidebar,
          content: MapContentPage,
        },
      }],
    },
    // {
    //   path: '/todo',
    //   name: 'toDoList',
    //   components: {
    //     default: ToDoList,
    //     nav: Header,
    //   },
    // },
    // {
    //   path: '/time',
    //   name: 'timeCounter',
    //   components: {
    //     default: TimeCounter,
    //     nav: Header,
    //   },
    // },
    {
      path: '*',
      redirect: '/',
    },
  ],
});
