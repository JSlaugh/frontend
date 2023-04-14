import React from 'react';

function BurialForm() {
  return (
    <div>
      <h1>Burial Form</h1>
      <br></br>
      <br></br>
      <form method="post">
        <div className="container">
          <div className="row">
            <h2>Location</h2>
            <div>
              <input type="hidden" name="id" value="0"></input>
            </div>
            <div className="form-group col">
              <label>Square North South</label>
              <input
                type="string"
                className="form-control"
                name="squarenorthsouth"
                placeholder="Square North South"
              />
            </div>
            <div className="form-group col">
              <label>Square East West</label>
              <input
                type="string"
                className="form-control"
                name="squareeastwest"
                placeholder="square East West"
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
              />
            </div>
            <div className="form-group col">
              <label>East West</label>
              <input
                type="string"
                className="form-control"
                name="eastwest"
                placeholder="East West"
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
              />
            </div>
            <div className="form-group col">
              <label>West To Head</label>
              <input
                type="string"
                className="form-control"
                name="westtohead"
                placeholder="westtohead"
              />
            </div>
            <div className="form-group col">
              <label>West To Feet</label>
              <input
                type="string"
                className="form-control"
                name="westtofeet"
                placeholder="westtofeet"
              />
            </div>
            <div className="form-group col">
              <label>South To Feet</label>
              <input
                type="string"
                className="form-control"
                name="southtofeet"
                placeholder="southtofeet"
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
              />
            </div>
            <div className="form-group col">
              <label>Head Direction</label>
              <input
                type="string"
                className="form-control"
                name="headdirection"
                placeholder="Head Direction"
              />
            </div>
            <div className="form-group col">
              <label>Shaft Number</label>
              <input
                type="string"
                className="form-control"
                name="shaftnumber"
                placeholder="Shaft Number"
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
              />
            </div>
            <div className="form-group col">
              <label>Depth</label>
              <input
                type="string"
                className="form-control"
                name="depth"
                placeholder="Depth"
              />
            </div>
            <div className="form-group col">
              <label>Area</label>
              <input
                type="string"
                className="form-control"
                name="area"
                placeholder="area"
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
              />
            </div>

            <div className="form-group col">
              <label>Age At Death</label>
              <input
                type="string"
                className="form-control"
                name="ageatdeath"
                placeholder="Age At Death"
              />
            </div>

            <div className="form-group col">
              <label>Adult Subadult</label>
              <input
                type="string"
                className="form-control"
                name="adultsubadult"
                placeholder="Adult Subadult"
              />
            </div>
            <div className="form-group col">
              <label>Hair</label>
              <input
                type="string"
                className="form-control"
                name="hair"
                placeholder="Hair"
              />
            </div>
            <div className="form-group col">
              <label>Hair Color</label>
              <input
                type="string"
                className="form-control"
                name="haircolor"
                placeholder="Hair Color"
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
              />
            </div>

            <div className="form-group col">
              <label>preservation</label>
              <input
                type="string"
                className="form-control"
                name="preservation"
                placeholder="Preservation"
              />
            </div>

            <div className="form-group col">
              <label>Goods</label>
              <input
                type="string"
                className="form-control"
                name="goods"
                placeholder="Goods"
              />
            </div>

            <div className="form-group col">
              <label>Wrapping</label>
              <input
                type="string"
                className="form-control"
                name="wrapping"
                placeholder="Wrapping"
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
              />
            </div>
            <div className="form-group col">
              <label>Length</label>
              <input
                type="string"
                className="form-control"
                name="length"
                placeholder="length"
              />
            </div>
            <div className="form-group col">
              <label>Burial Materials</label>
              <input
                type="string"
                className="form-control"
                name="burialmaterials"
                placeholder="Burial Materials"
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
              />
            </div>

            <div className="form-group col">
              <label>Field Book Page</label>
              <input
                type="string"
                className="form-control"
                name="fieldbookpage"
                placeholder="Field Book Page"
              />
            </div>

            <div className="form-group col">
              <label>Excavation Recorder</label>
              <input
                type="string"
                className="form-control"
                name="excavationrecorder"
                placeholder="Excavation Recorder"
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
              />
            </div>
            <div className="form-group col">
              <label>Field Book Excavation Year</label>
              <input
                type="string"
                className="form-control"
                name="fieldbookexcavationyear"
                placeholder="Field Book Excavation Year"
              />
            </div>
            <div className="w-100"></div>
            <div className="form-group col">
              <label>Text</label>
              <textarea
                className="form-control"
                name="text"
                placeholder="Text"
              />
            </div>
            <div>
              <input type="hidden" name="burialid" value=""></input>
            </div>
            <div>
              <input type="hidden" name="photos" value=""></input>
            </div>
            <div>
              <input type="hidden" name="mainTextiles" value=""></input>
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

export default BurialForm;
