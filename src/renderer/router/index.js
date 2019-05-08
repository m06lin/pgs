import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '@/components/LoginPage';
import Header from '@/components/Header';
import IndexPage from '@/components/IndexPage';
import Main from '@/components/Main';
import MonitorSidebar from '@/components/Monitor/Sidebar';
import MonitorPage from '@/components/Monitor/MonitorPage';
import MapContentSidebar from '@/components/Setting/MapContent/Sidebar';
// import MapEditorPage from '@/components/Setting/MapContent/MapEditorPage';
import MapContentPage from '@/components/Setting/MapContent/MapContentPage';
import ParkingSidebar from '@/components/Setting/Parking/Sidebar';
import ParkingPage from '@/components/Setting/Parking/ParkingPage';
import LogsSidebar from '@/components/Setting/Logs/Sidebar';
import LogsPage from '@/components/Setting/Logs/LogsPage';
import WatchdogSidebar from '@/components/Setting/Watchdog/Sidebar';
import WatchdogPage from '@/components/Setting/Watchdog/WatchdogPage';
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
      components: {
        nav: Header,
        main: Main,
      },
      children:
      [
        {
          path: '/monitor',
          name: 'monitor',
          components: {
            sidebar: MonitorSidebar,
            content: MonitorPage,
          },
        },
      ],
    },
    {
      path: '/setting',
      name: 'setting',
      components: {
        nav: Header,
        main: Main,
      },
      children:
      [
        {
          path: '/setting/mapContent',
          name: 'map',
          components: {
            sidebar: MapContentSidebar,
            content: MapContentPage,
          },
        },
        {
          path: '/setting/parkingContent',
          name: 'parking',
          components: {
            sidebar: ParkingSidebar,
            content: ParkingPage,
          },
        },
        {
          path: '/setting/logsContent',
          name: 'logs',
          components: {
            sidebar: LogsSidebar,
            content: LogsPage,
          },
        },
        {
          path: '/setting/watchdogContent',
          name: 'watchdog',
          components: {
            sidebar: WatchdogSidebar,
            content: WatchdogPage,
          },
        },
      ],
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
      redirect: '/monitor',
    },
  ],
});
