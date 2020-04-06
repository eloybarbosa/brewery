<template>
  <div class="container">
    <section class="background pb-5">
      <h1 class="display-3 text-center">Cervejarias</h1>
      <div v-for="cervejaria in allCervejarias" :key="cervejaria.id">
        <div class="card">
          <div class="card-body">
            <h5 class="card-tittle">{{ cervejaria.name }}</h5>
            <p class="card-text">{{ cervejaria.state }}</p>
            <router-link :to="{name: 'Detalhes', params: { id: cervejaria.id } }" class="btn btn-dark">Detalhes</router-link>
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
