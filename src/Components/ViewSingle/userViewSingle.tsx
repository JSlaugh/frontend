import { useEffect, useState } from 'react';
import '../../Styles/User/styles.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { User } from '../../Models/user';

function UserView(location: any) {
  const [data, setData] = useState<User>();

  useEffect(() => {
    // Google Analytics
    let temp = location.state.textileData;
    setData(temp);
    console.log(data);
  }, [data, location.state.textileData]);

  return (
    <div>
      <h2>User Single</h2>
      <div className="container">
        <div className="row"></div>
        <Link
          className="mb-3 btn-primary btn w-100"
          to="/tools/editUserSingle"
          state={{ userData: data }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default UserView;
