<template>
  <div class="grid-layout">
    <div class="cabecera">
      <h1>Análisis de Inversiones</h1>
    </div>
    <div class="inversiones">
      <table>
        <thead>
          <tr>
            <th>Cripto Moneda</th>
            <th>Perdidas</th>
            <th>Ganancias</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<style scoped>
.grid-layout {
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "a1 a1"
    "a2 a2";
}

.cabesera {
  grid-area: "a1";
}

.inversiones {
  grid-area: "a2";
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid rgb(0, 0, 0);
  color: black;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}
</style>
