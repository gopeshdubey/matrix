const { expect } = require("chai");
const BigNumber = require('bignumber.js');
const TronWeb = require("tronweb");

var server_link = "https://api.trongrid.io";

const HttpProvider = TronWeb.providers.HttpProvider;
const fullNode = new HttpProvider(server_link);
const solidityNode = new HttpProvider(server_link);
const eventServer = new HttpProvider(server_link);

const tronWeb = new TronWeb(fullNode, solidityNode, eventServer);

describe("Matrix", function() {
  it("Should return the new greeting once it's changed", async function() {
    const Greeter = await ethers.getContractFactory("Matrix");

    const d = await Greeter.deploy()

    const data = await d.deployed()

    var dat = tronWeb.address.toHex('TKssrn5v8ephdmJbh7UYaUeoR4L1d4ZXds')
    console.log({dat});

    var dec = await data.greet()

    console.log({dec});
  });
});
