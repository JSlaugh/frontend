// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Textile } from '../../Models/textile';
import axios from 'axios';
function EditTextileSingle(location: any) {
  const [data, setData] = useState<Textile>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);
    axios
      .put(
        process.env.REACT_APP_BACK_END_URL + '/api/Fagelgamous/updateTextile',
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

  useEffect(() => {
    let temp = location.state.textileData;
    setData(temp);
    console.log(data);
    setFormData({
      id: data?.id,
      description: data?.description,
      burialnumber: data?.burialnumber,
      estimatedperiod: data?.estimatedperiod,
      sampledate: data?.sampledate,
      direction: data?.direction,
      photographeddate: data?.photographeddate,
      textileid: data?.textileid,
    });
  }, [data, location.state.textileData]);

  const [formData, setFormData] = useState({
    id: '',
    description: '',
    burialnumber: '',
    estimatedperiod: '',
    sampledate: '',
    direction: '',
    photographeddate: '',
    textileid: '',
  });
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row ">
            <div>
              <input
                type="hidden"
                name="id"
                value={formData.id}
                onChange={handleChange}
              ></input>
            </div>
            <div className="form-group col card p-3 bg-light">
              <label>Locale</label>
              <input
                type="string"
                className="form-control"
                name="locale"
                placeholder="Locale"
                value={formData.Locale}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col card p-3 bg-light">
              <label>Description</label>
              <input
                type="string"
                className="form-control"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col card p-3 bg-light">
              <label>Burial Number</label>
              <input
                type="string"
                className="form-control"
                name="burialnumber"
                placeholder="Burial Number"
                value={formData.burialnumber}
                onChange={handleChange}
              />
            </div>
            <div className="form-group col card p-3 bg-light">
              <label>Estimated Period</label>
              <input
                type="string"
                className="form-control"
                name="estimatedperiod"
                placeholder="estimatedperiod"
                value={formData.estimatedperiod}
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col card p-3 bg-light">
              <label>Sample Date</label>
              <input
                type="string"
                className="form-control"
                name="sampledate"
                placeholder="Sample Date"
                value={formData.sampledate}
                onChange={handleChange}
              />
            </div>

            <div className="form-group col card p-3 bg-light">
              <label>Direction</label>
              <input
                type="string"
                className="form-control"
                name="direction"
                placeholder="Direction"
                value={formData.direction}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="hidden"
                name="photographeddate"
                value={formData.photographeddate}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <input
                type="hidden"
                name="textileid"
                value={formData.textileid}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditTextileSingle;
