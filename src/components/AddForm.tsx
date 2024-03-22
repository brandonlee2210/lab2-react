import { Form, Button } from "react-bootstrap";

import { ProductContext } from "../contexts/ProductContext";
import { useContext, useState } from "react";

const AddForm = () => {
  const { addProduct } = useContext(ProductContext);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    desc: "",
    category: "",
    img: "",
  });

  const onInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const { name, price, desc, category, img } = newProduct;

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(name, price, desc, category, img);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="numbẻ"
          placeholder="Price"
          name="price"
          value={price}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Category"
          name="category"
          value={category}
          onChange={(e) => onInputChange(e)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="desc"
          name="desc"
          value={desc}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Img"
          name="img"
          value={img}
          onChange={(e) => onInputChange(e)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Add New Product
      </Button>
    </Form>
  );
};

export default AddForm;
