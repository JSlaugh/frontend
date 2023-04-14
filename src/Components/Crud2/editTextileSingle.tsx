import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Burialmain } from '../../Models/burialmain';
import { Textile } from '../../Models/textile';

function EditTextileSingle(location: any) {
  const [data, setData] = useState<Textile>();

  useEffect(() => {
    // Google Analytics
    let temp = location.state.textileData;
    setData(temp);
    console.log(data);
  }, [data, location.state.textileData]);

  return <div></div>;
}

export default EditTextileSingle;
