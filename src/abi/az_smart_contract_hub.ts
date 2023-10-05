import {Abi, encodeCall, decodeResult} from "@subsquid/ink-abi"

export const metadata = {
  "source": {
    "hash": "0x22ffd4b7b3b67c8e857f1c172bf3b0ab086cc42dc6640bd413e9f44b1631e84f",
    "language": "ink! 4.3.0",
    "compiler": "rustc 1.72.1",
    "build_info": {
      "build_mode": "Release",
      "cargo_contract_version": "4.0.0-alpha",
      "rust_toolchain": "stable-x86_64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "az_smart_contract_hub",
    "version": "0.1.0",
    "authors": [
      "btn.group"
    ]
  },
  "image": null,
  "spec": {
    "constructors": [
      {
        "args": [
          {
            "label": "azero_id_router_address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "az_groups_address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "new",
        "payable": false,
        "returnType": {
          "displayName": [
            "ink_primitives",
            "ConstructorResult"
          ],
          "type": 7
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
        "type": 0
      },
      "balance": {
        "displayName": [
          "Balance"
        ],
        "type": 3
      },
      "blockNumber": {
        "displayName": [
          "BlockNumber"
        ],
        "type": 4
      },
      "chainExtension": {
        "displayName": [
          "ChainExtension"
        ],
        "type": 23
      },
      "hash": {
        "displayName": [
          "Hash"
        ],
        "type": 21
      },
      "maxEventTopics": 4,
      "timestamp": {
        "displayName": [
          "Timestamp"
        ],
        "type": 22
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
              "type": 4
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "smart_contract_address",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "chain",
            "type": {
              "displayName": [
                "u8"
              ],
              "type": 2
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "caller",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "azero_id",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "abi_url",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "contract_url",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "wasm_url",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "audit_url",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "group_id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 16
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "project_name",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "project_website",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "github",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
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
              "type": 4
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
              "type": 5
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "azero_id",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "audit_url",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "group_id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 16
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "project_name",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "project_website",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "github",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          }
        ],
        "docs": [],
        "label": "Update"
      }
    ],
    "lang_error": {
      "displayName": [
        "ink",
        "LangError"
      ],
      "type": 9
    },
    "messages": [
      {
        "args": [],
        "default": false,
        "docs": [],
        "label": "config",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 10
        },
        "selector": "0x70714744"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "u32"
              ],
              "type": 4
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
          "type": 12
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
              "type": 0
            }
          },
          {
            "label": "chain",
            "type": {
              "displayName": [
                "u8"
              ],
              "type": 2
            }
          },
          {
            "label": "azero_id",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "label": "abi_url",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "label": "contract_url",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "wasm_url",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "audit_url",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "group_id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 16
            }
          },
          {
            "label": "project_name",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "project_website",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "github",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "create",
        "mutates": true,
        "payable": true,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 12
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
              "type": 4
            }
          },
          {
            "label": "enabled",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 5
            }
          },
          {
            "label": "azero_id",
            "type": {
              "displayName": [
                "String"
              ],
              "type": 6
            }
          },
          {
            "label": "group_id",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 16
            }
          },
          {
            "label": "audit_url",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "project_name",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "project_website",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          },
          {
            "label": "github",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 15
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "update",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 12
        },
        "selector": "0x5f234f5d"
      },
      {
        "args": [
          {
            "label": "fee",
            "type": {
              "displayName": [
                "Balance"
              ],
              "type": 3
            }
          }
        ],
        "default": false,
        "docs": [],
        "label": "update_fee",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "ink",
            "MessageResult"
          ],
          "type": 19
        },
        "selector": "0xa42bb8f4"
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
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "admin"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "az_groups_address"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 0
                }
              },
              "name": "azero_id_router_address"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 3
                }
              },
              "name": "fee"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "struct": {
                      "fields": [
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xdb31791a",
                              "ty": 4
                            }
                          },
                          "name": "id"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xdb31791a",
                              "ty": 0
                            }
                          },
                          "name": "smart_contract_address"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xdb31791a",
                              "ty": 2
                            }
                          },
                          "name": "chain"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xdb31791a",
                              "ty": 0
                            }
                          },
                          "name": "caller"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xdb31791a",
                              "ty": 5
                            }
                          },
                          "name": "enabled"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xdb31791a",
                              "ty": 6
                            }
                          },
                          "name": "azero_id"
                        },
                        {
                          "layout": {
                            "leaf": {
                              "key": "0xdb31791a",
                              "ty": 6
                            }
                          },
                          "name": "abi_url"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xdb31791a",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xdb31791a",
                                          "ty": 6
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "contract_url"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xdb31791a",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xdb31791a",
                                          "ty": 6
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "wasm_url"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xdb31791a",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xdb31791a",
                                          "ty": 6
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "audit_url"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xdb31791a",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xdb31791a",
                                          "ty": 4
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "group_id"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xdb31791a",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xdb31791a",
                                          "ty": 6
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "project_name"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xdb31791a",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xdb31791a",
                                          "ty": 6
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "project_website"
                        },
                        {
                          "layout": {
                            "enum": {
                              "dispatchKey": "0xdb31791a",
                              "name": "Option",
                              "variants": {
                                "0": {
                                  "fields": [],
                                  "name": "None"
                                },
                                "1": {
                                  "fields": [
                                    {
                                      "layout": {
                                        "leaf": {
                                          "key": "0xdb31791a",
                                          "ty": 6
                                        }
                                      },
                                      "name": "0"
                                    }
                                  ],
                                  "name": "Some"
                                }
                              }
                            }
                          },
                          "name": "github"
                        }
                      ],
                      "name": "SmartContract"
                    }
                  },
                  "root_key": "0xdb31791a"
                }
              },
              "name": "smart_contracts"
            },
            {
              "layout": {
                "leaf": {
                  "key": "0x00000000",
                  "ty": 4
                }
              },
              "name": "smart_contracts_count"
            }
          ],
          "name": "AZSmartContractHub"
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
          "composite": {
            "fields": [
              {
                "type": 1,
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
      "id": 1,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 2
          }
        }
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u128"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "primitive": "u32"
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
          "primitive": "str"
        }
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
                    "type": 9
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
            "type": 9
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
          "tuple": []
        }
      }
    },
    {
      "id": 9,
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
      "id": 10,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 11
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 9
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
            "type": 11
          },
          {
            "name": "E",
            "type": 9
          }
        ],
        "path": [
          "Result"
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
                "name": "admin",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "az_groups_address",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "azero_id_router_address",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "fee",
                "type": 3,
                "typeName": "Balance"
              },
              {
                "name": "smart_contracts_count",
                "type": 4,
                "typeName": "u32"
              }
            ]
          }
        },
        "path": [
          "az_smart_contract_hub",
          "az_smart_contract_hub",
          "Config"
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
                    "type": 9
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
            "type": 9
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
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 14
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 14
          },
          {
            "name": "E",
            "type": 17
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 14,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "name": "id",
                "type": 4,
                "typeName": "u32"
              },
              {
                "name": "smart_contract_address",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "chain",
                "type": 2,
                "typeName": "u8"
              },
              {
                "name": "caller",
                "type": 0,
                "typeName": "AccountId"
              },
              {
                "name": "enabled",
                "type": 5,
                "typeName": "bool"
              },
              {
                "name": "azero_id",
                "type": 6,
                "typeName": "String"
              },
              {
                "name": "abi_url",
                "type": 6,
                "typeName": "String"
              },
              {
                "name": "contract_url",
                "type": 15,
                "typeName": "Option<String>"
              },
              {
                "name": "wasm_url",
                "type": 15,
                "typeName": "Option<String>"
              },
              {
                "name": "audit_url",
                "type": 15,
                "typeName": "Option<String>"
              },
              {
                "name": "group_id",
                "type": 16,
                "typeName": "Option<u32>"
              },
              {
                "name": "project_name",
                "type": 15,
                "typeName": "Option<String>"
              },
              {
                "name": "project_website",
                "type": 15,
                "typeName": "Option<String>"
              },
              {
                "name": "github",
                "type": 15,
                "typeName": "Option<String>"
              }
            ]
          }
        },
        "path": [
          "az_smart_contract_hub",
          "az_smart_contract_hub",
          "SmartContract"
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
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 6
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
            "type": 6
          }
        ],
        "path": [
          "Option"
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
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 4
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
            "type": 4
          }
        ],
        "path": [
          "Option"
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
                    "type": 9,
                    "typeName": "LangError"
                  }
                ],
                "index": 0,
                "name": "ContractCall"
              },
              {
                "fields": [
                  {
                    "type": 6,
                    "typeName": "String"
                  }
                ],
                "index": 1,
                "name": "InkEnvError"
              },
              {
                "fields": [
                  {
                    "type": 6,
                    "typeName": "String"
                  }
                ],
                "index": 2,
                "name": "NotFound"
              },
              {
                "index": 3,
                "name": "Unauthorised"
              },
              {
                "fields": [
                  {
                    "type": 6,
                    "typeName": "String"
                  }
                ],
                "index": 4,
                "name": "UnprocessableEntity"
              },
              {
                "fields": [
                  {
                    "type": 18,
                    "typeName": "AZGroupsError"
                  }
                ],
                "index": 5,
                "name": "AZGroupsError"
              }
            ]
          }
        },
        "path": [
          "az_smart_contract_hub",
          "errors",
          "AZSmartContractHubError"
        ]
      }
    },
    {
      "id": 18,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 9,
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
                    "type": 6,
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
                    "type": 6,
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
                    "type": 6,
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
          "az_smart_contract_hub",
          "errors",
          "AZGroupsError"
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
                    "type": 9
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
            "type": 9
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
                    "type": 3
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 17
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
            "type": 3
          },
          {
            "name": "E",
            "type": 17
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
          "composite": {
            "fields": [
              {
                "type": 1,
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
      "id": 22,
      "type": {
        "def": {
          "primitive": "u64"
        }
      }
    },
    {
      "id": 23,
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

    config(): Promise<Result<Config, LangError>> {
        return this.stateCall('0x70714744', [])
    }

    show(id: u32): Promise<Result<Result<SmartContract, AZSmartContractHubError>, LangError>> {
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

export type Event = Event_Create | Event_Update

export interface Event_Create {
    __kind: 'Create'
    id: u32
    smartContractAddress: AccountId
    chain: u8
    caller: AccountId
    azeroId: String
    abiUrl: String
    contractUrl: (String | undefined)
    wasmUrl: (String | undefined)
    auditUrl: (String | undefined)
    groupId: (u32 | undefined)
    projectName: (String | undefined)
    projectWebsite: (String | undefined)
    github: (String | undefined)
}

export interface Event_Update {
    __kind: 'Update'
    id: u32
    enabled: bool
    azeroId: String
    auditUrl: (String | undefined)
    groupId: (u32 | undefined)
    projectName: (String | undefined)
    projectWebsite: (String | undefined)
    github: (String | undefined)
}

export type Message = Message_config | Message_show | Message_create | Message_update | Message_update_fee

export interface Message_config {
    __kind: 'config'
}

export interface Message_show {
    __kind: 'show'
    id: u32
}

export interface Message_create {
    __kind: 'create'
    smartContractAddress: AccountId
    chain: u8
    azeroId: String
    abiUrl: String
    contractUrl: (String | undefined)
    wasmUrl: (String | undefined)
    auditUrl: (String | undefined)
    groupId: (u32 | undefined)
    projectName: (String | undefined)
    projectWebsite: (String | undefined)
    github: (String | undefined)
}

export interface Message_update {
    __kind: 'update'
    id: u32
    enabled: bool
    azeroId: String
    groupId: (u32 | undefined)
    auditUrl: (String | undefined)
    projectName: (String | undefined)
    projectWebsite: (String | undefined)
    github: (String | undefined)
}

export interface Message_update_fee {
    __kind: 'update_fee'
    fee: Balance
}

export type Constructor = Constructor_new

export interface Constructor_new {
    __kind: 'new'
    azeroIdRouterAddress: AccountId
    azGroupsAddress: AccountId
}

export interface Config {
    admin: AccountId
    azGroupsAddress: AccountId
    azeroIdRouterAddress: AccountId
    fee: Balance
    smartContractsCount: u32
}

export type LangError = LangError_CouldNotReadInput

export interface LangError_CouldNotReadInput {
    __kind: 'CouldNotReadInput'
}

export type u32 = number

export interface SmartContract {
    id: u32
    smartContractAddress: AccountId
    chain: u8
    caller: AccountId
    enabled: bool
    azeroId: String
    abiUrl: String
    contractUrl: (String | undefined)
    wasmUrl: (String | undefined)
    auditUrl: (String | undefined)
    groupId: (u32 | undefined)
    projectName: (String | undefined)
    projectWebsite: (String | undefined)
    github: (String | undefined)
}

export type AZSmartContractHubError = AZSmartContractHubError_ContractCall | AZSmartContractHubError_InkEnvError | AZSmartContractHubError_NotFound | AZSmartContractHubError_Unauthorised | AZSmartContractHubError_UnprocessableEntity | AZSmartContractHubError_AZGroupsError

export interface AZSmartContractHubError_ContractCall {
    __kind: 'ContractCall'
    value: LangError
}

export interface AZSmartContractHubError_InkEnvError {
    __kind: 'InkEnvError'
    value: String
}

export interface AZSmartContractHubError_NotFound {
    __kind: 'NotFound'
    value: String
}

export interface AZSmartContractHubError_Unauthorised {
    __kind: 'Unauthorised'
}

export interface AZSmartContractHubError_UnprocessableEntity {
    __kind: 'UnprocessableEntity'
    value: String
}

export interface AZSmartContractHubError_AZGroupsError {
    __kind: 'AZGroupsError'
    value: AZGroupsError
}

export type AccountId = Uint8Array

export type u8 = number

export type String = string

export type bool = boolean

export type Balance = bigint

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

export type Result<T, E> = {__kind: 'Ok', value: T} | {__kind: 'Err', value: E}
