/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import Swal from 'sweetalert2'
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
  },
  deleteKeranjang(state, id) {
    state.listKeranjang.splice(id, 1)
    console.log(state.listKeranjang)
  },
  emptyKeranjang(state) {
    state.listKeranjang = []
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
  changeStatusPesanan(store, id) {
    store.commit('setKeranjang', id)
  },
  deleteKeranjang(store, id) {
    store.commit('deleteKeranjang', id)
  },
  postTransaksi(store, value) {
    return this.$axios
      .post(`http://localhost:5000/payment`, value, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        Swal.fire({
          type: 'success',
          title: 'Berhasil Melakukan Pembelian',
          showConfirmButton: false,
          timer: 1500,
        })
        store.commit('emptyKeranjang')
      })
      .catch((err) => {
        Swal.fire({
          type: 'error',
          title: 'Oops...',
          text: err,
          footer: '<a href="">Why do I have this issue?</a>',
        })
        console.log(err)
      })
  },
}

export default {
  state,
  mutations,
  actions,
}
