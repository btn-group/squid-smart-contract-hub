import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x208659bd6de9e7d5ceefc1e4776e473e6fc0c345850f7de6d7dd2c4c9e90cf6f",
    "language": "ink! 4.2.1",
    "compiler": "rustc 1.68.0-nightly",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "3.0.1",
      "rust_toolchain": "nightly-x86_64-unknown-linux-gnu",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "simple_dex",
    "version": "0.2.0",
    "authors": [
      "Cardinal Cryptography"
    ],
    "license": "Apache 2.0"
  },
  "spec": {
    "constructors": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 6
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [
      " Simple DEX contract",
      "",
      " This contract is based on Balancer multi asset LP design and all formulas are taken from the Balancer's whitepaper (https://balancer.fi/whitepaper.pdf)",
      " It has one pool with PSP22 tokens with equal weights",
      "",
      " Swaps can be performed between all pairs in the pool whitelisted for trading",
      " Liquidity provisioning is limited to designated accounts only and works as deposits / withdrawals of arbitrary composition."
    ],
    "environment": {
      "accountId": {
        "displayName": [
          "AccountId"
        ],
        "type": 1
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 0
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 29
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 30
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 15
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 28
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "caller",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "token",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "amount",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [],
        "label": "Withdrawn"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "pair",
            "type": {
              "displayName": [
                "SwapPair"
              ],
              "type": 17
            }
          }
        ],
        "docs": [],
        "label": "SwapPairAdded"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "pair",
            "type": {
              "displayName": [
                "SwapPair"
              ],
              "type": 17
            }
          }
        ],
        "docs": [],
        "label": "SwapPairRemoved"
      },
      {
        "args": [],
        "docs": [],
        "label": "Halted"
      },
      {
        "args": [],
        "docs": [],
        "label": "Resumed"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": false,
            "label": "caller",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "token_in",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "token_out",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "amount_in",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "amount_out",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "docs": [],
        "label": "Swapped"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 7
    },
    "messages": [
      {
        "args": [
          {
            "label": "token_in",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "token_out",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "amount_token_in",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          },
          {
            "label": "min_amount_token_out",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Swaps the a specified amount of one of the pool's PSP22 tokens to another PSP22 token",
          " Calling account needs to give allowance to the DEX contract to spend amount_token_in of token_in on its behalf",
          " before executing this tx."
        ],
        "label": "swap",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x11004fa6"
      },
      {
        "args": [
          {
            "label": "withdrawals",
            "type": {
              "displayName": [
                "Vec"
              ],
              "type": 18
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "withdrawal",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x70cddc09"
      },
      {
        "args": [
          {
            "label": "swap_fee_percentage",
            "type": {
              "displayName": [
                "u128"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Alters the swap_fee parameter",
          "",
          " Can only be called by the contract's Admin."
        ],
        "label": "set_swap_fee_percentage",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0xb71864cf"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns current value of the swap_fee_percentage parameter"
        ],
        "label": "swap_fee_percentage",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 20
        },
        "selector": "0x3d096bc8"
      },
      {
        "args": [
          {
            "label": "access_control",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [
          " Sets access_control to a new contract address",
          "",
          " Potentially very destructive, can only be called by the contract's Admin."
        ],
        "label": "set_access_control",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x5c864ac6"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns current address of the AccessControl contract that holds the account priviledges for this DEX"
        ],
        "label": "access_control",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 21
        },
        "selector": "0xf8e6bc11"
      },
      {
        "args": [
          {
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [
          " Whitelists a token pair for swapping between",
          "",
          " Token pair is understood as a swap between tokens in one direction",
          " Can only be called by an Admin"
        ],
        "label": "add_swap_pair",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0xc041a9e4"
      },
      {
        "args": [
          {
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns true if a pair of tokens is whitelisted for swapping between"
        ],
        "label": "can_swap_pair",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 22
        },
        "selector": "0x90357537"
      },
      {
        "args": [
          {
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [
          " Blacklists a token pair from swapping",
          "",
          " Token pair is understood as a swap between tokens in one direction",
          " Can only be called by an Admin"
        ],
        "label": "remove_swap_pair",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0xdcdebd6f"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Terminates the contract.",
          "",
          " Can only be called by the contract's Admin."
        ],
        "label": "terminate",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x476d839f"
      },
      {
        "args": [],
        "default": false,
        "docs": [
          " Returns own code hash"
        ],
        "label": "code_hash",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 23
        },
        "selector": "0xbd69cea7"
      },
      {
        "args": [
          {
            "label": "code_hash",
            "type": {
              "displayName": [],
              "type": 2
            }
          },
          {
            "label": "callback",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 25
            }
          }
        ],
        "default": false,
        "docs": [
          " Upgrades contract code"
        ],
        "label": "set_code",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 8
        },
        "selector": "0x694fb50f"
      },
      {
        "args": [
          {
            "label": "token_in",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "token_out",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "amount_token_out",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Returns the swap trade input given a desired amount and assuming a curve with equal token weights",
          "",
          " Mostly useful for traders"
        ],
        "label": "in_given_out",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 26
        },
        "selector": "0xf00e62a5"
      },
      {
        "args": [
          {
            "label": "token_in",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "token_out",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "amount_token_in",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [
          " Return swap trade output given a curve with equal token weights",
          "",
          " B_o - (100 * B_o * B_i) / (100 * (B_i + A_i) - A_i * swap_fee)",
          " where swap_fee (integer) is a percentage of the trade that goes towards the pool",
          " and is used to pay the liquidity providers"
        ],
        "label": "out_given_in",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 26
        },
        "selector": "0x6e9f047a"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "root": {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "leaf": {
                              "key": "0x44415441",
                              "ty": 0
                            }
                          },
                          "name": "swap_fee_percentage"
                        },
                        {
                          "layout": {
                            "struct": {
                              "fields": [
                                {
                                  "layout": {
                                    "struct": {
                                      "fields": [
                                        {
                                          "layout": {
                                            "leaf": {
                                              "key": "0x44415441",
                                              "ty": 1
                                            }
                                          },
                                          "name": "account_id"
                                        }
                                      ],
                                      "name": "CallBuilder"
                                    }
                                  },
                                  "name": "inner"
                                }
                              ],
                              "name": "AccessControlRef"
                            }
                          },
                          "name": "access_control"
                        }
                      ],
                      "name": "Data"
                    }
                  },
                  "root_key": "0x44415441"
                }
              },
              "name": "data"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x50414952",
                      "ty": 4
                    }
                  },
                  "root_key": "0x50414952"
                }
              },
              "name": "swap_pairs"
            },
            {
              "layout": {
                "struct": {
                  "fields": [
                    {
                      "layout": {
                        "root": {
                          "layout": {
                            "leaf": {
                              "key": "0x48414c54",
                              "ty": 5
                            }
                          },
                          "root_key": "0x48414c54"
                        }
                      },
                      "name": "halted"
                    }
                  ],
                  "name": "HaltableData"
                }
              },
              "name": "halted"
            }
          ],
          "name": "SimpleDex"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 2,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 3
          }
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 1,
                "name": "CouldNotReadInput"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "LangError"
        ]
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 9
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 9
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 9,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 10,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 11,
                    "typeName": "HaltableError"
                  }
                ],
                "index": 0,
                "name": "HaltableError"
              },
              {
                "fields": [
                  {
                    "type": 13,
                    "typeName": "PSP22Error"
                  }
                ],
                "index": 1,
                "name": "PSP22"
              },
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "AccountId"
                  }
                ],
                "index": 2,
                "name": "InsufficientAllowanceOf"
              },
              {
                "index": 3,
                "name": "Arithmethic"
              },
              {
                "index": 4,
                "name": "WrongParameterValue"
              },
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "AccountId"
                  },
                  {
                    "type": 14,
                    "typeName": "Role"
                  }
                ],
                "index": 5,
                "name": "MissingRole"
              },
              {
                "fields": [
                  {
                    "type": 12,
                    "typeName": "String"
                  }
                ],
                "index": 6,
                "name": "InkEnv"
              },
              {
                "fields": [
                  {
                    "type": 12,
                    "typeName": "String"
                  }
                ],
                "index": 7,
                "name": "CrossContractCall"
              },
              {
                "index": 8,
                "name": "TooMuchSlippage"
              },
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "AccountId"
                  }
                ],
                "index": 9,
                "name": "NotEnoughLiquidityOf"
              },
              {
                "fields": [
                  {
                    "type": 17,
                    "typeName": "SwapPair"
                  }
                ],
                "index": 10,
                "name": "UnsupportedSwapPair"
              }
            ]
          }
        },
        "path": [
          "simple_dex",
          "simple_dex",
          "DexError"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "InHaltedState"
              },
              {
                "index": 1,
                "name": "NotInHaltedState"
              },
              {
                "fields": [
                  {
                    "type": 12,
                    "typeName": "String"
                  }
                ],
                "index": 2,
                "name": "Custom"
              }
            ]
          }
        },
        "path": [
          "shared_traits",
          "haltable",
          "HaltableError"
        ]
      }
    },
    {
      "id": 12,
      "type": {
        "def": {
          "primitive": "str"
        }
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 12,
                    "typeName": "String"
                  }
                ],
                "index": 0,
                "name": "Custom"
              },
              {
                "index": 1,
                "name": "InsufficientBalance"
              },
              {
                "index": 2,
                "name": "InsufficientAllowance"
              },
              {
                "index": 3,
                "name": "ZeroRecipientAddress"
              },
              {
                "index": 4,
                "name": "ZeroSenderAddress"
              },
              {
                "fields": [
                  {
                    "type": 12,
                    "typeName": "String"
                  }
                ],
                "index": 5,
                "name": "SafeTransferCheckFailed"
              }
            ]
          }
        },
        "path": [
          "openbrush_contracts",
          "traits",
          "errors",
          "psp22",
          "PSP22Error"
        ]
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 15,
                    "typeName": "Hash"
                  }
                ],
                "index": 0,
                "name": "Initializer"
              },
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "AccountId"
                  }
                ],
                "index": 1,
                "name": "Admin"
              },
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "AccountId"
                  },
                  {
                    "type": 16,
                    "typeName": "[u8; 4]"
                  }
                ],
                "index": 2,
                "name": "Custom"
              }
            ]
          }
        },
        "path": [
          "access_control",
          "roles",
          "Role"
        ]
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 2,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "Hash"
        ]
      }
    },
    {
      "id": 16,
      "type": {
        "def": {
          "array": {
            "len": 4,
            "type": 3
          }
        }
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "from",
                "type": 1,
                "typeName": "AccountId"
              },
              {
                "name": "to",
                "type": 1,
                "typeName": "AccountId"
              }
            ]
          }
        },
        "path": [
          "simple_dex",
          "simple_dex",
          "SwapPair"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "sequence": {
            "type": 19
          }
        }
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "tuple": [
            1,
            0
          ]
        }
      }
    },
    {
      "id": 20,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 21,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 1
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 1
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 22,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 5
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 5
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 23,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 24
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 24
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 24,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 15
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 15
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 25,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 16
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 16
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 26,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 27
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 27
          },
          {
            "name": "E",
            "type": 7
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 27,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 10
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          },
          {
            "name": "E",
            "type": 10
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 28,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 29,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 30,
      "type": {
        "def": {
          "variant": {}
        },
        "path": [
          "ink_env",
          "types",
          "NoChainExtension"
        ]
      }
    }
  ],
  "version": "4"
}

