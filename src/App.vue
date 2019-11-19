<template>
  <div id="app">
    <button @click="fetch">Fetch Datas</button>

    <div v-if="!getDatas.length">Waiting for Datas...</div>

    <div v-if="getDatas.length">
      <div v-for="data in getDatas" :key="data.id">
        <h5>{{ data.title }}</h5>
        <p>{{ data.body }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store, mutations } from './store'

export default {
  name: 'app',
  computed: {
    getDatas () {
      return store.datas
    }
  },
  methods: {
    setDatas: mutations.setDatas,
    async fetch () {
      const req = await window.fetch('http://jsonplaceholder.typicode.com/posts')
      const res = await req.json()

      return this.setDatas(res)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
