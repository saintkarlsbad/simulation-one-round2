//stateful component to keep track of name, price, edit

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import axios from 'axios';
import './Inventory.css';




export default class Inventory extends Component {
    constructor() {
        super()
        this.state = {
            bin:[],
            name: [],
            price: [],
            editButton: false
        }
        this.updateSave=this.updateSave.bind(this)
        this.deleteProduct=this.deleteProduct.bind(this)
        this.inputChanges=this.inputChanges.bind(this)
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handlePriceChange=this.handlePriceChange.bind(this)
    }

    // setState is pulling info from db to display in inventory bin data(name, price) //
    componentDidMount() {
        console.log(this.state)
        axios.get(`/api/bin/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then(res=>{
            this.setState({bin: res.data, name: res.data[0].name, price: res.data[0].price})
            console.log('Get Inventory', res.data, this.state.name, this.state.price)
        })
    }

    handleNameChange (value) {
        this.setState({name: value})
    }

    handlePriceChange(value) {
        this.setState({price: value})
    }

    updateSave() {
        let newProducts = {
            name: this.state.name,
            price: this.state.price
        }

        axios.put(`/api/bin/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`, newProducts)
        .then (res => {
            this.props.history.push(`/Bins/${this.props.match.params.shelf_id}`)
            console.log('put inventory', res.data, this.state.name, this.state.price)
        })
        console.log('saveButton')

        
    }

    deleteProduct() {
        axios.delete(`/api/delete/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then((res)=>{
            this.props.history.push(`/Bins/${this.props.match.params.shelf_id}`)
            console.log('delete')
        })
       
    }

    inputChanges() {
       if (this.state.bin.length > 0 && this.state.editButton===false) {
            return (
                <div className = "inventory_child">
                    <p id="item_text">Name</p>
                    <input type='text' value={this.state.name} disabled = {true} id="input_box"/>
                        <br/>
                    <p id="item_text">Price</p>
                    <input type='text' value={this.state.price} disabled={true} id="input_box"/>
                        <br/>
                    <button onClick={()=>this.setState({editButton: true})} className='inventory_buttons'>EDIT</button>
                        <br/>
                    <button onClick={()=>this.deleteProduct()} className='inventory_buttons'>DELETE</button>
                </div>
            ) 
       } else if (this.state.bin.length > 0 && this.state.editButton === true) {
           return (
               <div className = "inventory_child">
                   <p id="item_text">Name</p>
                    <input onChange={(e)=>this.handleNameChange(e.target.value)} value={this.state.name}id="input_box"/>
                        <br/>
                    <p id="item_text">Price</p>
                    <input onChange={(e)=>this.handlePriceChange(e.target.value)} value={this.state.price} id="input_box"/>
                        <br/>
                    <button onClick={()=>this.updateSave({editButton: true, disabled: false})} className='inventory_buttons'>SAVE</button>
               </div>
           )
       }
    }

    // 1) logo links to ShelfHome
    // 2) navbar links to shelf_id and changes appearance b/c of match.params
    render() {      
        return (
            <div className = "inventory_parent">
                <div className = "inventory_header">
                    <div id="inventory_logo_container">
                        <Link to="/"><img src={logo} alt="logo" id = "logo"/></Link>
                    </div> 
                    <nav id="inventory_shelf_container">
                        <Link to={`/Bins/${this.props.match.params.shelf_id}`} style={{ textDecoration: 'none' }}><span id="inventory_shelf_id">Shelf {this.props.match.params.shelf_id}</span></Link>
                    </nav>

                    <div className="bin_id_inventory">
                        <h1 id="inventory_id_text"> Bin {this.props.match.params.bin_id} Inventory</h1>
                    </div>
                </div>
                {this.inputChanges()}
            </div>
        )
    }
}