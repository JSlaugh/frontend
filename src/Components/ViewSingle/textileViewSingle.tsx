import { useEffect, useState } from 'react';
import '../../Styles/User/styles.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Textile } from '../../Models/textile';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Store/userSlice';

function TextileView(location: any) {
  const [data, setData] = useState<Textile>();
  const CurrentUser = useSelector(selectUser);
  useEffect(() => {
    // Google Analytics
    let temp = location.state.textileData;
    delete temp.subRows;
    setData(temp);
    console.log(data);
  }, [data, location.state.textileData]);

  return (
    <div>
      <h2>Textile Single</h2>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <p className="card-subtitle font-weight-bold">Description</p>
            <p>{data?.description}</p>
          </div>
          <div className="col-3">
            <p className="card-subtitle font-weight-bold">Burial Number</p>
            <p>{data?.burialnumber}</p>
          </div>
          <div className="col-3">
            <p className="card-subtitle font-weight-bold">Estimated Period</p>
            <p>{data?.estimatedperiod}</p>
          </div>
          <div className="col-3">
            <p className="card-subtitle font-weight-bold">Direction</p>
            <p>{data?.direction}</p>
          </div>
          <div className="col-3">
            <p className="card-subtitle font-weight-bold">Sample Date</p>
            <p>{data?.sampledate ? data.sampledate.toString() : 'N/A'}</p>
          </div>
          <div className="col-3">
            <p className="card-subtitle font-weight-bold">Photographed Date</p>
            <p>
              {data?.photographeddate
                ? data.photographeddate.toString()
                : 'N/A'}
            </p>
          </div>
          <div className="col-3">
            <p className="card-subtitle font-weight-bold">Textile ID</p>
            <p>{data?.textileid}</p>
          </div>
          <div className="col-3">
            <p className="card-subtitle font-weight-bold">Locale</p>
            <p>{data?.locale}</p>
          </div>
        </div>

        {CurrentUser.length > 0 ? (
          <div>
            <Link
              className="mb-3 btn-primary btn w-100"
              to="/tools/editTextileSingle"
              state={{ textileData: data }}
            >
              Edit
            </Link>
            <Link
              className="mb-3 btn-secondary btn w-100"
              to="/tools/delete"
              state={{ textileData: data }}
            >
              Delete
            </Link>
          </div>
        ) : (
          <li></li>
        )}
      </div>
    </div>
  );
}

export default TextileView;
