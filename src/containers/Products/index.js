import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/UI/Input";
import { addProduct } from "../../actions/product.action";

export const Products = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [productPicture, setProductPicture] = useState("");
  const [show, setShow] = useState(false);
  const category = useSelector((state) => state.category);
  const dispatch = useDispatch();

  const handleClose = () => {
    const form = new FormData();

    form.append("name", name);
    form.append("price", price);
    form.append("description", description);
    form.append("quantity", quantity);
    form.append("category", categoryId);
    for (let pic of productPicture) {
      form.append("productPicture", pic);
    }

    dispatch(addProduct(form));
    setShow(false);
  };


  const createCategoryList = (categories, options = []) => {
    for (let category of categories) {
      options.push({ value: category._id, name: category.name });
      if (category.children.length > 0) {
        createCategoryList(category.children, options);
      }
    }
    return options;
  };

  
  const handleProductPictures = (e) => {
    setProductPicture([...productPicture, e.target.files[0]]);
  };

  console.log("productPic", productPicture);

  
  const handleShow = () => setShow(true);

  return (
    <Layout sidebar>
      <Container>
        <Row>
          <Col md={12}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h3>Product</h3>
              <button onClick={handleShow}>Add</button>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input
            label="Name"
            value={name}
            placeholder={`Product Name`}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            label="Price"
            value={price}
            placeholder={`Product Price`}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Input
            label="Description"
            value={description}
            placeholder={`Product Description`}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            label="Quantity"
            value={quantity}
            placeholder={`Product Qunatity`}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <select
            value={categoryId}
            className="form-control"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option>Select category</option>
            {createCategoryList(category.categories).map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
          {productPicture.length > 0
            ? productPicture.map((pic, index) => (
                <div key={index}>{pic.name}</div>
              ))
            : null}
          <input
            type="file"
            name="productPicture"
            onChange={handleProductPictures}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
};

export default Products;
