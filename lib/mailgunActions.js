import axios from "axios"

export async function sendVerificationEmailWithSMTP(to, uuid, firstName) {
    try {
        await axios({
            data: JSON.stringify({ email: to, uuid: uuid, firstName: firstName }),
            url: "https://mailapi.tokensales.ufund.online/send-verification-email/",
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error) {
        console.log(error)
    }

}