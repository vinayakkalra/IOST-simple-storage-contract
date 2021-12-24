# IOST-simple-storage-contract

This repo is a part of the IOST developer tutorial series. It contains a basic implementation of a very basic storage contract on IOST

Before doing the below steps, please make sure that your local IOST node is running. Please refer [here](https://github.com/vinayakkalra/IOST-setup-dev) if you dont know how to do that

To compile this contract run :

> iwallet compile SimpleStorage.js

To publish the contract run:

> iwallet --account admin --chain_id 1020 publish SimpleStorage.js SimpleStorage.js.abi

To interact with the get function in the contract run:

> iwallet --account admin --chain_id 1020 call "<contract address from above>" "get" '[]'

To interact with the change function in the contract run:

> iwallet --account admin --chain_id 1020 call "<contract address from above>" "hello" '["developer"]'
  
