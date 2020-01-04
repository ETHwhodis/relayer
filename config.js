require('dotenv').config()

module.exports = {
  version: '2.2',
  netId: Number(process.env.NET_ID) || 42,
  redisUrl: process.env.REDIS_URL,
  rpcUrl: process.env.RPC_URL,
  oracleRpcUrl: process.env.ORACLE_RPC_URL || 'https://mainnet.infura.io/',
  oracleAddress: '0xB5eE7907FF5f4c1FC9086Fc117E6c397431F39ad',
  privateKey: process.env.PRIVATE_KEY,
  mixers: {
    netId1: {
      eth: {
        mixerAddress: {
          '0.1': '0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc',
          '1': '0x47CE0C6eD5B0Ce3d3A51fdb1C52DC66a7c3c2936',
          '10': '0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF',
          '100': '0xA160cdAB225685dA1d56aa342Ad8841c3b53f291'
        },
        symbol: 'ETH',
        decimals: 18
      },
    },
    netId42: {
      eth: {
        mixerAddress: {
          '0.1': '0x8b3f5393bA08c24cc7ff5A66a832562aAB7bC95f',
          '1': '0xD6a6AC46d02253c938B96D12BE439F570227aE8E',
          '10': '0xe1BE96331391E519471100c3c1528B66B8F4e5a7',
          '100': '0xd037E0Ac98Dab2fCb7E296c69C6e52767Ae5414D'
        },
        symbol: 'ETH',
        decimals: 18
      },
    }
  },
  defaultGasPrice: 2,
  gasOracleUrls: ['https://ethgasstation.info/json/ethgasAPI.json', 'https://gasprice.poa.network/'],
  port: process.env.PORT || process.env.APP_PORT,
  relayerServiceFee: Number(process.env.RELAYER_FEE),
  deploymentTxs: {
    // TORNADO ETH MAINNET
    '0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc': '0xeed4367a9b4c066b9fbf0a44869f36b93d2f06e5a63a9464ddfd0597a8a45935',
    '0x47CE0C6eD5B0Ce3d3A51fdb1C52DC66a7c3c2936': '0xe614294293ac69684e86a521ea778ab305f1f406f33fd233d6e090737c87008e',
    '0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF': '0x6b3cc20cac0c9701d6cffca491bbca5dfe56127d2584ef292707b904b6cdc4d5',
    '0xA160cdAB225685dA1d56aa342Ad8841c3b53f291': '0xef9055b8b3667983a2fc0505b003db3419340637445375f1e64dde91cf30c2af',
    // TORNADO ETH KOVAN
    '0x8b3f5393bA08c24cc7ff5A66a832562aAB7bC95f': '0xa2fd10d7dbc9ece248ff0fb9f907312d661bde89ec84fa92d65238a6e293198c',
    '0xD6a6AC46d02253c938B96D12BE439F570227aE8E': '0xcf369a5f3874ff5d5f248c85353a3e77a5dbec3f71ef2781ac2256ebd6ea13ca',
    '0xe1BE96331391E519471100c3c1528B66B8F4e5a7': '0x59930ba1be46fa941fa1745b509c5577ffba876df563b6b3fdcef3babfe349c3',
    '0xd037E0Ac98Dab2fCb7E296c69C6e52767Ae5414D': '0xabcfa7454a86ff79c266a5e27d97b8151780008cbb40c4fd2ea37b03355fc983',
  },
}