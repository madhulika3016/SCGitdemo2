import axios from 'axios';

const API_URL = '/customers';

export const getCustomers = () => axios.get(API_URL);
export const addCustomer = (data) => axios.post(API_URL, data);
export const updateCustomer = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/${id}`);
