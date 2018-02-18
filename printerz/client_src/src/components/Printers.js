import React, {Component} from 'react';
import axios from 'axios';
import PrinterItem from './PrinterItem';

class Printers extends Component{

    constructor(){
        super();
        //Mimic loopback in react using axios
        this.state={
            printers: []
        }
    }

    //Lifecycle method
    componentWillMount(){
        this.getPrinters();
    }

    getPrinters(){
        axios.get('http://localhost:3000/api/printers')
        .then(response => {
            this.setState({printers: response.data}, () =>{
                // console.log(this.state);
            })
        })
        .catch(err => console.log(err));
        }
    

    render(){
        const printerItems = this.state.printers.map((printer, i) =>{
            return(
                <PrinterItem key={"printer.id"} item={printer} />
            )
        })

        return(
            <div>
                {/* Comment - TODO Change h1 value to be Printers - {buildingID} */}
                <h1>Printers - Monaghan Row</h1>
                <ul className="collection">
                    {printerItems}
                </ul>
            </div>
        )
    }
}

export default Printers;