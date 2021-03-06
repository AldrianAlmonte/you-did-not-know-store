import "./quantityPicker.css";


import {useState} from 'react';

const QuantityPicker = (props) => {

    let [quantity, setQuantity] = useState(1);

    // props.onChange <-> onQuantityChange
    // props.onChange(quantity) <-> onQuantityChange(10);


    const handleDecrease = () => {
        let value = quantity;

        if (value > 1)
        {
            value = value - 1;
            setQuantity(value ); // this fn takes some time
        }
            props.onChange(value);
    }

    const handleIncrease = () => {
        let value = quantity;
        value += 1;
        setQuantity(value);
        {props.onChange(value)}
    }
    


    return(
        <div className="quantity-picker">
            <button className="btn btn-info btn-sm" onClick={handleDecrease}>-</button>
            <label> {quantity} </label>
            <button className="btn btn-info btn-sm" onClick={handleIncrease}>+</button>
        </div>
    );
}

export default QuantityPicker;



