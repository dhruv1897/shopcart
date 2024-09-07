import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { ListGroup, ListGroupItem } from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {
        UnisexCologne: {
          name: "Unisex Cologne",
          quantity: 0,
          price: 25.99,
          image:
            "./products/cologne.jpg",
        },
        Appleiwatch: {
          name: "Apple iWatch",
          quantity: 0,
          price: 399.99,
          image:
            "./products/iwatch.jpg",
        },
        uniquemug: {
          name: "Unique Mug",
          quantity: 0,
          price: 12.99,
          image:
            "./products/mug.jpg",
        },
        menswallet: {
          name: "Mens Wallet",
          quantity: 0,
          price: 49.99,
          image:
          "./products/wallet.jpg",
        },
      },
      cartTotal: 0,
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
    let total = 0;
    for (const item in this.state.items) {
      total +=
        this.state.items[item].quantity * this.state.items[item].price;
    }
    this.setState({ cartTotal: total });
  };

render() {
  return (
    <div className="container blue mt-5 col">
      <h1 className="text-left mb-2">Shop to React</h1>
      <div>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span>
            {this.state.cartTotal > 0 ? this.state.cartTotal : "0"} items
          </span>
      </div>
      <div>
        {Object.keys(this.state.items).map((item) => (
          <div key={item}>
            <div>
              <div>
               <ListGroup>
               <ListGroupItem>
                <h5 className="card-title">{this.state.items[item].name}</h5>
                <img
                  src={this.state.items[item].image}
                  alt={this.state.items[item].name}
                  className="img-fluid"
                />
                  <input
                    type="number"
                    className="form-control"
                    min="0"
                    value={this.state.items[item].quantity}
                    onChange={(e) =>
                      this.handleQuantityChange(
                        item,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  <div className="input-group mt-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Quantity</span>              
                  </div>
                </div>
                </ListGroupItem>
                </ListGroup> 
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
}


export default App;
