<template>
  <div>
    <Header />
    <div class="d-flex flex-wrap container mt-5">
      <Keranjang :keranjang="keranjang" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'KeranjangPage',
  computed: {
    keranjang() {
      return this.$store.state.listKeranjang
    },
  },
}
</script>

<style></style>
