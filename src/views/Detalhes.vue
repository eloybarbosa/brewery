<template>
    <div class="container">
        <h1>Detalhes</h1>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{{ id }} - {{ cervejariasById(id).name }}</h5>
                <h5 class="card-title"> {{ cervejariasById(id).brewery_type }}</h5>

                <!-- <p class="card-text">{{ cervejariasById(id).body }}</p> -->
                <!-- <router-link tag="button" :to="{ name: 'detalhes' }" class="btn btn-dark">Voltar pra listagem</router-link> <button @click="editar" class="btn btn-dark">Editar Comentário</button> -->
                <!-- <router-view></router-view> -->
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'detalhes',
  data: function () {
    return { id: this.$route.params.id }
  },
  computed: mapGetters(['cervejariasById'])
}
</script>
