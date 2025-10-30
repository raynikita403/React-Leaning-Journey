import { Component } from "react";

export class ProductCard extends Component{
    render(){
        console.log(this.props)
        return<>
        <div key={this.props} className="main-card-container">
        <img src={this.props.product.image} alt="" />            
        <p>{this.props.product.title}</p>
        <h5>From $ {this.props.product.price}</h5>
        </div>
        </>
    }
}