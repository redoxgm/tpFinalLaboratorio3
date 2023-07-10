<template>
  <div class="grid-layout">
    <!-- <HelloWorld msg="borrar despues" /> -->
    <div class="barraSuperior">
      <p id="usuario">Usuario: <input id="txtUsuario" type="text" /></p>

      <h1>CRIPTOWALLET</h1>
    </div>

    <div class="compra">
      <p class="txt">Comprar</p>
      <select class="opcionCripto" name="criptoMoneda" id="criptoVender">
        <option value="btc">BitCoin</option>
        <option value="ETH">Etherium</option>
        <option value="USDT">Tether</option>
        <option value="BNB">BNB</option>
        <option value="USDC">USD Coin</option>
        <option value="DOGE">Dogecoin</option>
      </select>
      <input type="text" />
      <p class="txt">precio:</p>
    </div>

    <div class="venta">
      <p class="txt">venta</p>
      <select class="opcionCripto" name="criptoMoneda" id="criptoVender">
        <option value="btc">BitCoin</option>
        <option value="ETH">Etherium</option>
        <option value="USDT">Tether</option>
        <option value="BNB">BNB</option>
        <option value="USDC">USD Coin</option>
        <option value="DOGE">Dogecoin</option>
      </select>
      <input type="text" />
      <p class="txt">precio:</p>
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
  background-color: rgb(5, 3, 3);
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
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
</script>
