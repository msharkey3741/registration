import axios from "axios";
import * as helper from "./serviceHelper";

const getAllCustomers = () => {
  const config = {
    method: "GET",
    url: `/api/customers/`
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};
const getCustomerById = id => {
  const config = {
    data: id,
    method: "GET"
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};
const addCustomer = values => {
  const config = {
    data: values,
    method: "POST",
    url:`api/customers`
  };
  return axios(config)
    .then(helper.onGlobalSuccess)
    .catch(helper.onGlobalError);
};
export { getAllCustomers, getCustomerById, addCustomer };
