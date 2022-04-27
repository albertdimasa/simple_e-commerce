/* eslint-disable eqeqeq */
/* eslint-disable no-console */

const state = () => ({
  listBarang: [],
  listTransaksi: [],
  listKeranjang: [],
})

const mutations = {
  setBarang(state, payload) {
    state.listBarang = payload
  },
  setTransaksi(state, payload) {
    state.listTransaksi = payload
  },
  setKeranjang(state, id) {
    state.listKeranjang.push(state.listBarang.find((item) => item._id == id))
    console.log(state.listKeranjang)
  },
}

const actions = {
  fetchBarang(store) {
    return this.$axios
      .$get(`http://localhost:5000/barang`)
      .then((response) => {
        store.commit('setBarang', response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
  changeStatusPesanan(store, id) {
    store.commit('setKeranjang', id)
  },
  fetchTransaksi(store) {
    return this.$axios
      .$get(`http://localhost:5000/payment`)
      .then((response) => {
        store.commit('setTransaksi', response)
      })
      .catch((error) => {
        console.log(error)
      })
  },
}

export default {
  state,
  mutations,
  actions,
}
