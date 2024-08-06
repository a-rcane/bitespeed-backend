import { reqInfo } from "../common/types";

export const identifyContact = async(req: { body: any; }, res: any) => {
    console.log("Here");
    try {
        const description: reqInfo = req.body;
        console.log(description);
        res.status(200).send("success");
    } catch (err: any) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};