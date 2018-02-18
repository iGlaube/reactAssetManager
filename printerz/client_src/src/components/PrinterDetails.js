import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class PrinterDetails extends Component{

    constructor(props){
        super(props);
        this.state = {
            details:''
        }
    }

    componentWillMount(){
        this.getPrinter();
    }

    //Comment - Retrieve individual printer details to render later
    getPrinter(){
        let printerId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/printers/${printerId}`)
        .then(response => {
            this.setState({details: response.data}, () =>{
                console.log(this.state);
            })
        })
        // .catch(err => console.log(err));
        }
    

    render(){

        return(
            <div>
                <br/>
                <Link to="/" className="btn grey">Back</Link>
                <h1>{this.state.details.printer_name}</h1>
                <ul className="collection">
                    <li className="collection-item">Printer Name: {this.state.details.printer_name} </li>
                    <li className="collection-item">IP Address: {this.state.details.printer_ipAddress} </li>
                    <li className="collection-item">Location: {this.state.details.printer_location}</li>
                    <li className="collection-item">Global Policy: {this.state.details.printer_globalPolicy}</li>
                    <li className="collection-item">Comments: {this.state.details.printer_comment}</li>
                </ul>
                <Link className="btn" to={`/printers/edit/${this.state.details.id}`}> Edit </Link>

                {/* Comment - Add onClick function to delete table content */}
                <button className="btn red right">Delete</button>
            </div>
        )
    }
}

export default PrinterDetails;