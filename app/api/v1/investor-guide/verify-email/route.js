import { NextResponse } from 'next/server'
import { isUserExists, isUserUUIDExists, verifyUserUUIDAndEmail } from '../../../../../lib/firebaseActions'



export async function POST(request) {
  try {
    const user = await request.json()

    if (!user) {
      return NextResponse.json(JSON.stringify({ message: "User data not found. Please provide a user info." }), { status: 400 })
    }

    if (!(await isUserExists(user.email))) {
      return NextResponse.json(JSON.stringify({ message: "Email does not exists.", code: 'EMAIL_NOT_EXIST' }), { status: 400 })
    }

    if (!(await isUserUUIDExists(user.uuid))) {
      return NextResponse.json(JSON.stringify({ message: "You provided incorrect UUID.", code: 'UUID_NOT_EXIST' }), { status: 400 })
    }

    await verifyUserUUIDAndEmail(user.uuid)
    return NextResponse.json(JSON.stringify({ message: "User email verified successfully.", downloadUrl: "https://cdn.ufbs.io/", code: 'EMAIL_VERIFIED' }), { status: 200 })

  } catch (error) {
    console.log(`[api]/investor-guide/verify-email`, error)
    return NextResponse.json(JSON.stringify({ message: "something bad happen at server" }), { status: 500 })
  }
}


