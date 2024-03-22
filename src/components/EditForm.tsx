import { Form, Button } from "react-bootstrap";

import { ProductContext } from "../contexts/ProductContext";
import { useContext, useState } from "react";

const EditForm = ({ theProduct }) => {
  const id = theProduct.id;

  const [name, setName] = useState(theProduct.name);
  const [price, setPrice] = useState(theProduct.price);
  const [category, setCategory] = useState(theProduct.category);
  const [img, setImg] = useState(theProduct.img);
  const [desc, setDesc] = useState(theProduct.desc);

  const { updateProduct } = useContext(ProductContext);

  const updatedProduct = { id, name, price, category, img, desc };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct(id, updatedProduct);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Name *"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="number"
          placeholder="Price"
          name="email"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="desc"
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Img"
          name="Img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Category"
          name="Img"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </Form.Group>
      <Button variant="success" type="submit" block>
        Edit Product
      </Button>
    </Form>
  );
};

export default EditForm;
