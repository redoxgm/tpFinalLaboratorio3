<template>
  <div class="grid">
    <div class="barraNavegacion">
      <nav>
        <router-link to="/">inicio</router-link> |
        <RouterLink to="/historialViews">Historial</RouterLink>|
        <RouterLink to="/analisisViewss">Analisis</RouterLink>|
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style>
.barraNavegacion {
  text-align: left;
  background-color: black;
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
