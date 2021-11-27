import React, { useEffect } from "react";
import "./styles.css";
import ProductCard from "./components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadProduct,
  getContentSlots,
  setContentSlot,
  deleteImage
} from "./actions";
import { images } from "./data";
import { Button } from "@material-ui/core";

export default function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product?.products);
  const contentSlots = useSelector((state) => state.product?.contentSlots);

  useEffect(() => {
    dispatch(uploadProduct(images));
  }, [dispatch]);

  useEffect(() => {
    dispatch(getContentSlots());
  }, [dispatch]);

  const onSetContentSlot = (data) => {
    dispatch(setContentSlot(data));
  };

  const onDeleteImage = () => {
    const ids = ["111", "333"];
    dispatch(deleteImage(ids));
  };

  return (
    <div className="App">
      <Button
        type="button"
        variant="contained"
        color="primary"
        onClick={onDeleteImage}
      >
        Delete Selected Image
      </Button>
      <div>
        {(products || []).map((product, index) => (
          <div key={index}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "2rem"
              }}
            >
              <h1>Product # {index + 1}</h1>
            </div>
            <ProductCard
              product={product}
              contentSlots={contentSlots}
              key={index}
              onSetContentSlot={onSetContentSlot}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
