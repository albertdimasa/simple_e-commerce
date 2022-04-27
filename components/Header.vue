<template>
  <div>
    <b-navbar toggleable="sm" type="dark" variant="dark">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>

      <b-navbar-brand class="ml-5" to="/">Home</b-navbar-brand>

      <b-collapse id="nav-text-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/keranjang">
            <b-icon icon="cart-fill" variant="white" class="h4 my-auto">
            </b-icon>
            <b-badge class="bg-danger text-white p-1 my-auto">{{
              cart
            }}</b-badge>
          </b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto mr-5">
          <b-nav-item to="/transaksi" class="mr-auto"
            >Semua Transaksi</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  computed: {
    cart() {
      return this.$store.state.listKeranjang.length
    },
  },
  mounted() {},
  methods: {},
}
</script>
