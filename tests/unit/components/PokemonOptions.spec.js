import PokemonOptionsVue from "@/components/PokemonOptions.vue";
import { shallowMount } from "@vue/test-utils";
import { pokemons } from "../mocks/pokemons.mocks";
describe("PokemonOPtions", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptionsVue, {
      props: {
        pokemons,
      },
    });
  });

  it("Debe coincidir con el snapShot", () => {
    expect(wrapper.html()).toMatchInlineSnapshot(`
      <div class="options-container">
        <ul>
          <li>bulbasaur</li>
          <li>ivysaur</li>
          <li>charmander</li>
          <li>venusaur</li>
        </ul>
      </div>
    `);
  });

  it("debe de mostrar las 4 opciones correctamente", () => {
    const [p1, p2, p3, p4] = wrapper.findAll("li");
    expect(p1.text()).toBe("bulbasaur");
    expect(p2.text()).toBe("ivysaur");
    expect(p3.text()).toBe("charmander");
    expect(p4.text()).toBe("venusaur");
  });

  it("debe de emitir el 'selection' con sus respectivos parametros al hacer click", () => {
    const [l1, l2, l3, l4] = wrapper.findAll("li");
    l1.trigger("click");
    l2.trigger("click");
    l3.trigger("click");
    l4.trigger("click");

    expect(wrapper.emitted("selection").length).toBe(4);
    expect(wrapper.emitted("selection")[0][0]).toBe(1);
    expect(wrapper.emitted("selection")[0]).toEqual([1]);
    expect(wrapper.emitted("selection")[1]).toEqual([2]);
    expect(wrapper.emitted("selection")[2]).toEqual([3]);
    expect(wrapper.emitted("selection")[3]).toEqual([4]);
  });
});
