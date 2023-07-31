import PokemonPageVue from "@/pages/PokemonPage.vue";
import { mount, shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mocks";

describe("PokemonPage", () => {
  let wrapper;
  let mixPokemonArrSpy;
  beforeEach(() => {
    //mixPokemonArrSpy = jest.spyOn(PokemonPageVue.methods, "mixPokemonArray");
    wrapper = shallowMount(PokemonPageVue);
  });

  test("debe de llamar el mixPokemon al montarse el componente", () => {
    const mixPokemonArrSpy = jest.spyOn(
      PokemonPageVue.methods,
      "mixPokemonArray"
    );
    const wrapper = shallowMount(PokemonPageVue);
    expect(mixPokemonArrSpy).toHaveBeenCalled();
  });

  it("debe hacer match con el snapshot cuando cargan los pokemones", () => {
    const wrapper = shallowMount(PokemonPageVue, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showAnswer: false,
          showPokemon: false,
          message: "",
        };
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("debe de mostrar los componentes de PokemonPictures y PokemonOptions", () => {
    const wrapper = shallowMount(PokemonPageVue, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showAnswer: false,
          showPokemon: false,
          message: "",
        };
      },
    });
    const page = wrapper.find("pokemon-options-stub");

    expect(wrapper.find("pokemon-image-stub").exists()).toBe(true);
    expect(page.exists()).toBe(true);
    expect(+wrapper.find("pokemon-image-stub").attributes("pokemonid")).toBe(1);
    expect(wrapper.vm.pokemon.id).toBe(1);
    expect(wrapper.vm.pokemonArr).toBeTruthy();
  });

  it("pruebas con checkAnswer", async () => {
    const wrapper = shallowMount(PokemonPageVue, {
      data() {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showAnswer: false,
          showPokemon: false,
          message: "",
        };
      },
    });
    await wrapper.vm.checkAnswer(1);
    expect(wrapper.find("h2").exists).toBeTruthy();
    expect(wrapper.vm.showAnswer).toBeTruthy();
    expect(wrapper.vm.showPokemon).toBeTruthy();
    await wrapper.vm.checkAnswer(2);
    expect(wrapper.vm.message).toBe(
      "Incorrecto! era " + wrapper.vm.pokemon.name
    );
  });
});
