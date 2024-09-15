import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { products } from "./products";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Modal } from 'react-bootstrap';
import Navbar from './navbar';
import DisplayProducts from './displayProducts';
import { useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: products,
      cartTotal: 0,
      show: false,
      showImge: {},
    };
  }

  handleQuantityChange = (itemName, quantity) => {
    const updatedItems = { ...this.state.items };
    updatedItems[itemName].quantity = quantity;

    this.setState({ items: updatedItems }, () => {
      this.calculateCartTotal();
    });
  };

  calculateCartTotal = () => {
    const cartTotal = Object.values(this.state.items).reduce(
      (total, item) => total + item.quantity,
      0
    );
    this.setState({ cartTotal });
  };

  handleClose = () => {
    this.setState({ show: false, showImge: {} });
  };

  handleShow = (product) => {
    this.setState({ show: true, showImge: product });
  };

  render() {
    return (
      <div className="container mt-5" style={{ backgroundColor: "lightblue" }}>
        <Navbar cartTotal={this.state.cartTotal} />
        {this.state.items.map((item, index) => (
          <div key={index}>
            <img src={item.image} onClick={() => this.handleShow(item)} />
          </div>
        ))}
        <DisplayProducts
          items={this.state.items}
          handleQuantityChange={this.handleQuantityChange}
        />
        {/* <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.showImge && this.state.showImge.desc}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.showImge && (
              <img
                src={this.state.showImge.image}
                width="200px"
                alt={this.state.showImge.desc}
                className="mx-2"
              />
            )}
            {this.state.showImge && (
              <p><span className="text-dark">Ratings: </span>{this.state.showImge.ratings}/5</p>
            )}
            {this.state.showImge && (
              <p><span className="text-dark">Description: </span>{this.state.showImge.desc}</p>
            )}
          </Modal.Body>
        </Modal> */}


<Modal show={this.state.show} onHide={this.handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>{this.state.showImge && this.state.showImge.name}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    {this.state.showImge && (
      <img
        src={this.state.showImge.image}
        width="200px"
        alt={this.state.showImge.name}
        className="mx-2"
      />
    )}
    {this.state.showImge && (
      <p><span className="text-dark">Ratings: </span>{this.state.showImge.ratings}/5</p>
    )}
    {this.state.showImge && (
      <p><span className="text-dark">Description: </span>{this.state.showImge.desc}</p>
    )}
  </Modal.Body>
</Modal> 


      </div>
    );
  }
}

export default App;