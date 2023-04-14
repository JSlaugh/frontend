import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { User } from '../Models/user';

function EditUserSingle(location: any) {
  const [data, setData] = useState<User>();

  useEffect(() => {
    // Google Analytics
    let temp = location.state.userData;
    setData(temp);
    console.log(data);
  }, [data, location.state.userData]);

  return (
    <div>
      <h2>Edit User</h2>
    </div>
  );
}

export default EditUserSingle;
