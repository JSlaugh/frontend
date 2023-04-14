// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';

import { useSelector, useDispatch } from 'react-redux';
import { selectUser, setUser } from '../../Store/userSlice';
function Login(location: any) {
  const backendUrl = process.env.REACT_APP_BACK_END_URL;
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    // dispatch(setUser('Bob', 'bob', 'bob'));
    console.log(formData);
    let userInfo = [];

    let resp = await axios
      .post(backendUrl + '/api/Authorization/verifyUser', formData)
      .then((response) => {
        if (!response.data) {
          throw new Error('Network response was not ok');
        }
        return response.data;
      })
      .then((response) => {
        return response;
      })
      .catch((error) => {
        console.error('There was a problem with the Axios request:', error);
      });
    console.log(resp);
    dispatch(setUser([resp.role.roleName, resp.firstName, resp.email]));
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
          minLength="14"
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
