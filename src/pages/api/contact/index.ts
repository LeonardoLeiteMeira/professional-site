import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log("Request ",req)
    // console.log("Response",res)

    res.status(200).json({ text: 'Hello' });
}