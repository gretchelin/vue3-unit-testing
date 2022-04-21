import { rest } from "msw";

export default [
  rest.get(`https://pokeapi.co/api/v2/pokemon`, (req, res, ctx) => {
    const data = {
      count: 1126,
      next: "https://pokeapi.co/api/v2/pokemon?offset=50&limit=10",
      previous: "https://pokeapi.co/api/v2/pokemon?offset=30&limit=10",
      results: [
        { name: "zubat", url: "https://pokeapi.co/api/v2/pokemon/41/" },
        { name: "golbat", url: "https://pokeapi.co/api/v2/pokemon/42/" },
        { name: "oddish", url: "https://pokeapi.co/api/v2/pokemon/43/" },
        { name: "gloom", url: "https://pokeapi.co/api/v2/pokemon/44/" },
        { name: "vileplume", url: "https://pokeapi.co/api/v2/pokemon/45/" },
        { name: "paras", url: "https://pokeapi.co/api/v2/pokemon/46/" },
        { name: "parasect", url: "https://pokeapi.co/api/v2/pokemon/47/" },
        { name: "venonat", url: "https://pokeapi.co/api/v2/pokemon/48/" },
        { name: "venomoth", url: "https://pokeapi.co/api/v2/pokemon/49/" },
        { name: "diglett", url: "https://pokeapi.co/api/v2/pokemon/50/" },
      ],
    };
    return res(ctx.status(200), ctx.json(data));
  }),

  rest.get(`https://pokeapi.co/api/v2/pokemon/:id`, (req, res, ctx) => {
    const data = {
        "abilities": [
            {
                "ability": {
                    "name": "shield-dust",
                    "url": "https://pokeapi.co/api/v2/ability/19/"
                },
                "is_hidden": false,
                "slot": 1
            },
            {
                "ability": {
                    "name": "tinted-lens",
                    "url": "https://pokeapi.co/api/v2/ability/110/"
                },
                "is_hidden": false,
                "slot": 2
            },
            {
                "ability": {
                    "name": "wonder-skin",
                    "url": "https://pokeapi.co/api/v2/ability/147/"
                },
                "is_hidden": true,
                "slot": 3
            }
        ],
        "base_experience": 158,
        "forms": [
            {
                "name": "venomoth",
                "url": "https://pokeapi.co/api/v2/pokemon-form/49/"
            }
        ],
        "game_indices": [
            {
                "game_index": 119,
                "version": {
                    "name": "red",
                    "url": "https://pokeapi.co/api/v2/version/1/"
                }
            },
            {
                "game_index": 119,
                "version": {
                    "name": "blue",
                    "url": "https://pokeapi.co/api/v2/version/2/"
                }
            },
            {
                "game_index": 119,
                "version": {
                    "name": "yellow",
                    "url": "https://pokeapi.co/api/v2/version/3/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "gold",
                    "url": "https://pokeapi.co/api/v2/version/4/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "silver",
                    "url": "https://pokeapi.co/api/v2/version/5/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "crystal",
                    "url": "https://pokeapi.co/api/v2/version/6/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "ruby",
                    "url": "https://pokeapi.co/api/v2/version/7/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "sapphire",
                    "url": "https://pokeapi.co/api/v2/version/8/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "emerald",
                    "url": "https://pokeapi.co/api/v2/version/9/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "firered",
                    "url": "https://pokeapi.co/api/v2/version/10/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "leafgreen",
                    "url": "https://pokeapi.co/api/v2/version/11/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "diamond",
                    "url": "https://pokeapi.co/api/v2/version/12/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "pearl",
                    "url": "https://pokeapi.co/api/v2/version/13/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "platinum",
                    "url": "https://pokeapi.co/api/v2/version/14/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "heartgold",
                    "url": "https://pokeapi.co/api/v2/version/15/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "soulsilver",
                    "url": "https://pokeapi.co/api/v2/version/16/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "black",
                    "url": "https://pokeapi.co/api/v2/version/17/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "white",
                    "url": "https://pokeapi.co/api/v2/version/18/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "black-2",
                    "url": "https://pokeapi.co/api/v2/version/21/"
                }
            },
            {
                "game_index": 49,
                "version": {
                    "name": "white-2",
                    "url": "https://pokeapi.co/api/v2/version/22/"
                }
            }
        ],
        "height": 15,
        "held_items": [
            {
                "item": {
                    "name": "silver-powder",
                    "url": "https://pokeapi.co/api/v2/item/199/"
                },
                "version_details": [
                    {
                        "rarity": 5,
                        "version": {
                            "name": "firered",
                            "url": "https://pokeapi.co/api/v2/version/10/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "leafgreen",
                            "url": "https://pokeapi.co/api/v2/version/11/"
                        }
                    }
                ]
            },
            {
                "item": {
                    "name": "shed-shell",
                    "url": "https://pokeapi.co/api/v2/item/272/"
                },
                "version_details": [
                    {
                        "rarity": 5,
                        "version": {
                            "name": "diamond",
                            "url": "https://pokeapi.co/api/v2/version/12/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "pearl",
                            "url": "https://pokeapi.co/api/v2/version/13/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version/14/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "heartgold",
                            "url": "https://pokeapi.co/api/v2/version/15/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "soulsilver",
                            "url": "https://pokeapi.co/api/v2/version/16/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "black",
                            "url": "https://pokeapi.co/api/v2/version/17/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "white",
                            "url": "https://pokeapi.co/api/v2/version/18/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "black-2",
                            "url": "https://pokeapi.co/api/v2/version/21/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "white-2",
                            "url": "https://pokeapi.co/api/v2/version/22/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "x",
                            "url": "https://pokeapi.co/api/v2/version/23/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "y",
                            "url": "https://pokeapi.co/api/v2/version/24/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "omega-ruby",
                            "url": "https://pokeapi.co/api/v2/version/25/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version/26/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "sun",
                            "url": "https://pokeapi.co/api/v2/version/27/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "moon",
                            "url": "https://pokeapi.co/api/v2/version/28/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "ultra-sun",
                            "url": "https://pokeapi.co/api/v2/version/29/"
                        }
                    },
                    {
                        "rarity": 5,
                        "version": {
                            "name": "ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version/30/"
                        }
                    }
                ]
            }
        ],
        "id": 49,
        "is_default": true,
        "location_area_encounters": "https://pokeapi.co/api/v2/pokemon/49/encounters",
        "moves": [
            {
                "move": {
                    "name": "razor-wind",
                    "url": "https://pokeapi.co/api/v2/move/13/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "gust",
                    "url": "https://pokeapi.co/api/v2/move/16/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 31,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "whirlwind",
                    "url": "https://pokeapi.co/api/v2/move/18/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "headbutt",
                    "url": "https://pokeapi.co/api/v2/move/29/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "tackle",
                    "url": "https://pokeapi.co/api/v2/move/33/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "take-down",
                    "url": "https://pokeapi.co/api/v2/move/36/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "double-edge",
                    "url": "https://pokeapi.co/api/v2/move/38/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "supersonic",
                    "url": "https://pokeapi.co/api/v2/move/48/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 9,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 9,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 9,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 9,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 9,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 9,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 9,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 5,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    },
                    {
                        "level_learned_at": 8,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "disable",
                    "url": "https://pokeapi.co/api/v2/move/50/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    },
                    {
                        "level_learned_at": 4,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "psybeam",
                    "url": "https://pokeapi.co/api/v2/move/60/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 38,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 38,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 36,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 36,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 36,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 36,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 36,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 36,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 36,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 20,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "hyper-beam",
                    "url": "https://pokeapi.co/api/v2/move/63/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "mega-drain",
                    "url": "https://pokeapi.co/api/v2/move/72/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "solar-beam",
                    "url": "https://pokeapi.co/api/v2/move/76/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "poison-powder",
                    "url": "https://pokeapi.co/api/v2/move/77/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 24,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 22,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 20,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 20,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 20,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 20,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 20,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 20,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 20,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 13,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 14,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "stun-spore",
                    "url": "https://pokeapi.co/api/v2/move/78/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 30,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 30,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 28,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 28,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 28,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 28,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 28,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 28,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 28,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 23,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 16,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "sleep-powder",
                    "url": "https://pokeapi.co/api/v2/move/79/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 43,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 43,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 42,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 42,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 42,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 42,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 42,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 42,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 42,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 29,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 24,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "string-shot",
                    "url": "https://pokeapi.co/api/v2/move/81/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "toxic",
                    "url": "https://pokeapi.co/api/v2/move/92/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "confusion",
                    "url": "https://pokeapi.co/api/v2/move/93/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 11,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    },
                    {
                        "level_learned_at": 12,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "psychic",
                    "url": "https://pokeapi.co/api/v2/move/94/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 50,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 50,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 52,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 52,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 52,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 52,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 52,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 52,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 52,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "agility",
                    "url": "https://pokeapi.co/api/v2/move/97/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "rage",
                    "url": "https://pokeapi.co/api/v2/move/99/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "teleport",
                    "url": "https://pokeapi.co/api/v2/move/100/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "mimic",
                    "url": "https://pokeapi.co/api/v2/move/102/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "screech",
                    "url": "https://pokeapi.co/api/v2/move/103/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "double-team",
                    "url": "https://pokeapi.co/api/v2/move/104/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "reflect",
                    "url": "https://pokeapi.co/api/v2/move/115/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "bide",
                    "url": "https://pokeapi.co/api/v2/move/117/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "swift",
                    "url": "https://pokeapi.co/api/v2/move/129/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "dream-eater",
                    "url": "https://pokeapi.co/api/v2/move/138/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "leech-life",
                    "url": "https://pokeapi.co/api/v2/move/141/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 27,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 27,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 17,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 28,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "flash",
                    "url": "https://pokeapi.co/api/v2/move/148/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "psywave",
                    "url": "https://pokeapi.co/api/v2/move/149/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "rest",
                    "url": "https://pokeapi.co/api/v2/move/156/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "substitute",
                    "url": "https://pokeapi.co/api/v2/move/164/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "red-blue",
                            "url": "https://pokeapi.co/api/v2/version-group/1/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "yellow",
                            "url": "https://pokeapi.co/api/v2/version-group/2/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "thief",
                    "url": "https://pokeapi.co/api/v2/move/168/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "snore",
                    "url": "https://pokeapi.co/api/v2/move/173/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "curse",
                    "url": "https://pokeapi.co/api/v2/move/174/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "protect",
                    "url": "https://pokeapi.co/api/v2/move/182/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "sludge-bomb",
                    "url": "https://pokeapi.co/api/v2/move/188/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "foresight",
                    "url": "https://pokeapi.co/api/v2/move/193/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "giga-drain",
                    "url": "https://pokeapi.co/api/v2/move/202/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "endure",
                    "url": "https://pokeapi.co/api/v2/move/203/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "swagger",
                    "url": "https://pokeapi.co/api/v2/move/207/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "attract",
                    "url": "https://pokeapi.co/api/v2/move/213/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "sleep-talk",
                    "url": "https://pokeapi.co/api/v2/move/214/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "return",
                    "url": "https://pokeapi.co/api/v2/move/216/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "frustration",
                    "url": "https://pokeapi.co/api/v2/move/218/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "sweet-scent",
                    "url": "https://pokeapi.co/api/v2/move/230/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "hidden-power",
                    "url": "https://pokeapi.co/api/v2/move/237/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "twister",
                    "url": "https://pokeapi.co/api/v2/move/239/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "sunny-day",
                    "url": "https://pokeapi.co/api/v2/move/241/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "gold-silver",
                            "url": "https://pokeapi.co/api/v2/version-group/3/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "crystal",
                            "url": "https://pokeapi.co/api/v2/version-group/4/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "facade",
                    "url": "https://pokeapi.co/api/v2/move/263/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "skill-swap",
                    "url": "https://pokeapi.co/api/v2/move/285/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "secret-power",
                    "url": "https://pokeapi.co/api/v2/move/290/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "poison-fang",
                    "url": "https://pokeapi.co/api/v2/move/305/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 47,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "air-cutter",
                    "url": "https://pokeapi.co/api/v2/move/314/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "silver-wind",
                    "url": "https://pokeapi.co/api/v2/move/318/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "signal-beam",
                    "url": "https://pokeapi.co/api/v2/move/324/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 37,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 25,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "aerial-ace",
                    "url": "https://pokeapi.co/api/v2/move/332/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ruby-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/5/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "emerald",
                            "url": "https://pokeapi.co/api/v2/version-group/6/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "firered-leafgreen",
                            "url": "https://pokeapi.co/api/v2/version-group/7/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "colosseum",
                            "url": "https://pokeapi.co/api/v2/version-group/12/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "xd",
                            "url": "https://pokeapi.co/api/v2/version-group/13/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "roost",
                    "url": "https://pokeapi.co/api/v2/move/355/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "natural-gift",
                    "url": "https://pokeapi.co/api/v2/move/363/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "tailwind",
                    "url": "https://pokeapi.co/api/v2/move/366/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "u-turn",
                    "url": "https://pokeapi.co/api/v2/move/369/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "bug-buzz",
                    "url": "https://pokeapi.co/api/v2/move/405/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 59,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 46,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "energy-ball",
                    "url": "https://pokeapi.co/api/v2/move/412/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "giga-impact",
                    "url": "https://pokeapi.co/api/v2/move/416/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "zen-headbutt",
                    "url": "https://pokeapi.co/api/v2/move/428/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 41,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "defog",
                    "url": "https://pokeapi.co/api/v2/move/432/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "captivate",
                    "url": "https://pokeapi.co/api/v2/move/445/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "diamond-pearl",
                            "url": "https://pokeapi.co/api/v2/version-group/8/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "bug-bite",
                    "url": "https://pokeapi.co/api/v2/move/450/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "ominous-wind",
                    "url": "https://pokeapi.co/api/v2/move/466/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "platinum",
                            "url": "https://pokeapi.co/api/v2/version-group/9/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "tutor",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/3/"
                        },
                        "version_group": {
                            "name": "heartgold-soulsilver",
                            "url": "https://pokeapi.co/api/v2/version-group/10/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "venoshock",
                    "url": "https://pokeapi.co/api/v2/move/474/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "quiver-dance",
                    "url": "https://pokeapi.co/api/v2/move/483/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 63,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 63,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 63,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 63,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 63,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 1,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 63,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    },
                    {
                        "level_learned_at": 55,
                        "move_learn_method": {
                            "name": "level-up",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/1/"
                        },
                        "version_group": {
                            "name": "lets-go-pikachu-lets-go-eevee",
                            "url": "https://pokeapi.co/api/v2/version-group/19/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "round",
                    "url": "https://pokeapi.co/api/v2/move/496/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "acrobatics",
                    "url": "https://pokeapi.co/api/v2/move/512/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "struggle-bug",
                    "url": "https://pokeapi.co/api/v2/move/522/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-white",
                            "url": "https://pokeapi.co/api/v2/version-group/11/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "black-2-white-2",
                            "url": "https://pokeapi.co/api/v2/version-group/14/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "confide",
                    "url": "https://pokeapi.co/api/v2/move/590/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            },
            {
                "move": {
                    "name": "infestation",
                    "url": "https://pokeapi.co/api/v2/move/611/"
                },
                "version_group_details": [
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "x-y",
                            "url": "https://pokeapi.co/api/v2/version-group/15/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "omega-ruby-alpha-sapphire",
                            "url": "https://pokeapi.co/api/v2/version-group/16/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "sun-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/17/"
                        }
                    },
                    {
                        "level_learned_at": 0,
                        "move_learn_method": {
                            "name": "machine",
                            "url": "https://pokeapi.co/api/v2/move-learn-method/4/"
                        },
                        "version_group": {
                            "name": "ultra-sun-ultra-moon",
                            "url": "https://pokeapi.co/api/v2/version-group/18/"
                        }
                    }
                ]
            }
        ],
        "name": "venomoth",
        "order": 83,
        "past_types": [],
        "species": {
            "name": "venomoth",
            "url": "https://pokeapi.co/api/v2/pokemon-species/49/"
        },
        "sprites": {
            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/49.png",
            "back_female": null,
            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/49.png",
            "back_shiny_female": null,
            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
            "front_female": null,
            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/49.png",
            "front_shiny_female": null,
            "other": {
                "dream_world": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/49.svg",
                    "front_female": null
                },
                "home": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/49.png",
                    "front_female": null,
                    "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/49.png",
                    "front_shiny_female": null
                },
                "official-artwork": {
                    "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/49.png"
                }
            },
            "versions": {
                "generation-i": {
                    "red-blue": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/49.png",
                        "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/back/gray/49.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/back/49.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/49.png",
                        "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/gray/49.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/red-blue/transparent/49.png"
                    },
                    "yellow": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/49.png",
                        "back_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/back/gray/49.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/back/49.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/49.png",
                        "front_gray": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/gray/49.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-i/yellow/transparent/49.png"
                    }
                },
                "generation-ii": {
                    "crystal": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/49.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/back/shiny/49.png",
                        "back_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/shiny/49.png",
                        "back_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/back/49.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/49.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/shiny/49.png",
                        "front_shiny_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/shiny/49.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/crystal/transparent/49.png"
                    },
                    "gold": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/49.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/back/shiny/49.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/49.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/shiny/49.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/gold/transparent/49.png"
                    },
                    "silver": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/49.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/back/shiny/49.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/49.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/shiny/49.png",
                        "front_transparent": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-ii/silver/transparent/49.png"
                    }
                },
                "generation-iii": {
                    "emerald": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/49.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/emerald/shiny/49.png"
                    },
                    "firered-leafgreen": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/49.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/back/shiny/49.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/49.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/firered-leafgreen/shiny/49.png"
                    },
                    "ruby-sapphire": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/49.png",
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/back/shiny/49.png",
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/49.png",
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/shiny/49.png"
                    }
                },
                "generation-iv": {
                    "diamond-pearl": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/49.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/back/shiny/49.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/49.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/diamond-pearl/shiny/49.png",
                        "front_shiny_female": null
                    },
                    "heartgold-soulsilver": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/49.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/back/shiny/49.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/49.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/49.png",
                        "front_shiny_female": null
                    },
                    "platinum": {
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/49.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/back/shiny/49.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/49.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/shiny/49.png",
                        "front_shiny_female": null
                    }
                },
                "generation-v": {
                    "black-white": {
                        "animated": {
                            "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/49.gif",
                            "back_female": null,
                            "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/shiny/49.gif",
                            "back_shiny_female": null,
                            "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/49.gif",
                            "front_female": null,
                            "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/49.gif",
                            "front_shiny_female": null
                        },
                        "back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/49.png",
                        "back_female": null,
                        "back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/back/shiny/49.png",
                        "back_shiny_female": null,
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/49.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/shiny/49.png",
                        "front_shiny_female": null
                    }
                },
                "generation-vi": {
                    "omegaruby-alphasapphire": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/49.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/omegaruby-alphasapphire/shiny/49.png",
                        "front_shiny_female": null
                    },
                    "x-y": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/49.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/shiny/49.png",
                        "front_shiny_female": null
                    }
                },
                "generation-vii": {
                    "icons": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/icons/49.png",
                        "front_female": null
                    },
                    "ultra-sun-ultra-moon": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/49.png",
                        "front_female": null,
                        "front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vii/ultra-sun-ultra-moon/shiny/49.png",
                        "front_shiny_female": null
                    }
                },
                "generation-viii": {
                    "icons": {
                        "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-viii/icons/49.png",
                        "front_female": null
                    }
                }
            }
        },
        "stats": [
            {
                "base_stat": 70,
                "effort": 0,
                "stat": {
                    "name": "hp",
                    "url": "https://pokeapi.co/api/v2/stat/1/"
                }
            },
            {
                "base_stat": 65,
                "effort": 0,
                "stat": {
                    "name": "attack",
                    "url": "https://pokeapi.co/api/v2/stat/2/"
                }
            },
            {
                "base_stat": 60,
                "effort": 0,
                "stat": {
                    "name": "defense",
                    "url": "https://pokeapi.co/api/v2/stat/3/"
                }
            },
            {
                "base_stat": 90,
                "effort": 1,
                "stat": {
                    "name": "special-attack",
                    "url": "https://pokeapi.co/api/v2/stat/4/"
                }
            },
            {
                "base_stat": 75,
                "effort": 0,
                "stat": {
                    "name": "special-defense",
                    "url": "https://pokeapi.co/api/v2/stat/5/"
                }
            },
            {
                "base_stat": 90,
                "effort": 1,
                "stat": {
                    "name": "speed",
                    "url": "https://pokeapi.co/api/v2/stat/6/"
                }
            }
        ],
        "types": [
            {
                "slot": 1,
                "type": {
                    "name": "bug",
                    "url": "https://pokeapi.co/api/v2/type/7/"
                }
            },
            {
                "slot": 2,
                "type": {
                    "name": "poison",
                    "url": "https://pokeapi.co/api/v2/type/4/"
                }
            }
        ],
        "weight": 125
    };

    return res(ctx.status(200), ctx.json(data));
  }),
];
