<template>
    <div class="container">
        <h1 class="display-3 text-center">Detalhes</h1>
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">{{ id }} - {{ cervejariasById(id).name }}</h4>
                <span class="card-title"> Endereço: {{ cervejariasById(id).street }}</span><br>
                <span class="card-title"> Cidade: {{ cervejariasById(id).city }}</span><br>
                <span class="card-title"> Estado: {{ cervejariasById(id).state }}</span><br>
                <span class="card-title"> Cep: {{ cervejariasById(id).postal_code }}</span><br>
                <span class="card-title"> Telefone: {{ cervejariasById(id).phone }}</span><br>
                <span class="card-title"> País: {{ cervejariasById(id).country }}</span><br>
                <span class="card-title"> Tipo da Cervejaria: {{ cervejariasById(id).brewery_type }}</span><br><br>
                <router-link to="/Cervejarias" class="btn btn-dark btn-lg btn-block">Voltar</router-link>
                <!-- <router-link><input type="button" class="btn btn-dark " value="Voltar" onClick="history.forward()"></router-link> -->
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
