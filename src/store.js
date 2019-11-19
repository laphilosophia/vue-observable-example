import Vue from 'vue'

export const store = Vue.observable({
    datas: []
})

export const mutations = {
    setDatas (payload) {
        store.datas = payload
    }
}