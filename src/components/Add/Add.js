//stateful component to keep track of input text (name, price)

import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './Add.css'

export default class Add extends Component {
    constructor() {
        super()
        this.state = {
            name: [],
            price: 0,
        }

        this.nameChange=this.nameChange.bind(this);
        this.priceChange=this.priceChange.bind(this);
        this.addInventory=this.addInventory.bind(this);
    }

    componentDidMount () { // accessing bin element in products databse
        axios.get(`/api/bin/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then((res)=>{
            this.setState({products: res.data})
            console.log('add inventory')
        })
    }

    nameChange(value) {
        this.setState ({
            name: value
        })
    }

    priceChange(value) {
        this.setState({
            price: value
        })
    }

    addInventory() { 
        let add = { // this is the body object to post inventory to db
            name: this.state.name,
            price: this.state.price
        }
        

        // post is creating bin_id inventory(insert into) in db (name,price) assigned to the proper id 
        axios.post(`/api/bin/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`, add).then( res =>{
            this.props.history.push(`/Bins/${this.props.match.params.shelf_id}`)
            //this function will be executed with the onClick '+ Add Inventory in render method'
        })
        console.log('post Inventory')
    }

    // 1) logo links to ShelfHome
    // 2) navbar links to shelf_id and changes appearance b/c of match.params
    render() {
        return (
            <div className = "add_parent">
                <div className = "add_header">
                    <div className="add_logo_container">
                        <Link to="/"><img src={logo} alt="logo" className = "logo"/></Link>
                    </div>

                    <div className = "add_shelf_container">
                        <Link to = {`/Bins/${this.props.match.params.shelf_id}`}
                        style={{textDecoration: 'none'}}><span className = "add_shelf_id">Shelf { this.props.match.params.shelf_id }</span></Link>
                    </div>

                    <div className = "add_to_bin"> 
                        <span className = "add_span">Add to Bin { this.props.match.params.bin_id }</span> 
                    </div>

                </div>
                <div className = "add_child">
                    <div>
                        <p className = "item_text">Name</p>
                        <input onChange={ (e) => this.nameChange(e.target.value)} value={this.state.name} className = "input_box" />
                    </div>
                    <br/>
                    <div>
                        <p className = "item_text">Price</p>
                        <input onChange={(e)=> this.priceChange(e.target.value)} value={this.state.price} className = "input_box" placeholder ={`$`}/>
                    </div>
                    <br />
                    <Link to={`/Bins/${this.props.match.params.shelf_id}`}>
                    <button onClick={()=>this.addInventory()} className = "add_inventory">+ Add to Inventory</button>
                    </Link> 
                </div>
            </div>
        )
    }
}