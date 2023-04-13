import { useEffect, useState } from 'react';
import '../../Styles/User/styles.css';
import { useLocation, useParams } from 'react-router-dom';
import { Burialmain } from '../../Models/burialmain';

function BurialView() {
  let { state } = useLocation();
  const [data, setData] = useState<Burialmain>();

  useEffect(() => {
    // Google Analytics
    setData(state);
    console.log(data);
  }, [state]);

  return (
    <div>
      <h2> Burial Single </h2>
    </div>
  );
}

export default BurialView;
