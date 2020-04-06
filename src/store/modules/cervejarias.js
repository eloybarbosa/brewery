import axios from 'axios'

const state = {
  cervejarias: [
    // {
    //   id: '2',
    //   name: 'Avondale Brewing Co',
    //   brewery_type: 'micro',
    //   street: '201 41st St S',
    //   city: 'Birmingham',
    //   state: 'Alabama',
    //   postal_code: '35222-1932',
    //   website_url: 'http://www.avondalebrewing.com',
    //   phone: '2057775456',
    //   created_at: '2018-07-24 01:32:47.255559',
    //   updated_at: '2018-08-23 23:19:57.82527',
    //   country: 'United States',
    //   longitude: '-86.774322',
    //   latitude: '33.524521'
    // }
  ]
}

const getters = {
  allCervejarias: state => state.cervejarias,
  cervejariasById: (state) => (id) => (state.cervejarias.filter(c => c.id === id))[0]
}

const actions = {
  getCervejarias ({ commit }) {
    axios.get(
      'https://api.openbrewerydb.org/breweries'
    ).then((response) => {
      commit('getCervejarias', response.data)
    })
  }
}

const mutations = {
  getCervejarias: (state, cervejarias) => (state.cervejarias = cervejarias)

}

export default {
  state,
  actions,
  getters,
  mutations
}
