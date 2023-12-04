import { sendSignedRequest } from "$lib/util/sendSignedRequest";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    const code = params.code.toUpperCase();

    const response = await sendSignedRequest(`/manager/onboarding/verifyemail`, "POST", JSON.stringify({ code }));

    if (response.status === 200) {
        return {
            title: "Your email has been verified.",
            body: "You may now return to the app.",
        }
    } else {
        const text = await response.text();

        if (text === "CODE_NOT_RECOGNIZED") {
            return {
                title: "Invalid link.",
                body: "The link you entered isn't recognized. Make sure you entered the entire link correctly.",
            }
        } else if (text === "EMAIL_ALREADY_VERIFIED") {
            return {
                title: "Email already verified.",
                body: "This email has already been verified.",
            }
        }
    }

    throw error(500, "Failed to verify email");
};
