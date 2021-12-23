import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
   "0x4E18354D4a44FAd37b0D5E8B256aF8A68E01B897",
);

(async() => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Student ID",
                description: "This NFT will give you access to StudentRatingDAO!",
                image: readFileSync("scripts/assets/student-id.png"),
            },
        ]);
        console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()