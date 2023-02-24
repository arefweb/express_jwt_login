import {api, firstPage } from "./http-config";

class CustomersService {
  getCustomers() {
    return api.get("/customers");
  }

  getCustomer() {
    return api.get("/customer/:id")
  }

  createCustomer() {
    return api.post("/customer")
  }

  test() {
    return api.get("/test");
  }

  firstPage() {
    return firstPage.get("/");
  }
}

export default new CustomersService();