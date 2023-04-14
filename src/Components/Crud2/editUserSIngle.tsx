// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { User } from '../../Models/user';
import axios from 'axios';
function EditUserSingle(location: any) {
  const [data, setData] = useState<User>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);
    axios
      .put('https://localhost:4000/api/Authorization/editUser', formData)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was a problem with the axios operation:', error);
      });
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    let temp = location.state.userData;
    setData(temp);
    console.log(data);
    setFormData({
      adminEmail: 'presentation@test.com',
      userId: data?.id,
      userEmail: data?.email,
      userFirstName: data?.firstName,
      userRoleId: data?.roleId,
    });
  }, [data, location.state.userData]);

  const [formData, setFormData] = useState({
    adminEmail: 'presentation@test.com',
    userId: '',
    userEmail: '',
    userFirstName: '',
    userRoleId: '',
  });
  return (
    <div className="container">
      <form className="row" onSubmit={handleSubmit}>
        <input
          type="hidden"
          name="adminEmail"
          onChange={handleChange}
          value={data?.email}
        />

        <input
          type="hidden"
          value={formData?.userId}
          name="userId"
          onChange={handleChange}
        />

        <label>User Email:</label>
        <input
          type="email"
          value={formData.userEmail}
          name="userEmail"
          onChange={handleChange}
        />

        <label>User First Name:</label>
        <input
          type="text"
          value={formData.userFirstName}
          name="userFirstName"
          onChange={handleChange}
        />

        <label>User Role ID:</label>
        <input
          type="number"
          value={formData.userRoleId}
          name="userRoleId"
          onChange={handleChange}
        />

        <button className="mt-3 btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default EditUserSingle;
