import { createContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProductContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return action.payload;
    case "ADD_PRODUCT":
      console.log([...state, action.payload]);
      return [...state, action.payload];
    case "DELETE_PRODUCT":
      return state.filter((product) => product.id !== action.payload);
    case "UPDATE_PRODUCT":
      return state.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
    default:
      return state;
  }
}

const ProductContextProvider = (props) => {
  const [products, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:3000/products");
      const data = await res.json();

      dispatch({
        type: "GET_PRODUCTS",
        payload: data,
      });
    };

    getProducts();
  }, []);

  const addProduct = async (name, price, desc, category, img) => {
    const newID = uuidv4();
    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ id: newID, name, price, desc, category, img }),
    });

    return dispatch({
      type: "ADD_PRODUCT",
      payload: { id: newID, name, price, desc, category, img },
    });
  };

  const deleteProduct = async (id) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "DELETE",
    });

    return dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  };

  const updateProduct = async (id, updatedProduct) => {
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });

    return dispatch({
      type: "UPDATE_PRODUCT",
      payload: updatedProduct,
    });
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, deleteProduct, updateProduct }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
