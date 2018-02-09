import React from'react';
import './footer.css';

// class Footer extends React.Component{
//     constructor(){
//         super()

//     }

//     render()
//     {
//     return(
//         <div className="footer">
//             <p> Copyright to abc.com</p>
//         </div>

//         )
//     }
// }
const Footer = (props) => {
    return (
        <div className = "footer">
            <p>{props.text}</p>
        </div>
    )

}
export default Footer