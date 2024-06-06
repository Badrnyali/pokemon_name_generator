<script setup>
import { ref } from "vue";
import { useFetch } from "nuxt/app";

const pokemonName = ref("");

const submit = async () => {
  const { data, error } = await useFetch("/api/pokemon");
  if (!error.value) {
    pokemonName.value = data.value.pokemonName;
  } else {
    console.error(error.value);
  }
};
</script>

<template>
  <header class="relative h-[350px] w-full">
    <div class="overlay"></div>
    <h1
      class="absolute w-full text-center left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[100] text-5xl md:text-7xl text-black font-semibold"
    >
      Pokemon Name generator
    </h1>
  </header>
  <article
    class="max-w-[1000px] px-4 md:px-0 mx-auto my-14 flex flex-col items-center justify-center"
  >
    <p class="text-center text-2xl">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas
      incidunt molestias repudiandae qui. Dolore quas iusto quibusdam quo est
      atque ab in neque voluptates soluta. Aliquam non quasi delectus! Soluta.
    </p>
    <button
      class="mt-10 bg-[#ffde00] text-[#000] font-semibold text-xl px-4 py-2 rounded-md cursor-pointer"
      @click="submit"
    >
      Random Name
    </button>
    <h3
      class="output text-4xl font-bold tracking-wider my-10"
    >
      {{ pokemonName }}
    </h3>
  </article>
</template>

<style>
/*
yellow: #ffde00
red: #ff0000
blue: #3b4cca
*/
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
header {
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("/public/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.overlay {
  background: #ffdd0038;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  z-index: 10;
}
.output {
  color: #3b4cca;
  -webkit-text-fill-color: #ffde00;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: #3b4cca;
}
</style>
