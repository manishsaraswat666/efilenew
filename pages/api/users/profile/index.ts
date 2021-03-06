import dbConnect from "../../../../lib/dbConnect";
import User from "../../../../models/User";
import type {NextApiRequest, NextApiResponse} from "next";
import jwt from "jsonwebtoken";
interface JwtPayload {
    _id: string
  }

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    if (!process.env.JWT_SECRET) throw new Error("JWT_SECRET is not defined");
    const {method} = req;
    await dbConnect();

    switch (method){
        case "GET":
            try {
                let token = "";

                if (
                    typeof req.headers["authorization"] != "undefined" &&
        req.headers["authorization"] != null
                ){
                    const barerheader = req.headers["authorization"];
                    const baerer = barerheader.split(" ");
                    token = baerer[1];
                }

                const token_details = jwt.verify(token, process.env.JWT_SECRET) as JwtPayload;
                const users = await User.find({_id: token_details._id});
                
                res.status(200).json({
                    success: true,
                    data: users
                });
            } catch (error){
                res.status(400).json({success: false});
            }

            break;
        default:
            res.status(400).json({success: false});
            break;
    }
}
