<template>
  <div class="grid-layout">
    <!-- <HelloWorld msg="borrar despues" /> -->
    <div class="barraSuperior">
      <p>Usuario: <input type="text" /></p>

      <h1>CRIPTOWALLET</h1>
    </div>

    <div class="compra">
      <p>Comprar</p>
      <select name="criptoMoneda" id="criptoVender">
        <option value="btc">BitCoin</option>
        <option value="ETH">Etherium</option>
        <option value="USDT">Tether</option>
        <option value="BNB">BNB</option>
        <option value="USDC">USD Coin</option>
        <option value="DOGE">Dogecoin</option>
      </select>
      <input type="text" />
      <p>precio:</p>
    </div>

    <div class="venta">
      <p>venta</p>
      <select name="criptoMoneda" id="criptoVender">
        <option value="btc">BitCoin</option>
        <option value="ETH">Etherium</option>
        <option value="USDT">Tether</option>
        <option value="BNB">BNB</option>
        <option value="USDC">USD Coin</option>
        <option value="DOGE">Dogecoin</option>
      </select>
      <input type="text" />
      <p>precio:</p>
    </div>

    <div class="criptoMonedas">
      <p class="compraVenta">compra</p>
      <p class="compraVenta">venta</p>
      <p>BitCoin</p>
      <p>Etherium</p>
      <p>Tether</p>
      <p>BNB</p>
      <p>USD Coin</p>
      <p>Dogecoin</p>
    </div>
  </div>
</template>

<style>
.grid-layout {
  display: grid;

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
  grid-area: n1;
  width: 100%;
  height: 100%;
}

.compra {
  background-color: rgb(5, 3, 3);
  grid-area: n2;
  width: 100%;
  height: 100%;
}

.venta {
  background-color: rgb(234, 228, 228);
  grid-area: n3;
  width: 100%;
  height: 100%;
}

.barraNavegacion {
  text-align: left;
  background-color: black;
  width: 100%;
  height: 100%;
  grid-area: "barra";
}

.criptoMonedas {
  grid-area: n4;
  width: 100%;
  height: 100%;
  text-align: left;
}

.compraVenta {
  text-align: center;
}
</style>

<script>
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
</script>
