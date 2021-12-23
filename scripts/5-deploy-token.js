import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x32227F21bDef71E0fBBFFde341aBd8a3761B70c7");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name: "StudentRatingDAO Governance Token",
            symbol: "EDU",
        });
        console.log(
            "✅ Successfully deployed token module, address:",
            tokenModule.address,
          );
    } catch (error) {
        console.error("failed to deploy token module", error);
    }
})();