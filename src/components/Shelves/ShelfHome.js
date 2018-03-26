//functional component to keep track of shelf links and ids

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.png';
import './ShelfHome.css'



export default class ShelfHome extends Component {
     render() {

         return (
             <div className = "shelf_parent">
                 <div className="header">
                    <div className = "header_content">
                         <img src={logo} alt="logo" className = 'logo'/>
                         <span className = "shelfie">SHELFIE</span>
                    </div>     
                 </div>
                 
                 <div className = 'shelf_child'>
                     <Link to='/Bins/A' style = {{textDecoration: 'none'}}><div className = "link_box" ><span className='shelf_links'>Shelf A</span></div></Link>
                     <br />
                     <Link to='/Bins/B' style = {{textDecoration: 'none'}}><div className = "link_box"><span className='shelf_links'>Shelf B</span></div></Link>
                     <br />
                     <Link to='/Bins/C' style = {{textDecoration: 'none'}}><div className = "link_box"><span className='shelf_links'>Shelf C</span></div></Link>
                     <br />
                     <Link to='/Bins/D' style = {{textDecoration: 'none'}}><div className = "link_box"><span className='shelf_links'>Shelf D</span></div></Link>
                 </div>
             </div>
         )
     }
    }




