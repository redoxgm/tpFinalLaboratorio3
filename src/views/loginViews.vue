<template>
  <div class="grid-layout">
    <div class="barraSuperior">
      <p id="usuario">
        Usuario: <input id="txtUsuario" type="text" v-model="usuario" />
      </p>
      <p>usuario {{ usuario }}</p>
      <h1>CRIPTOWALLET</h1>
    </div>

    <div class="compra">
      <p class="txt">Comprar</p>
      <select
        class="opcionCripto"
        name="criptoMoneda"
        id="compra"
        v-model="opcionCompra"
      >
        <option
          v-for="opcion in opciones"
          :key="opcion.valor"
          :value="opcion.valor"
        >
          {{ opcion.cripto }}
        </option>
      </select>
      <input type="text" />
      <p class="txt">precio:</p>
    </div>

    <div class="venta">
      <p class="txt">venta</p>
      <select
        class="opcionCripto"
        name="criptoMoneda"
        id="venta"
        v-model="opcionVenta"
      >
        <option
          v-for="opcion in opciones"
          :key="opcion.valor"
          :value="opcion.valor"
        >
          {{ opcion.cripto }}
        </option>
      </select>
      <input type="text" />
      <p class="txt">precio:</p>
    </div>
    <div class="estadoActual">
      <h1>Analisis de Estado</h1>
      <h1>Total Ivertido:</h1>
      <table>
        <thead>
          <tr>
            <th>CriptoMoneda</th>
            <th>Cantidad</th>
            <th>Valor Monetario</th>
            <th>Accion</th>
          </tr>
        </thead>
      </table>
    </div>
  </div>
</template>

<style scoped>
.grid-layout {
  display: grid;
  background-color: blue;
  width: 100%;
  height: 100%;
  grid-template-areas:
    "barra barra"
    "n1 n1"
    "n2 n3"
    "n4 n4";
}

.barraSuperior {
  background-color: tomato;
  color: black;
  grid-area: n1;
  width: 100%;
  height: 100%;
  grid-area: "barra";
}

.compra {
  background-color: rgb(5, 3, 3);
  grid-area: n2;
  width: 100%;
  height: 100%;
}

.venta {
  background-color: rgb(5, 3, 3);
  grid-area: n3;
  width: 100%;
  height: 100%;
}

.estadoActual {
  color: black;
  grid-area: n4;
  background-color: brown;
}

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid rgb(0, 0, 0);
}

thead th:nth-child(1) {
  width: 40%;
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

.opcionCripto {
  display: inline-block;
  vertical-align: text-bottom;
  background-color: white;
  color: black;
  border: none;
  border-radius: 20px;

  width: 100px;
  height: 20px;
}

.txt {
  color: white;
}

.criptoMonedas {
  grid-area: n4;
  width: 100%;
  height: 100%;
  text-align: left;
}

#usuario {
  position: absolute;
  right: 150px;
  width: 200px;
}

#txtUsuario {
  right: 200px;
  width: 200px;
  height: 25px;
  border: none;
  border-radius: 20px;
}

.compraVenta {
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      usuario: "",
      opcionCompra: "",
      opcionVenta: "",
      opciones: [
        { valor: "btc", cripto: "BitCoin" },
        { valor: "ETH", cripto: "Etherium" },
        { valor: "USDT", cripto: "Tether" },
        { valor: "BNB", cripto: "BNB" },
        { valor: "USDC", cripto: "USDC" },
      ],
    };
  },
  mounted() {
    if (localStorage.usuario) {
      this.usuario = localStorage.usuario;
    }
  },
  watch: {
    usuario(newUsuario) {
      localStorage.usuario = newUsuario;
    },
  },
  methods: {},
};
// import HelloWorld from "@/components/HelloWorld.vue";
// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// }
</script>
