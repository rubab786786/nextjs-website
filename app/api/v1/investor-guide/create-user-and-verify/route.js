import { NextResponse } from 'next/server'
import { createUserInCRM, isUserExists } from '@lib/firebaseActions'
import { sendVerificationEmailWithSMTP } from '@lib/mailgunActions'



export async function POST(request) {
  try {
    const user = await request.json()

    if (!user) {
      return NextResponse.json({ message: "User data not found. Please provide a user info." }, { status: 400 })
    }

    if (await isUserExists(user.email)) {
      return NextResponse.json({ message: "User with provided email already exist.", code: 'EMAIL_ALREADY_EXIST' }, { status: 400 })
    }

    const { uuid, email, firstName } = await createUserInCRM(user)

    await sendVerificationEmailWithSMTP(email, uuid, firstName)
    return NextResponse.json(user, { status: 200 })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "something bad happen at server" }, { status: 500 })
  }
}


