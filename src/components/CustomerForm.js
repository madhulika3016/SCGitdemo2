import React from 'react';

function CustomerForm({ form, editing, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} style={{ marginBottom: '20px' }}>
      <input
        name="id"
        placeholder="id"
        value={form.id}
        onChange={onChange}
        required
      />
      
      
      <input
        name="firstName"
        placeholder="First Name"
        value={form.firstName}
        onChange={onChange}
        required
      />
      <input
        name="lastName"
        placeholder="Last Name"
        value={form.lastName}
        onChange={onChange}
        required
      />
      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={onChange}
        required
      />
      <button type="submit">{editing ? 'Update' : 'Add'} Customer</button>
    </form>
  );
}

export default CustomerForm;
