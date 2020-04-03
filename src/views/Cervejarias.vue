<template>
  <div class="container">
    <section class="background pb-5">
      <h1 class="display-3 text-center">Cervejarias</h1>
      <div v-for="cervejaria in allCervejarias" :key="cervejaria.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-tittle">{{ cervejaria.name }}</h5>
            <p class="card-text">{{ cervejaria.website_url }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Cervejarias',
  methods: {
    ...mapActions(['getCervejarias'])
  },
  computed: mapGetters(['allCervejarias']),
  created () {
    this.getCervejarias()
  }
}
</script>
