import React from 'react';
import './header.css';


class Header extends React.Component{
    
     
    constructor(props){
        super(props);

        this.state = {
            activeTile : 0,
        }
        
    }

    handleClick = (index) => {
        
        const selectedMenu = this.props.headerMenudata[index].name;
        this.props.changeMenu(selectedMenu);
        this.setState({activeTile:index});

    }

    render(){

       

        return(
            <div className="header">
                <div className="right-align">
                    <h2> {this.props.logo} </h2>
                </div>
            

                <div className="left-align">
                    <ul>
                        

                        {
                            this.props.headerMenudata.map((d,index) => {
                            return (index==this.state.activeTile) ?
                            <li className = "active" key={index}>{d.name}</li> :
                             <li onClick = {()=>this.handleClick(index)} key={index}>{d.name}</li>
                        })
                    }


                    </ul>

                </div>
            </div>

        )
    }
}

export default Header;