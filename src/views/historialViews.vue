<template>
  <div class="grid-layout">
    <div class="cabecera">
      <h1>Historial de transacciones</h1>
    </div>

    <div class="historial">
      <table>
        <thead>
          <tr>
            <th>Cripto Moneda</th>
            <th>Compra/Venta</th>
            <th>Precio Transacción</th>
            <th>Cantida de Criptos</th>
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

.cabecera {
  grid-area: a1;
  background-color: tomato;
  color: black;
}

.historial {
  grid-area: a2;
  background-color: rgb(185, 33, 33);
}
</style>
