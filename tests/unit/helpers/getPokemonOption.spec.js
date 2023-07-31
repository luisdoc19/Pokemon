import getPokemonOptions, {
  getPokemons,
  getPokemonNames,
} from "@/helpers/getPokemonOptions";
import { pokemons as poke } from "../mocks/pokemons.mocks";

describe("getPokemonOptions helpers", () => {
  it("Debe de regresar un arreglo de numeros", () => {
    const pokemon = getPokemons();
    expect(pokemon.length).toBe(650);
    expect(pokemon[0]).toBe(1);
    expect(pokemon[500]).toBe(501);
    expect(pokemon[649]).toBe(650);
  });

  it("Debe de retornar un arreglo de cuatro elementos con nombres de pokemons", async () => {
    const pokemons = await getPokemonNames([1, 2, 3, 4]);
    expect(pokemons.length).toBe(4);
    expect(pokemons).toStrictEqual(poke);
  });

  it("getPokemonOptions debe de retornar un arreglo mezclado", async () => {
    const pokemons = await getPokemonOptions();

    expect(pokemons.length).toBe(4);
    expect(pokemons).toEqual([
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
      { name: expect.any(String), id: expect.any(Number) },
    ]);
  });
});
