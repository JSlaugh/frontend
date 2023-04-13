import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Burialmain } from '../Models/burialmain';

function EditBurialSingle(location: any) {
  const [data, setData] = useState<Burialmain>();

  useEffect(() => {
    // Google Analytics
    let temp = location.state.burialData;
    delete temp.subRows;
    setData(temp);
    console.log(data);
  }, [data, location.state.burialData]);

  return <div></div>;
}

export default EditBurialSingle;
