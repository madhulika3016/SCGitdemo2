import React from 'react';

function CustomerList({ customers, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th><th>First Name</th><th>Last Name</th><th>Email</th><th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {customers.map(c => (
          <tr key={c.id}>
            <td>{c.id}</td>
            <td>{c.firstName}</td>
            <td>{c.lastName}</td>
            <td>{c.email}</td>
            <td>
              <button onClick={() => onEdit(c)}>Edit</button>
              <button onClick={() => onDelete(c.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CustomerList;
