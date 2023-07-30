<template>
  <div class="pokemon-container">
    <img :src="imgSrc" alt="pokemon" v-if="showPokemon" />
    <img :src="imgSrc" class="pokemon-hidden" v-else alt="pokemon" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: [String, Number],
      required: true,
    },
    showPokemon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.pokemon-hidden {
  filter: brightness(0);
}
</style>
