import { NextResponse } from 'next/server';
import { getUserInCRMByEmail, isEmailVerifiedUserCRM, isUserExists, updateUserPPM } from '@lib/firebaseActions';

/**
 * Handles a POST request to verify a user's email.
 *
 * @param {object} request - The incoming request object.
 * @returns {object} - A Next.js response object indicating the result of the verification.
 */
export async function POST(request) {
  try {
    const user = await request.json();

    // Check if the request contains user data
    if (!user) {
      return NextResponse.json(
        JSON.stringify({ message: "User data not found. Please provide user information." }),
        { status: 400 }
      );
    }

    // Check if the user with the provided email exists
    if (!await isUserExists(user.email)) {
      return NextResponse.json(
        JSON.stringify({ message: "Email does not exist.", code: 'EMAIL_NOT_EXIST' }),
        { status: 400 }
      );
    }

    // Check if the user's email is verified in the CRM
    if (!await isEmailVerifiedUserCRM(user.email)) {
      return NextResponse.json(
        JSON.stringify({ message: "User's email is not verified.", code: 'EMAIL_NOT_VERIFIED' }),
        { status: 400 }
      );
    }

    const { data } = await getUserInCRMByEmail(user.email)

    await updateUserPPM(data[0].uuid, { requiredGuides: user.requiredGuides, status: 'pending', isPPM: true })
    return NextResponse.json(JSON.stringify({ message: "Success", code: 'PPM_REQUEST_SUCCESS' }), { status: 200 })

  } catch (error) {
    console.log(`[api]/investor-guide/request-ppm`, error);
    // Handle any unexpected server error
    return NextResponse.json(
      { message: "Something went wrong on the server. Please try again later." },
      { status: 500 }
    );
  }
}