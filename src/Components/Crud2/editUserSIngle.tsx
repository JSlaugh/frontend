// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { User } from '../../Models/user';
import axios from 'axios';
function EditUserSingle(location: any) {
  const [data, setData] = useState<User>();
  const CurrentUser = useSelector(selectUser);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);
    axios
      .put(
        process.env.REACT_APP_BACK_END_URL + '/api/Authorization/editUser',
        formData,
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was a problem with the axios operation:', error);
      });
    window.location.href = '/tools';
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
        {CurrentUser.Length > 0 ? (
          CurrentUser[0] > 0 ? (
            <div>
              <button className="mt-3 btn btn-primary" type="submit">
                Submit
              </button>
            </div>
          ) : (
            <li></li>
          )
        ) : (
          <li></li>
        )}
      </form>
    </div>
  );
}

export default EditUserSingle;
