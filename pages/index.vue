<script setup>
import { ref } from "vue";
import { useFetch } from "nuxt/app";

const submited = ref(false);
useHead({
  title: "Pokemon name generator - Generate random names",
  link: [
    {
      rel: "canonical",
      href: "https://pokemonnamegenerator.com",
    },
    { rel: "icon", href: "/favicon.ico" },
  ],
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
      class="max-w-[1000px] px-4 md:px-0 mx-auto my-8 flex flex-col items-center justify-center min-h-[300px]"
    >
      <p class="text-center text-2xl">
        Welcome to Pokemon Name Generator, your ultimate tool for generating
        random Pokemon names! Our service helps you find unique and fun nickname
        for your Pokemon adventures. Simply click the button and get a random
        nickname instantly.
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
        <p class="text-xl tracking-wide text-center">
          <span class="font-bold">{{ pokemonName.name }} is</span>
          {{ pokemonName.description.toLowerCase() }}
        </p>
        <p class="text-xl tracking-wide text-center">
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
    </article>
    <article
      class="max-w-[1000px] px-4 md:px-0 mx-auto my-2 flex flex-col items-center justify-center"
    >
      <div class="w-full flex flex-col text-left items-start justify-center">
        <h2 class="text-4xl mt-14 mb-4 text-left">
          <!-- Added 'text-left' -->
          Welcome to the Ultimate Pokemon Name Generator - Your Gateway to
          Unique Nicknames!
        </h2>

        <p class="text-lg mb-2 tracking-wide text-left">
          <!-- Added 'text-left' -->
          Are you struggling to come up with the perfect name for your newly
          caught Pokemon? Look no further! Our Random Pokemon Name Generator is
          here to spark your creativity and provide you with unique, fun, and
          memorable nicknames for all your Pokemon adventures.
        </p>
        <h3 class="text-4xl mt-14 mb-4">The History of Pokemon</h3>
        <p class="text-lg mb-2 tracking-wide">
          Created by Satoshi Tajiri and Ken Sugimori in 1996, Pokemon became a
          cultural phenomenon. Pokemon was developed in Japan, initially as a
          video game. It has since then captured the attention of millions of
          people worldwide, creating a multimedia realm of animated TV shows,
          trading card games, movies, merchandise, and more
        </p>
        <figure class="my-4 mb-8">
          <img
            src="/public/founders.jpg"
            class="h-[300px] w-full md:w-[400px] object-contain"
            alt="Founders of pokemon"
            title="Founders of pokemon"
          />
          <figcaption class="text-xs">Founders of pokemon, <NuxtLink class="underline" to="https://lavacutcontent.com/">Source</NuxtLink> </figcaption>
        </figure>
        <p class="text-lg mb-2 tracking-wide">
          <NuxtLink class="underline" to="https://www.pokemon.com/">Pokemon's</NuxtLink> historical impact lies in the gameplay and social aspects it
          showed. Known as trainers, players go on expeditions to capture,
          train, and fight creatures, each with unique abilities and skills.
          This concept was revolutionary at the time, offering a mixture of
          style, adventure and competition that appealed to children as well as
          adults. The Pokemon slogan,
          <span class="font-semibold italic">"Gotta Catch 'Em All!",</span>
          resonated deeply with fans and emphasized the game's central theme of
          exploration and discovery.
        </p>
      </div>
    </article>
    <article
      class="max-w-[1000px] px-4 md:px-0 mx-auto flex flex-col items-start justify-center pb-10"
    >
      <h3 class="text-2xl mt-10 mb-4 text-left">
        <!-- Added 'text-left' -->
        Why Use a Pokemon Name Generator?
      </h3>
      <ul class="list-disc list-inside mb-4 text-left">
        <!-- Added 'text-left' -->
        <li>
          Stuck in a naming rut? Our name generator for Pokemon provides instant
          ideas to get your creative juices flowing.
        </li>
        <li>
          Uniqueness: Stand out from other trainers with original nicknames for
          your Pokemon team.
        </li>
        <li>
          Time-Saver: Quickly generate names for multiple Pokemon without
          spending hours brainstorming.
        </li>
        <li>
          Fun Factor: Discover amusing and unexpected name combinations that add
          personality to your Pokemon.
        </li>
      </ul>
      <h3 class="text-2xl mt-10 mb-4 text-left">
        <!-- Added 'text-left' -->
        How to Use Our Pokemon Nickname Generator:
      </h3>
      <ol class="list-decimal list-inside mb-4 text-left">
        <!-- Added 'text-left' -->
        <li>Click the "Random Name" button</li>
        <li>Get an instantly generated nickname</li>
        <li>Use it as-is or let it inspire your own creative twist</li>
        <li>Repeat for more options or to name your entire team</li>
      </ol>
      <h3 class="text-2xl mt-10 mb-4 text-left">
        <!-- Added 'text-left' -->
        Tips for Choosing the Perfect Pokemon Nickname:
      </h3>
      <ul class="list-disc list-inside mb-4 text-left">
        <!-- Added 'text-left' -->
        <li>Consider your Pokemon's type (e.g., fire, water, grass)</li>
        <li>Think about its appearance or special features</li>
        <li>Reflect on its personality or battling style</li>
        <li>Use puns or wordplay related to its species</li>
      </ul>
      <h3 class="text-2xl mt-10 mb-4 text-left">
        <!-- Added 'text-left' -->
        The Importance of Nicknames in Pokemon:
      </h3>
      <p class="text-lg mb-2 tracking-wide text-left">
        <!-- Added 'text-left' -->
        Nicknames add a personal touch to your Pokemon journey. They help you
        bond with your digital companions and make your gameplay experience more
        immersive. Whether you're a casual player or a competitive battler,
        using a name generator for Pokemon for unique names can enhance your
        enjoyment of the game.
      </p>
      <h3 class="text-2xl mt-10 mb-4 text-left">
        <!-- Added 'text-left' -->
        Pokemon Naming Traditions:
      </h3>
      <p class="text-lg mb-2 tracking-wide text-left">
        <!-- Added 'text-left' -->
        Different Pokemon games and regions have various naming conventions. For
        example:
      </p>
      <ul class="list-disc list-inside mb-4 text-left">
        <!-- Added 'text-left' -->
        <li>
          In the Kanto region, many Pokemon are named after their appearance or
          abilities
        </li>
        <li>Alolan forms often have Hawaiian-inspired names</li>
        <li>
          Legendary Pokemon typically have names rooted in mythology or natural
          phenomena
        </li>
      </ul>
      <p class="text-lg mb-2 tracking-wide text-left">
        <!-- Added 'text-left' -->
        Our name generator for Pokemon takes inspiration from these traditions
        while also offering fresh, creative options.
      </p>
      <h3 class="text-2xl mt-10 mb-4 text-left">
        <!-- Added 'text-left' -->
        The Evolution of Pokemon Naming:
      </h3>
      <p class="text-lg mb-2 tracking-wide text-left">
        <!-- Added 'text-left' -->
        As the Pokemon franchise has grown, so too have the naming conventions
        for new species. From simple descriptive names in the early generations
        to more complex, culturally-inspired monikers in recent releases,
        Pokemon names have become an art form in themselves.
      </p>
      <h3 class="text-2xl mt-10 mb-4 text-left">
        <!-- Added 'text-left' -->
        Boost Your Pokemon Experience:
      </h3>
      <p class="text-lg mb-2 tracking-wide text-left">
        <!-- Added 'text-left' -->
        Using our <NuxtLink class="underline" to="https://pokemonnamegenerator.com/">name generator for Pokemon</NuxtLink> isn't just about finding a cool
        nickname—it's about enhancing your entire Pokemon journey. A well-chosen
        name can:
      </p>
      <ul class="list-disc list-inside mb-4 text-left">
        <!-- Added 'text-left' -->
        <li>Make your Pokemon more memorable</li>
        <li>Add humor or personality to your team</li>
        <li>Create a stronger connection to your digital companions</li>
        <li>Spark conversations with other trainers</li>
      </ul>
      <p class="text-lg mb-2 tracking-wide text-left">
        <!-- Added 'text-left' -->
        Whether you're playing Pokemon games, collecting cards, or just a fan of
        the franchise, our name generator is the perfect tool to fuel your
        Pokemon passion.
      </p>
      <p class="text-lg mb-2 tracking-wide text-left">
        <!-- Added 'text-left' -->
        Start generating unique Pokemon nicknames now and take your trainer
        experience to the next level!
      </p>
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
