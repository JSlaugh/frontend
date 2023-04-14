// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
function Login(location: any) {
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);
    fetch('https://localhost:4000/api/Authorization/editUser', {
      method: 'PUT',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="row">
        <label className="col-3">Email</label>
        <input
          className="col-9"
          type="email"
          name="email"
          onChange={handleChange}
          value={formData?.email}
        />
        <label className="col-3 mt-2">Password</label>
        <input
          className="col-9 mt-2"
          type="password"
          value={formData?.password}
          name="password"
          min="14"
          onChange={handleChange}
        />

        <button className="mt-2" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
