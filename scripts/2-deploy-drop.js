import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x32227F21bDef71E0fBBFFde341aBd8a3761B70c7");

(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "StudentRatingDAO Membership",
            description: " A DAO for students to share professor and course ratings.",
            image: readFileSync("scripts/assets/student-logo.png"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
        );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
        );
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
})()
