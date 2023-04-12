import React, { useState } from 'react';
import './OrderStatusCheck.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const OrderStatusCheck = () => {
  const [orderId, setOrderId] = useState('');
  const [orderStatus, setOrderStatus] = useState('');

  const [employeeList, setEmployeeList] = useState([])

  const getEmployees = () => {
    axios.get('http://localhost:3001/fooddatasystem').then((response) => {
      console.log([response.data])
      setEmployeeList(response.data);
    });
  }

  return (

    <div className="order-status-check">

      <h1 className="title">Order Status Check</h1>
      <input
        type="text"
        className="input"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={e => setOrderId(e.target.value)}
      />
      <button className="buttonor1" onClick={getEmployees}>
        Check Status
      </button>
      {orderStatus && (
        <div className="order-status">
          <h2 className="status">Order Status: {orderStatus}</h2>
          
          <p></p>
          {employeeList.map((val, key) => {
            console.log(key)
            return (
              <div className='emplyee card'>
                <div className='card-body text-left' >
                  <p className="card-text">orderid : {val.orderID}</p>
                  <p className="card-text">Food : {val.food}</p>
                  <p className="card-text">price : {val.price}</p>
                  <p className="card-text">calories : {val.calories}</p>
                  <div className='d-flex'>
                </div>

                </div>
              </div>
            )
          })}
          
        </div>
      )}

      <Link to="/Thank" className="link">
        <button className="buttonor2"> Next </button>
      </Link>
    </div>
  );
};

export default OrderStatusCheck;
