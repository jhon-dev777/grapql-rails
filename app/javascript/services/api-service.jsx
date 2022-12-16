import axios from "axios";
const headers = {
  Accept: "*/*",
  "Content-type": "application/json",
  "X-CSRF-Token":
    "4M0A02iK0PouXdWyfaNz0oBgWrv6_u1QcaTAoS5C2TbWEtWOiS42NaF6RlIIbGzuJ9TUUZ6mJ7A26Ac1okyuAA",
};

const url = "http://localhost:3000/graphql";
export const getAllUsers = () => {
  const data = {
    query: "query{ users { id fullName } }",
    value: null,
  };
  const buildQueryData = buildQuery(data, url);
  return axios(buildQueryData);
};
export const getInvoice = (invoiceId) => {
  const data = {
    query: `query{ invoice(id:${invoiceId}) { sale {id products totalAmount} user {fullName email ci} } }`,
    value: null,
  };
  const buildQueryData = buildQuery(data, url);
  return axios(buildQueryData);
};

export const createUser = (payload) => {
  console.log(payload);
  const data = {
    query: `mutation{ createUser(input:{firstName:"${payload.firstName}", lastName: "${payload.lastName}", email: "${payload.email}", ci: ${payload.ci}, phone: ${payload.phone}}){user {id firstName} errors}}`,
    value: null,
  };
  const buildQueryData = buildQuery(data, url);
  return axios(buildQueryData);
};

const buildQuery = (query, url) => {
  return {
    url,
    method: "POST",
    headers,
    data: JSON.stringify(query),
  };
};
