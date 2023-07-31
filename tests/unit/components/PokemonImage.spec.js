import PokemonImageVue from "@/components/PokemonImage.vue";
import { shallowMount } from "@vue/test-utils";

describe("PokemonImage", () => {
  it("debe hacer match con el snapShot", () => {
    const wrapper = shallowMount(PokemonImageVue, {
      props: {
        pokemonId: 1,
        showPokemon: false,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("debe mostrar la imagen oculta y el pokemon 100", () => {
    const wrapper = shallowMount(PokemonImageVue, {
      props: {
        pokemonId: 100,
        showPokemon: false,
      },
    });
    const [img1, img2] = wrapper.findAll("img");

    expect(img1.exists()).toBeTruthy();
    expect(img2).toBe(undefined);
    expect(img1.classes("pokemon-hidden")).toBeTruthy();
  });

  it("debe mostrar la imagen true y el pokemon 100", () => {
    const pokemonId = 100;
    const wrapper = shallowMount(PokemonImageVue, {
      props: {
        pokemonId,
        showPokemon: true,
      },
    });
    const img1 = wrapper.find("img");

    expect(img1.attributes().src).toBe(
      `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
    );
    expect(img1.exists()).toBeTruthy();
  });
});
