<template>
  <div class="container pb-5">
    <div class="text-center">
      <h2 class="pb-5">Halaman Keranjang</h2>
    </div>
    <div class="row">
      <div class="col-md-4 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
          <span class="text-muted">Keranjangmu</span>
          <span class="badge badge-secondary badge-pill">{{ totalCart }}</span>
        </h4>
        <ul v-for="(item, id) in keranjang" :key="id" class="list-group mb-3">
          <li
            class="list-group-item d-flex justify-content-between lh-condensed"
          >
            <!-- <b @click="deleteKeranjang(item._id)">x</b> //Delete item -->
            <div>
              <h6 class="my-0">{{ item.nama }}</h6>
            </div>
            <span class="text-muted">Rp.{{ item.harga }}</span>
          </li>
        </ul>

        <div
          class="list-group-item d-flex justify-content-between bg-dark text-white"
        >
          <!-- Masih Error -->
          <span>Total Pembelian</span>
          <strong v-bind="totalHarga">Rp.{{ form.total_harga }}</strong>
        </div>
      </div>

      <!-- Data Pembeli -->
      <div class="col-md-8 order-md-1">
        <h4 class="mb-3">Data Pembeli</h4>
        <form @submit="sendData">
          <div class="mb-3">
            <label for="nama">Nama Lengkap</label>
            <input
              v-model="form.nama"
              type="text"
              class="form-control"
              placeholder="Albert Abraham"
              required
            />
          </div>

          <div class="mb-3">
            <label for="alamat">Alamat Pengiriman</label>
            <input
              v-model="form.alamat"
              type="text"
              class="form-control"
              placeholder="Jalan Panglima Sudirman No.xxx"
              required
            />
          </div>

          <h4 class="mb-3">Pembayaran</h4>
          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input
                id="transfer bank"
                v-model="form.pembayaran"
                type="radio"
                class="custom-control-input"
                value="transfer bank"
              />
              <label class="custom-control-label" for="transfer bank"
                >Transfer Bank</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                id="virtual account"
                v-model="form.pembayaran"
                type="radio"
                class="custom-control-input"
                value="virtual account"
              />
              <label class="custom-control-label" for="virtual account"
                >Virtual Account</label
              >
            </div>
            <div class="custom-control custom-radio">
              <input
                id="cod"
                v-model="form.pembayaran"
                type="radio"
                class="custom-control-input"
                value="cod"
              />
              <label class="custom-control-label" for="cod">Cod</label>
            </div>
          </div>

          <button class="btn btn-primary btn-lg btn-block" type="submit">
            Checkout
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeranjangComponent',
  props: {
    keranjang: {
      type: Array,
      required: true,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      fields: ['nama', 'harga'],
      form: {
        nama: '',
        alamat: '',
        pembayaran: 'cod',
        pembelian: this.keranjang,
        total_harga: 0,
      },
    }
  },

  computed: {
    totalCart() {
      return this.$store.state.listKeranjang.length
    },
    totalHarga() {
      return this.keranjang != null
        ? this.keranjang.map((item) => (this.form.total_harga += item.harga))
        : 0
    },
  },
  methods: {
    deleteKeranjang(value) {
      this.$store.dispatch('deleteKeranjang', value)
    },
    sendData() {
      this.$store.dispatch('postTransaksi', this.form)
    },
  },
}
</script>

<style></style>
