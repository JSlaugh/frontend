import React, { useState } from "react";

interface FormData {
  squarenorthsouth: number;
  depth: number;
  southtohead: number;
  squareeastwest: number;
  westtohead: number;
  westtofeet: number;
  southtofeet: number;
  eastwest_W: number;
}

function Supervised() {
  const [formData, setFormData] = useState<FormData>({
    squarenorthsouth: 0,
    depth: 0,
    southtohead: 0,
    squareeastwest: 0,
    westtohead: 0,
    westtofeet: 0,
    southtofeet: 0,
    eastwest_W: 0,
  });
  const [result, setResult] = useState<any>(null); // Initialize result state to null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const prediction = await response.json();
    setResult(prediction); // Update the result state with the prediction
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: parseFloat(e.target.value),
    });
  };

  const resultStyle = {
    height: result && result.prediction ? "auto" : "0",
    overflow: "hidden",
    transition: "height 0.3s ease-in-out",
  };
  return (
    <div className="">
      <h1>Supervised Model - Predicting Burial Head Direction</h1>
      <hr /> {/* Horizontal line */}
      <div className="textbox">
        <h5>
          The predictive model provides insight into the variables that
          influence the direction of the head of the corpse. This model can be
          refined over time as more data is collected about the burials.
          Currently, the main variable that appears to affect head direction is
          the location data of the burial. With more data on these burials, we
          may discover new patterns and insights.
          <br></br>
          <br></br>
          The location of the bodies provides insight into head direction
          practices. Out of the 642 burials with head direction data, 565 of
          them faced West. This suggests that there was a time when facing East
          held some significance. Based on the model's accuracy with location
          data, it appears that we may be able to identify those facing East in
          a similar area. The model predicts the correct outcome with 95%
          accuracy.
        </h5>
        <p>W = West</p>
        <p>E = East</p>
        <hr /> {/* Horizontal line */}
        {result && <h2>Prediction: {result.prediction}</h2>}
        <hr /> {/* Horizontal line */}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="depth">Depth</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="depth"
              name="depth"
              placeholder="Enter depth value"
              value={formData.depth}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="squarenorthsouth">Square North-South</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="squarenorthsouth"
              name="squarenorthsouth"
              placeholder="Enter square north-south value"
              value={formData.squarenorthsouth}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="squareeastwest">Square East-West</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="squareeastwest"
              name="squareeastwest"
              placeholder="Enter square east-west value"
              value={formData.squareeastwest}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="southtohead">South to Head</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="southtohead"
              name="southtohead"
              placeholder="Enter south to head value"
              value={formData.southtohead}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="westtohead">West to Head</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="westtohead"
              name="westtohead"
              placeholder="Enter west to head value"
              value={formData.westtohead}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="southtofeet">South to Feet</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="southtofeet"
              name="southtofeet"
              placeholder="Enter south to feet value"
              value={formData.southtofeet}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="westtofeet">West to Feet</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="westtofeet"
              name="westtofeet"
              placeholder="Enter west to feet value"
              value={formData.westtofeet}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="eastwest_W">East-West W</label>
            <input
              type="number"
              step="any"
              className="form-control"
              id="eastwest_W"
              name="eastwest_W"
              placeholder="Enter east-west W value"
              value={formData.eastwest_W}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

    </div>
  );
}

export default Supervised;
