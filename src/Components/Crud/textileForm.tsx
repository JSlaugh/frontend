import axios from 'axios';
import React, { useState } from 'react';

function TextileForm() {
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
  };
  const handleChange = (event: any) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

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
    <div>
      <h1>Add Textile</h1>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <div className="row ">
            <div>
              <input
                type="hidden"
                name="id"
                value="0"
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
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="hidden"
                name="photographeddate"
                value=""
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <input
                type="hidden"
                name="textileid"
                value=""
                onChange={handleChange}
              ></input>
            </div>
            {/* <div className="form-group col card p-3 bg-light">
                            <label>Analyses</label>
                            <input type="string" className="form-control" name="mainAnalyses" placeholder="Analyses"/>
                        </div>    

                        <div className="form-group col card p-3 bg-light">
                            <label>Colors</label>
                            <input type="string" className="form-control" name="mainColors" placeholder="Colors"/>
                        </div>  
                        <div className="w-100"></div>          
                        <div className="form-group col card p-3 bg-light">
                            <label>preservation</label>
                            <input type="string" className="form-control" name="preservation" placeholder="preservation"/>
                        </div>            
                        <div className="form-group col card p-3 bg-light">
                            <label>Decorations</label>
                            <input type="string" className="form-control" name="mainDecorations" placeholder="Decorations"/>
                        </div>    
                        <div className="w-100"></div>        
                        <div className="form-group col card p-3 bg-light">
                            <label>Dimensions</label>
                            <input type="string" className="form-control" name="mainDimensions" placeholder="Dimensions"/>
                        </div>            
                        <div className="form-group col card p-3 bg-light">
                            <label>Structure</label>
                            <input type="string" className="form-control" name="mainStructures" placeholder="Structure"/>
                        </div>            
                        <div className="w-100"></div>
                        <div className="form-group col card p-3 bg-light">
                            <label>Textilefunctions</label>
                            <input type="string" className="form-control" name="mainTextilefunctions" placeholder="Textilefunctions"/>
                        </div>        
    
                        <div className="form-group col card p-3 bg-light">
                            <label>Yarnmanipulations</label>
                            <input type="string" className="form-control" name="mainYarnmanipulations" placeholder="Yarnmanipulations"/>
                        </div> */}
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default TextileForm;
