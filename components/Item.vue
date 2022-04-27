<template>
  <b-card
    :title="item.nama"
    img-src="https://picsum.photos/600/300/?image=25"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem"
    class="m-3"
  >
    <b-card-text> Rp.{{ item.harga }} </b-card-text>

    <b-button variant="primary" @click="changeStatusPesanan(item._id)"
      >Pesan sekarang</b-button
    >
  </b-card>
</template>

<script>
export default {
  name: 'ItemComponent',
  props: {
    item: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  methods: {
    changeStatusPesanan(id) {
      this.$store.dispatch('changeStatusPesanan', id)
    },
  },
}
</script>

<style></style>
