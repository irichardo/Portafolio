import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req:NextApiRequest, res:NextApiResponse) {
  try{
    const {data} = req.query   
      const resData = await fetch(`https://raw.githubusercontent.com/irichardo/blogpost/main/ReadmeProjects/${data}.md`)
      if(!resData) return undefined
      const rawToText = await resData.text();
      res.status(200).send(rawToText);
    }
    catch{
        res.status(404)
    }
  }