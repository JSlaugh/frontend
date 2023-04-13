import { useEffect, useState } from 'react';
import '../../Styles/User/styles.css';
import { Outlet } from 'react-router-dom';
import { Burialmain } from '../../Models/burialmain';

function BurialView() {
  const [data, setData] = useState<Burialmain[]>([]);
  // Pull from database
  useEffect(() => {
    const fetchBurial = async () => {
      const rsp = await fetch(
        'https://localhost:4000/api/Fagelgamous/getEverything',
      );
      let temp = await rsp.json();
      setData(temp.first());
    };
    // Call the request
    fetchBurial();
  }, []);

  return (
    <div>
      <h2> Burial Single </h2>
      {data.map((x) => (
        <div className="container" key={x.burialid}>
          <div className="row">
            test
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
            <div className="col-sm">One of three columns</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BurialView;
