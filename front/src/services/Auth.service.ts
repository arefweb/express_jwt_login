import { api } from "./http-config";

class AuthService {
  signup() {
    return api.post("/auth/signup");
  }

  signIn(payload: any) {
    return api.post("/auth/signin", payload)
  }
}

export default new AuthService();