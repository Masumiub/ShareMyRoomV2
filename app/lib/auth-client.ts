// import { createAuthClient } from "better-auth/client";

// export const authClient = createAuthClient();

import { createAuthClient } from "better-auth/react"

export const authClient = createAuthClient({
 baseURL: "http://localhost:3000" 
})
