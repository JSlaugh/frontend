import React from "react";

function Unsupervised() {
  const allDepthValuesPhotos = [
    // Array of photo filenames for "All Depth Values" column
    "DepthHeadDirection.png",
    "DepthSex.png",
    "DepthWrapping.png",
    "DepthFaceBundles.png",
    // Add more photo filenames as needed
  ];

  const depthOutliersRemovedPhotos = [
    // Array of photo filenames for "Depth Outliers Removed" column
    "DepthHeadDirectionOutliersDropped.png",
    "DepthSexOutliersDropped.png",
    "DepthWrappingOutliersDropped.png",
    "DepthFaceBundlesOutliersDropped.png",
    // Add more photo filenames as needed
  ];

  const clusteringPhotosFirstColumn = [
    // Array of photo filenames for "Clustering" columns
    "ClusterDepthHeadDirection.png",
    "ClusterDepthSex.png",
    "ElbowMethodOptimalClusters.png",
    // Add more photo filenames as needed
  ];

  const clusteringPhotosSecondColumn = [
    // Array of photo filenames for "Clustering" columns
    "ClusterDepthWrapping.png",
    "ClusterDepthFaceBundles.png",
    "3DScatterDepthWrappingHeadDirection.png",
    // Add more photo filenames as needed
  ];

  const csvFiles = [
    {
      filename: "Depth",
      url: "/csv/depth.csv",
    },
    {
      filename: "Depth and Head Direction",
      url: "/csv/depthANDheaddirection.csv",
    },
    {
      filename: "Depth and Sex",
      url: "/csv/depthANDsex.csv",
    },
    {
      filename: "Depth and Wrapping",
      url: "/csv/depthANDwrapping.csv",
    },
    {
      filename: "Depth and Face Bundles",
      url: "/csv/depthANDfacebundles.csv",
    },
    {
      filename: "Clustering",
      url: "/csv/clustering.csv",
    },
    // Add more objects for each CSV file
  ];

  const colabNotebook = [
    {
      filename: "Colab Notebook",
      url: "/colab/unsupervisedColab.ipynb",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Unsupervised Model - Comparing Burial Practices Over Time</h1>
      <hr /> {/* Horizontal line */}
      <div className="textbox">
        <h5>
          In the initial observations of the burial data, assumptions were
          largely based on the depth of the burial site, i.e., the deeper the
          burial (measured in meters), the older the mummified body, textiles,
          evidence, and other related factors. To support the argument that
          burial practices changed over time, we started by visualizing head
          direction, wrapping, sex, and face-bundles, and comparing them with
          burial depth. Upon initial analysis of the visualizations, it appears
          that there is an increase in all variables around the 0.5 to 1.5 meter
          range of burials, supporting the change in burial practices. However,
          further examination of the dataset reveals that the average burial
          depth is 1.19 meters, which explains the apparent spike in the
          presence of burial variables.
        </h5>
        <hr /> {/* Horizontal line */}
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", margin: "10px" }}>
          <h2>All Depth Values</h2>
          {allDepthValuesPhotos.map((photo, index) => (
            <img
              key={index}
              src={`/images/${photo}`} // Set the src of the img element to the photo filename with the /images folder path
              alt={``} // Set the alt text for accessibility
              className="photo"
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
        <div style={{ flex: "1", margin: "10px" }}>
          <h2>Depth Outliers Dropped</h2>
          {depthOutliersRemovedPhotos.map((photo, index) => (
            <img
              key={index}
              src={`/images/${photo}`} // Set the src of the img element to the photo filename with the /images folder path
              alt={``} // Set the alt text for accessibility
              className="photo"
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
      </div>
      <hr /> {/* Horizontal line */}
      <div className="textbox">
        <h5>
          After dropping the depth outliers, the visualizations continued to
          show evidence of changing burial practices over time. Because these
          processes are rudimentary data analytics, we continued with more
          advanced models and classifications to support or refute the argument.
          <br></br> <br></br>In addition to the initial analysis, a clustering
          method using K-means algorithm was applied to the burial data. The
          K-means algorithm grouped the data into clusters based on features
          such as depth, head direction, wrapping, face-bundles, and sex. The
          optimal number of clusters was determined using the elbow method, and
          the results were visualized using scatter plots to show how the
          selected features vary with burial depth and how the data can be
          grouped into clusters. This clustering analysis provides further
          insights into the changing burial practices over time, supporting or
          refuting the argument.
        </h5>
        <hr /> {/* Horizontal line */}
        <h2>Clustering Analysis</h2>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ flex: "1", margin: "10px" }}>
          {/* <h2>All Depth Values</h2> */}
          {clusteringPhotosFirstColumn.map((photo, index) => (
            <img
              key={index}
              src={`/images/${photo}`} // Set the src of the img element to the photo filename with the /images folder path
              alt={``} // Set the alt text for accessibility
              className="photo"
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
        <div style={{ flex: "1", margin: "10px" }}>
          {/* <h2>Depth Outliers Removed</h2> */}
          {clusteringPhotosSecondColumn.map((photo, index) => (
            <img
              key={index}
              src={`/images/${photo}`} // Set the src of the img element to the photo filename with the /images folder path
              alt={``} // Set the alt text for accessibility
              className="photo"
              style={{ width: "100%", height: "auto" }}
            />
          ))}
        </div>
      </div>
      <hr /> {/* Horizontal line */}
      <div className="textbox">
        <h2>CSV Files for Download</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {csvFiles.map((file, index) => (
            <li key={index} style={{ listStyleType: "none", padding: 0 }}>
              <a href={file.url} download={file.filename}>
                {file.filename}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="textbox">
        <h2>Colab Notebook</h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {colabNotebook.map((file, index) => (
            <li key={index} style={{ listStyleType: "none", padding: 0 }}>
              <a href={file.url} download={file.filename}>
                {file.filename}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Unsupervised;
