import React, { useEffect } from "react";
import "./Cartitem.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useStatevalue } from "./StateProvider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import ButtonGroup from '@mui/material/ButtonGroup';


const Cartitem = ({ id, title, img, price, desc,qty }) => {
  const [{ basket }, dispatch] = useStatevalue();

  
  

  const Removebasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="item-container">
      <div className="item-card">
        <div className="itemimage">
          <img src={img} alt="" />
        </div>
        <div className="itemdesc">
          <span className="desc-title">{desc}</span>
          <span className="itemprice">₹{price}</span>
          <span className="rating">
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </span>
          <Button
            onClick={Removebasket}
            style={{
              backgroundColor: "#ffd714",
              color: "black",
              marginLeft: "45px",
              alignItems: "center",
              textAlign: "center",
            }}
            variant="Contained"
            size="small"
            startIcon={<DeleteIcon />}
          >
            {" "}
            Remove
          </Button>
          <div className="buttongroup">
          <ButtonGroup variant="outlined" co aria-label="outlined button group">
            <Button>-</Button>
            <Button>Qty{qty}</Button>
            <Button>+</Button>
          </ButtonGroup>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cartitem;
