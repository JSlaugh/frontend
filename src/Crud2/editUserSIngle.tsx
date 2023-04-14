// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { User } from '../Models/user';
import axios from 'axios';
function EditUserSingle(location: any) {
  const [data, setData] = useState<User>();

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
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Admin Email:
          <input
            type="hidden"
            name="adminEmail"
            onChange={handleChange}
            value={data?.email}
          />
        </label>
        <label>
          User ID:
          <input
            type="hidden"
            value={formData?.userId}
            name="userId"
            onChange={handleChange}
          />
        </label>
        <label>
          User Email:
          <input
            type="email"
            value={formData.userEmail}
            name="userEmail"
            onChange={handleChange}
          />
        </label>
        <label>
          User First Name:
          <input
            type="text"
            value={formData.userFirstName}
            name="userFirstName"
            onChange={handleChange}
          />
        </label>
        <label>
          User Role ID:
          <input
            type="number"
            value={formData.userRoleId}
            name="userRoleId"
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default EditUserSingle;