const _abi = new Abi(metadata)

export function decodeEvent(hex: string): Event {
    return _abi.decodeEvent(hex)
}

export function decodeMessage(hex: string): Message {
    return _abi.decodeMessage(hex)
}

export function decodeConstructor(hex: string): Constructor {
    return _abi.decodeConstructor(hex)
}

export interface Chain {
    client: {
        call: <T=any>(method: string, params?: unknown[]) => Promise<T>
    }
}

export interface ChainContext {
    _chain: Chain
}

export class Contract {
    constructor(private ctx: ChainContext, private address: string, private blockHash?: string) { }

    swap_fee_percentage(): Promise<Result<bigint, LangError>> {
        return this.stateCall('0x3d096bc8', [])
    }

    access_control(): Promise<Result<AccountId, LangError>> {
        return this.stateCall('0xf8e6bc11', [])
    }

    can_swap_pair(from: AccountId, to: AccountId): Promise<Result<boolean, LangError>> {
        return this.stateCall('0x90357537', [from, to])
    }

    code_hash(): Promise<Result<Result<Uint8Array, DexError>, LangError>> {
        return this.stateCall('0xbd69cea7', [])
    }

    in_given_out(token_in: AccountId, token_out: AccountId, amount_token_out: bigint): Promise<Result<Result<bigint, DexError>, LangError>> {
        return this.stateCall('0xf00e62a5', [token_in, token_out, amount_token_out])
    }

