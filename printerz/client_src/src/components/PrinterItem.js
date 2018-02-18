import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//Comment - Each printer is now a separate PrinterItem component

class PrinterItem extends Component{

    constructor(props){
        super(props);
        this.state = {
            item: props.item
        }
    }

    render(){
        return(
            //Comment - Brings printer item to unique URL with printer ID
            <li className="collection-item">
            <Link to={`/printers/${this.state.item.id}`}>
            {this.state.item.printer_name}</Link>
            </li>

            
        )
    }
}

export default PrinterItem;