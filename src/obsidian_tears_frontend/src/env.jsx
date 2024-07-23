// update this whenever deploying to ic, local, staging or beta
export const network = "local";

// update this whenever canisters change in local
const canisterIds = {
  local: {
    characterCanister: "br5f7-7uaaa-aaaaa-qaaca-cai",
    unityCanister: "avqkn-guaaa-aaaaa-qaaea-cai",
  },
  beta: {
    characterCanister: "7gvtl-wiaaa-aaaan-qdarq-cai",
    unityCanister: "7utes-2yaaa-aaaan-qdasq-cai",
  },
  ic: {
    characterCanister: "dhyds-jaaaa-aaaao-aaiia-cai",
    unityCanister: "wmq2b-baaaa-aaaal-acata-cai",
  },
  staging: {
    characterCanister: "bhuj6-gaaaa-aaaan-qc7ba-cai",
    unityCanister: "dipqp-zyaaa-aaaan-qc7nq-cai",
  },
};

const buildUnityUrls = () => {
  let host, query;
  if (network == "local") {
    host = "http://127.0.0.1:4943/";
    query = "?canisterId=" + canisterIds[network]["unityCanister"];
  } else {
    // ic or staging
    // Important to be "raw" due to big files being loaded
    // in range/batches and sporadically giving errors on certification
    host = "https://" + canisterIds[network]["unityCanister"] + ".raw.icp0.io/";
    query = "";
  }

  return {
    loaderUrl: host + "unity/Build/Desktop.loader.js" + query,
    dataUrl: host + "unity/Build/Desktop.data" + query,
    frameworkUrl: host + "unity/Build/Desktop.framework.js" + query,
    codeUrl: host + "unity/Build/Desktop.wasm" + query,
  };
};

export const characterCanisterId = canisterIds[network]["characterCanister"];
export const unityUrls = buildUnityUrls();
