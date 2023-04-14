import { useEffect, useState } from 'react';
import '../../Styles/User/styles.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Burialmain } from '../../Models/burialmain';

function BurialView(location: any) {
  const [data, setData] = useState<Burialmain>();

  useEffect(() => {
    // Google Analytics
    let temp = location.state.burialData;
    delete temp.subRows;
    setData(temp);
    console.log(data);
  }, [data, location.state.burialData]);

  return (
    <div>
      <h2> Burial Single </h2>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h3>Identification</h3>
            <div className="row">
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">ID</p>
                <p>{data?.id}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Burial Id</p>
                <p>{data?.burialid}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Burial Number</p>
                <p>{data?.burialnumber}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h3>Direction</h3>
            <div className="row">
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Square North South
                </p>
                <p>{data?.squarenorthsouth}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">North South</p>
                <p>{data?.northsouth}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">East West</p>
                <p>{data?.eastwest}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Square East West
                </p>
                <p>{data?.squareeastwest}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Cluster Number</p>
                <p>{data?.clusternumber}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Shaft Number</p>
                <p>{data?.shaftnumber}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h3>Description</h3>
            <div className="row">
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Head Direction</p>
                <p>{data?.headdirection}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Adult Subadult</p>
                <p>{data?.adultsubadult}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Burial Materials
                </p>
                <p>{data?.burialmaterials}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Sex</p>
                <p>{data?.sex}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Depth</p>
                <p>{data?.depth}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">South To Head</p>
                <p>{data?.southtohead}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Preservation</p>
                <p>{data?.preservation}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Wrapping</p>
                <p>{data?.wrapping}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Hair Color</p>
                <p>{data?.haircolor}</p>
              </div>{' '}
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">West To Head</p>
                <p>{data?.westtohead}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Length</p>
                <p>{data?.length}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">West To Feet</p>
                <p>{data?.westtofeet}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Age At Death</p>
                <p>{data?.ageatdeath}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">South To Feet</p>
                <p>{data?.southtofeet}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Hair</p>
                <p>{data?.hair}</p>
              </div>
              <div className="col-12">
                <p className="card-subtitle font-weight-bold">Text</p>
                <p>{data?.text}</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <h3>Extra</h3>
            <div className="row">
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Face Bundles</p>
                <p>{data?.facebundles}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Field Book Page
                </p>
                <p>{data?.fieldbookpage}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">Goods</p>
                <p>{data?.goods}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Samples Collected
                </p>
                <p>{data?.samplescollected}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Data Expert Initials
                </p>
                <p>{data?.dataexpertinitials}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Excavation Recorder
                </p>
                <p>{data?.excavationrecorder}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Date of Excavation
                </p>
                <p>{data?.dateofexcavation?.toString()}</p>
              </div>
              <div className="col-3">
                <p className="card-subtitle font-weight-bold">
                  Field Book Excavation Year
                </p>
                <p>{data?.fieldbookexcavationyear?.toString()}</p>
              </div>
            </div>
            <div className="row">
              <h3>Textiles</h3>
            </div>
          </div>
          <Link
            className="mb-3 btn-primary btn w-100"
            to="/tools/editBurialSingle"
            state={{ burialData: data }}
          >
            Edit
          </Link>
          <Link
            className="mb-3 btn-secondary btn w-100"
            to="/tools/delete"
            state={{ burialData: data }}
          >
            Delete
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BurialView;
