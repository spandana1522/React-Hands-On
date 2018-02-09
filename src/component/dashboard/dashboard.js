import React from 'react';
import './dashboard.css'

class Dashboard extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className  = "container">
            <h1>My Dashboard ({this.props.currentPage})</h1>
            <div className = "row">
                <div className = "col-md-6">
                    <label>Header Logo</label>
                    <input type ="text " classname = "form-control"/>
                    <input type ="button" value = "change the header" className= "btn btn-primary"/>
                </div>


            </div>
            </div>
        )
    }
}

export default Dashboard;