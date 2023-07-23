import bookmakers from '../data/bookmakers.json'

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
    return res.send({
        data: bookmakers,
    })
}
