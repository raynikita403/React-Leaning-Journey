import { Component } from "react";
import { ProductCard } from "./ProductCard";
import "./Dummy.css"
import dummyData from '../assets/data/dummy.json';

export class DummyProduct extends Component{

    render(){
        return <div>
            <h3>Dummy products</h3>
            <div className="main-container-dummy">
                {dummyData.map((item, index)=> <ProductCard product={item} i={index}/>)}
            </div>
        </div>
    }
}