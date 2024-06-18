<script setup>
import { ref } from "vue";
import { useFetch } from "nuxt/app";

const submited = ref(false);
useHead({
  title: "Pokemon name generator - Generate random names",
  link: {
    rel: "canonical",
    href: "https://pokemonnamegenerator.com",
  },
  meta: [
    {
      name: "description",
      content:
        "Welcome to Pokemon Name Generator, your tool for generating random Pokemon names! Our service helps you find unique and fun names for your Pokemon.",
    },
  ],
});

const pokemonName = ref("");

const submit = async () => {
  submited.value = true;
  const { data, error } = await useFetch("/api/pokemon");
  if (!error.value) {
    pokemonName.value = data.value;
  } else {
    console.error(error.value);
  }
  setTimeout(() => {
    submited.value = false;
  }, 500);
};
function copyName() {
  navigator.clipboard.writeText(pokemonName.value);
  return alert("Copied");
}
</script>

<template>
  <main>
    <article
      class="max-w-[1000px] px-4 md:px-0 mx-auto my-14 flex flex-col items-center justify-center min-h-[300px]"
    >
      <p class="text-center text-2xl">
        Welcome to Pokemon Name Generator, your ultimate tool for generating
        random Pokemon names! Our service helps you find unique and fun names
        for your Pokemon adventures. Simply click the button and get a random
        name instantly.
      </p>
      <button
        :class="{ 'pointer-events-none': submited }"
        class="mt-10 bg-[#ffdd00ad] hover:bg-[#ffde00] text-[#000] font-semibold text-xl px-4 py-2 rounded-md cursor-pointer"
        @click="submit"
      >
        Random Name
      </button>
      <Loading v-if="submited" />
      <div
        class="w-full flex flex-col items-center gap-y-4"
        v-if="!submited && pokemonName.name"
      >
        <h3 class="relative text-4xl font-bold tracking-wider mt-10 mb-4">
          {{ pokemonName.name }}
          <div
            class="absolute right-[-24px] top-1 cursor-pointer"
            @click="copyName"
          >
            <icon
              class="absolute right-[-4px] top-2 h-4 w-4 rounded-sm border border-solid bg-white border-[#000]"
            ></icon>
            <icon
              class="absolute right-[-10px] top-3 h-4 w-4 rounded-sm border border-solid bg-white border-[#000]"
            ></icon>
          </div>
        </h3>
        <p class="text-xl tracking-wide">
          <span class="font-bold">{{ pokemonName.name }} is</span>
          {{ pokemonName.description.toLowerCase() }}
        </p>
        <p class="text-xl tracking-wide">
          <span class="font-bold"
            >Special skills of {{ pokemonName.name }} are
          </span>
          {{ pokemonName.skills.join(" , ") }}.
        </p>
        <p class="flex items-center justify-center text-xl tracking-wide">
          Find more about this <img class="mx-2" src="/public/pokemon.svg" />
          <span class="underline">
            <NuxtLink
              :to="`https://wiki.pokemoncentral.it/${pokemonName.name}`"
              rel="noopener"
              target="_blank"
            >
              here.</NuxtLink
            ></span
          >
        </p>
      </div>
      <div class="w-full flex flex-col text-left items-center justify-center">
        <h2 class="text-4xl mt-14 mb-4">
          The History of Pokemon: A Timeless Adventure
        </h2>
        <p class="text-lg mb-2 tracking-wide">
          Created by Satoshi Tajiri and Ken Sugimori in 1996, Pokemon became a
          cultural phenomenon. Pokemon was developed in Japan, initially as a
          video game. It has since then captured the attention of millions of people
          worldwide, creating a multimedia realm of animated TV shows, trading
          card games, movies, merchandise, and more
        </p>
        <figure class="my-4 mb-8">
          <img
            src="/public/founders.jpg"
            class="min-h-[300px] object-contain"
            alt="Founders of pokemon"
            title="Founders of pokemon"
          />
          <figcaption class="text-xs">
            Founders of pokemon
          </figcaption>
        </figure>
        <p class="text-lg mb-2 tracking-wide">
          Pokemon’s historical impact lies in the gameplay and social aspects it
          showed. Known as trainers, players go on expeditions to capture,
          train, and fight creatures, each with unique abilities and skills.
          This concept was revolutionary at the time, offering a mixture of
          style, adventure and competition that appealed to children as well as
          adults. The Pokemon slogan,
          <span class="font-semibold italic"
            >"Gotta Catch 'Em All!",</span
          >
           resonated deeply with fans and emphasized the game's central theme of exploration and discovery.
        </p>
      </div>
    </article>
  </main>
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
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: "Space Grotesk", sans-serif;
  position: relative;
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
.pokemon_text {
  color: #3b4cca;
  -webkit-text-fill-color: #ffde00;
  -webkit-text-stroke-width: 0.1px;
  -webkit-text-stroke-color: #3b4cca;
}
</style>
