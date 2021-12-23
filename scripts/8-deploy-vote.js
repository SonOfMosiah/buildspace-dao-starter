import sdk from "./1-initialize-sdk.js";

const appModule = sdk.getAppModule(
    "0x32227F21bDef71E0fBBFFde341aBd8a3761B70c7",
);

(async () => {
    try {
        const voteModule = await appModule.deployVoteModule({
            name: "StudentRatingDAO's Proposals",
            votingTokenAddress: "0x092B46136B2Df7cAFB4E41c54C3398671adab6f1",
            proposalStartWaitTimeInSeconds: 0,
            proposalVotingTimeInSeconds: 24 * 60 * 60,
            votingQuorumFraction: 0,
            minimumNumberOfTokensNeededToPropose: "0",
        });

        console.log(
            "✅ Successfully deployed vote module, address:",
            voteModule.address,
          );
    } catch (err) {
        console.log("Failed to deploy vote module", err);
    }
})();