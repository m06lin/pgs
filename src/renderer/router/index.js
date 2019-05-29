import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from '@/components/LoginPage';
//
import Header from '@/components/Header';
import IndexPage from '@/components/IndexPage';
//
import Monitor from '@/components/Monitor';
import MonitorSidebar from '@/components/Monitor/Sidebar';
import MonitorPage from '@/components/Monitor/MonitorPage';
//
import Setting from '@/components/Setting';
import SettingSidebar from '@/components/Setting/Sidebar';
import MapContentPage from '@/components/Setting/MapContent/MapContentPage';
import MapEditorSidebar from '@/components/Setting/MapContent/Sidebar';
import AreaEditorPage from '@/components/Setting/MapContent/AreaEditorPage';
import MapEditorPage from '@/components/Setting/MapContent/MapEditorPage';
import MapEditorPage2 from '@/components/Setting/MapContent/MapEditorPage2';
import ParkingPage from '@/components/Setting/ParkingPage';
import WatchdogPage from '@/components/Setting/WatchdogPage';
//
import LogsPage from '@/components/LogsPage';

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
        main: Monitor,
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
        main: Setting,
      },
      children:
      [
        {
          path: '/setting/mapContent',
          name: 'map',
          components: {
            sidebar: SettingSidebar,
            content: MapContentPage,
          },
        },
        {
          path: '/setting/areaEditor/:id',
          name: 'areaEditor',
          components: {
            sidebar: SettingSidebar,
            content: AreaEditorPage,
          },
        },
        {
          path: '/setting/mapEditor/:id',
          name: 'mapEditor',
          components: {
            sidebar: SettingSidebar,
            content: MapEditorPage,
          },
        },
        {
          path: '/setting/mapEditor2/:id',
          name: 'editor2',
          components: {
            sidebar: MapEditorSidebar,
            content: MapEditorPage2,
          },
        },
        {
          path: '/setting/parkingContent',
          name: 'parking',
          components: {
            sidebar: SettingSidebar,
            content: ParkingPage,
          },
        },
        {
          path: '/setting/watchdogContent',
          name: 'watchdog',
          components: {
            sidebar: SettingSidebar,
            content: WatchdogPage,
          },
        },
        {
          path: '/setting',
          redirect: '/setting/mapContent',
        },
      ],
    },
    {
      path: '/logsContent',
      components: {
        nav: Header,
        main: LogsPage,
      },
    },
    {
      path: '*',
      redirect: '/monitor',
    },
  ],
});
