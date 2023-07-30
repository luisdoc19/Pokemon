<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else>
    <h1>¿Quién es este Pokemon?</h1>
    <PokemonImage
      :pokemonId="pokemon && pokemon.id"
      :showPokemon="showPokemon"
    />
    <PokemonOptions :pokemons="pokemonArr" @selection="checkAnswer" />
    <div v-if="showAnswer" class="fade-in">
      <h2>{{ message }}</h2>
      <button @click="newGame">Nuevo Juego</button>
    </div>
  </div>
</template>

<script>
import PokemonOptions from "@/components/PokemonOptions.vue";
import PokemonImage from "@/components/PokemonImage.vue";
import getPokemons from "@/helpers/getPokemonOptions";

export default {
  name: "PokemonPage",
  components: {
    PokemonOptions,
    PokemonImage,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemons();
      const random = Math.floor(Math.random() * this.pokemonArr.length);
      this.pokemon = this.pokemonArr[random];
    },
    checkAnswer(id) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (id === this.pokemon.id) {
        this.message = `Correcto es ${this.pokemon.name}`;
      } else {
        this.message = "Incorrecto! era " + this.pokemon.name;
      }
    },
    newGame() {
      this.showAnswer = false;
      this.showPokemon = false;
      this.pokemon = null;
      this.pokemonArr = [];
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
