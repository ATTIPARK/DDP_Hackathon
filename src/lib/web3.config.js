import { MetaMaskSDK } from "@metamask/sdk";
import Web3 from "web3";

const MMSDK = new MetaMaskSDK({
  dappMetadata: {
    name: "DDP_HACKATHON",
    url: "",
  },
});

export const ethereum = MMSDK.getProvider();

export const web3 = new Web3(ethereum);
