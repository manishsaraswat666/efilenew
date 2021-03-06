import dbConnect from "../../../lib/dbConnect";
import Business from "../../../models/efileReturn/loss-event-stolen.model";
import type {NextApiRequest, NextApiResponse} from "next";

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
){
    const {method} = req;
    await dbConnect();

    switch(method){
        case "GET":
            try{
                const business = await Business.find({});

                res.status(200).json({
                    success: true,
                    data: business
                });
            }catch(err){
                res.status(400).json({success: false});
            }

            break;
            
        case "POST":
            try{
                const newBusiness = new Business(req.body);
                await newBusiness.save();

                res.status(201).json({
                    success: true,
                    data: newBusiness
                });
            }catch(err){
                res.status(400).json({success: false});
            }

            break;
            
        default:
            res.status(400).json({success: false});
            break;
    }
}