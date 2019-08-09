<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn 
          class="nav-burger" 
          flat 
          dense 
          round 
          @click="leftDrawerOpen = !leftDrawerOpen" 
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="absolute-center">
          //TODO
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          v-for="nav in navs"
          :key="nav.label"
          :icon="nav.icon"
          :label="nav.label"
          :to="nav.to"
        />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
      :breakpoint="767"
      :width="200">
      <q-list>
        <q-item-label header>Navigation</q-item-label>
        <q-item v-for="nav in navs" :key="nav.label" exact clickable :to="nav.to">
          <q-item-section avatar>
            <q-icon :name="nav.icon" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar';

export default {
  name: 'Layout',
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Lists',
          icon: 'list',
          to: '/'
        },
        {
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    };
  },
  methods: {
    openURL
  }
};
</script>

<style>
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none
    }
  }
  @media screen and (max-width: 768px) {
    .nav-burger {
      display: none
    }
  }
</style>
