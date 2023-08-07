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
    "area1 area1"
    "area2 area2";
}

.cabecera {
  background-color: tomato;
  grid-area: area1;
  color: black;
}

.inversiones {
  background-color: brown;
  grid-area: area2;
  color: black;
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid black;
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
