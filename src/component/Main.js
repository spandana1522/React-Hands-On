import React from 'react';
import Header from './header/header'
import Footer from './footer/footer'
import Dashboard from './dashboard/dashboard'

class Main extends React.Component{
    constructor(){
        super();

        this.state = {
            footertext : 'CopyRight ABC.com from footer Component',
            headerLogo : 'Radius InfoSys',
            currentPage : 'Home',
            headerMenudata: [
                {
                    name: 'Home',
                    url: 'spandana.com'
                },
                {
                    name: 'About',
                    url: 'spandana.com/about'
                },
                {
                    name: 'Courses',
                    url: 'spandana.com/courses'
                },
                {
                    name: 'Projects',
                    url: 'spandana.com/projects'
                },
                {
                    name: 'Contact Us',
                    url: 'spandana.com/contact_us'
                },
        
            ]
        
        }
    }

    handlechangeMenu = (newMenu) => {
       this.setState({currentPage:newMenu});
    }

    render(){
        return (
            <div>
                <Header headerMenudata = {this.state.headerMenudata} 
                logo = {this.state.headerLogo}
                changeMenu = {this.handlechangeMenu}/>
                <Dashboard currentPage = {this.state.currentPage}/>
                <Footer text ={this.state.footertext}/>
           </div>
        )
            
    }
}

export default Main;