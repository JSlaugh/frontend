import { data } from 'jquery';
import React, { useEffect, useState } from 'react';
import { Textile } from '../../Models/textile';
import { Burialmain } from '../../Models/burialmain';
import { Link } from 'react-router-dom';
import axios from 'axios';
function ConfirmDeletePage(location: any) {
  const [data, setData] = useState<Burialmain>();
  const [data2, setData2] = useState<Textile>();
  useEffect(() => {
    if (location.state.burialData) {
      let temp = location.state.burialData;
      setData(temp);
      console.log(data);
    }
  }, [data, location.state.burialData]);

  useEffect(() => {
    if (location.state.textileData) {
      let temp = location.state.textileData;
      setData2(temp);
      console.log(data2);
    }
  }, [data2, location.state.textileData]);
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    console.log(data);
    console.log(data2);
    if (location.state.textileData) {
      axios
        .delete(
          process.env.REACT_APP_BACK_END_URL +
            '/api/Fagelgamous/deleteTextile/?id=' +
            data2?.id,
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('There was a problem with the axios operation:', error);
        });
    }
    if (location.state.burialData) {
      axios
        .delete(
          process.env.REACT_APP_BACK_END_URL +
            '/api/Fagelgamous/deleteBurialMain/?id=' +
            data?.id,
        )
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error('There was a problem with the axios operation:', error);
        });
      window.location.href = '/';
    }
  };
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '50px',
      }}
    >
      <h2
        style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}
      >
        Confirm Deletion
      </h2>
      <p
        style={{ fontSize: '18px', textAlign: 'center', marginBottom: '30px' }}
      >
        Are you sure you want to delete the data? This action cannot be undone.
      </p>
      <div style={{ display: 'flex', gap: '20px' }}>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            style={{
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: 'pointer',
              backgroundColor: '#e74c3c',
              color: '#fff',
            }}
          >
            Yes
          </button>
        </form>
        <Link
          to="/tools"
          style={{
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            backgroundColor: '#3498db',
            color: '#fff',
          }}
        >
          No
        </Link>
      </div>
    </div>
  );
}

export default ConfirmDeletePage;
