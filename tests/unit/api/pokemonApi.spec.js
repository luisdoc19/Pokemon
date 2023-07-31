import pokemonApi from "@/api/pokemon";
describe("PokemonApi", () => {
  test("Debe estar correctamente configurado", () => {
    expect(pokemonApi.defaults.baseURL).toBe(
      "https://pokeapi.co/api/v2/pokemon"
    );
  });
});
