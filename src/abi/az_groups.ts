import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x3a1e85cbcce9f8497cb8a05c9b99bb5862b4943a05b91329c4bfcc891a2379c1",
    "language": "ink! 4.3.0",
    "compiler": "rustc 1.69.0-nightly",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "2.0.1",
      "rust_toolchain": "nightly-x86_64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "az_groups",
    "version": "0.1.0",
    "authors": [
      "btn.group"
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
          "type": 3
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
        "type": 11
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 21
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
        "type": 24
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 22
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 23
      }
    },
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
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
            "label": "name",
            "type": {
              "displayName": [
                "String"
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
            "indexed": true,
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
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 1
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
              "type": 2
            }
          }
        ],
        "docs": [],
        "label": "Update"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "group_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "user",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 11
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "role",
            "type": {
              "displayName": [
                "Role"
              ],
              "type": 9
            }
          }
        ],
        "docs": [],
        "label": "GroupUserCreate"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "group_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "user",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 11
            }
          }
        ],
        "docs": [],
        "label": "GroupUserDestroy"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "group_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "user",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 11
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "role",
            "type": {
              "displayName": [
                "Role"
              ],
              "type": 9
            }
          }
        ],
        "docs": [],
        "label": "GroupUserUpdate"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 5
    },
    "messages": [
      {
        "args": [
          {
            "label": "group_id",
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
        "label": "group_users_create",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 6
        },
        "selector": "0x5c2a7440"
      },
      {
        "args": [
          {
            "label": "group_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "label": "user",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 11
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "group_users_destroy",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 14
        },
        "selector": "0xf626ce8f"
      },
      {
        "args": [
          {
            "label": "group_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "label": "user",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 11
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "group_users_show",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 6
        },
        "selector": "0x9f2f8d2b"
      },
      {
        "args": [
          {
            "label": "group_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "label": "user",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 11
            }
          },
          {
            "label": "role",
            "type": {
              "displayName": [
                "Role"
              ],
              "type": 9
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "group_users_update",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 6
        },
        "selector": "0x226c42aa"
      },
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "groups_create",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x25f0c549"
      },
      {
        "args": [
          {
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 1
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "groups_find_by_name",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0xae6bc97d"
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
          }
        ],
        "default": false,
        "docs": [],
        "label": "groups_show",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0xb738a269"
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
            "label": "name",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 1
            }
          },
          {
            "label": "enabled",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 2
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "groups_update",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 16
        },
        "selector": "0x57bf3ed4"
      },
      {
        "args": [
          {
            "label": "group_id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 0
            }
          },
          {
            "label": "user",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 11
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "validate_membership",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 19
        },
        "selector": "0xc5160381"
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
                              "key": "0xabdb9774",
                              "ty": 0
                            }
                          },
                          "name": "id"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xabdb9774",
                              "ty": 1
                            }
                          },
                          "name": "name"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xabdb9774",
                              "ty": 2
                            }
                          },
                          "name": "enabled"
                        }
                      ],
                      "name": "Group"
                    }
                  },
                  "root_key": "0xabdb9774"
                }
              },
              "name": "groups"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x3830af67",
                      "ty": 0
                    }
                  },
                  "root_key": "0x3830af67"
                }
              },
              "name": "group_id_by_name"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "groups_total"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0x39d60459",
                              "name": "Role",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "Banned"
                                },
                                "1": {
                                  "fields": [],
                                  "name": "Applicant"
                                },
                                "2": {
                                  "fields": [],
                                  "name": "Member"
                                },
                                "3": {
                                  "fields": [],
                                  "name": "Admin"
                                },
                                "4": {
                                  "fields": [],
                                  "name": "SuperAdmin"
                                }
                              }
                            }
                          },
                          "name": "role"
                        }
                      ],
                      "name": "GroupUser"
                    }
                  },
                  "root_key": "0x39d60459"
                }
              },
              "name": "group_users"
            }
          ],
          "name": "AZGroups"
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
          "primitive": "str"
        }
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 3,
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
                    "type": 5
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
            "type": 5
          }
        ],
        "path": [
          "Result"
        ]
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
      "id": 6,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 7
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 5
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
            "type": 7
          },
          {
            "name": "E",
            "type": 5
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
                "fields": [
                  {
                    "type": 8
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
            "type": 8
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
      "id": 8,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "role",
                "type": 9,
                "typeName": "Role"
              }
            ]
          }
        },
        "path": [
          "az_groups",
          "az_groups",
          "GroupUser"
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
                "index": 0,
                "name": "Banned"
              },
              {
                "index": 1,
                "name": "Applicant"
              },
              {
                "index": 2,
                "name": "Member"
              },
              {
                "index": 3,
                "name": "Admin"
              },
              {
                "index": 4,
                "name": "SuperAdmin"
              }
            ]
          }
        },
        "path": [
          "az_groups",
          "az_groups",
          "Role"
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
                    "type": 5,
                    "typeName": "LangError"
                  }
                ],
                "index": 0,
                "name": "ContractCall"
              },
              {
                "index": 1,
                "name": "GroupDisabled"
              },
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "String"
                  }
                ],
                "index": 2,
                "name": "InkEnvError"
              },
              {
                "index": 3,
                "name": "NotAMember"
              },
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "String"
                  }
                ],
                "index": 4,
                "name": "NotFound"
              },
              {
                "index": 5,
                "name": "Unauthorised"
              },
              {
                "fields": [
                  {
                    "type": 1,
                    "typeName": "String"
                  }
                ],
                "index": 6,
                "name": "UnprocessableEntity"
              }
            ]
          }
        },
        "path": [
          "az_groups",
          "errors",
          "AZGroupsError"
        ]
      }
    },
    {
      "id": 11,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 12,
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
      "id": 12,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 13
          }
        }
      }
    },
    {
      "id": 13,
      "type": {
        "def": {
          "primitive": "u8"
        }
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
                    "type": 15
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 5
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
            "type": 5
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 15,
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
      "id": 16,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 17
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 5
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
            "type": 17
          },
          {
            "name": "E",
            "type": 5
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 17,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 18
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
            "type": 18
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
      "id": 18,
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
                "name": "name",
                "type": 1,
                "typeName": "String"
              },
              {
                "name": "enabled",
                "type": 2,
                "typeName": "bool"
              }
            ]
          }
        },
        "path": [
          "az_groups",
          "az_groups",
          "Group"
        ]
      }
    },
    {
      "id": 19,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 20
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 5
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
            "type": 20
          },
          {
            "name": "E",
            "type": 5
          }
        ],
        "path": [
          "Result"
        ]
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
      "id": 21,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 22,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 12,
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
      "id": 23,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 24,
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

    group_users_show(group_id: u32, user: AccountId): Promise<Result<Result<GroupUser, AZGroupsError>, LangError>> {
        return this.stateCall('0x9f2f8d2b', [group_id, user])
    }

    groups_find_by_name(name: String): Promise<Result<Result<Group, AZGroupsError>, LangError>> {
        return this.stateCall('0xae6bc97d', [name])
    }

    groups_show(id: u32): Promise<Result<Result<Group, AZGroupsError>, LangError>> {
        return this.stateCall('0xb738a269', [id])
    }

    validate_membership(group_id: u32, user: AccountId): Promise<Result<Result<Role, AZGroupsError>, LangError>> {
        return this.stateCall('0xc5160381', [group_id, user])
    }

    private async stateCall<T>(selector: string, args: any[]): Promise<T> {
        let input = _abi.encodeMessageInput(selector, args)
        let data = encodeCall(this.address, input)
        let result = await this.ctx._chain.client.call('state_call', ['ContractsApi_call', data, this.blockHash])
        let value = decodeResult(result)
        return _abi.decodeMessageOutput(selector, value)
    }
}

