import { Component } from "react";
import '../Component/ProductList.css';
import { ProductCard } from "./ProductCard";

export class ProductList extends Component {
  render() {
    return (
      <>
        <h3>{this.props.headings}</h3>
        <div className="main-container">
          {this.props.data.map((item, index) => (
            <ProductCard key={index} product={item} i={index} />
          ))}
        </div>
      </>
    );
  }
}
