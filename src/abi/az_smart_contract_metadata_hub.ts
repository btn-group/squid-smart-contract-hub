import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0xaf1e2ec3e0157401a869cb4ed6ecbb6f6f5f0442252c3e90ed02092f33f2c0d8",
    "language": "ink! 4.2.1",
    "compiler": "rustc 1.69.0",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "3.0.1",
      "rust_toolchain": "stable-x86_64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "az_smart_contract_metadata_hub",
    "version": "0.1.0",
    "authors": [
      "Steven Chang <steven.chang@btn.group>"
    ]
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
          "type": 8
        },
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
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
        "type": 15
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 0
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 18
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 16
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 17
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": false,
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "smart_contract_address",
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
            "label": "submitter",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "docs": [],
        "label": "Create"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": false,
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "enabled",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 6
            }
          }
        ],
        "docs": [],
        "label": "Toggle"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": false,
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "previous_user_rating",
            "type": {
              "displayName": [
                "i8"
              ],
              "type": 7
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "new_user_rating",
            "type": {
              "displayName": [
                "i8"
              ],
              "type": 7
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "user",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          }
        ],
        "docs": [],
        "label": "Rate"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 10
    },
    "messages": [
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "show",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0xf1b0ace3"
      },
      {
        "args": [
          {
            "label": "smart_contract_address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 1
            }
          },
          {
            "label": "url",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 4
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "create",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0xab700a1b"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "label": "new_user_rating",
            "type": {
              "displayName": [
                "i8"
              ],
              "type": 7
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "rate",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0xef3a6cba"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "label": "enabled",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 6
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "toggle_enabled",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 11
        },
        "selector": "0xd7d87ac4"
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
                                      "key": "0x7df016d6",
                                      "ty": 0
                                    }
                                  },
                                  "name": "id"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x7df016d6",
                                      "ty": 1
                                    }
                                  },
                                  "name": "smart_contract_address"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x7df016d6",
                                      "ty": 4
                                    }
                                  },
                                  "name": "url"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x7df016d6",
                                      "ty": 5
                                    }
                                  },
                                  "name": "likes"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x7df016d6",
                                      "ty": 5
                                    }
                                  },
                                  "name": "dislikes"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x7df016d6",
                                      "ty": 1
                                    }
                                  },
                                  "name": "submitter"
                                },
                                {
                                  "layout": {
                                    "leaf": {
                                      "key": "0x7df016d6",
                                      "ty": 6
                                    }
                                  },
                                  "name": "enabled"
                                }
                              ],
                              "name": "Record"
                            }
                          },
                          "root_key": "0x7df016d6"
                        }
                      },
                      "name": "values"
                    },
                    {
                      "layout": {
                        "leaf": {
                          "key": "0x00000000",
                          "ty": 0
                        }
                      },
                      "name": "length"
                    }
                  ],
                  "name": "Records"
                }
              },
              "name": "records"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x95148b37",
                      "ty": 7
                    }
                  },
                  "root_key": "0x95148b37"
                }
              },
              "name": "user_ratings"
            }
          ],
          "name": "AzSmartContractMetadataHub"
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
          "primitive": "u32"
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
          "primitive": "str"
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "primitive": "u16"
        }
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "primitive": "i8"
        }
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
            "type": 9
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
      "id": 9,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 10,
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
      "id": 11,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 12
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
            "type": 12
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
      "id": 12,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 13
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 14
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
            "type": 13
          },
          {
            "name": "E",
            "type": 14
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "id",
                "type": 0,
                "typeName": "u32"
              },
              {
                "name": "smart_contract_address",
                "type": 1,
                "typeName": "AccountId"
              },
              {
                "name": "url",
                "type": 4,
                "typeName": "String"
              },
              {
                "name": "likes",
                "type": 5,
                "typeName": "u16"
              },
              {
                "name": "dislikes",
                "type": 5,
                "typeName": "u16"
              },
              {
                "name": "submitter",
                "type": 1,
                "typeName": "AccountId"
              },
              {
                "name": "enabled",
                "type": 6,
                "typeName": "bool"
              }
            ]
          }
        },
        "path": [
          "az_smart_contract_metadata_hub",
          "az_smart_contract_metadata_hub",
          "Record"
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
                    "type": 4,
                    "typeName": "String"
                  }
                ],
                "index": 0,
                "name": "NotFound"
              },
              {
                "fields": [
                  {
                    "type": 4,
                    "typeName": "String"
                  }
                ],
                "index": 1,
                "name": "OutOfRange"
              },
              {
                "index": 2,
                "name": "Unauthorized"
              },
              {
                "fields": [
                  {
                    "type": 4,
                    "typeName": "String"
                  }
                ],
                "index": 3,
                "name": "Unchanged"
              }
            ]
          }
        },
        "path": [
          "az_smart_contract_metadata_hub",
          "az_smart_contract_metadata_hub",
          "AzSmartContractMetadataHubError"
        ]
      }
    },
    {
      "id": 15,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 16,
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
      "id": 17,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 18,
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

    show(id: u32): Promise<Result<Result<Record, AzSmartContractMetadataHubError>, LangError>> {
        return this.stateCall('0xf1b0ace3', [id])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_Create | Event_Toggle | Event_Rate

export interface Event_Create {
    __kind: 'Create'
    id: u32
    smartContractAddress: AccountId
    submitter: AccountId
}

export interface Event_Toggle {
    __kind: 'Toggle'
    id: u32
    enabled: bool
}

export interface Event_Rate {
    __kind: 'Rate'
    id: u32
    previousUserRating: i8
    newUserRating: i8
    user: AccountId
}

export type Message = Message_show | Message_create | Message_rate | Message_toggle_enabled

export interface Message_show {
    __kind: 'show'
    id: u32
}

export interface Message_create {
    __kind: 'create'
    smartContractAddress: AccountId
    url: String
}

export interface Message_rate {
    __kind: 'rate'
    id: u32
    newUserRating: i8
}

export interface Message_toggle_enabled {
    __kind: 'toggle_enabled'
    id: u32
    enabled: bool
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
}

export type u32 = number

export interface Record {
    id: u32
    smartContractAddress: AccountId
    url: String
    likes: number
    dislikes: number
    submitter: AccountId
    enabled: bool
}

export type AzSmartContractMetadataHubError = AzSmartContractMetadataHubError_NotFound | AzSmartContractMetadataHubError_OutOfRange | AzSmartContractMetadataHubError_Unauthorized | AzSmartContractMetadataHubError_Unchanged

export interface AzSmartContractMetadataHubError_NotFound {
    __kind: 'NotFound'
    value: String
}

export interface AzSmartContractMetadataHubError_OutOfRange {
    __kind: 'OutOfRange'
    value: String
}

export interface AzSmartContractMetadataHubError_Unauthorized {
    __kind: 'Unauthorized'
}

export interface AzSmartContractMetadataHubError_Unchanged {
    __kind: 'Unchanged'
    value: String
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type AccountId = Uint8Array

export type bool = boolean

export type i8 = number

export type String = string

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
