export const core = "https://haatbazaar.herokuapp.com";

export const baseUrl = `${core}/api/v1`;


// login api
export const loginApi = `${baseUrl}/user/auth/signin`;
// register api
export const registerApi = `${baseUrl}/user/auth/signup`;
// cart
export const fetchCartApi = `${baseUrl}/user/cart`;

export const fetchCategoryApi = `${baseUrl}/public/category/main/list`;
export const fetchFlashProductApi = `${baseUrl}/public/product/flash-deal/list`;
export const fetchLatestProductApi = `${baseUrl}/public/product/latest/list`;
export const fetchMostViewedApi = `${baseUrl}/public/product/most-viewed/list`;


