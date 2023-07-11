import { NextResponse } from "next/server";

export function middleware() {
  // retrieve the current response
  const res = NextResponse.next()

  // add the CORS headers to the response
  res.headers.append('Access-Control-Allow-Credentials', 'true')
  res.headers.append('Access-Control-Allow-Origin', 'https://www.richardhd.com') // Reemplaza esto con tu origen real
  res.headers.append('Access-Control-Allow-Methods', 'GET,DELETE,PATCH,POST,PUT')
  res.headers.append(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  return res
}

// Especifica el regex del path para aplicar el middleware
export const config = {
  api: {
    bodyParser: false, // Si no necesitas analizar el cuerpo de la solicitud
  },
}