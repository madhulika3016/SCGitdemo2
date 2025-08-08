import React, { useState, useEffect } from 'react';
import {
  getCustomers,
  addCustomer,
  updateCustomer,
  deleteCustomer
} from './api/customerApi';

import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';

function App() {
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({ id: '', firstName: '', lastName: '', email: '' });
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    const res = await getCustomers();
    setCustomers(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editing) {
      await updateCustomer(form.id, form);
    } else {
      await addCustomer(form);
    }

    setForm({ id: '', firstName: '', lastName: '', email: '' });
    setEditing(false);
    loadCustomers();
  };

  const handleEdit = (customer) => {
    setForm(customer);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    await deleteCustomer(id);
    loadCustomers();
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{editing ? 'Edit' : 'Add'} Customer</h2>
      <CustomerForm
        form={form}
        editing={editing}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <h2>Customer List</h2>
      <CustomerList
        customers={customers}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;


