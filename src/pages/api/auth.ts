import { NextApiRequest, NextApiResponse } from "next";
import {Global_token} from "@/libs/accessToken";
export default function Authorization(req:NextApiRequest, res:NextApiResponse){
const access_token = Global_token.access_token;
res.json({
    access_token: access_token,
})
}