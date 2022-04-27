<template>
  <div>
    <Header />
    <div class="d-flex flex-wrap justify-content-center container my-5">
      <!-- Menampilkan semua transaksi -->
      <b-table striped bordered hover :items="transaksi" :fields="fields">
        <template #cell(status_pesanan)="data">
          <b v-if="data.item.status_pesanan" class="text-success">Sukses</b>
          <b v-else class="text-danger">Belum dibayar</b>
        </template>
        <template #cell(pembelian)="data">
          <ul v-for="list in data.item.pembelian" :key="list.id">
            <li>{{ list.nama }}: Rp. {{ list.harga }}</li>
          </ul>
        </template>
        <template #cell(total_harga)="data">
          <i>Rp.{{ data.item.total_harga }}</i>
        </template>
        <template #cell(action)>
          <b-button variant="danger">Hapus</b-button>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransaksiPage',
  data() {
    return {
      fields: [
        'nama',
        'alamat',
        { key: 'pembelian', label: 'Barang yang dibeli' },
        'pembayaran',
        'total_harga',
        'status_pesanan',
        { key: 'action', label: 'Action' },
      ],
    }
  },
  computed: {
    transaksi() {
      return this.$store.state.listTransaksi
    },
  },
  mounted() {
    this.fetchTransaksi()
  },
  methods: {
    fetchTransaksi() {
      this.$store.dispatch('fetchTransaksi')
    },
  },
}
</script>

<style></style>
