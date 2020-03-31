<template class="teste">
  <div class="container">
    <header>
        <div class="overlay"></div>
        <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop">
            <source src="./assets/video.mp4" type="video/mp4">
        </video>
        <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white">
                    <h1 class="display-3">Brewery Search</h1>
                    <p class="lead mb-0">Projeto de Bloco - Desenvolvimento Front-end</p>
                    <p class="lead mb-0">Assessment</p>
                </div>
            </div>
        </div>
    </header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Brewery Search</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/" class="nav-link">HOME </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/grupo" class="nav-link">O GRUPO</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/cervejarias" class="nav-link">BUSCAR CERVEJARIAS </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/contato" class="nav-link">CONTATO </router-link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MAPA DO SITE</a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Home</a>
          <a class="dropdown-item" href="#">Grupo</a>
          <a class="dropdown-item" href="#">Cervejarias</a>
          <!-- <div class="dropdown-divider"></div> -->
          <a class="dropdown-item" href="#">Contato</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Buscar no Site" aria-label="Search">
      <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
<router-view></router-view>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
