
import { useState,useNavigate } from 'react';
import { Link } from 'react-router-dom'

import axios from 'axios';

function Delete1() {

  const [employeeList, setEmployeeList] = useState([])

  const getEmployees = () => {
    axios.get('http://localhost:3001/fooddatasystem').then((response) => {
      console.log([response.data])
      setEmployeeList(response.data);
    });
  }
  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(
        employeeList.filter((val) => {
          return val.id !== id;
        })
      );
    });
  };
  return (
    
    <div>
     
      <Link to='/Menu/Payment'><button style={{marginTop:"5rem",marginLeft:"10rem"}} className="buttonorb" >
        Back
      </button>
      </Link>
      <p></p>
      <div className="App container">
        <div className="employees">
          <button className='btn btn-primary' onClick={getEmployees}>Show status</button>
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

                    <button className='btn btn-danger' onClick={() => { deleteEmployee(val.id) }}>Delete</button>
                  </div>

                </div>
              </div>
            )
          })}
           <Link to = './Thank'>
      <button className="button">
                Comfirm
      </button>
      </Link>
        </div>
      </div>


    </div>








  )
}

export default Delete1