    out_given_in(token_in: AccountId, token_out: AccountId, amount_token_in: bigint): Promise<Result<Result<bigint, DexError>, LangError>> {
        return this.stateCall('0x6e9f047a', [token_in, token_out, amount_token_in])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_Withdrawn | Event_SwapPairAdded | Event_SwapPairRemoved | Event_Halted | Event_Resumed | Event_Swapped

export interface Event_Withdrawn {
    __kind: 'Withdrawn'
    caller: AccountId
    token: AccountId
    amount: bigint
}

export interface Event_SwapPairAdded {
    __kind: 'SwapPairAdded'
    pair: SwapPair
}

export interface Event_SwapPairRemoved {
    __kind: 'SwapPairRemoved'
    pair: SwapPair
}

export interface Event_Halted {
    __kind: 'Halted'
}

export interface Event_Resumed {
    __kind: 'Resumed'
}

export interface Event_Swapped {
    __kind: 'Swapped'
    caller: AccountId
    tokenIn: AccountId
    tokenOut: AccountId
    amountIn: bigint
    amountOut: bigint
}

export type Message = Message_swap | Message_withdrawal | Message_set_swap_fee_percentage | Message_swap_fee_percentage | Message_set_access_control | Message_access_control | Message_add_swap_pair | Message_can_swap_pair | Message_remove_swap_pair | Message_terminate | Message_code_hash | Message_set_code | Message_in_given_out | Message_out_given_in

/**
 *  Swaps the a specified amount of one of the pool's PSP22 tokens to another PSP22 token
 *  Calling account needs to give allowance to the DEX contract to spend amount_token_in of token_in on its behalf
 *  before executing this tx.
 */
export interface Message_swap {
    __kind: 'swap'
    tokenIn: AccountId
    tokenOut: AccountId
    amountTokenIn: bigint
    minAmountTokenOut: bigint
}

export interface Message_withdrawal {
    __kind: 'withdrawal'
    withdrawals: Vec
}

/**
 *  Alters the swap_fee parameter
 * 
 *  Can only be called by the contract's Admin.
 */
export interface Message_set_swap_fee_percentage {
    __kind: 'set_swap_fee_percentage'
    swapFeePercentage: bigint
}

/**
 *  Returns current value of the swap_fee_percentage parameter
 */
export interface Message_swap_fee_percentage {
    __kind: 'swap_fee_percentage'
}

/**
 *  Sets access_control to a new contract address
 * 
 *  Potentially very destructive, can only be called by the contract's Admin.
 */
export interface Message_set_access_control {
    __kind: 'set_access_control'
    accessControl: AccountId
}

/**
 *  Returns current address of the AccessControl contract that holds the account priviledges for this DEX
 */
export interface Message_access_control {
    __kind: 'access_control'
}

/**
 *  Whitelists a token pair for swapping between
 * 
 *  Token pair is understood as a swap between tokens in one direction
 *  Can only be called by an Admin
 */
export interface Message_add_swap_pair {
    __kind: 'add_swap_pair'
    from: AccountId
    to: AccountId
}

/**
 *  Returns true if a pair of tokens is whitelisted for swapping between
 */
export interface Message_can_swap_pair {
    __kind: 'can_swap_pair'
    from: AccountId
    to: AccountId
}

/**
 *  Blacklists a token pair from swapping
 * 
 *  Token pair is understood as a swap between tokens in one direction
 *  Can only be called by an Admin
 */
export interface Message_remove_swap_pair {
    __kind: 'remove_swap_pair'
    from: AccountId
    to: AccountId
}

/**
 *  Terminates the contract.
 * 
 *  Can only be called by the contract's Admin.
 */
export interface Message_terminate {
    __kind: 'terminate'
}

/**
 *  Returns own code hash
 */
export interface Message_code_hash {
    __kind: 'code_hash'
}

/**
 *  Upgrades contract code
 */
export interface Message_set_code {
    __kind: 'set_code'
    codeHash: Uint8Array
    callback: (Uint8Array | undefined)
}

/**
 *  Returns the swap trade input given a desired amount and assuming a curve with equal token weights
 * 
 *  Mostly useful for traders
 */
export interface Message_in_given_out {
    __kind: 'in_given_out'
    tokenIn: AccountId
    tokenOut: AccountId
    amountTokenOut: bigint
}

/**
 *  Return swap trade output given a curve with equal token weights
 * 
 *  B_o - (100 * B_o * B_i) / (100 * (B_i + A_i) - A_i * swap_fee)
 *  where swap_fee (integer) is a percentage of the trade that goes towards the pool
 *  and is used to pay the liquidity providers
 */
export interface Message_out_given_in {
    __kind: 'out_given_in'
    tokenIn: AccountId
    tokenOut: AccountId
    amountTokenIn: bigint
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type AccountId = Uint8Array

export type DexError = DexError_HaltableError | DexError_PSP22 | DexError_InsufficientAllowanceOf | DexError_Arithmethic | DexError_WrongParameterValue | DexError_MissingRole | DexError_InkEnv | DexError_CrossContractCall | DexError_TooMuchSlippage | DexError_NotEnoughLiquidityOf | DexError_UnsupportedSwapPair

export interface DexError_HaltableError {
    __kind: 'HaltableError'
    value: HaltableError
}

export interface DexError_PSP22 {
    __kind: 'PSP22'
    value: PSP22Error
}

export interface DexError_InsufficientAllowanceOf {
    __kind: 'InsufficientAllowanceOf'
    value: AccountId
}

export interface DexError_Arithmethic {
    __kind: 'Arithmethic'
}

export interface DexError_WrongParameterValue {
    __kind: 'WrongParameterValue'
}

export interface DexError_MissingRole {
    __kind: 'MissingRole'
    value: [AccountId, Role]
}

export interface DexError_InkEnv {
    __kind: 'InkEnv'
    value: string
}

export interface DexError_CrossContractCall {
    __kind: 'CrossContractCall'
    value: string
}

export interface DexError_TooMuchSlippage {
    __kind: 'TooMuchSlippage'
}

export interface DexError_NotEnoughLiquidityOf {
    __kind: 'NotEnoughLiquidityOf'
    value: AccountId
}

export interface DexError_UnsupportedSwapPair {
    __kind: 'UnsupportedSwapPair'
    value: SwapPair
}

export interface SwapPair {
    from: AccountId
    to: AccountId
}

export type Vec = [AccountId, bigint][]

export type HaltableError = HaltableError_InHaltedState | HaltableError_NotInHaltedState | HaltableError_Custom

export interface HaltableError_InHaltedState {
    __kind: 'InHaltedState'
}

export interface HaltableError_NotInHaltedState {
    __kind: 'NotInHaltedState'
}

export interface HaltableError_Custom {
    __kind: 'Custom'
    value: string
}

export type PSP22Error = PSP22Error_Custom | PSP22Error_InsufficientBalance | PSP22Error_InsufficientAllowance | PSP22Error_ZeroRecipientAddress | PSP22Error_ZeroSenderAddress | PSP22Error_SafeTransferCheckFailed

export interface PSP22Error_Custom {
    __kind: 'Custom'
    value: string
}

export interface PSP22Error_InsufficientBalance {
    __kind: 'InsufficientBalance'
}

export interface PSP22Error_InsufficientAllowance {
    __kind: 'InsufficientAllowance'
}

export interface PSP22Error_ZeroRecipientAddress {
    __kind: 'ZeroRecipientAddress'
}

export interface PSP22Error_ZeroSenderAddress {
    __kind: 'ZeroSenderAddress'
}

export interface PSP22Error_SafeTransferCheckFailed {
    __kind: 'SafeTransferCheckFailed'
    value: string
}

export type Role = Role_Initializer | Role_Admin | Role_Custom

export interface Role_Initializer {
    __kind: 'Initializer'
    value: Uint8Array
}

export interface Role_Admin {
    __kind: 'Admin'
    value: AccountId
}

export interface Role_Custom {
    __kind: 'Custom'
    value: [AccountId, Uint8Array]
}

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
