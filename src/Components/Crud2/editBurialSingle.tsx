// @ts-nocheck
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Burialmain } from '../../Models/burialmain';
import axios from 'axios';
function EditTextileSingle(location: any) {
  const [data, setData] = useState<Burialmain>();

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(formData);
    axios
      .put(
        process.env.REACT_APP_BACK_END_URL + '/api/Fagelgamous/updateBurialMain',
        formData,
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was a problem with the axios operation:', error);
      });
  };

  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    let temp = location.state.burialData;
    setData(temp);
    console.log(data);
    setFormData({
      id: data?.id,
      squarenorthsouth: data?.squarenorthsouth,
      burialnumber: data?.burialnumber,
      squareeastwest: data?.squareeastwest,
      northsouth: data?.northsouth,
      eastwest: data?.eastwest,
      southtohead: data?.southtohead,
      westtohead: data?.westtohead,
      westtofeet: data?.westtofeet,
      southtofeet: data?.southtofeet,
      burialnumber: data?.burialnumber,
      headdirection: data?.headdirection,
      shaftnumber: data?.shaftnumber,
      clusternumber: data?.clusternumber,
      depth: data?.depth,
      area: data?.area,
      sex: data?.sex,
      ageatdeath: data?.ageatdeath,
      adultsubadult: data?.adultsubadult,
      hair: data?.hair,
      haircolor: data?.haircolor,
      facebundles: data?.facebundles,
      preservation: data?.preservation,
      wrapping: data?.wrapping,
      samplescollected: data?.samplescollected,
      length: data?.length,
      burialmaterials: data?.burialmaterials,
      dataexpertinitials: data?.dataexpertinitials,
      fieldbookpage: data?.fieldbookpage,
      excavationrecorder: data?.excavationrecorder,
      dateofexcavation: data?.dateofexcavation,
      fieldbookexcavationyear: data?.fieldbookexcavationyear,
      burialid: data?.burialid,
      photos: data?.photos,
      mainTextiles: data?.mainTextiles,

      
    });
  }, [data, location.state.burialData]);

  const [formData, setFormData] = useState({
    id: '',
    squarenorthsouth: '',
    burialnumber: '',
    squareeastwest: '',
    northsouth: '',
    eastwest: '',
    southtohead: '',
    westtohead: '',
    westtofeet: '',
    southtofeet: '',
    burialnumber: '',
    headdirection: '',
    shaftnumber: '',
    clusternumber: '',
    depth: '',
    sex: '',
    ageatdeath: '',
    adultsubadult: '',
    hair: '',
    facebundles: '',
    preservation: '',
    wrapping: '',
    samplescollected: '',
    length: '',
    burialmaterials: '',
    dataexpertinitials: '',
    fieldbookexcavationyear: '',
    burialid: '',
    photos: '',
    mainTextiles: '',
  });
  return (
    <div className="container">
        <h1>Burial Form</h1>
      <br></br>
      <br></br>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row">
            <h2>Location</h2>
            <div>
              <input type="hidden" name="id" value={data?.id} onChange={handleChange} ></input>
            </div>
            <div className="form-group col">
              <label>Square North South</label>
              <input
                type="string"
                className="form-control"
                name="squarenorthsouth"
                placeholder="Square North South"
                value={formData.squarenorthsouth} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Square East West</label>
              <input
                type="string"
                className="form-control"
                name="squareeastwest"
                placeholder="square East West"
                value={formData.squareeastwest} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>North south</label>
              <input
                type="string"
                className="form-control"
                name="northsouth"
                placeholder="North South"
                value={formData.northsouth} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>East West</label>
              <input
                type="string"
                className="form-control"
                name="eastwest"
                placeholder="East West"
                value={formData.eastwest} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>South To Head</label>
              <input
                type="string"
                className="form-control"
                name="southtohead"
                placeholder="South To Head"
                value={formData.southtohead} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>West To Head</label>
              <input
                type="string"
                className="form-control"
                name="westtohead"
                placeholder="westtohead"
                value={formData.westtohead} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>West To Feet</label>
              <input
                type="string"
                className="form-control"
                name="westtofeet"
                placeholder="westtofeet"
                value={formData.westtofeet} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>South To Feet</label>
              <input
                type="string"
                className="form-control"
                name="southtofeet"
                placeholder="southtofeet"
                value={formData.southtofeet} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>Burial Number</label>
              <input
                type="string"
                className="form-control"
                name="burialnumber"
                placeholder="burialnumber"
                value={formData.burialnumber} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Head Direction</label>
              <input
                type="string"
                className="form-control"
                name="headdirection"
                placeholder="Head Direction"
                value={formData.headdirection} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Shaft Number</label>
              <input
                type="string"
                className="form-control"
                name="shaftnumber"
                placeholder="Shaft Number"
                value={formData.shaftnumber} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>Clusternumber</label>
              <input
                type="string"
                className="form-control"
                name="clusternumber"
                placeholder="clusternumber"
                value={formData.clusternumber} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Depth</label>
              <input
                type="string"
                className="form-control"
                name="depth"
                placeholder="Depth"
                value={formData.depth} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Area</label>
              <input
                type="string"
                className="form-control"
                name="area"
                placeholder="area"
                value={formData.area} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <br></br>
            <br></br>

            <h2>Body Details</h2>
            <div className="form-group col">
              <label>Sex</label>
              <input
                type="string"
                className="form-control"
                name="sex"
                placeholder="Sex"
                value={formData.sex} 
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label>Age At Death</label>
              <input
                type="string"
                className="form-control"
                name="ageatdeath"
                placeholder="Age At Death"
                value={formData.ageatdeath} 
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label>Adult Subadult</label>
              <input
                type="string"
                className="form-control"
                name="adultsubadult"
                placeholder="Adult Subadult"
                value={formData.adultsubadult} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Hair</label>
              <input
                type="string"
                className="form-control"
                name="hair"
                placeholder="Hair"
                value={formData.hair} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Hair Color</label>
              <input
                type="string"
                className="form-control"
                name="haircolor"
                placeholder="Hair Color"
                value={formData.haircolor} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>Facebundles</label>
              <input
                type="string"
                className="form-control"
                name="facebundles"
                placeholder="Facebundles"
                value={formData.facebundles} 
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label>preservation</label>
              <input
                type="string"
                className="form-control"
                name="preservation"
                placeholder="Preservation"
                value={formData.preservation} 
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label>Goods</label>
              <input
                type="string"
                className="form-control"
                name="goods"
                placeholder="Goods"
                value={formData.goods} 
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label>Wrapping</label>
              <input
                type="string"
                className="form-control"
                name="wrapping"
                placeholder="Wrapping"
                value={formData.wrapping} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>Samples Collected</label>
              <input
                type="string"
                className="form-control"
                name="samplescollected"
                placeholder="Samples Collected"
                value={formData.samplescollected} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Length</label>
              <input
                type="string"
                className="form-control"
                name="length"
                placeholder="length"
                value={formData.length} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Burial Materials</label>
              <input
                type="string"
                className="form-control"
                name="burialmaterials"
                placeholder="Burial Materials"
                value={formData.burialmaterials} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <br></br>
            <br></br>

            <h2>Information</h2>
            <div className="form-group col">
              <label>Data Expert Initials</label>
              <input
                type="string"
                className="form-control"
                name="dataexpertinitials"
                placeholder="Data Expert Initials"
                value={formData.dataexpertinitials} 
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label>Field Book Page</label>
              <input
                type="string"
                className="form-control"
                name="fieldbookpage"
                placeholder="Field Book Page"
                value={formData.fieldbookpage} 
                onChange={handleChange}
              />
            </div>

            <div className="form-group col">
              <label>Excavation Recorder</label>
              <input
                type="string"
                className="form-control"
                name="excavationrecorder"
                placeholder="Excavation Recorder"
                value={formData.excavationrecorder} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>Date of Excavation</label>
              <input
                type="string"
                className="form-control"
                name="dateofexcavation"
                placeholder="Date of Excavation"
                value={formData.dateofexcavation} 
                onChange={handleChange}
              />
            </div>
            <div className="form-group col">
              <label>Field Book Excavation Year</label>
              <input
                type="string"
                className="form-control"
                name="fieldbookexcavationyear"
                placeholder="Field Book Excavation Year"
                value={formData.fieldbookexcavationyear} 
                onChange={handleChange}
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>Text</label>
              <textarea
                className="form-control"
                name="text"
                placeholder="Text"
                value={formData.text} 
                onChange={handleChange}
              />
            </div>
            <div>
              <input type="hidden" name="burialid" value={data?.burialid} onChange={handleChange}></input>
            </div>
            <div>
              <input type="hidden" name="photos" value={data?.photos} onChange={handleChange}></input>
            </div>
            <div>
              <input type="hidden" name="mainTextiles" value={data?.mainTextiles} onChange={handleChange}></input>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <br></br>
        <br></br>
      </form>
    </div>
  );
}

export default EditTextileSingle;
