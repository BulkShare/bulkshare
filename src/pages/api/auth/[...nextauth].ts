import NextAuth from "next-auth";

import { authOptions } from "saveshare-import/server/auth";

export default NextAuth(authOptions);
