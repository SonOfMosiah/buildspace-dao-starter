import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";

const voteModule = sdk.getVoteModule(
    "0x96B3d9636699e150B1cFc4937254ba875A2bE796"
);

const tokenModule = sdk.getTokenModule(
    "0x092B46136B2Df7cAFB4E41c54C3398671adab6f1"
);

(async () => {
    try {
      const amount = 420_000;
      await voteModule.propose(
        "Should the DAO mint an additional " + amount + " tokens into the treasury?",
        [
          {
            nativeTokenValue: 0,
            transactionData: tokenModule.contract.interface.encodeFunctionData(
              "mint",
              [
                voteModule.address,
                ethers.utils.parseUnits(amount.toString(), 18),
              ]
            ),
            toAddress: tokenModule.address,
          },
        ]
      );
        console.log("✅ Successfully created proposal to mint tokens");
    } catch (error) {
        console.error("failed to create first proposal", error);
        process.exit(1);
    }

    try {
        const amount = 6_900;
        await voteModule.propose(
            "Should the DAO transfer " + amount + " tokens from the treasury to " + process.env.WALLET_ADDRESS + " for being awesome?",
            [
                {
                    nativeTokenValue: 0,
                    transactionData: tokenModule.contract.interface.encodeFunctionData(
                        "transfer",
                        [
                            process.env.WALLET_ADDRESS,
                            ethers.utils.parseUnits(amount.toString(), 18),
                        ]
                    ),
                    toAddress: tokenModule.address,
                },
            ]
        );

        console.log(
            "✅ Successfully created proposal to reward ourselves from the treasury, let's hope people vote for it!"
          );
        } catch (error) {
          console.error("failed to create first proposal", error);
        }
})();