import { defineStore } from 'pinia'
import type { PokemonData } from '~/types/pokemonData'
import type { PokemonTypes } from '~/types/pokemonTypes'

export const usePokemonStore = defineStore('pokemonStore', {
  state: () => {
    return {
      pokemon: [
        {
          id: 1,
          name: 'bulbasaur',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1.png'
            }
          ]
        },
        {
          id: 2,
          name: 'ivysaur',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/2.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/2.png'
            }
          ]
        },
        {
          id: 3,
          name: 'venusaur',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/3.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/3.png'
            }
          ]
        },
        {
          id: 4,
          name: 'charmander',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/4.png'
            }
          ]
        },
        {
          id: 5,
          name: 'charmeleon',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/5.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/5.png'
            }
          ]
        },
        {
          id: 6,
          name: 'charizard',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/6.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/6.png'
            }
          ]
        },
        {
          id: 7,
          name: 'squirtle',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/7.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/7.png'
            }
          ]
        },
        {
          id: 8,
          name: 'wartortle',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/8.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/8.png'
            }
          ]
        },
        {
          id: 9,
          name: 'blastoise',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/9.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/9.png'
            }
          ]
        },
        {
          id: 10,
          name: 'caterpie',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/10.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/10.png'
            }
          ]
        },
        {
          id: 11,
          name: 'metapod',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/11.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/11.png'
            }
          ]
        },
        {
          id: 12,
          name: 'butterfree',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/12.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/12.png'
            }
          ]
        },
        {
          id: 13,
          name: 'weedle',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/13.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/13.png'
            }
          ]
        },
        {
          id: 14,
          name: 'kakuna',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/14.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/14.png'
            }
          ]
        },
        {
          id: 15,
          name: 'beedrill',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/15.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/15.png'
            }
          ]
        },
        {
          id: 16,
          name: 'pidgey',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/16.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/16.png'
            }
          ]
        },
        {
          id: 17,
          name: 'pidgeotto',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/17.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/17.png'
            }
          ]
        },
        {
          id: 18,
          name: 'pidgeot',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/18.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/18.png'
            }
          ]
        },
        {
          id: 19,
          name: 'rattata',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/19.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/19.png'
            }
          ]
        },
        {
          id: 20,
          name: 'raticate',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/20.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/20.png'
            }
          ]
        },
        {
          id: 21,
          name: 'spearow',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/21.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/21.png'
            }
          ]
        },
        {
          id: 22,
          name: 'fearow',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/22.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/22.png'
            }
          ]
        },
        {
          id: 23,
          name: 'ekans',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/23.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/23.png'
            }
          ]
        },
        {
          id: 24,
          name: 'arbok',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/24.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/24.png'
            }
          ]
        },
        {
          id: 25,
          name: 'pikachu',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/25.png'
            }
          ]
        },
        {
          id: 26,
          name: 'raichu',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/26.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/26.png'
            }
          ]
        },
        {
          id: 27,
          name: 'sandshrew',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/27.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/27.png'
            }
          ]
        },
        {
          id: 28,
          name: 'sandslash',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/28.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/28.png'
            }
          ]
        },
        {
          id: 29,
          name: 'nidoran-f',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/29.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/29.png'
            }
          ]
        },
        {
          id: 30,
          name: 'nidorina',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/30.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/30.png'
            }
          ]
        },
        {
          id: 31,
          name: 'nidoqueen',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/31.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/31.png'
            }
          ]
        },
        {
          id: 32,
          name: 'nidoran-m',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/32.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/32.png'
            }
          ]
        },
        {
          id: 33,
          name: 'nidorino',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/33.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/33.png'
            }
          ]
        },
        {
          id: 34,
          name: 'nidoking',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/34.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/34.png'
            }
          ]
        },
        {
          id: 35,
          name: 'clefairy',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/35.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/35.png'
            }
          ]
        },
        {
          id: 36,
          name: 'clefable',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/36.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/36.png'
            }
          ]
        },
        {
          id: 37,
          name: 'vulpix',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/37.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/37.png'
            }
          ]
        },
        {
          id: 38,
          name: 'ninetales',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/38.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/38.png'
            }
          ]
        },
        {
          id: 39,
          name: 'jigglypuff',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/39.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/39.png'
            }
          ]
        },
        {
          id: 40,
          name: 'wigglytuff',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/40.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/40.png'
            }
          ]
        },
        {
          id: 41,
          name: 'zubat',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/41.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/41.png'
            }
          ]
        },
        {
          id: 42,
          name: 'golbat',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/42.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/42.png'
            }
          ]
        },
        {
          id: 43,
          name: 'oddish',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/43.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/43.png'
            }
          ]
        },
        {
          id: 44,
          name: 'gloom',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/44.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/44.png'
            }
          ]
        },
        {
          id: 45,
          name: 'vileplume',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/45.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/45.png'
            }
          ]
        },
        {
          id: 46,
          name: 'paras',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/46.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/46.png'
            }
          ]
        },
        {
          id: 47,
          name: 'parasect',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/47.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/47.png'
            }
          ]
        },
        {
          id: 48,
          name: 'venonat',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/48.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/48.png'
            }
          ]
        },
        {
          id: 49,
          name: 'venomoth',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/49.png'
            }
          ]
        },
        {
          id: 50,
          name: 'diglett',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/50.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/50.png'
            }
          ]
        },
        {
          id: 51,
          name: 'dugtrio',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/51.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/51.png'
            }
          ]
        },
        {
          id: 52,
          name: 'meowth',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/52.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/52.png'
            }
          ]
        },
        {
          id: 53,
          name: 'persian',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/53.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/53.png'
            }
          ]
        },
        {
          id: 54,
          name: 'psyduck',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/54.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/54.png'
            }
          ]
        },
        {
          id: 55,
          name: 'golduck',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/55.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/55.png'
            }
          ]
        },
        {
          id: 56,
          name: 'mankey',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/56.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/56.png'
            }
          ]
        },
        {
          id: 57,
          name: 'primeape',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/57.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/57.png'
            }
          ]
        },
        {
          id: 58,
          name: 'growlithe',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/58.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/58.png'
            }
          ]
        },
        {
          id: 59,
          name: 'arcanine',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/59.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/59.png'
            }
          ]
        },
        {
          id: 60,
          name: 'poliwag',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/60.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/60.png'
            }
          ]
        },
        {
          id: 61,
          name: 'poliwhirl',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/61.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/61.png'
            }
          ]
        },
        {
          id: 62,
          name: 'poliwrath',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/62.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/62.png'
            }
          ]
        },
        {
          id: 63,
          name: 'abra',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/63.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/63.png'
            }
          ]
        },
        {
          id: 64,
          name: 'kadabra',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/64.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/64.png'
            }
          ]
        },
        {
          id: 65,
          name: 'alakazam',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/65.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/65.png'
            }
          ]
        },
        {
          id: 66,
          name: 'machop',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/66.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/66.png'
            }
          ]
        },
        {
          id: 67,
          name: 'machoke',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/67.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/67.png'
            }
          ]
        },
        {
          id: 68,
          name: 'machamp',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/68.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/68.png'
            }
          ]
        },
        {
          id: 69,
          name: 'bellsprout',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/69.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/69.png'
            }
          ]
        },
        {
          id: 70,
          name: 'weepinbell',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/70.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/70.png'
            }
          ]
        },
        {
          id: 71,
          name: 'victreebel',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/71.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/71.png'
            }
          ]
        },
        {
          id: 72,
          name: 'tentacool',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/72.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/72.png'
            }
          ]
        },
        {
          id: 73,
          name: 'tentacruel',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/73.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/73.png'
            }
          ]
        },
        {
          id: 74,
          name: 'geodude',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/74.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/74.png'
            }
          ]
        },
        {
          id: 75,
          name: 'graveler',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/75.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/75.png'
            }
          ]
        },
        {
          id: 76,
          name: 'golem',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/76.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/76.png'
            }
          ]
        },
        {
          id: 77,
          name: 'ponyta',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/77.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/77.png'
            }
          ]
        },
        {
          id: 78,
          name: 'rapidash',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/78.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/78.png'
            }
          ]
        },
        {
          id: 79,
          name: 'slowpoke',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/79.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/79.png'
            }
          ]
        },
        {
          id: 80,
          name: 'slowbro',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/80.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/80.png'
            }
          ]
        },
        {
          id: 81,
          name: 'magnemite',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/81.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/81.png'
            }
          ]
        },
        {
          id: 82,
          name: 'magneton',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/82.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/82.png'
            }
          ]
        },
        {
          id: 83,
          name: 'farfetchd',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/83.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/83.png'
            }
          ]
        },
        {
          id: 84,
          name: 'doduo',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/84.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/84.png'
            }
          ]
        },
        {
          id: 85,
          name: 'dodrio',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/85.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/85.png'
            }
          ]
        },
        {
          id: 86,
          name: 'seel',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/86.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/86.png'
            }
          ]
        },
        {
          id: 87,
          name: 'dewgong',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/87.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/87.png'
            }
          ]
        },
        {
          id: 88,
          name: 'grimer',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/88.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/88.png'
            }
          ]
        },
        {
          id: 89,
          name: 'muk',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/89.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/89.png'
            }
          ]
        },
        {
          id: 90,
          name: 'shellder',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/90.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/90.png'
            }
          ]
        },
        {
          id: 91,
          name: 'cloyster',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/91.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/91.png'
            }
          ]
        },
        {
          id: 92,
          name: 'gastly',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/92.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/92.png'
            }
          ]
        },
        {
          id: 93,
          name: 'haunter',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/93.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/93.png'
            }
          ]
        },
        {
          id: 94,
          name: 'gengar',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/94.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/94.png'
            }
          ]
        },
        {
          id: 95,
          name: 'onix',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/95.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/95.png'
            }
          ]
        },
        {
          id: 96,
          name: 'drowzee',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/96.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/96.png'
            }
          ]
        },
        {
          id: 97,
          name: 'hypno',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/97.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/97.png'
            }
          ]
        },
        {
          id: 98,
          name: 'krabby',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/98.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/98.png'
            }
          ]
        },
        {
          id: 99,
          name: 'kingler',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/99.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/99.png'
            }
          ]
        },
        {
          id: 100,
          name: 'voltorb',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/100.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/100.png'
            }
          ]
        },
        {
          id: 101,
          name: 'electrode',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/101.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/101.png'
            }
          ]
        },
        {
          id: 102,
          name: 'exeggcute',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/102.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/102.png'
            }
          ]
        },
        {
          id: 103,
          name: 'exeggutor',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/103.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/103.png'
            }
          ]
        },
        {
          id: 104,
          name: 'cubone',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/104.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/104.png'
            }
          ]
        },
        {
          id: 105,
          name: 'marowak',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/105.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/105.png'
            }
          ]
        },
        {
          id: 106,
          name: 'hitmonlee',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/106.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/106.png'
            }
          ]
        },
        {
          id: 107,
          name: 'hitmonchan',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/107.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/107.png'
            }
          ]
        },
        {
          id: 108,
          name: 'lickitung',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/108.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/108.png'
            }
          ]
        },
        {
          id: 109,
          name: 'koffing',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/109.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/109.png'
            }
          ]
        },
        {
          id: 110,
          name: 'weezing',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/110.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/110.png'
            }
          ]
        },
        {
          id: 111,
          name: 'rhyhorn',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/111.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/111.png'
            }
          ]
        },
        {
          id: 112,
          name: 'rhydon',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/112.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/112.png'
            }
          ]
        },
        {
          id: 113,
          name: 'chansey',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/113.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/113.png'
            }
          ]
        },
        {
          id: 114,
          name: 'tangela',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/114.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/114.png'
            }
          ]
        },
        {
          id: 115,
          name: 'kangaskhan',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/115.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/115.png'
            }
          ]
        },
        {
          id: 116,
          name: 'horsea',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/116.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/116.png'
            }
          ]
        },
        {
          id: 117,
          name: 'seadra',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/117.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/117.png'
            }
          ]
        },
        {
          id: 118,
          name: 'goldeen',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/118.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/118.png'
            }
          ]
        },
        {
          id: 119,
          name: 'seaking',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/119.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/119.png'
            }
          ]
        },
        {
          id: 120,
          name: 'staryu',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/120.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/120.png'
            }
          ]
        },
        {
          id: 121,
          name: 'starmie',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/121.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/121.png'
            }
          ]
        },
        {
          id: 122,
          name: 'mr-mime',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/122.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/122.png'
            }
          ]
        },
        {
          id: 123,
          name: 'scyther',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/123.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/123.png'
            }
          ]
        },
        {
          id: 124,
          name: 'jynx',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/124.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/124.png'
            }
          ]
        },
        {
          id: 125,
          name: 'electabuzz',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/125.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/125.png'
            }
          ]
        },
        {
          id: 126,
          name: 'magmar',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/126.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/126.png'
            }
          ]
        },
        {
          id: 127,
          name: 'pinsir',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/127.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/127.png'
            }
          ]
        },
        {
          id: 128,
          name: 'tauros',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/128.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/128.png'
            }
          ]
        },
        {
          id: 129,
          name: 'magikarp',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/129.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/129.png'
            }
          ]
        },
        {
          id: 130,
          name: 'gyarados',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/130.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/130.png'
            }
          ]
        },
        {
          id: 131,
          name: 'lapras',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/131.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/131.png'
            }
          ]
        },
        {
          id: 132,
          name: 'ditto',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/132.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/132.png'
            }
          ]
        },
        {
          id: 133,
          name: 'eevee',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/133.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/133.png'
            }
          ]
        },
        {
          id: 134,
          name: 'vaporeon',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/134.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/134.png'
            }
          ]
        },
        {
          id: 135,
          name: 'jolteon',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/135.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/135.png'
            }
          ]
        },
        {
          id: 136,
          name: 'flareon',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/136.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/136.png'
            }
          ]
        },
        {
          id: 137,
          name: 'porygon',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/137.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/137.png'
            }
          ]
        },
        {
          id: 138,
          name: 'omanyte',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/138.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/138.png'
            }
          ]
        },
        {
          id: 139,
          name: 'omastar',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/139.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/139.png'
            }
          ]
        },
        {
          id: 140,
          name: 'kabuto',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/140.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/140.png'
            }
          ]
        },
        {
          id: 141,
          name: 'kabutops',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/141.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/141.png'
            }
          ]
        },
        {
          id: 142,
          name: 'aerodactyl',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/142.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/142.png'
            }
          ]
        },
        {
          id: 143,
          name: 'snorlax',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/143.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/143.png'
            }
          ]
        },
        {
          id: 144,
          name: 'articuno',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/144.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/144.png'
            }
          ]
        },
        {
          id: 145,
          name: 'zapdos',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/145.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/145.png'
            }
          ]
        },
        {
          id: 146,
          name: 'moltres',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/146.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/146.png'
            }
          ]
        },
        {
          id: 147,
          name: 'dratini',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/147.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/147.png'
            }
          ]
        },
        {
          id: 148,
          name: 'dragonair',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/148.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/148.png'
            }
          ]
        },
        {
          id: 149,
          name: 'dragonite',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/149.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/149.png'
            }
          ]
        },
        {
          id: 150,
          name: 'mewtwo',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/150.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/150.png'
            }
          ]
        },
        {
          id: 151,
          name: 'mew',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/151.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/151.png'
            }
          ]
        },
        {
          id: 152,
          name: 'chikorita',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/152.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/152.png'
            }
          ]
        },
        {
          id: 153,
          name: 'bayleef',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/153.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/153.png'
            }
          ]
        },
        {
          id: 154,
          name: 'meganium',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/154.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/154.png'
            }
          ]
        },
        {
          id: 155,
          name: 'cyndaquil',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/155.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/155.png'
            }
          ]
        },
        {
          id: 156,
          name: 'quilava',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/156.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/156.png'
            }
          ]
        },
        {
          id: 157,
          name: 'typhlosion',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/157.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/157.png'
            }
          ]
        },
        {
          id: 158,
          name: 'totodile',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/158.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/158.png'
            }
          ]
        },
        {
          id: 159,
          name: 'croconaw',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/159.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/159.png'
            }
          ]
        },
        {
          id: 160,
          name: 'feraligatr',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/160.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/160.png'
            }
          ]
        },
        {
          id: 161,
          name: 'sentret',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/161.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/161.png'
            }
          ]
        },
        {
          id: 162,
          name: 'furret',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/162.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/162.png'
            }
          ]
        },
        {
          id: 163,
          name: 'hoothoot',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/163.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/163.png'
            }
          ]
        },
        {
          id: 164,
          name: 'noctowl',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/164.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/164.png'
            }
          ]
        },
        {
          id: 165,
          name: 'ledyba',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/165.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/165.png'
            }
          ]
        },
        {
          id: 166,
          name: 'ledian',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/166.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/166.png'
            }
          ]
        },
        {
          id: 167,
          name: 'spinarak',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/167.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/167.png'
            }
          ]
        },
        {
          id: 168,
          name: 'ariados',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/168.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/168.png'
            }
          ]
        },
        {
          id: 169,
          name: 'crobat',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/169.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/169.png'
            }
          ]
        },
        {
          id: 170,
          name: 'chinchou',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/170.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/170.png'
            }
          ]
        },
        {
          id: 171,
          name: 'lanturn',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/171.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/171.png'
            }
          ]
        },
        {
          id: 172,
          name: 'pichu',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/172.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/172.png'
            }
          ]
        },
        {
          id: 173,
          name: 'cleffa',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/173.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/173.png'
            }
          ]
        },
        {
          id: 174,
          name: 'igglybuff',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/174.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/174.png'
            }
          ]
        },
        {
          id: 175,
          name: 'togepi',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/175.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/175.png'
            }
          ]
        },
        {
          id: 176,
          name: 'togetic',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/176.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/176.png'
            }
          ]
        },
        {
          id: 177,
          name: 'natu',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/177.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/177.png'
            }
          ]
        },
        {
          id: 178,
          name: 'xatu',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/178.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/178.png'
            }
          ]
        },
        {
          id: 179,
          name: 'mareep',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/179.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/179.png'
            }
          ]
        },
        {
          id: 180,
          name: 'flaaffy',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/180.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/180.png'
            }
          ]
        },
        {
          id: 181,
          name: 'ampharos',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/181.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/181.png'
            }
          ]
        },
        {
          id: 182,
          name: 'bellossom',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/182.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/182.png'
            }
          ]
        },
        {
          id: 183,
          name: 'marill',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/183.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/183.png'
            }
          ]
        },
        {
          id: 184,
          name: 'azumarill',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/184.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/184.png'
            }
          ]
        },
        {
          id: 185,
          name: 'sudowoodo',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/185.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/185.png'
            }
          ]
        },
        {
          id: 186,
          name: 'politoed',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/186.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/186.png'
            }
          ]
        },
        {
          id: 187,
          name: 'hoppip',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/187.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/187.png'
            }
          ]
        },
        {
          id: 188,
          name: 'skiploom',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/188.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/188.png'
            }
          ]
        },
        {
          id: 189,
          name: 'jumpluff',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/189.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/189.png'
            }
          ]
        },
        {
          id: 190,
          name: 'aipom',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/190.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/190.png'
            }
          ]
        },
        {
          id: 191,
          name: 'sunkern',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/191.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/191.png'
            }
          ]
        },
        {
          id: 192,
          name: 'sunflora',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/192.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/192.png'
            }
          ]
        },
        {
          id: 193,
          name: 'yanma',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/193.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/193.png'
            }
          ]
        },
        {
          id: 194,
          name: 'wooper',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/194.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/194.png'
            }
          ]
        },
        {
          id: 195,
          name: 'quagsire',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/195.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/195.png'
            }
          ]
        },
        {
          id: 196,
          name: 'espeon',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/196.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/196.png'
            }
          ]
        },
        {
          id: 197,
          name: 'umbreon',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/197.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/197.png'
            }
          ]
        },
        {
          id: 198,
          name: 'murkrow',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/198.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/198.png'
            }
          ]
        },
        {
          id: 199,
          name: 'slowking',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/199.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/199.png'
            }
          ]
        },
        {
          id: 200,
          name: 'misdreavus',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/200.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/200.png'
            }
          ]
        },
        {
          id: 201,
          name: 'unown',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/201.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/201.png'
            }
          ]
        },
        {
          id: 202,
          name: 'wobbuffet',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/202.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/202.png'
            }
          ]
        },
        {
          id: 203,
          name: 'girafarig',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/203.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/203.png'
            }
          ]
        },
        {
          id: 204,
          name: 'pineco',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/204.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/204.png'
            }
          ]
        },
        {
          id: 205,
          name: 'forretress',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/205.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/205.png'
            }
          ]
        },
        {
          id: 206,
          name: 'dunsparce',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/206.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/206.png'
            }
          ]
        },
        {
          id: 207,
          name: 'gligar',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/207.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/207.png'
            }
          ]
        },
        {
          id: 208,
          name: 'steelix',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/208.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/208.png'
            }
          ]
        },
        {
          id: 209,
          name: 'snubbull',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/209.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/209.png'
            }
          ]
        },
        {
          id: 210,
          name: 'granbull',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/210.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/210.png'
            }
          ]
        },
        {
          id: 211,
          name: 'qwilfish',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/211.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/211.png'
            }
          ]
        },
        {
          id: 212,
          name: 'scizor',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/212.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/212.png'
            }
          ]
        },
        {
          id: 213,
          name: 'shuckle',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/213.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/213.png'
            }
          ]
        },
        {
          id: 214,
          name: 'heracross',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/214.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/214.png'
            }
          ]
        },
        {
          id: 215,
          name: 'sneasel',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/215.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/215.png'
            }
          ]
        },
        {
          id: 216,
          name: 'teddiursa',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/216.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/216.png'
            }
          ]
        },
        {
          id: 217,
          name: 'ursaring',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/217.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/217.png'
            }
          ]
        },
        {
          id: 218,
          name: 'slugma',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/218.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/218.png'
            }
          ]
        },
        {
          id: 219,
          name: 'magcargo',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/219.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/219.png'
            }
          ]
        },
        {
          id: 220,
          name: 'swinub',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/220.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/220.png'
            }
          ]
        },
        {
          id: 221,
          name: 'piloswine',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/221.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/221.png'
            }
          ]
        },
        {
          id: 222,
          name: 'corsola',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/222.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/222.png'
            }
          ]
        },
        {
          id: 223,
          name: 'remoraid',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/223.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/223.png'
            }
          ]
        },
        {
          id: 224,
          name: 'octillery',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/224.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/224.png'
            }
          ]
        },
        {
          id: 225,
          name: 'delibird',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/225.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/225.png'
            }
          ]
        },
        {
          id: 226,
          name: 'mantine',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/226.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/226.png'
            }
          ]
        },
        {
          id: 227,
          name: 'skarmory',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/227.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/227.png'
            }
          ]
        },
        {
          id: 228,
          name: 'houndour',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/228.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/228.png'
            }
          ]
        },
        {
          id: 229,
          name: 'houndoom',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/229.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/229.png'
            }
          ]
        },
        {
          id: 230,
          name: 'kingdra',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/230.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/230.png'
            }
          ]
        },
        {
          id: 231,
          name: 'phanpy',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/231.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/231.png'
            }
          ]
        },
        {
          id: 232,
          name: 'donphan',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/232.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/232.png'
            }
          ]
        },
        {
          id: 233,
          name: 'porygon2',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/233.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/233.png'
            }
          ]
        },
        {
          id: 234,
          name: 'stantler',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/234.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/234.png'
            }
          ]
        },
        {
          id: 235,
          name: 'smeargle',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/235.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/235.png'
            }
          ]
        },
        {
          id: 236,
          name: 'tyrogue',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/236.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/236.png'
            }
          ]
        },
        {
          id: 237,
          name: 'hitmontop',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/237.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/237.png'
            }
          ]
        },
        {
          id: 238,
          name: 'smoochum',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/238.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/238.png'
            }
          ]
        },
        {
          id: 239,
          name: 'elekid',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/239.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/239.png'
            }
          ]
        },
        {
          id: 240,
          name: 'magby',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/240.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/240.png'
            }
          ]
        },
        {
          id: 241,
          name: 'miltank',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/241.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/241.png'
            }
          ]
        },
        {
          id: 242,
          name: 'blissey',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/242.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/242.png'
            }
          ]
        },
        {
          id: 243,
          name: 'raikou',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/243.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/243.png'
            }
          ]
        },
        {
          id: 244,
          name: 'entei',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/244.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/244.png'
            }
          ]
        },
        {
          id: 245,
          name: 'suicune',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/245.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/245.png'
            }
          ]
        },
        {
          id: 246,
          name: 'larvitar',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/246.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/246.png'
            }
          ]
        },
        {
          id: 247,
          name: 'pupitar',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/247.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/247.png'
            }
          ]
        },
        {
          id: 248,
          name: 'tyranitar',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/248.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/248.png'
            }
          ]
        },
        {
          id: 249,
          name: 'lugia',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/249.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/249.png'
            }
          ]
        },
        {
          id: 250,
          name: 'ho-oh',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/250.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/250.png'
            }
          ]
        },
        {
          id: 251,
          name: 'celebi',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/251.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/251.png'
            }
          ]
        },
        {
          id: 252,
          name: 'treecko',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/252.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/252.png'
            }
          ]
        },
        {
          id: 253,
          name: 'grovyle',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/253.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/253.png'
            }
          ]
        },
        {
          id: 254,
          name: 'sceptile',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/254.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/254.png'
            }
          ]
        },
        {
          id: 255,
          name: 'torchic',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/255.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/255.png'
            }
          ]
        },
        {
          id: 256,
          name: 'combusken',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/256.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/256.png'
            }
          ]
        },
        {
          id: 257,
          name: 'blaziken',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/257.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/257.png'
            }
          ]
        },
        {
          id: 258,
          name: 'mudkip',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/258.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/258.png'
            }
          ]
        },
        {
          id: 259,
          name: 'marshtomp',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/259.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/259.png'
            }
          ]
        },
        {
          id: 260,
          name: 'swampert',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/260.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/260.png'
            }
          ]
        },
        {
          id: 261,
          name: 'poochyena',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/261.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/261.png'
            }
          ]
        },
        {
          id: 262,
          name: 'mightyena',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/262.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/262.png'
            }
          ]
        },
        {
          id: 263,
          name: 'zigzagoon',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/263.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/263.png'
            }
          ]
        },
        {
          id: 264,
          name: 'linoone',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/264.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/264.png'
            }
          ]
        },
        {
          id: 265,
          name: 'wurmple',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/265.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/265.png'
            }
          ]
        },
        {
          id: 266,
          name: 'silcoon',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/266.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/266.png'
            }
          ]
        },
        {
          id: 267,
          name: 'beautifly',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/267.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/267.png'
            }
          ]
        },
        {
          id: 268,
          name: 'cascoon',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/268.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/268.png'
            }
          ]
        },
        {
          id: 269,
          name: 'dustox',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/269.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/269.png'
            }
          ]
        },
        {
          id: 270,
          name: 'lotad',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/270.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/270.png'
            }
          ]
        },
        {
          id: 271,
          name: 'lombre',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/271.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/271.png'
            }
          ]
        },
        {
          id: 272,
          name: 'ludicolo',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/272.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/272.png'
            }
          ]
        },
        {
          id: 273,
          name: 'seedot',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/273.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/273.png'
            }
          ]
        },
        {
          id: 274,
          name: 'nuzleaf',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/274.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/274.png'
            }
          ]
        },
        {
          id: 275,
          name: 'shiftry',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/275.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/275.png'
            }
          ]
        },
        {
          id: 276,
          name: 'taillow',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/276.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/276.png'
            }
          ]
        },
        {
          id: 277,
          name: 'swellow',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/277.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/277.png'
            }
          ]
        },
        {
          id: 278,
          name: 'wingull',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/278.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/278.png'
            }
          ]
        },
        {
          id: 279,
          name: 'pelipper',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/279.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/279.png'
            }
          ]
        },
        {
          id: 280,
          name: 'ralts',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/280.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/280.png'
            }
          ]
        },
        {
          id: 281,
          name: 'kirlia',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/281.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/281.png'
            }
          ]
        },
        {
          id: 282,
          name: 'gardevoir',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/282.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/282.png'
            }
          ]
        },
        {
          id: 283,
          name: 'surskit',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/283.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/283.png'
            }
          ]
        },
        {
          id: 284,
          name: 'masquerain',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/284.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/284.png'
            }
          ]
        },
        {
          id: 285,
          name: 'shroomish',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/285.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/285.png'
            }
          ]
        },
        {
          id: 286,
          name: 'breloom',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/286.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/286.png'
            }
          ]
        },
        {
          id: 287,
          name: 'slakoth',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/287.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/287.png'
            }
          ]
        },
        {
          id: 288,
          name: 'vigoroth',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/288.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/288.png'
            }
          ]
        },
        {
          id: 289,
          name: 'slaking',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/289.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/289.png'
            }
          ]
        },
        {
          id: 290,
          name: 'nincada',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/290.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/290.png'
            }
          ]
        },
        {
          id: 291,
          name: 'ninjask',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/291.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/291.png'
            }
          ]
        },
        {
          id: 292,
          name: 'shedinja',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/292.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/292.png'
            }
          ]
        },
        {
          id: 293,
          name: 'whismur',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/293.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/293.png'
            }
          ]
        },
        {
          id: 294,
          name: 'loudred',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/294.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/294.png'
            }
          ]
        },
        {
          id: 295,
          name: 'exploud',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/295.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/295.png'
            }
          ]
        },
        {
          id: 296,
          name: 'makuhita',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/296.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/296.png'
            }
          ]
        },
        {
          id: 297,
          name: 'hariyama',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/297.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/297.png'
            }
          ]
        },
        {
          id: 298,
          name: 'azurill',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/298.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/298.png'
            }
          ]
        },
        {
          id: 299,
          name: 'nosepass',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/299.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/299.png'
            }
          ]
        },
        {
          id: 300,
          name: 'skitty',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/300.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/300.png'
            }
          ]
        },
        {
          id: 301,
          name: 'delcatty',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/301.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/301.png'
            }
          ]
        },
        {
          id: 302,
          name: 'sableye',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/302.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/302.png'
            }
          ]
        },
        {
          id: 303,
          name: 'mawile',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/303.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/303.png'
            }
          ]
        },
        {
          id: 304,
          name: 'aron',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/304.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/304.png'
            }
          ]
        },
        {
          id: 305,
          name: 'lairon',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/305.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/305.png'
            }
          ]
        },
        {
          id: 306,
          name: 'aggron',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/306.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/306.png'
            }
          ]
        },
        {
          id: 307,
          name: 'meditite',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/307.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/307.png'
            }
          ]
        },
        {
          id: 308,
          name: 'medicham',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/308.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/308.png'
            }
          ]
        },
        {
          id: 309,
          name: 'electrike',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/309.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/309.png'
            }
          ]
        },
        {
          id: 310,
          name: 'manectric',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/310.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/310.png'
            }
          ]
        },
        {
          id: 311,
          name: 'plusle',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/311.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/311.png'
            }
          ]
        },
        {
          id: 312,
          name: 'minun',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/312.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/312.png'
            }
          ]
        },
        {
          id: 313,
          name: 'volbeat',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/313.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/313.png'
            }
          ]
        },
        {
          id: 314,
          name: 'illumise',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/314.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/314.png'
            }
          ]
        },
        {
          id: 315,
          name: 'roselia',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/315.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/315.png'
            }
          ]
        },
        {
          id: 316,
          name: 'gulpin',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/316.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/316.png'
            }
          ]
        },
        {
          id: 317,
          name: 'swalot',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/317.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/317.png'
            }
          ]
        },
        {
          id: 318,
          name: 'carvanha',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/318.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/318.png'
            }
          ]
        },
        {
          id: 319,
          name: 'sharpedo',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/319.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/319.png'
            }
          ]
        },
        {
          id: 320,
          name: 'wailmer',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/320.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/320.png'
            }
          ]
        },
        {
          id: 321,
          name: 'wailord',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/321.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/321.png'
            }
          ]
        },
        {
          id: 322,
          name: 'numel',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/322.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/322.png'
            }
          ]
        },
        {
          id: 323,
          name: 'camerupt',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/323.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/323.png'
            }
          ]
        },
        {
          id: 324,
          name: 'torkoal',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/324.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/324.png'
            }
          ]
        },
        {
          id: 325,
          name: 'spoink',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/325.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/325.png'
            }
          ]
        },
        {
          id: 326,
          name: 'grumpig',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/326.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/326.png'
            }
          ]
        },
        {
          id: 327,
          name: 'spinda',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/327.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/327.png'
            }
          ]
        },
        {
          id: 328,
          name: 'trapinch',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/328.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/328.png'
            }
          ]
        },
        {
          id: 329,
          name: 'vibrava',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/329.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/329.png'
            }
          ]
        },
        {
          id: 330,
          name: 'flygon',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/330.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/330.png'
            }
          ]
        },
        {
          id: 331,
          name: 'cacnea',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/331.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/331.png'
            }
          ]
        },
        {
          id: 332,
          name: 'cacturne',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/332.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/332.png'
            }
          ]
        },
        {
          id: 333,
          name: 'swablu',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/333.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/333.png'
            }
          ]
        },
        {
          id: 334,
          name: 'altaria',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/334.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/334.png'
            }
          ]
        },
        {
          id: 335,
          name: 'zangoose',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/335.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/335.png'
            }
          ]
        },
        {
          id: 336,
          name: 'seviper',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/336.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/336.png'
            }
          ]
        },
        {
          id: 337,
          name: 'lunatone',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/337.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/337.png'
            }
          ]
        },
        {
          id: 338,
          name: 'solrock',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/338.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/338.png'
            }
          ]
        },
        {
          id: 339,
          name: 'barboach',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/339.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/339.png'
            }
          ]
        },
        {
          id: 340,
          name: 'whiscash',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/340.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/340.png'
            }
          ]
        },
        {
          id: 341,
          name: 'corphish',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/341.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/341.png'
            }
          ]
        },
        {
          id: 342,
          name: 'crawdaunt',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/342.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/342.png'
            }
          ]
        },
        {
          id: 343,
          name: 'baltoy',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/343.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/343.png'
            }
          ]
        },
        {
          id: 344,
          name: 'claydol',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/344.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/344.png'
            }
          ]
        },
        {
          id: 345,
          name: 'lileep',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/345.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/345.png'
            }
          ]
        },
        {
          id: 346,
          name: 'cradily',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/346.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/346.png'
            }
          ]
        },
        {
          id: 347,
          name: 'anorith',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/347.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/347.png'
            }
          ]
        },
        {
          id: 348,
          name: 'armaldo',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/348.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/348.png'
            }
          ]
        },
        {
          id: 349,
          name: 'feebas',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/349.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/349.png'
            }
          ]
        },
        {
          id: 350,
          name: 'milotic',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/350.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/350.png'
            }
          ]
        },
        {
          id: 351,
          name: 'castform',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/351.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/351.png'
            }
          ]
        },
        {
          id: 352,
          name: 'kecleon',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/352.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/352.png'
            }
          ]
        },
        {
          id: 353,
          name: 'shuppet',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/353.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/353.png'
            }
          ]
        },
        {
          id: 354,
          name: 'banette',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/354.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/354.png'
            }
          ]
        },
        {
          id: 355,
          name: 'duskull',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/355.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/355.png'
            }
          ]
        },
        {
          id: 356,
          name: 'dusclops',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/356.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/356.png'
            }
          ]
        },
        {
          id: 357,
          name: 'tropius',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/357.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/357.png'
            }
          ]
        },
        {
          id: 358,
          name: 'chimecho',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/358.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/358.png'
            }
          ]
        },
        {
          id: 359,
          name: 'absol',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/359.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/359.png'
            }
          ]
        },
        {
          id: 360,
          name: 'wynaut',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/360.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/360.png'
            }
          ]
        },
        {
          id: 361,
          name: 'snorunt',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/361.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/361.png'
            }
          ]
        },
        {
          id: 362,
          name: 'glalie',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/362.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/362.png'
            }
          ]
        },
        {
          id: 363,
          name: 'spheal',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/363.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/363.png'
            }
          ]
        },
        {
          id: 364,
          name: 'sealeo',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/364.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/364.png'
            }
          ]
        },
        {
          id: 365,
          name: 'walrein',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/365.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/365.png'
            }
          ]
        },
        {
          id: 366,
          name: 'clamperl',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/366.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/366.png'
            }
          ]
        },
        {
          id: 367,
          name: 'huntail',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/367.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/367.png'
            }
          ]
        },
        {
          id: 368,
          name: 'gorebyss',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/368.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/368.png'
            }
          ]
        },
        {
          id: 369,
          name: 'relicanth',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/369.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/369.png'
            }
          ]
        },
        {
          id: 370,
          name: 'luvdisc',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/370.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/370.png'
            }
          ]
        },
        {
          id: 371,
          name: 'bagon',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/371.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/371.png'
            }
          ]
        },
        {
          id: 372,
          name: 'shelgon',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/372.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/372.png'
            }
          ]
        },
        {
          id: 373,
          name: 'salamence',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/373.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/373.png'
            }
          ]
        },
        {
          id: 374,
          name: 'beldum',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/374.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/374.png'
            }
          ]
        },
        {
          id: 375,
          name: 'metang',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/375.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/375.png'
            }
          ]
        },
        {
          id: 376,
          name: 'metagross',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/376.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/376.png'
            }
          ]
        },
        {
          id: 377,
          name: 'regirock',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/377.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/377.png'
            }
          ]
        },
        {
          id: 378,
          name: 'regice',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/378.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/378.png'
            }
          ]
        },
        {
          id: 379,
          name: 'registeel',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/379.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/379.png'
            }
          ]
        },
        {
          id: 380,
          name: 'latias',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/380.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/380.png'
            }
          ]
        },
        {
          id: 381,
          name: 'latios',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/381.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/381.png'
            }
          ]
        },
        {
          id: 382,
          name: 'kyogre',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/382.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/382.png'
            }
          ]
        },
        {
          id: 383,
          name: 'groudon',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/383.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/383.png'
            }
          ]
        },
        {
          id: 384,
          name: 'rayquaza',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/384.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/384.png'
            }
          ]
        },
        {
          id: 385,
          name: 'jirachi',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/385.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/385.png'
            }
          ]
        },
        {
          id: 386,
          name: 'deoxys-normal',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/386.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/386.png'
            }
          ]
        },
        {
          id: 387,
          name: 'turtwig',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/387.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/387.png'
            }
          ]
        },
        {
          id: 388,
          name: 'grotle',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/388.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/388.png'
            }
          ]
        },
        {
          id: 389,
          name: 'torterra',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/389.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/389.png'
            }
          ]
        },
        {
          id: 390,
          name: 'chimchar',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/390.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/390.png'
            }
          ]
        },
        {
          id: 391,
          name: 'monferno',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/391.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/391.png'
            }
          ]
        },
        {
          id: 392,
          name: 'infernape',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/392.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/392.png'
            }
          ]
        },
        {
          id: 393,
          name: 'piplup',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/393.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/393.png'
            }
          ]
        },
        {
          id: 394,
          name: 'prinplup',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/394.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/394.png'
            }
          ]
        },
        {
          id: 395,
          name: 'empoleon',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/395.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/395.png'
            }
          ]
        },
        {
          id: 396,
          name: 'starly',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/396.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/396.png'
            }
          ]
        },
        {
          id: 397,
          name: 'staravia',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/397.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/397.png'
            }
          ]
        },
        {
          id: 398,
          name: 'staraptor',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/398.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/398.png'
            }
          ]
        },
        {
          id: 399,
          name: 'bidoof',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/399.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/399.png'
            }
          ]
        },
        {
          id: 400,
          name: 'bibarel',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/400.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/400.png'
            }
          ]
        },
        {
          id: 401,
          name: 'kricketot',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/401.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/401.png'
            }
          ]
        },
        {
          id: 402,
          name: 'kricketune',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/402.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/402.png'
            }
          ]
        },
        {
          id: 403,
          name: 'shinx',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/403.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/403.png'
            }
          ]
        },
        {
          id: 404,
          name: 'luxio',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/404.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/404.png'
            }
          ]
        },
        {
          id: 405,
          name: 'luxray',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/405.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/405.png'
            }
          ]
        },
        {
          id: 406,
          name: 'budew',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/406.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/406.png'
            }
          ]
        },
        {
          id: 407,
          name: 'roserade',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/407.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/407.png'
            }
          ]
        },
        {
          id: 408,
          name: 'cranidos',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/408.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/408.png'
            }
          ]
        },
        {
          id: 409,
          name: 'rampardos',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/409.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/409.png'
            }
          ]
        },
        {
          id: 410,
          name: 'shieldon',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/410.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/410.png'
            }
          ]
        },
        {
          id: 411,
          name: 'bastiodon',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/411.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/411.png'
            }
          ]
        },
        {
          id: 412,
          name: 'burmy',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/412.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/412.png'
            }
          ]
        },
        {
          id: 413,
          name: 'wormadam-plant',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/413.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/413.png'
            }
          ]
        },
        {
          id: 414,
          name: 'mothim',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/414.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/414.png'
            }
          ]
        },
        {
          id: 415,
          name: 'combee',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/415.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/415.png'
            }
          ]
        },
        {
          id: 416,
          name: 'vespiquen',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/416.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/416.png'
            }
          ]
        },
        {
          id: 417,
          name: 'pachirisu',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/417.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/417.png'
            }
          ]
        },
        {
          id: 418,
          name: 'buizel',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/418.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/418.png'
            }
          ]
        },
        {
          id: 419,
          name: 'floatzel',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/419.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/419.png'
            }
          ]
        },
        {
          id: 420,
          name: 'cherubi',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/420.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/420.png'
            }
          ]
        },
        {
          id: 421,
          name: 'cherrim',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/421.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/421.png'
            }
          ]
        },
        {
          id: 422,
          name: 'shellos',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/422.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/422.png'
            }
          ]
        },
        {
          id: 423,
          name: 'gastrodon',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/423.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/423.png'
            }
          ]
        },
        {
          id: 424,
          name: 'ambipom',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/424.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/424.png'
            }
          ]
        },
        {
          id: 425,
          name: 'drifloon',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/425.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/425.png'
            }
          ]
        },
        {
          id: 426,
          name: 'drifblim',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/426.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/426.png'
            }
          ]
        },
        {
          id: 427,
          name: 'buneary',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/427.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/427.png'
            }
          ]
        },
        {
          id: 428,
          name: 'lopunny',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/428.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/428.png'
            }
          ]
        },
        {
          id: 429,
          name: 'mismagius',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/429.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/429.png'
            }
          ]
        },
        {
          id: 430,
          name: 'honchkrow',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/430.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/430.png'
            }
          ]
        },
        {
          id: 431,
          name: 'glameow',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/431.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/431.png'
            }
          ]
        },
        {
          id: 432,
          name: 'purugly',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/432.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/432.png'
            }
          ]
        },
        {
          id: 433,
          name: 'chingling',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/433.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/433.png'
            }
          ]
        },
        {
          id: 434,
          name: 'stunky',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/434.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/434.png'
            }
          ]
        },
        {
          id: 435,
          name: 'skuntank',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/435.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/435.png'
            }
          ]
        },
        {
          id: 436,
          name: 'bronzor',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/436.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/436.png'
            }
          ]
        },
        {
          id: 437,
          name: 'bronzong',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/437.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/437.png'
            }
          ]
        },
        {
          id: 438,
          name: 'bonsly',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/438.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/438.png'
            }
          ]
        },
        {
          id: 439,
          name: 'mime-jr',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/439.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/439.png'
            }
          ]
        },
        {
          id: 440,
          name: 'happiny',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/440.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/440.png'
            }
          ]
        },
        {
          id: 441,
          name: 'chatot',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/441.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/441.png'
            }
          ]
        },
        {
          id: 442,
          name: 'spiritomb',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/442.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/442.png'
            }
          ]
        },
        {
          id: 443,
          name: 'gible',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/443.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/443.png'
            }
          ]
        },
        {
          id: 444,
          name: 'gabite',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/444.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/444.png'
            }
          ]
        },
        {
          id: 445,
          name: 'garchomp',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/445.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/445.png'
            }
          ]
        },
        {
          id: 446,
          name: 'munchlax',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/446.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/446.png'
            }
          ]
        },
        {
          id: 447,
          name: 'riolu',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/447.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/447.png'
            }
          ]
        },
        {
          id: 448,
          name: 'lucario',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/448.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/448.png'
            }
          ]
        },
        {
          id: 449,
          name: 'hippopotas',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/449.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/449.png'
            }
          ]
        },
        {
          id: 450,
          name: 'hippowdon',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/450.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/450.png'
            }
          ]
        },
        {
          id: 451,
          name: 'skorupi',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/451.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/451.png'
            }
          ]
        },
        {
          id: 452,
          name: 'drapion',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/452.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/452.png'
            }
          ]
        },
        {
          id: 453,
          name: 'croagunk',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/453.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/453.png'
            }
          ]
        },
        {
          id: 454,
          name: 'toxicroak',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/454.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/454.png'
            }
          ]
        },
        {
          id: 455,
          name: 'carnivine',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/455.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/455.png'
            }
          ]
        },
        {
          id: 456,
          name: 'finneon',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/456.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/456.png'
            }
          ]
        },
        {
          id: 457,
          name: 'lumineon',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/457.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/457.png'
            }
          ]
        },
        {
          id: 458,
          name: 'mantyke',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/458.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/458.png'
            }
          ]
        },
        {
          id: 459,
          name: 'snover',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/459.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/459.png'
            }
          ]
        },
        {
          id: 460,
          name: 'abomasnow',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/460.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/460.png'
            }
          ]
        },
        {
          id: 461,
          name: 'weavile',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/461.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/461.png'
            }
          ]
        },
        {
          id: 462,
          name: 'magnezone',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/462.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/462.png'
            }
          ]
        },
        {
          id: 463,
          name: 'lickilicky',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/463.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/463.png'
            }
          ]
        },
        {
          id: 464,
          name: 'rhyperior',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/464.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/464.png'
            }
          ]
        },
        {
          id: 465,
          name: 'tangrowth',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/465.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/465.png'
            }
          ]
        },
        {
          id: 466,
          name: 'electivire',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/466.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/466.png'
            }
          ]
        },
        {
          id: 467,
          name: 'magmortar',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/467.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/467.png'
            }
          ]
        },
        {
          id: 468,
          name: 'togekiss',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/468.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/468.png'
            }
          ]
        },
        {
          id: 469,
          name: 'yanmega',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/469.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/469.png'
            }
          ]
        },
        {
          id: 470,
          name: 'leafeon',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/470.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/470.png'
            }
          ]
        },
        {
          id: 471,
          name: 'glaceon',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/471.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/471.png'
            }
          ]
        },
        {
          id: 472,
          name: 'gliscor',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/472.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/472.png'
            }
          ]
        },
        {
          id: 473,
          name: 'mamoswine',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/473.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/473.png'
            }
          ]
        },
        {
          id: 474,
          name: 'porygon-z',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/474.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/474.png'
            }
          ]
        },
        {
          id: 475,
          name: 'gallade',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/475.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/475.png'
            }
          ]
        },
        {
          id: 476,
          name: 'probopass',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/476.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/476.png'
            }
          ]
        },
        {
          id: 477,
          name: 'dusknoir',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/477.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/477.png'
            }
          ]
        },
        {
          id: 478,
          name: 'froslass',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/478.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/478.png'
            }
          ]
        },
        {
          id: 479,
          name: 'rotom',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/479.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/479.png'
            }
          ]
        },
        {
          id: 480,
          name: 'uxie',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/480.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/480.png'
            }
          ]
        },
        {
          id: 481,
          name: 'mesprit',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/481.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/481.png'
            }
          ]
        },
        {
          id: 482,
          name: 'azelf',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/482.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/482.png'
            }
          ]
        },
        {
          id: 483,
          name: 'dialga',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/483.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/483.png'
            }
          ]
        },
        {
          id: 484,
          name: 'palkia',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/484.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/484.png'
            }
          ]
        },
        {
          id: 485,
          name: 'heatran',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/485.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/485.png'
            }
          ]
        },
        {
          id: 486,
          name: 'regigigas',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/486.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/486.png'
            }
          ]
        },
        {
          id: 487,
          name: 'giratina-altered',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/487.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/487.png'
            }
          ]
        },
        {
          id: 488,
          name: 'cresselia',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/488.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/488.png'
            }
          ]
        },
        {
          id: 489,
          name: 'phione',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/489.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/489.png'
            }
          ]
        },
        {
          id: 490,
          name: 'manaphy',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/490.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/490.png'
            }
          ]
        },
        {
          id: 491,
          name: 'darkrai',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/491.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/491.png'
            }
          ]
        },
        {
          id: 492,
          name: 'shaymin-land',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/492.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/492.png'
            }
          ]
        },
        {
          id: 493,
          name: 'arceus',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/493.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/493.png'
            }
          ]
        },
        {
          id: 494,
          name: 'victini',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/494.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/494.png'
            }
          ]
        },
        {
          id: 495,
          name: 'snivy',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/495.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/495.png'
            }
          ]
        },
        {
          id: 496,
          name: 'servine',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/496.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/496.png'
            }
          ]
        },
        {
          id: 497,
          name: 'serperior',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/497.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/497.png'
            }
          ]
        },
        {
          id: 498,
          name: 'tepig',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/498.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/498.png'
            }
          ]
        },
        {
          id: 499,
          name: 'pignite',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/499.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/499.png'
            }
          ]
        },
        {
          id: 500,
          name: 'emboar',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/500.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/500.png'
            }
          ]
        },
        {
          id: 501,
          name: 'oshawott',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/501.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/501.png'
            }
          ]
        },
        {
          id: 502,
          name: 'dewott',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/502.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/502.png'
            }
          ]
        },
        {
          id: 503,
          name: 'samurott',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/503.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/503.png'
            }
          ]
        },
        {
          id: 504,
          name: 'patrat',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/504.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/504.png'
            }
          ]
        },
        {
          id: 505,
          name: 'watchog',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/505.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/505.png'
            }
          ]
        },
        {
          id: 506,
          name: 'lillipup',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/506.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/506.png'
            }
          ]
        },
        {
          id: 507,
          name: 'herdier',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/507.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/507.png'
            }
          ]
        },
        {
          id: 508,
          name: 'stoutland',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/508.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/508.png'
            }
          ]
        },
        {
          id: 509,
          name: 'purrloin',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/509.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/509.png'
            }
          ]
        },
        {
          id: 510,
          name: 'liepard',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/510.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/510.png'
            }
          ]
        },
        {
          id: 511,
          name: 'pansage',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/511.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/511.png'
            }
          ]
        },
        {
          id: 512,
          name: 'simisage',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/512.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/512.png'
            }
          ]
        },
        {
          id: 513,
          name: 'pansear',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/513.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/513.png'
            }
          ]
        },
        {
          id: 514,
          name: 'simisear',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/514.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/514.png'
            }
          ]
        },
        {
          id: 515,
          name: 'panpour',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/515.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/515.png'
            }
          ]
        },
        {
          id: 516,
          name: 'simipour',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/516.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/516.png'
            }
          ]
        },
        {
          id: 517,
          name: 'munna',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/517.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/517.png'
            }
          ]
        },
        {
          id: 518,
          name: 'musharna',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/518.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/518.png'
            }
          ]
        },
        {
          id: 519,
          name: 'pidove',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/519.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/519.png'
            }
          ]
        },
        {
          id: 520,
          name: 'tranquill',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/520.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/520.png'
            }
          ]
        },
        {
          id: 521,
          name: 'unfezant',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/521.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/521.png'
            }
          ]
        },
        {
          id: 522,
          name: 'blitzle',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/522.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/522.png'
            }
          ]
        },
        {
          id: 523,
          name: 'zebstrika',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/523.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/523.png'
            }
          ]
        },
        {
          id: 524,
          name: 'roggenrola',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/524.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/524.png'
            }
          ]
        },
        {
          id: 525,
          name: 'boldore',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/525.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/525.png'
            }
          ]
        },
        {
          id: 526,
          name: 'gigalith',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/526.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/526.png'
            }
          ]
        },
        {
          id: 527,
          name: 'woobat',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/527.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/527.png'
            }
          ]
        },
        {
          id: 528,
          name: 'swoobat',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/528.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/528.png'
            }
          ]
        },
        {
          id: 529,
          name: 'drilbur',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/529.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/529.png'
            }
          ]
        },
        {
          id: 530,
          name: 'excadrill',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/530.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/530.png'
            }
          ]
        },
        {
          id: 531,
          name: 'audino',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/531.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/531.png'
            }
          ]
        },
        {
          id: 532,
          name: 'timburr',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/532.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/532.png'
            }
          ]
        },
        {
          id: 533,
          name: 'gurdurr',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/533.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/533.png'
            }
          ]
        },
        {
          id: 534,
          name: 'conkeldurr',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/534.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/534.png'
            }
          ]
        },
        {
          id: 535,
          name: 'tympole',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/535.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/535.png'
            }
          ]
        },
        {
          id: 536,
          name: 'palpitoad',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/536.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/536.png'
            }
          ]
        },
        {
          id: 537,
          name: 'seismitoad',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/537.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/537.png'
            }
          ]
        },
        {
          id: 538,
          name: 'throh',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/538.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/538.png'
            }
          ]
        },
        {
          id: 539,
          name: 'sawk',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/539.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/539.png'
            }
          ]
        },
        {
          id: 540,
          name: 'sewaddle',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/540.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/540.png'
            }
          ]
        },
        {
          id: 541,
          name: 'swadloon',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/541.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/541.png'
            }
          ]
        },
        {
          id: 542,
          name: 'leavanny',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/542.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/542.png'
            }
          ]
        },
        {
          id: 543,
          name: 'venipede',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/543.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/543.png'
            }
          ]
        },
        {
          id: 544,
          name: 'whirlipede',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/544.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/544.png'
            }
          ]
        },
        {
          id: 545,
          name: 'scolipede',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/545.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/545.png'
            }
          ]
        },
        {
          id: 546,
          name: 'cottonee',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/546.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/546.png'
            }
          ]
        },
        {
          id: 547,
          name: 'whimsicott',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/547.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/547.png'
            }
          ]
        },
        {
          id: 548,
          name: 'petilil',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/548.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/548.png'
            }
          ]
        },
        {
          id: 549,
          name: 'lilligant',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/549.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/549.png'
            }
          ]
        },
        {
          id: 550,
          name: 'basculin-red-striped',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/550.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/550.png'
            }
          ]
        },
        {
          id: 551,
          name: 'sandile',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/551.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/551.png'
            }
          ]
        },
        {
          id: 552,
          name: 'krokorok',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/552.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/552.png'
            }
          ]
        },
        {
          id: 553,
          name: 'krookodile',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/553.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/553.png'
            }
          ]
        },
        {
          id: 554,
          name: 'darumaka',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/554.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/554.png'
            }
          ]
        },
        {
          id: 555,
          name: 'darmanitan-standard',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/555.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/555.png'
            }
          ]
        },
        {
          id: 556,
          name: 'maractus',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/556.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/556.png'
            }
          ]
        },
        {
          id: 557,
          name: 'dwebble',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/557.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/557.png'
            }
          ]
        },
        {
          id: 558,
          name: 'crustle',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/558.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/558.png'
            }
          ]
        },
        {
          id: 559,
          name: 'scraggy',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/559.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/559.png'
            }
          ]
        },
        {
          id: 560,
          name: 'scrafty',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/560.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/560.png'
            }
          ]
        },
        {
          id: 561,
          name: 'sigilyph',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/561.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/561.png'
            }
          ]
        },
        {
          id: 562,
          name: 'yamask',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/562.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/562.png'
            }
          ]
        },
        {
          id: 563,
          name: 'cofagrigus',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/563.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/563.png'
            }
          ]
        },
        {
          id: 564,
          name: 'tirtouga',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/564.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/564.png'
            }
          ]
        },
        {
          id: 565,
          name: 'carracosta',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/565.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/565.png'
            }
          ]
        },
        {
          id: 566,
          name: 'archen',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/566.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/566.png'
            }
          ]
        },
        {
          id: 567,
          name: 'archeops',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/567.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/567.png'
            }
          ]
        },
        {
          id: 568,
          name: 'trubbish',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/568.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/568.png'
            }
          ]
        },
        {
          id: 569,
          name: 'garbodor',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/569.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/569.png'
            }
          ]
        },
        {
          id: 570,
          name: 'zorua',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/570.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/570.png'
            }
          ]
        },
        {
          id: 571,
          name: 'zoroark',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/571.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/571.png'
            }
          ]
        },
        {
          id: 572,
          name: 'minccino',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/572.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/572.png'
            }
          ]
        },
        {
          id: 573,
          name: 'cinccino',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/573.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/573.png'
            }
          ]
        },
        {
          id: 574,
          name: 'gothita',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/574.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/574.png'
            }
          ]
        },
        {
          id: 575,
          name: 'gothorita',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/575.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/575.png'
            }
          ]
        },
        {
          id: 576,
          name: 'gothitelle',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/576.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/576.png'
            }
          ]
        },
        {
          id: 577,
          name: 'solosis',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/577.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/577.png'
            }
          ]
        },
        {
          id: 578,
          name: 'duosion',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/578.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/578.png'
            }
          ]
        },
        {
          id: 579,
          name: 'reuniclus',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/579.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/579.png'
            }
          ]
        },
        {
          id: 580,
          name: 'ducklett',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/580.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/580.png'
            }
          ]
        },
        {
          id: 581,
          name: 'swanna',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/581.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/581.png'
            }
          ]
        },
        {
          id: 582,
          name: 'vanillite',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/582.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/582.png'
            }
          ]
        },
        {
          id: 583,
          name: 'vanillish',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/583.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/583.png'
            }
          ]
        },
        {
          id: 584,
          name: 'vanilluxe',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/584.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/584.png'
            }
          ]
        },
        {
          id: 585,
          name: 'deerling',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/585.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/585.png'
            }
          ]
        },
        {
          id: 586,
          name: 'sawsbuck',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/586.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/586.png'
            }
          ]
        },
        {
          id: 587,
          name: 'emolga',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/587.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/587.png'
            }
          ]
        },
        {
          id: 588,
          name: 'karrablast',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/588.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/588.png'
            }
          ]
        },
        {
          id: 589,
          name: 'escavalier',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/589.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/589.png'
            }
          ]
        },
        {
          id: 590,
          name: 'foongus',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/590.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/590.png'
            }
          ]
        },
        {
          id: 591,
          name: 'amoonguss',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/591.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/591.png'
            }
          ]
        },
        {
          id: 592,
          name: 'frillish-male',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/592.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/592.png'
            }
          ]
        },
        {
          id: 593,
          name: 'jellicent-male',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/593.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/593.png'
            }
          ]
        },
        {
          id: 594,
          name: 'alomomola',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/594.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/594.png'
            }
          ]
        },
        {
          id: 595,
          name: 'joltik',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/595.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/595.png'
            }
          ]
        },
        {
          id: 596,
          name: 'galvantula',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/596.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/596.png'
            }
          ]
        },
        {
          id: 597,
          name: 'ferroseed',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/597.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/597.png'
            }
          ]
        },
        {
          id: 598,
          name: 'ferrothorn',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/598.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/598.png'
            }
          ]
        },
        {
          id: 599,
          name: 'klink',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/599.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/599.png'
            }
          ]
        },
        {
          id: 600,
          name: 'klang',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/600.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/600.png'
            }
          ]
        },
        {
          id: 601,
          name: 'klinklang',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/601.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/601.png'
            }
          ]
        },
        {
          id: 602,
          name: 'tynamo',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/602.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/602.png'
            }
          ]
        },
        {
          id: 603,
          name: 'eelektrik',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/603.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/603.png'
            }
          ]
        },
        {
          id: 604,
          name: 'eelektross',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/604.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/604.png'
            }
          ]
        },
        {
          id: 605,
          name: 'elgyem',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/605.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/605.png'
            }
          ]
        },
        {
          id: 606,
          name: 'beheeyem',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/606.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/606.png'
            }
          ]
        },
        {
          id: 607,
          name: 'litwick',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/607.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/607.png'
            }
          ]
        },
        {
          id: 608,
          name: 'lampent',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/608.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/608.png'
            }
          ]
        },
        {
          id: 609,
          name: 'chandelure',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/609.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/609.png'
            }
          ]
        },
        {
          id: 610,
          name: 'axew',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/610.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/610.png'
            }
          ]
        },
        {
          id: 611,
          name: 'fraxure',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/611.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/611.png'
            }
          ]
        },
        {
          id: 612,
          name: 'haxorus',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/612.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/612.png'
            }
          ]
        },
        {
          id: 613,
          name: 'cubchoo',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/613.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/613.png'
            }
          ]
        },
        {
          id: 614,
          name: 'beartic',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/614.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/614.png'
            }
          ]
        },
        {
          id: 615,
          name: 'cryogonal',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/615.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/615.png'
            }
          ]
        },
        {
          id: 616,
          name: 'shelmet',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/616.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/616.png'
            }
          ]
        },
        {
          id: 617,
          name: 'accelgor',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/617.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/617.png'
            }
          ]
        },
        {
          id: 618,
          name: 'stunfisk',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/618.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/618.png'
            }
          ]
        },
        {
          id: 619,
          name: 'mienfoo',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/619.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/619.png'
            }
          ]
        },
        {
          id: 620,
          name: 'mienshao',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/620.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/620.png'
            }
          ]
        },
        {
          id: 621,
          name: 'druddigon',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/621.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/621.png'
            }
          ]
        },
        {
          id: 622,
          name: 'golett',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/622.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/622.png'
            }
          ]
        },
        {
          id: 623,
          name: 'golurk',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/623.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/623.png'
            }
          ]
        },
        {
          id: 624,
          name: 'pawniard',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/624.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/624.png'
            }
          ]
        },
        {
          id: 625,
          name: 'bisharp',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/625.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/625.png'
            }
          ]
        },
        {
          id: 626,
          name: 'bouffalant',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/626.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/626.png'
            }
          ]
        },
        {
          id: 627,
          name: 'rufflet',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/627.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/627.png'
            }
          ]
        },
        {
          id: 628,
          name: 'braviary',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/628.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/628.png'
            }
          ]
        },
        {
          id: 629,
          name: 'vullaby',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/629.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/629.png'
            }
          ]
        },
        {
          id: 630,
          name: 'mandibuzz',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/630.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/630.png'
            }
          ]
        },
        {
          id: 631,
          name: 'heatmor',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/631.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/631.png'
            }
          ]
        },
        {
          id: 632,
          name: 'durant',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/632.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/632.png'
            }
          ]
        },
        {
          id: 633,
          name: 'deino',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/633.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/633.png'
            }
          ]
        },
        {
          id: 634,
          name: 'zweilous',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/634.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/634.png'
            }
          ]
        },
        {
          id: 635,
          name: 'hydreigon',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/635.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/635.png'
            }
          ]
        },
        {
          id: 636,
          name: 'larvesta',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/636.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/636.png'
            }
          ]
        },
        {
          id: 637,
          name: 'volcarona',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/637.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/637.png'
            }
          ]
        },
        {
          id: 638,
          name: 'cobalion',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/638.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/638.png'
            }
          ]
        },
        {
          id: 639,
          name: 'terrakion',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/639.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/639.png'
            }
          ]
        },
        {
          id: 640,
          name: 'virizion',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/640.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/640.png'
            }
          ]
        },
        {
          id: 641,
          name: 'tornadus-incarnate',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/641.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/641.png'
            }
          ]
        },
        {
          id: 642,
          name: 'thundurus-incarnate',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/642.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/642.png'
            }
          ]
        },
        {
          id: 643,
          name: 'reshiram',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/643.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/643.png'
            }
          ]
        },
        {
          id: 644,
          name: 'zekrom',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/644.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/644.png'
            }
          ]
        },
        {
          id: 645,
          name: 'landorus-incarnate',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/645.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/645.png'
            }
          ]
        },
        {
          id: 646,
          name: 'kyurem',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/646.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/646.png'
            }
          ]
        },
        {
          id: 647,
          name: 'keldeo-ordinary',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/647.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/647.png'
            }
          ]
        },
        {
          id: 648,
          name: 'meloetta-aria',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/648.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/648.png'
            }
          ]
        },
        {
          id: 649,
          name: 'genesect',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/649.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/649.png'
            }
          ]
        },
        {
          id: 650,
          name: 'chespin',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/650.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/650.png'
            }
          ]
        },
        {
          id: 651,
          name: 'quilladin',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/651.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/651.png'
            }
          ]
        },
        {
          id: 652,
          name: 'chesnaught',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/652.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/652.png'
            }
          ]
        },
        {
          id: 653,
          name: 'fennekin',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/653.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/653.png'
            }
          ]
        },
        {
          id: 654,
          name: 'braixen',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/654.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/654.png'
            }
          ]
        },
        {
          id: 655,
          name: 'delphox',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/655.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/655.png'
            }
          ]
        },
        {
          id: 656,
          name: 'froakie',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/656.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/656.png'
            }
          ]
        },
        {
          id: 657,
          name: 'frogadier',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/657.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/657.png'
            }
          ]
        },
        {
          id: 658,
          name: 'greninja',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/658.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/658.png'
            }
          ]
        },
        {
          id: 659,
          name: 'bunnelby',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/659.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/659.png'
            }
          ]
        },
        {
          id: 660,
          name: 'diggersby',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/660.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/660.png'
            }
          ]
        },
        {
          id: 661,
          name: 'fletchling',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/661.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/661.png'
            }
          ]
        },
        {
          id: 662,
          name: 'fletchinder',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/662.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/662.png'
            }
          ]
        },
        {
          id: 663,
          name: 'talonflame',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/663.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/663.png'
            }
          ]
        },
        {
          id: 664,
          name: 'scatterbug',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/664.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/664.png'
            }
          ]
        },
        {
          id: 665,
          name: 'spewpa',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/665.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/665.png'
            }
          ]
        },
        {
          id: 666,
          name: 'vivillon',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/666.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/666.png'
            }
          ]
        },
        {
          id: 667,
          name: 'litleo',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/667.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/667.png'
            }
          ]
        },
        {
          id: 668,
          name: 'pyroar-male',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/668.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/668.png'
            }
          ]
        },
        {
          id: 669,
          name: 'flabebe',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/669.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/669.png'
            }
          ]
        },
        {
          id: 670,
          name: 'floette',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/670.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/670.png'
            }
          ]
        },
        {
          id: 671,
          name: 'florges',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/671.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/671.png'
            }
          ]
        },
        {
          id: 672,
          name: 'skiddo',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/672.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/672.png'
            }
          ]
        },
        {
          id: 673,
          name: 'gogoat',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/673.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/673.png'
            }
          ]
        },
        {
          id: 674,
          name: 'pancham',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/674.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/674.png'
            }
          ]
        },
        {
          id: 675,
          name: 'pangoro',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/675.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/675.png'
            }
          ]
        },
        {
          id: 676,
          name: 'furfrou',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/676.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/676.png'
            }
          ]
        },
        {
          id: 677,
          name: 'espurr',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/677.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/677.png'
            }
          ]
        },
        {
          id: 678,
          name: 'meowstic-male',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/678.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/678.png'
            }
          ]
        },
        {
          id: 679,
          name: 'honedge',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/679.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/679.png'
            }
          ]
        },
        {
          id: 680,
          name: 'doublade',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/680.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/680.png'
            }
          ]
        },
        {
          id: 681,
          name: 'aegislash-shield',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/681.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/681.png'
            }
          ]
        },
        {
          id: 682,
          name: 'spritzee',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/682.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/682.png'
            }
          ]
        },
        {
          id: 683,
          name: 'aromatisse',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/683.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/683.png'
            }
          ]
        },
        {
          id: 684,
          name: 'swirlix',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/684.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/684.png'
            }
          ]
        },
        {
          id: 685,
          name: 'slurpuff',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/685.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/685.png'
            }
          ]
        },
        {
          id: 686,
          name: 'inkay',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/686.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/686.png'
            }
          ]
        },
        {
          id: 687,
          name: 'malamar',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/687.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/687.png'
            }
          ]
        },
        {
          id: 688,
          name: 'binacle',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/688.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/688.png'
            }
          ]
        },
        {
          id: 689,
          name: 'barbaracle',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/689.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/689.png'
            }
          ]
        },
        {
          id: 690,
          name: 'skrelp',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/690.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/690.png'
            }
          ]
        },
        {
          id: 691,
          name: 'dragalge',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/691.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/691.png'
            }
          ]
        },
        {
          id: 692,
          name: 'clauncher',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/692.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/692.png'
            }
          ]
        },
        {
          id: 693,
          name: 'clawitzer',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/693.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/693.png'
            }
          ]
        },
        {
          id: 694,
          name: 'helioptile',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/694.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/694.png'
            }
          ]
        },
        {
          id: 695,
          name: 'heliolisk',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/695.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/695.png'
            }
          ]
        },
        {
          id: 696,
          name: 'tyrunt',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/696.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/696.png'
            }
          ]
        },
        {
          id: 697,
          name: 'tyrantrum',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/697.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/697.png'
            }
          ]
        },
        {
          id: 698,
          name: 'amaura',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/698.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/698.png'
            }
          ]
        },
        {
          id: 699,
          name: 'aurorus',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/699.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/699.png'
            }
          ]
        },
        {
          id: 700,
          name: 'sylveon',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/700.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/700.png'
            }
          ]
        },
        {
          id: 701,
          name: 'hawlucha',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/701.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/701.png'
            }
          ]
        },
        {
          id: 702,
          name: 'dedenne',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/702.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/702.png'
            }
          ]
        },
        {
          id: 703,
          name: 'carbink',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/703.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/703.png'
            }
          ]
        },
        {
          id: 704,
          name: 'goomy',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/704.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/704.png'
            }
          ]
        },
        {
          id: 705,
          name: 'sliggoo',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/705.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/705.png'
            }
          ]
        },
        {
          id: 706,
          name: 'goodra',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/706.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/706.png'
            }
          ]
        },
        {
          id: 707,
          name: 'klefki',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/707.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/707.png'
            }
          ]
        },
        {
          id: 708,
          name: 'phantump',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/708.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/708.png'
            }
          ]
        },
        {
          id: 709,
          name: 'trevenant',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/709.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/709.png'
            }
          ]
        },
        {
          id: 710,
          name: 'pumpkaboo-average',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/710.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/710.png'
            }
          ]
        },
        {
          id: 711,
          name: 'gourgeist-average',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/711.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/711.png'
            }
          ]
        },
        {
          id: 712,
          name: 'bergmite',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/712.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/712.png'
            }
          ]
        },
        {
          id: 713,
          name: 'avalugg',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/713.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/713.png'
            }
          ]
        },
        {
          id: 714,
          name: 'noibat',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/714.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/714.png'
            }
          ]
        },
        {
          id: 715,
          name: 'noivern',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/715.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/715.png'
            }
          ]
        },
        {
          id: 716,
          name: 'xerneas',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/716.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/716.png'
            }
          ]
        },
        {
          id: 717,
          name: 'yveltal',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/717.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/717.png'
            }
          ]
        },
        {
          id: 718,
          name: 'zygarde-50',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/718.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/718.png'
            }
          ]
        },
        {
          id: 719,
          name: 'diancie',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/719.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/719.png'
            }
          ]
        },
        {
          id: 720,
          name: 'hoopa',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/720.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/720.png'
            }
          ]
        },
        {
          id: 721,
          name: 'volcanion',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/721.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/721.png'
            }
          ]
        },
        {
          id: 722,
          name: 'rowlet',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/722.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/722.png'
            }
          ]
        },
        {
          id: 723,
          name: 'dartrix',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/723.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/723.png'
            }
          ]
        },
        {
          id: 724,
          name: 'decidueye',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/724.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/724.png'
            }
          ]
        },
        {
          id: 725,
          name: 'litten',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/725.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/725.png'
            }
          ]
        },
        {
          id: 726,
          name: 'torracat',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/726.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/726.png'
            }
          ]
        },
        {
          id: 727,
          name: 'incineroar',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/727.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/727.png'
            }
          ]
        },
        {
          id: 728,
          name: 'popplio',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/728.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/728.png'
            }
          ]
        },
        {
          id: 729,
          name: 'brionne',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/729.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/729.png'
            }
          ]
        },
        {
          id: 730,
          name: 'primarina',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/730.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/730.png'
            }
          ]
        },
        {
          id: 731,
          name: 'pikipek',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/731.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/731.png'
            }
          ]
        },
        {
          id: 732,
          name: 'trumbeak',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/732.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/732.png'
            }
          ]
        },
        {
          id: 733,
          name: 'toucannon',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/733.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/733.png'
            }
          ]
        },
        {
          id: 734,
          name: 'yungoos',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/734.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/734.png'
            }
          ]
        },
        {
          id: 735,
          name: 'gumshoos',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/735.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/735.png'
            }
          ]
        },
        {
          id: 736,
          name: 'grubbin',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/736.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/736.png'
            }
          ]
        },
        {
          id: 737,
          name: 'charjabug',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/737.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/737.png'
            }
          ]
        },
        {
          id: 738,
          name: 'vikavolt',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/738.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/738.png'
            }
          ]
        },
        {
          id: 739,
          name: 'crabrawler',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/739.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/739.png'
            }
          ]
        },
        {
          id: 740,
          name: 'crabominable',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/740.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/740.png'
            }
          ]
        },
        {
          id: 741,
          name: 'oricorio-baile',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/741.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/741.png'
            }
          ]
        },
        {
          id: 742,
          name: 'cutiefly',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/742.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/742.png'
            }
          ]
        },
        {
          id: 743,
          name: 'ribombee',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/743.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/743.png'
            }
          ]
        },
        {
          id: 744,
          name: 'rockruff',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/744.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/744.png'
            }
          ]
        },
        {
          id: 745,
          name: 'lycanroc-midday',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/745.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/745.png'
            }
          ]
        },
        {
          id: 746,
          name: 'wishiwashi-solo',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/746.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/746.png'
            }
          ]
        },
        {
          id: 747,
          name: 'mareanie',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/747.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/747.png'
            }
          ]
        },
        {
          id: 748,
          name: 'toxapex',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/748.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/748.png'
            }
          ]
        },
        {
          id: 749,
          name: 'mudbray',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/749.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/749.png'
            }
          ]
        },
        {
          id: 750,
          name: 'mudsdale',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/750.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/750.png'
            }
          ]
        },
        {
          id: 751,
          name: 'dewpider',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/751.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/751.png'
            }
          ]
        },
        {
          id: 752,
          name: 'araquanid',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/752.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/752.png'
            }
          ]
        },
        {
          id: 753,
          name: 'fomantis',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/753.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/753.png'
            }
          ]
        },
        {
          id: 754,
          name: 'lurantis',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/754.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/754.png'
            }
          ]
        },
        {
          id: 755,
          name: 'morelull',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/755.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/755.png'
            }
          ]
        },
        {
          id: 756,
          name: 'shiinotic',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/756.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/756.png'
            }
          ]
        },
        {
          id: 757,
          name: 'salandit',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/757.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/757.png'
            }
          ]
        },
        {
          id: 758,
          name: 'salazzle',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/758.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/758.png'
            }
          ]
        },
        {
          id: 759,
          name: 'stufful',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/759.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/759.png'
            }
          ]
        },
        {
          id: 760,
          name: 'bewear',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/760.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/760.png'
            }
          ]
        },
        {
          id: 761,
          name: 'bounsweet',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/761.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/761.png'
            }
          ]
        },
        {
          id: 762,
          name: 'steenee',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/762.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/762.png'
            }
          ]
        },
        {
          id: 763,
          name: 'tsareena',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/763.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/763.png'
            }
          ]
        },
        {
          id: 764,
          name: 'comfey',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/764.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/764.png'
            }
          ]
        },
        {
          id: 765,
          name: 'oranguru',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/765.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/765.png'
            }
          ]
        },
        {
          id: 766,
          name: 'passimian',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/766.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/766.png'
            }
          ]
        },
        {
          id: 767,
          name: 'wimpod',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/767.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/767.png'
            }
          ]
        },
        {
          id: 768,
          name: 'golisopod',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/768.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/768.png'
            }
          ]
        },
        {
          id: 769,
          name: 'sandygast',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/769.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/769.png'
            }
          ]
        },
        {
          id: 770,
          name: 'palossand',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/770.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/770.png'
            }
          ]
        },
        {
          id: 771,
          name: 'pyukumuku',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/771.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/771.png'
            }
          ]
        },
        {
          id: 772,
          name: 'type-null',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/772.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/772.png'
            }
          ]
        },
        {
          id: 773,
          name: 'silvally',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/773.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/773.png'
            }
          ]
        },
        {
          id: 774,
          name: 'minior-red-meteor',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/774.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/774.png'
            }
          ]
        },
        {
          id: 775,
          name: 'komala',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/775.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/775.png'
            }
          ]
        },
        {
          id: 776,
          name: 'turtonator',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/776.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/776.png'
            }
          ]
        },
        {
          id: 777,
          name: 'togedemaru',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/777.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/777.png'
            }
          ]
        },
        {
          id: 778,
          name: 'mimikyu-disguised',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/778.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/778.png'
            }
          ]
        },
        {
          id: 779,
          name: 'bruxish',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/779.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/779.png'
            }
          ]
        },
        {
          id: 780,
          name: 'drampa',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/780.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/780.png'
            }
          ]
        },
        {
          id: 781,
          name: 'dhelmise',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/781.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/781.png'
            }
          ]
        },
        {
          id: 782,
          name: 'jangmo-o',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/782.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/782.png'
            }
          ]
        },
        {
          id: 783,
          name: 'hakamo-o',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/783.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/783.png'
            }
          ]
        },
        {
          id: 784,
          name: 'kommo-o',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/784.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/784.png'
            }
          ]
        },
        {
          id: 785,
          name: 'tapu-koko',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/785.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/785.png'
            }
          ]
        },
        {
          id: 786,
          name: 'tapu-lele',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/786.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/786.png'
            }
          ]
        },
        {
          id: 787,
          name: 'tapu-bulu',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/787.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/787.png'
            }
          ]
        },
        {
          id: 788,
          name: 'tapu-fini',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/788.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/788.png'
            }
          ]
        },
        {
          id: 789,
          name: 'cosmog',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/789.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/789.png'
            }
          ]
        },
        {
          id: 790,
          name: 'cosmoem',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/790.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/790.png'
            }
          ]
        },
        {
          id: 791,
          name: 'solgaleo',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/791.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/791.png'
            }
          ]
        },
        {
          id: 792,
          name: 'lunala',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/792.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/792.png'
            }
          ]
        },
        {
          id: 793,
          name: 'nihilego',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/793.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/793.png'
            }
          ]
        },
        {
          id: 794,
          name: 'buzzwole',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/794.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/794.png'
            }
          ]
        },
        {
          id: 795,
          name: 'pheromosa',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/795.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/795.png'
            }
          ]
        },
        {
          id: 796,
          name: 'xurkitree',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/796.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/796.png'
            }
          ]
        },
        {
          id: 797,
          name: 'celesteela',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/797.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/797.png'
            }
          ]
        },
        {
          id: 798,
          name: 'kartana',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/798.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/798.png'
            }
          ]
        },
        {
          id: 799,
          name: 'guzzlord',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/799.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/799.png'
            }
          ]
        },
        {
          id: 800,
          name: 'necrozma',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/800.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/800.png'
            }
          ]
        },
        {
          id: 801,
          name: 'magearna',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/801.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/801.png'
            }
          ]
        },
        {
          id: 802,
          name: 'marshadow',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/802.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/802.png'
            }
          ]
        },
        {
          id: 803,
          name: 'poipole',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/803.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/803.png'
            }
          ]
        },
        {
          id: 804,
          name: 'naganadel',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/804.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/804.png'
            }
          ]
        },
        {
          id: 805,
          name: 'stakataka',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/805.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/805.png'
            }
          ]
        },
        {
          id: 806,
          name: 'blacephalon',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/806.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/806.png'
            }
          ]
        },
        {
          id: 807,
          name: 'zeraora',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/807.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/807.png'
            }
          ]
        },
        {
          id: 808,
          name: 'meltan',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/808.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/808.png'
            }
          ]
        },
        {
          id: 809,
          name: 'melmetal',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/809.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/809.png'
            }
          ]
        },
        {
          id: 810,
          name: 'grookey',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/810.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/810.png'
            }
          ]
        },
        {
          id: 811,
          name: 'thwackey',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/811.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/811.png'
            }
          ]
        },
        {
          id: 812,
          name: 'rillaboom',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/812.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/812.png'
            }
          ]
        },
        {
          id: 813,
          name: 'scorbunny',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/813.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/813.png'
            }
          ]
        },
        {
          id: 814,
          name: 'raboot',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/814.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/814.png'
            }
          ]
        },
        {
          id: 815,
          name: 'cinderace',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/815.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/815.png'
            }
          ]
        },
        {
          id: 816,
          name: 'sobble',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/816.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/816.png'
            }
          ]
        },
        {
          id: 817,
          name: 'drizzile',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/817.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/817.png'
            }
          ]
        },
        {
          id: 818,
          name: 'inteleon',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/818.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/818.png'
            }
          ]
        },
        {
          id: 819,
          name: 'skwovet',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/819.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/819.png'
            }
          ]
        },
        {
          id: 820,
          name: 'greedent',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/820.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/820.png'
            }
          ]
        },
        {
          id: 821,
          name: 'rookidee',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/821.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/821.png'
            }
          ]
        },
        {
          id: 822,
          name: 'corvisquire',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/822.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/822.png'
            }
          ]
        },
        {
          id: 823,
          name: 'corviknight',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/823.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/823.png'
            }
          ]
        },
        {
          id: 824,
          name: 'blipbug',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/824.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/824.png'
            }
          ]
        },
        {
          id: 825,
          name: 'dottler',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/825.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/825.png'
            }
          ]
        },
        {
          id: 826,
          name: 'orbeetle',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/826.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/826.png'
            }
          ]
        },
        {
          id: 827,
          name: 'nickit',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/827.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/827.png'
            }
          ]
        },
        {
          id: 828,
          name: 'thievul',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/828.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/828.png'
            }
          ]
        },
        {
          id: 829,
          name: 'gossifleur',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/829.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/829.png'
            }
          ]
        },
        {
          id: 830,
          name: 'eldegoss',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/830.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/830.png'
            }
          ]
        },
        {
          id: 831,
          name: 'wooloo',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/831.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/831.png'
            }
          ]
        },
        {
          id: 832,
          name: 'dubwool',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/832.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/832.png'
            }
          ]
        },
        {
          id: 833,
          name: 'chewtle',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/833.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/833.png'
            }
          ]
        },
        {
          id: 834,
          name: 'drednaw',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/834.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/834.png'
            }
          ]
        },
        {
          id: 835,
          name: 'yamper',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/835.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/835.png'
            }
          ]
        },
        {
          id: 836,
          name: 'boltund',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/836.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/836.png'
            }
          ]
        },
        {
          id: 837,
          name: 'rolycoly',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/837.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/837.png'
            }
          ]
        },
        {
          id: 838,
          name: 'carkol',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/838.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/838.png'
            }
          ]
        },
        {
          id: 839,
          name: 'coalossal',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/839.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/839.png'
            }
          ]
        },
        {
          id: 840,
          name: 'applin',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/840.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/840.png'
            }
          ]
        },
        {
          id: 841,
          name: 'flapple',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/841.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/841.png'
            }
          ]
        },
        {
          id: 842,
          name: 'appletun',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/842.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/842.png'
            }
          ]
        },
        {
          id: 843,
          name: 'silicobra',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/843.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/843.png'
            }
          ]
        },
        {
          id: 844,
          name: 'sandaconda',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/844.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/844.png'
            }
          ]
        },
        {
          id: 845,
          name: 'cramorant',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/845.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/845.png'
            }
          ]
        },
        {
          id: 846,
          name: 'arrokuda',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/846.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/846.png'
            }
          ]
        },
        {
          id: 847,
          name: 'barraskewda',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/847.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/847.png'
            }
          ]
        },
        {
          id: 848,
          name: 'toxel',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/848.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/848.png'
            }
          ]
        },
        {
          id: 849,
          name: 'toxtricity-amped',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/849.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/849.png'
            }
          ]
        },
        {
          id: 850,
          name: 'sizzlipede',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/850.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/850.png'
            }
          ]
        },
        {
          id: 851,
          name: 'centiskorch',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/851.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/851.png'
            }
          ]
        },
        {
          id: 852,
          name: 'clobbopus',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/852.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/852.png'
            }
          ]
        },
        {
          id: 853,
          name: 'grapploct',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/853.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/853.png'
            }
          ]
        },
        {
          id: 854,
          name: 'sinistea',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/854.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/854.png'
            }
          ]
        },
        {
          id: 855,
          name: 'polteageist',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/855.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/855.png'
            }
          ]
        },
        {
          id: 856,
          name: 'hatenna',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/856.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/856.png'
            }
          ]
        },
        {
          id: 857,
          name: 'hattrem',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/857.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/857.png'
            }
          ]
        },
        {
          id: 858,
          name: 'hatterene',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/858.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/858.png'
            }
          ]
        },
        {
          id: 859,
          name: 'impidimp',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/859.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/859.png'
            }
          ]
        },
        {
          id: 860,
          name: 'morgrem',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/860.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/860.png'
            }
          ]
        },
        {
          id: 861,
          name: 'grimmsnarl',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/861.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/861.png'
            }
          ]
        },
        {
          id: 862,
          name: 'obstagoon',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/862.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/862.png'
            }
          ]
        },
        {
          id: 863,
          name: 'perrserker',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/863.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/863.png'
            }
          ]
        },
        {
          id: 864,
          name: 'cursola',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/864.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/864.png'
            }
          ]
        },
        {
          id: 865,
          name: 'sirfetchd',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/865.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/865.png'
            }
          ]
        },
        {
          id: 866,
          name: 'mr-rime',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/866.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/866.png'
            }
          ]
        },
        {
          id: 867,
          name: 'runerigus',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/867.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/867.png'
            }
          ]
        },
        {
          id: 868,
          name: 'milcery',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/868.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/868.png'
            }
          ]
        },
        {
          id: 869,
          name: 'alcremie',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/869.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/869.png'
            }
          ]
        },
        {
          id: 870,
          name: 'falinks',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/870.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/870.png'
            }
          ]
        },
        {
          id: 871,
          name: 'pincurchin',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/871.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/871.png'
            }
          ]
        },
        {
          id: 872,
          name: 'snom',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/872.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/872.png'
            }
          ]
        },
        {
          id: 873,
          name: 'frosmoth',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/873.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/873.png'
            }
          ]
        },
        {
          id: 874,
          name: 'stonjourner',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/874.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/874.png'
            }
          ]
        },
        {
          id: 875,
          name: 'eiscue-ice',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/875.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/875.png'
            }
          ]
        },
        {
          id: 876,
          name: 'indeedee-male',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/876.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/876.png'
            }
          ]
        },
        {
          id: 877,
          name: 'morpeko-full-belly',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/877.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/877.png'
            }
          ]
        },
        {
          id: 878,
          name: 'cufant',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/878.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/878.png'
            }
          ]
        },
        {
          id: 879,
          name: 'copperajah',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/879.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/879.png'
            }
          ]
        },
        {
          id: 880,
          name: 'dracozolt',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/880.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/880.png'
            }
          ]
        },
        {
          id: 881,
          name: 'arctozolt',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/881.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/881.png'
            }
          ]
        },
        {
          id: 882,
          name: 'dracovish',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/882.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/882.png'
            }
          ]
        },
        {
          id: 883,
          name: 'arctovish',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/883.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/883.png'
            }
          ]
        },
        {
          id: 884,
          name: 'duraludon',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/884.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/884.png'
            }
          ]
        },
        {
          id: 885,
          name: 'dreepy',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/885.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/885.png'
            }
          ]
        },
        {
          id: 886,
          name: 'drakloak',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/886.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/886.png'
            }
          ]
        },
        {
          id: 887,
          name: 'dragapult',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/887.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/887.png'
            }
          ]
        },
        {
          id: 888,
          name: 'zacian',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/888.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/888.png'
            }
          ]
        },
        {
          id: 889,
          name: 'zamazenta',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/889.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/889.png'
            }
          ]
        },
        {
          id: 890,
          name: 'eternatus',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/890.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/890.png'
            }
          ]
        },
        {
          id: 891,
          name: 'kubfu',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/891.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/891.png'
            }
          ]
        },
        {
          id: 892,
          name: 'urshifu-single-strike',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/892.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/892.png'
            }
          ]
        },
        {
          id: 893,
          name: 'zarude',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/893.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/893.png'
            }
          ]
        },
        {
          id: 894,
          name: 'regieleki',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/894.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/894.png'
            }
          ]
        },
        {
          id: 895,
          name: 'regidrago',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/895.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/895.png'
            }
          ]
        },
        {
          id: 896,
          name: 'glastrier',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/896.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/896.png'
            }
          ]
        },
        {
          id: 897,
          name: 'spectrier',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/897.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/897.png'
            }
          ]
        },
        {
          id: 898,
          name: 'calyrex',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/898.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/898.png'
            }
          ]
        },
        {
          id: 899,
          name: 'wyrdeer',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/899.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/899.png'
            }
          ]
        },
        {
          id: 900,
          name: 'kleavor',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/900.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/900.png'
            }
          ]
        },
        {
          id: 901,
          name: 'ursaluna',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/901.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/901.png'
            }
          ]
        },
        {
          id: 902,
          name: 'basculegion-male',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/902.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/902.png'
            }
          ]
        },
        {
          id: 903,
          name: 'sneasler',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/903.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/903.png'
            }
          ]
        },
        {
          id: 904,
          name: 'overqwil',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/904.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/904.png'
            }
          ]
        },
        {
          id: 905,
          name: 'enamorus-incarnate',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/905.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/905.png'
            }
          ]
        },
        {
          id: 906,
          name: 'sprigatito',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/906.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/906.png'
            }
          ]
        },
        {
          id: 907,
          name: 'floragato',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/907.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/907.png'
            }
          ]
        },
        {
          id: 908,
          name: 'meowscarada',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/908.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/908.png'
            }
          ]
        },
        {
          id: 909,
          name: 'fuecoco',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/909.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/909.png'
            }
          ]
        },
        {
          id: 910,
          name: 'crocalor',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/910.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/910.png'
            }
          ]
        },
        {
          id: 911,
          name: 'skeledirge',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/911.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/911.png'
            }
          ]
        },
        {
          id: 912,
          name: 'quaxly',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/912.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/912.png'
            }
          ]
        },
        {
          id: 913,
          name: 'quaxwell',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/913.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/913.png'
            }
          ]
        },
        {
          id: 914,
          name: 'quaquaval',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/914.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/914.png'
            }
          ]
        },
        {
          id: 915,
          name: 'lechonk',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/915.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/915.png'
            }
          ]
        },
        {
          id: 916,
          name: 'oinkologne-male',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/916.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/916.png'
            }
          ]
        },
        {
          id: 917,
          name: 'tarountula',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/917.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/917.png'
            }
          ]
        },
        {
          id: 918,
          name: 'spidops',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/918.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/918.png'
            }
          ]
        },
        {
          id: 919,
          name: 'nymble',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/919.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/919.png'
            }
          ]
        },
        {
          id: 920,
          name: 'lokix',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/920.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/920.png'
            }
          ]
        },
        {
          id: 921,
          name: 'pawmi',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/921.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/921.png'
            }
          ]
        },
        {
          id: 922,
          name: 'pawmo',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/922.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/922.png'
            }
          ]
        },
        {
          id: 923,
          name: 'pawmot',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/923.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/923.png'
            }
          ]
        },
        {
          id: 924,
          name: 'tandemaus',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/924.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/924.png'
            }
          ]
        },
        {
          id: 925,
          name: 'maushold-family-of-four',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/925.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/925.png'
            }
          ]
        },
        {
          id: 926,
          name: 'fidough',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/926.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/926.png'
            }
          ]
        },
        {
          id: 927,
          name: 'dachsbun',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/927.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/927.png'
            }
          ]
        },
        {
          id: 928,
          name: 'smoliv',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/928.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/928.png'
            }
          ]
        },
        {
          id: 929,
          name: 'dolliv',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/929.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/929.png'
            }
          ]
        },
        {
          id: 930,
          name: 'arboliva',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/930.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/930.png'
            }
          ]
        },
        {
          id: 931,
          name: 'squawkabilly-green-plumage',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/931.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/931.png'
            }
          ]
        },
        {
          id: 932,
          name: 'nacli',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/932.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/932.png'
            }
          ]
        },
        {
          id: 933,
          name: 'naclstack',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/933.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/933.png'
            }
          ]
        },
        {
          id: 934,
          name: 'garganacl',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/934.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/934.png'
            }
          ]
        },
        {
          id: 935,
          name: 'charcadet',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/935.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/935.png'
            }
          ]
        },
        {
          id: 936,
          name: 'armarouge',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/936.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/936.png'
            }
          ]
        },
        {
          id: 937,
          name: 'ceruledge',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/937.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/937.png'
            }
          ]
        },
        {
          id: 938,
          name: 'tadbulb',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/938.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/938.png'
            }
          ]
        },
        {
          id: 939,
          name: 'bellibolt',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/939.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/939.png'
            }
          ]
        },
        {
          id: 940,
          name: 'wattrel',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/940.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/940.png'
            }
          ]
        },
        {
          id: 941,
          name: 'kilowattrel',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/941.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/941.png'
            }
          ]
        },
        {
          id: 942,
          name: 'maschiff',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/942.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/942.png'
            }
          ]
        },
        {
          id: 943,
          name: 'mabosstiff',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/943.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/943.png'
            }
          ]
        },
        {
          id: 944,
          name: 'shroodle',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/944.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/944.png'
            }
          ]
        },
        {
          id: 945,
          name: 'grafaiai',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/945.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/945.png'
            }
          ]
        },
        {
          id: 946,
          name: 'bramblin',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/946.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/946.png'
            }
          ]
        },
        {
          id: 947,
          name: 'brambleghast',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/947.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/947.png'
            }
          ]
        },
        {
          id: 948,
          name: 'toedscool',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/948.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/948.png'
            }
          ]
        },
        {
          id: 949,
          name: 'toedscruel',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/949.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/949.png'
            }
          ]
        },
        {
          id: 950,
          name: 'klawf',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/950.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/950.png'
            }
          ]
        },
        {
          id: 951,
          name: 'capsakid',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/951.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/951.png'
            }
          ]
        },
        {
          id: 952,
          name: 'scovillain',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/952.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/952.png'
            }
          ]
        },
        {
          id: 953,
          name: 'rellor',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/953.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/953.png'
            }
          ]
        },
        {
          id: 954,
          name: 'rabsca',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/954.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/954.png'
            }
          ]
        },
        {
          id: 955,
          name: 'flittle',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/955.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/955.png'
            }
          ]
        },
        {
          id: 956,
          name: 'espathra',
          pokemontypes: [
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/956.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/956.png'
            }
          ]
        },
        {
          id: 957,
          name: 'tinkatink',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/957.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/957.png'
            }
          ]
        },
        {
          id: 958,
          name: 'tinkatuff',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/958.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/958.png'
            }
          ]
        },
        {
          id: 959,
          name: 'tinkaton',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/959.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/959.png'
            }
          ]
        },
        {
          id: 960,
          name: 'wiglett',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/960.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/960.png'
            }
          ]
        },
        {
          id: 961,
          name: 'wugtrio',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/961.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/961.png'
            }
          ]
        },
        {
          id: 962,
          name: 'bombirdier',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/962.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/962.png'
            }
          ]
        },
        {
          id: 963,
          name: 'finizen',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/963.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/963.png'
            }
          ]
        },
        {
          id: 964,
          name: 'palafin-zero',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/964.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/964.png'
            }
          ]
        },
        {
          id: 965,
          name: 'varoom',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/965.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/965.png'
            }
          ]
        },
        {
          id: 966,
          name: 'revavroom',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/966.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/966.png'
            }
          ]
        },
        {
          id: 967,
          name: 'cyclizar',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/967.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/967.png'
            }
          ]
        },
        {
          id: 968,
          name: 'orthworm',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/968.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/968.png'
            }
          ]
        },
        {
          id: 969,
          name: 'glimmet',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/969.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/969.png'
            }
          ]
        },
        {
          id: 970,
          name: 'glimmora',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/970.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/970.png'
            }
          ]
        },
        {
          id: 971,
          name: 'greavard',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/971.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/971.png'
            }
          ]
        },
        {
          id: 972,
          name: 'houndstone',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/972.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/972.png'
            }
          ]
        },
        {
          id: 973,
          name: 'flamigo',
          pokemontypes: [
            {
              type: {
                name: 'flying'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/973.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/973.png'
            }
          ]
        },
        {
          id: 974,
          name: 'cetoddle',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/974.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/974.png'
            }
          ]
        },
        {
          id: 975,
          name: 'cetitan',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/975.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/975.png'
            }
          ]
        },
        {
          id: 976,
          name: 'veluza',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/976.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/976.png'
            }
          ]
        },
        {
          id: 977,
          name: 'dondozo',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/977.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/977.png'
            }
          ]
        },
        {
          id: 978,
          name: 'tatsugiri-curly',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/978.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/978.png'
            }
          ]
        },
        {
          id: 979,
          name: 'annihilape',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/979.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/979.png'
            }
          ]
        },
        {
          id: 980,
          name: 'clodsire',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/980.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/980.png'
            }
          ]
        },
        {
          id: 981,
          name: 'farigiraf',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/981.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/981.png'
            }
          ]
        },
        {
          id: 982,
          name: 'dudunsparce-two-segment',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/982.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/982.png'
            }
          ]
        },
        {
          id: 983,
          name: 'kingambit',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/983.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/983.png'
            }
          ]
        },
        {
          id: 984,
          name: 'great-tusk',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/984.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/984.png'
            }
          ]
        },
        {
          id: 985,
          name: 'scream-tail',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/985.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/985.png'
            }
          ]
        },
        {
          id: 986,
          name: 'brute-bonnet',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/986.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/986.png'
            }
          ]
        },
        {
          id: 987,
          name: 'flutter-mane',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/987.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/987.png'
            }
          ]
        },
        {
          id: 988,
          name: 'slither-wing',
          pokemontypes: [
            {
              type: {
                name: 'bug'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/988.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/988.png'
            }
          ]
        },
        {
          id: 989,
          name: 'sandy-shocks',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/989.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/989.png'
            }
          ]
        },
        {
          id: 990,
          name: 'iron-treads',
          pokemontypes: [
            {
              type: {
                name: 'ground'
              }
            },
            {
              type: {
                name: 'steel'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/990.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/990.png'
            }
          ]
        },
        {
          id: 991,
          name: 'iron-bundle',
          pokemontypes: [
            {
              type: {
                name: 'ice'
              }
            },
            {
              type: {
                name: 'water'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/991.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/991.png'
            }
          ]
        },
        {
          id: 992,
          name: 'iron-hands',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/992.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/992.png'
            }
          ]
        },
        {
          id: 993,
          name: 'iron-jugulis',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'flying'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/993.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/993.png'
            }
          ]
        },
        {
          id: 994,
          name: 'iron-moth',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'poison'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/994.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/994.png'
            }
          ]
        },
        {
          id: 995,
          name: 'iron-thorns',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'electric'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/995.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/995.png'
            }
          ]
        },
        {
          id: 996,
          name: 'frigibax',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/996.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/996.png'
            }
          ]
        },
        {
          id: 997,
          name: 'arctibax',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/997.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/997.png'
            }
          ]
        },
        {
          id: 998,
          name: 'baxcalibur',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/998.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/998.png'
            }
          ]
        },
        {
          id: 999,
          name: 'gimmighoul',
          pokemontypes: [
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/999.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/999.png'
            }
          ]
        },
        {
          id: 1000,
          name: 'gholdengo',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1000.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1000.png'
            }
          ]
        },
        {
          id: 1001,
          name: 'wo-chien',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1001.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1001.png'
            }
          ]
        },
        {
          id: 1002,
          name: 'chien-pao',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'ice'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1002.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1002.png'
            }
          ]
        },
        {
          id: 1003,
          name: 'ting-lu',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'ground'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1003.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1003.png'
            }
          ]
        },
        {
          id: 1004,
          name: 'chi-yu',
          pokemontypes: [
            {
              type: {
                name: 'dark'
              }
            },
            {
              type: {
                name: 'fire'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1004.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1004.png'
            }
          ]
        },
        {
          id: 1005,
          name: 'roaring-moon',
          pokemontypes: [
            {
              type: {
                name: 'dragon'
              }
            },
            {
              type: {
                name: 'dark'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1005.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1005.png'
            }
          ]
        },
        {
          id: 1006,
          name: 'iron-valiant',
          pokemontypes: [
            {
              type: {
                name: 'fairy'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1006.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1006.png'
            }
          ]
        },
        {
          id: 1007,
          name: 'koraidon',
          pokemontypes: [
            {
              type: {
                name: 'fighting'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1007.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1007.png'
            }
          ]
        },
        {
          id: 1008,
          name: 'miraidon',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1008.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1008.png'
            }
          ]
        },
        {
          id: 1009,
          name: 'walking-wake',
          pokemontypes: [
            {
              type: {
                name: 'water'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1009.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1009.png'
            }
          ]
        },
        {
          id: 1010,
          name: 'iron-leaves',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1010.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1010.png'
            }
          ]
        },
        {
          id: 1011,
          name: 'dipplin',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1011.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1011.png'
            }
          ]
        },
        {
          id: 1012,
          name: 'poltchageist',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1012.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1012.png'
            }
          ]
        },
        {
          id: 1013,
          name: 'sinistcha',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1013.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1013.png'
            }
          ]
        },
        {
          id: 1014,
          name: 'okidogi',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'fighting'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1014.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1014.png'
            }
          ]
        },
        {
          id: 1015,
          name: 'munkidori',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1015.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1015.png'
            }
          ]
        },
        {
          id: 1016,
          name: 'fezandipiti',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'fairy'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1016.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1016.png'
            }
          ]
        },
        {
          id: 1017,
          name: 'ogerpon',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1017.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1017.png'
            }
          ]
        },
        {
          id: 1018,
          name: 'archaludon',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1018.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1018.png'
            }
          ]
        },
        {
          id: 1019,
          name: 'hydrapple',
          pokemontypes: [
            {
              type: {
                name: 'grass'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1019.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1019.png'
            }
          ]
        },
        {
          id: 1020,
          name: 'gouging-fire',
          pokemontypes: [
            {
              type: {
                name: 'fire'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1020.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1020.png'
            }
          ]
        },
        {
          id: 1021,
          name: 'raging-bolt',
          pokemontypes: [
            {
              type: {
                name: 'electric'
              }
            },
            {
              type: {
                name: 'dragon'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1021.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1021.png'
            }
          ]
        },
        {
          id: 1022,
          name: 'iron-boulder',
          pokemontypes: [
            {
              type: {
                name: 'rock'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1022.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1022.png'
            }
          ]
        },
        {
          id: 1023,
          name: 'iron-crown',
          pokemontypes: [
            {
              type: {
                name: 'steel'
              }
            },
            {
              type: {
                name: 'psychic'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1023.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1023.png'
            }
          ]
        },
        {
          id: 1024,
          name: 'terapagos',
          pokemontypes: [
            {
              type: {
                name: 'normal'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1024.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1024.png'
            }
          ]
        },
        {
          id: 1025,
          name: 'pecharunt',
          pokemontypes: [
            {
              type: {
                name: 'poison'
              }
            },
            {
              type: {
                name: 'ghost'
              }
            }
          ],
          sprites: [
            {
              default:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1025.png',
              shiny:
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/1025.png'
            }
          ]
        }
      ]
    } as { pokemon: PokemonData[] }
  },
  actions: {
    getCachtablePokemon(types: String[]): PokemonData[] {
      return this.pokemon.filter(
        (pokemon) =>
          types.includes(pokemon.pokemontypes[0].type.name) ||
          (pokemon.pokemontypes[1] && types.includes(pokemon.pokemontypes[1].type.name))
      )
    }
  }
})
