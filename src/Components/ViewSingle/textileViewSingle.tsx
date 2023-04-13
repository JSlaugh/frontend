import { useEffect, useState } from 'react';
import '../../Styles/User/styles.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Textile } from '../../Models/textile';

function TextileView(location: any) {
  const [data, setData] = useState<Textile>();

  useEffect(() => {
    // Google Analytics
    let temp = location.state.textileData;
    delete temp.subRows;
    setData(temp);
    console.log(data);
  }, [data, location.state.textileData]);

  return (
    <div>
      <h2>Textile SIngle</h2>
      <div className="container">
        <div className="row"></div>
        <Link
          className="mb-3 btn-primary btn w-100"
          to="/tools/editTextileSingle"
          state={{ textileData: data }}
        >
          Edit
        </Link>
      </div>
    </div>
  );
}

export default TextileView;
