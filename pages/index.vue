<template>
  <div>
    <Header />
    <div class="d-flex flex-wrap justify-content-center">
      <Item v-for="(item, id) in data" :key="id" :item="item" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    data() {
      return this.$store.state.listBarang
    },
  },
  mounted() {
    this.fetchBarang()
  },
  methods: {
    fetchBarang() {
      this.$store.dispatch('fetchBarang')
    },
  },
}
</script>
