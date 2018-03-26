import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import './Header.css'


export default class Header extends Component {
    render () {
        return (
            <div>
                <div className='header'>
                <Link to="/shelfHome"><img src={logo} alt="logo" /></Link>
                </div>
            </div>
        )
    }
}