export type Event = Event_Create | Event_Update | Event_GroupUserCreate | Event_GroupUserDestroy | Event_GroupUserUpdate

export interface Event_Create {
    __kind: 'Create'
    id: u32
    name: String
}

export interface Event_Update {
    __kind: 'Update'
    id: u32
    name: String
    enabled: bool
}

export interface Event_GroupUserCreate {
    __kind: 'GroupUserCreate'
    groupId: u32
    user: AccountId
    role: Role
}

export interface Event_GroupUserDestroy {
    __kind: 'GroupUserDestroy'
    groupId: u32
    user: AccountId
}

export interface Event_GroupUserUpdate {
    __kind: 'GroupUserUpdate'
    groupId: u32
    user: AccountId
    role: Role
}

export type Message = Message_group_users_create | Message_group_users_destroy | Message_group_users_show | Message_group_users_update | Message_groups_create | Message_groups_find_by_name | Message_groups_show | Message_groups_update | Message_validate_membership

export interface Message_group_users_create {
    __kind: 'group_users_create'
    groupId: u32
}

export interface Message_group_users_destroy {
    __kind: 'group_users_destroy'
    groupId: u32
    user: AccountId
}

export interface Message_group_users_show {
    __kind: 'group_users_show'
    groupId: u32
    user: AccountId
}

export interface Message_group_users_update {
    __kind: 'group_users_update'
    groupId: u32
    user: AccountId
    role: Role
}

export interface Message_groups_create {
    __kind: 'groups_create'
    name: String
}

export interface Message_groups_find_by_name {
    __kind: 'groups_find_by_name'
    name: String
}

export interface Message_groups_show {
    __kind: 'groups_show'
    id: u32
}

export interface Message_groups_update {
    __kind: 'groups_update'
    id: u32
    name: String
    enabled: bool
}

export interface Message_validate_membership {
    __kind: 'validate_membership'
    groupId: u32
    user: AccountId
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
}

export type u32 = number

export type AccountId = Uint8Array

export interface GroupUser {
    role: Role
}

export type AZGroupsError = AZGroupsError_ContractCall | AZGroupsError_GroupDisabled | AZGroupsError_InkEnvError | AZGroupsError_NotAMember | AZGroupsError_NotFound | AZGroupsError_Unauthorised | AZGroupsError_UnprocessableEntity

export interface AZGroupsError_ContractCall {
    __kind: 'ContractCall'
    value: LangError
}

export interface AZGroupsError_GroupDisabled {
    __kind: 'GroupDisabled'
}

export interface AZGroupsError_InkEnvError {
    __kind: 'InkEnvError'
    value: String
}

export interface AZGroupsError_NotAMember {
    __kind: 'NotAMember'
}

export interface AZGroupsError_NotFound {
    __kind: 'NotFound'
    value: String
}

export interface AZGroupsError_Unauthorised {
    __kind: 'Unauthorised'
}

export interface AZGroupsError_UnprocessableEntity {
    __kind: 'UnprocessableEntity'
    value: String
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type String = string

export interface Group {
    id: u32
    name: String
    enabled: bool
}

export type Role = Role_Banned | Role_Applicant | Role_Member | Role_Admin | Role_SuperAdmin

export interface Role_Banned {
    __kind: 'Banned'
}

export interface Role_Applicant {
    __kind: 'Applicant'
}

export interface Role_Member {
    __kind: 'Member'
}

export interface Role_Admin {
    __kind: 'Admin'
}

export interface Role_SuperAdmin {
    __kind: 'SuperAdmin'
}

export type bool = boolean

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
