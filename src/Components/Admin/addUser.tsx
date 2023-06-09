// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
function AddUser(location: any) {
  const [data, setData] = useState<User>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);
    axios
      .post(
        process.env.REACT_APP_BACK_END_URL + '/api/Authorization/createUser',
        formData,
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was a problem with the axios operation:', error);
      });
      window.location.href = "/tools"
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

//   useEffect(() => {
//     let temp = location.state.userData;
//     setData(temp);
//     console.log(data);
//     setFormData({
//       adminEmail: 'presentation@test.com',
//       userId: data?.id,
//       userEmail: data?.email,
//       userFirstName: data?.firstName,
//       userRoleId: data?.roleId,
//     });
//   }, [data, location.state.userData]);

  const [formData, setFormData] = useState({

    id: 0,
    email: '',
    firstName: '',
    tempPassword:'',
    roleId: null,
  });
  return (
    <div className="container">
      <form className="row" onSubmit={handleSubmit}>
        

        <input
          type="hidden"
          value={formData?.id}
          name="userId"
          onChange={handleChange}
        />

        <label>User Email:</label>
        <input
          type="email"
          value={formData.email}
          name="email"
          onChange={handleChange}
        />

        <label>User First Name:</label>
        <input
          type="text"
          value={formData.userFirstName}
          name="firstName"
          onChange={handleChange}
        />
        <label>User Temp Password:</label>
        <input
          type="password"
          value={formData.password}
          name="tempPassword"
          onChange={handleChange}
        />

        <select class="form-select" name='roleId' onChange={handleChange} >
          <option></option>
          <option value='1'>Administrator</option>
          <option value='2'>Researcher</option>
        </select>


        <button className="mt-3 btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddUser;
