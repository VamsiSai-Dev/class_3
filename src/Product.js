import React, { useEffect, useState } from "react";
import "./product.css";

function Product() {
  const [productArray, setProductArray] = useState([]);
  const [addProductTitle, setaddProductTitle] = useState("");
  const [addProductURL, setaddProductURL] = useState("");
  const [addProductPrice, setaddProductPrice] = useState(-1);
  const [editClicked, setEditClicked] = useState(false);
  const [editedProductTitle, seteditedProductTitle] = useState("");
  const [editedProductURL, seteditedProductURL] = useState("");
  const [editedProductPrice, seteditedProductPrice] = useState(-1);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setProductArray(response.products);
        console.log(productArray);
      })
      .catch();
  }, []);
  const titleChange = (event) => {
    setaddProductTitle(event.target.value);
  };
  const addURL = (event) => {
    setaddProductURL(event.target.value);
  };
  const addPrice = (event) => {
    setaddProductPrice(event.target.value);
  };
  const onAddProductButtonClick = (event) => {
    if (addProductPrice !== -1) {
      const newObj = {
        id: productArray.length + 1,
        title: addProductTitle,
        thumbnail: addProductURL,
        price: addProductPrice,
      };
      const newProductsArray = [newObj, ...productArray];
      setProductArray(newProductsArray);
      setaddProductTitle("");
      setaddProductURL("");
      setaddProductPrice(-1);
    }
  };
  const onEditProduct = (index) => {
    setEditClicked(true);
    seteditedProductTitle(productArray[index].title);
    seteditedProductPrice(productArray[index].price);
  };
  const onSaveProduct = (index) => {
    const myObj = productArray[index];
    myObj.title = editedProductTitle;
    myObj.price = editedProductPrice;
    setEditClicked(false);
  };
  const onDeleteProduct = (index) => {
    const newProductsArray = [...productArray];
    newProductsArray.splice(index, 1);
    setProductArray(newProductsArray);
  };
  const editPrductChange = (event, str, index) => {
    if (str === "title") {
      seteditedProductTitle(event.target.value);
    } else if (str === "price") {
      seteditedProductPrice(event.target.value);
    }
    const newProductArray = [...productArray];
    const myObj = newProductArray[index];
    myObj.title = editedProductTitle;
    myObj.price = editedProductPrice;
    setProductArray(newProductArray);
  };
  return (
    <>
      <input
        placeholder="Enter Product Title"
        onChange={titleChange}
        value={addProductTitle}
      />
      <br />
      <input
        placeholder="Enter Image URL"
        onChange={addURL}
        value={addProductURL}
      />{" "}
      <br />
      <input
        type="number"
        placeholder="Enter Price"
        onChange={addPrice}
        // value={addProductPrice}
      />
      <br />
      <button onClick={onAddProductButtonClick}>Add</button>
      <ul>
        {productArray.map((value, index) => {
          return (
            <li id={value.id}>
              <img src={value.thumbnail}></img>
              {editClicked ? (
                <p>
                  <input
                    value={value.title}
                    onChange={(event) => {
                      editPrductChange(event, "title", index);
                    }}
                  />
                </p>
              ) : (
                <p>{value.title}</p>
              )}
              {editClicked ? (
                <p>
                  <input
                    value={editedProductPrice}
                    onChange={(event) => {
                      editPrductChange(event, "price", index);
                    }}
                  />
                </p>
              ) : (
                <p>${value.price}</p>
              )}
              {editClicked ? (
                <button
                  onClick={() => {
                    onSaveProduct(index);
                  }}
                >
                  Save
                </button>
              ) : (
                <button
                  onClick={() => {
                    onEditProduct(index);
                  }}
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => {
                  onDeleteProduct(index);
                }}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Product;
