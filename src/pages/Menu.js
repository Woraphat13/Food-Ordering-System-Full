import './Menu.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios';


const Menu = () => {
  const [employeeList, setEmployeeList] = useState([]);


  const [selectedItems, setSelectedItems] = useState([]);
  const [food, setFood] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [orderid, setOrderid] = useState(0);

  const menu = [ 
    'ข้าวไข่เจียว', 'ข้าวหมูแดง', 'ข้าวหมูกรอบ', 'บะหมี่หมูแดง', 
    'บะหมี่หมูกรอบ', 'ข้าวมันไก่ต้ม', 'ข้าวมันไก่ทอด', 'ข้าวผัดกระเทียม', 
    'ข้าวผัดปลาสลิด', 'ข้าวเห็ดผัดน้ำมันหอย', 'ข้าวกะเพราเต้าหู้ไข่หมูสับ', 
    'ข้าวกุ้งทอดกระเทียม', 'ข้าวขาหมู', 'ข้าวต้มปลา', 'ข้าวผัดกะเพราไก่',
    'ข้าวหมูอบ','ไข่ดาว','ไข่ต้ม','ไข่ลวก'
  ]

  const handleItemClick = (item) => {
    const updatedSelectedItems = [...selectedItems, item];
    setSelectedItems(updatedSelectedItems);
    const updatedFood = [...food, item.name];
    setFood(updatedFood);
    const updatedTotalPrice = totalPrice + item.price;
    setTotalPrice(updatedTotalPrice);
    const updatedTotalCalories = totalCalories + item.calories;
    setTotalCalories(updatedTotalCalories);
  };

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      orderID: orderid,
      food: food,
      price: totalPrice,
      calories: totalCalories,
    }).then(() => {
      setEmployeeList([
        ...employeeList,
        {
          orderID: orderid,
          food: food,
          price: totalPrice,
          calories: totalCalories,
        },
      ]);
      console.log(employeeList)
    });
  };

  const handleRemoveItemClick = (item) => {
    const updatedSelectedItems = selectedItems.filter(
      (selectedItem) => selectedItem.id !== item.id
    );
    setSelectedItems(updatedSelectedItems);


    if (updatedSelectedItems.length === 0) {
      console.log(item.id)

      setTotalPrice(0);
      setTotalCalories(0);
      setFood("")
      console.log(food)

    } else {
      console.log(item.id)
      setTotalPrice(prevTotalPrice => prevTotalPrice - item.price);
      setTotalCalories(prevTotalCalories => prevTotalCalories - item.calories);
      setFood(menu[20])
      console.log(food)
    }
  };
  return (

    <div className="food-menu">
      <Link to='/'><button className="buttonorb">
        Back
      </button>
      </Link>
      <h1 className="food-menu-title">Food Menu</h1>
      <ul className="menu-items">
        {menuItems.map((item) => (
          <li key={item.id} className="menu-item">
            <span className="item-info">
              {item.name} - {item.price}฿ - {item.calories} calories
            </span>
            <button className="add-button" onClick={() => handleItemClick(item)}>
              Add
            </button>
          </li>
        ))}
      </ul>
      <h2 className="selected-items-title">Selected Items</h2>
      <ul className="selected-items">
        {selectedItems.map((selectedItem) => (
          <li key={selectedItem.id} className="selected-item">
            <span className="item-info">
              {selectedItem.name} - {selectedItem.price}฿ - {selectedItem.calories} calories
            </span>

            <button
              className="remove-button"
              onClick={() => handleRemoveItemClick(selectedItem)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder=' orderID '
        className="field"
        onChange={(event) => {
          setOrderid(event.target.value)
        }}
      />
      <h3 className="total-price">Total Price : {totalPrice} ฿</h3>
      <h3 className="total-calories">Total Calories : {totalCalories} calories</h3>

      

      <Link to='./Payment'><button className="buttonmenu" onClick={addEmployee}>
        Checkout
      </button>
      </Link>


    </div>

  );
};



const menuItems = [
  { id: 1, name: 'ข้าวไข่เจียว', price: 50, calories: 400 },
  { id: 2, name: 'ข้าวหมูแดง', price: 70, calories: 540 },
  { id: 3, name: 'ข้าวหมูกรอบ', price: 70, calories: 600 },
  { id: 4, name: 'บะหมี่หมูแดง', price: 70, calories: 450 },
  { id: 5, name: 'บะหมี่หมูกรอบ', price: 70, calories: 500 },
  { id: 6, name: 'ข้าวมันไก่ต้ม', price: 60, calories: 585 },
  { id: 7, name: 'ข้าวมันไก่ทอด', price: 60, calories: 695 },
  { id: 8, name: 'ข้าวผัดกระเทียม', price: 60, calories: 400 },
  { id: 9, name: 'ข้าวผัดปลาสลิด', price: 65, calories: 540 },
  { id: 10, name: 'ข้าวเห็ดผัดน้ำมันหอย', price: 65, calories: 250 },
  { id: 11, name: 'ข้าวกะเพราเต้าหู้ไข่หมูสับ', price: 70, calories: 450 },
  { id: 12, name: 'ข้าวกะหล่ำปลีทอดน้ำปลาหมูกรอบ', price: 60, calories: 320 },
  { id: 13, name: 'ข้าวกุ้งทอดกระเทียม', price: 60, calories: 350 },
  { id: 14, name: 'ข้าวขาหมู', price: 60, calories: 690 },
  { id: 15, name: 'ข้าวต้มปลา', price: 60, calories: 325 },
  { id: 16, name: 'ข้าวผัดกะเพราไก่', price: 60, calories: 554 },
  { id: 17, name: 'ข้าวหมูอบ', price: 60, calories: 385 },
  { id: 18, name: 'ไข่ดาว', price: 10, calories: 165 },
  { id: 19, name: 'ไข่ต้ม', price: 10, calories: 155 },
  { id: 20, name: 'ไข่ลวก', price: 12, calories: 80 }
];


export default Menu