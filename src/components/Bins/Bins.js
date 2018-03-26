// import React, { Component } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import logo from '../logo.png'
// import './Bins.css'

// export default class Bins extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             products: [null, null, null, null, null] 

//         }
//     }

//     //runs just after mounted to DOM - loading data from GET endpoint (products response data)
//     //calling setState in didMount triggers second rendering before browser updates the screen
//     // sending get request to database
//     componentDidMount() {
//         axios.get(`/api/products/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`)
//         .then((res)=>{
//             this.setState({products: res.data})
//             console.log('didMount', res.data, this.state.products)
//         })
//     }

//     //product should be the copy of array products (displayed in return)
//     //if element has no value, link to appropriate pages
//     render() {
//         console.log(this.state.products)
//         const product = this.state.products.map((e, i) => {
//             if (e.bin === null) {
//                 return (
//                     <div>
//                     <Link to={`/Add/${this.props.match.params.shelf_id}/${e.bin}`} key={i} style= {                                                  {textDecoration: 'none'}}>
//                         <div>
//                             <span className="bin_box">Add To Inventory</span>
//                         </div>
//                     </Link>
//                     </div>
//                 )} else {
//                 return (
//                     <Link to={`/Inventory/${this.props.match.params.shelf_id}/${e.bin}`} key={i}  style = {                                          {textDecoration: 'none'}}>
//                         <div>
//                             <span className="bin_box">Bin {e.bin}</span>
//                         </div>
//                     </Link>
//                 )
//             }
//             console.log('product', e.bin)
//         })


//         return (
//             <div className="bins_parent">
//                 <div className="bins_header">
//                     <div id="bins_logo_container">
//                         <Link to="/"><img src={logo} alt="logo" /></Link>
//                     </div>

//                     <div className="bins_shelf_container" >
//                         <span className="bins_shelf_id">Shelf {this.props.match.params.shelf_id}</span>
//                     </div>
//                 </div>


//                 <div className="bins_child">
//                     {product}
//                 </div>
//             </div>
//         )
//     }
// }

// ^^^^^
// NEED HELP on map function.... * disgrunted about it *

import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import logo from '../logo.png'
import './Bins.css'

export default class Bins extends Component {
    constructor(props) {
        super()
        this.state = {
            products: [null, null, null, null, null]
        }
    }

    componentDidMount() { // getting all products from DB
        axios.get(`/api/products/${this.props.match.params.shelf_id}/${this.props.match.params.bin_id}`).then(res => {
            // creating new array to hold data and assign index
            // looping through database info within binsContainer loop
            // if bin data ([x]) equals index (+1 ^^ arr indices) >>>
            // assign binContainer index to bins-database index
            // reassign copy of state to binsContainer
            let binsContainer = [null, null, null, null, null]
            for (var i = 0; i < binsContainer.length; i++) {
                for (var x = 0; x < res.data.length; x++) {
                    if (res.data[x].bin == [i + 1]) {
                        binsContainer[i] = res.data[x];
                        console.log(binsContainer)
                    }
                }
            }
            this.setState({
                products: binsContainer
            })
            console.log(res.data, "didMount Bins")
        })
    }

    // 1) logo links to ShelfHome
    // 2) navbar links to shelf_id and changes appearance b/c of match.params
    // 3) ternary statements asking if products:binsContainer matches w/ database >> 
            // links to Add or Inventory page based on what is in database
    render() {
        const num = this.props.match.params.bin_id
        return (
            <div>
                <div className="bins_header">
                    <div id="bins_logo_container">
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </div>

                    <div className="bins_shelf_container" >
                        <span className="bins_shelf_id">Shelf {this.props.match.params.shelf_id}</span>
                    </div>
                </div>

                <div className="bins_child">
                {
                    this.state.products[0] ?
                        <Link to={`/Inventory/${this.props.match.params.shelf_id}/1`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Bin 1</div></Link> :
                        <Link to={`/Add/${this.props.match.params.shelf_id}/1`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Add to Bin 1</div></Link>
                }
                {
                    this.state.products[1] ?
                        <Link to={`/Inventory/${this.props.match.params.shelf_id}/2`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Bin 2</div></Link> :
                        <Link to={`/Add/${this.props.match.params.shelf_id}/2`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Add to Bin 2</div></Link>
                }
                {
                    this.state.products[2] ?
                        <Link to={`/Inventory/${this.props.match.params.shelf_id}/3`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Bin 3</div></Link> :
                        <Link to={`/Add/${this.props.match.params.shelf_id}/3`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Add to Bin 3</div></Link>
                }
                {
                    this.state.products[3] ?
                        <Link to={`/Inventory/${this.props.match.params.shelf_id}/4`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Bin 4</div></Link> :
                        <Link to={`/Add/${this.props.match.params.shelf_id}/4`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Add to Bin 4</div></Link>
                }
                {
                    this.state.products[4] ?
                        <Link to={`/Inventory/${this.props.match.params.shelf_id}/5`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Bin 5</div></Link> :
                        <Link to={`/Add/${this.props.match.params.shelf_id}/5`} style = {{textDecoration: 'none'}}><div className = 'bin_box'>Add to Bin 5</div></Link>
                }

                </div>

            </div>
        )
    }
}