// This is an example of to protect an API route
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import odds from '../data/odds.json'

import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    return res.send({
      content:
        "These odds are protected content. You can access this content because you are signed in.",
        data: odds,
    })
  }

  res.send({
    error: "You must be signed in to view the protected odds content in this modal.",
  })
}
