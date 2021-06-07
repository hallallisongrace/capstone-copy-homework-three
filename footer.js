import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
import github from './assets/assets/githubicon.png';
import linkedin from './assets/assets/linkedinicon.png';






class Footer extends React.Component
{
  render()
  {
    return (
      




                
 <footer className="footer-column">               

    
    <div className="footer-row">
     <div ClassName="footeroptions" id="footer-left">
     <ul className="nav-item">
      <a className="nav-link active" aria-current="page" href="#">Home</a>
      </ul>
        <ul className="nav-item">
              <a className="nav-link" href="#">About</a>
        </ul>
        <ul className="nav-item">
              <a className="nav-link" href="#">Contact</a>
        </ul>
        <ul className="nav-item">
              <a className="nav-link" href="#">Add Attractions</a>
        </ul>
        <ul className="nav-item">
              <a className="nav-link" href="#">View Attractions</a>
         </ul>

      
    
          <h3 id="kable-title"></h3>
        </div>
        

    <div className="footer-right">
    <h3 id="dom-title">Domynique Shelby</h3>
    <a href="https://github.com/dshelby24" ><img src={github}/></a> 
    <a href="https://www.linkedin.com/in/domynique-v-shelby/" ><img src={linkedin}/></a> 
    

    
 <h3 id="phil-title">Philicia Watson</h3>
 <a href="https://github.com/PhiliciaWatson" ><img src={github}/></a> 
 <a href="https://www.linkedin.com/in/philicia-watson-b26bba1b1/" ><img src={linkedin}/></a> 
           

    
    <h3 id="all-title">Allison Hall</h3>
    <a href="https://github.com/hallallisongrace" ><img src={github}/></a> 
    <a href="https://linkedin.com/in/hallallisongrace" ><img src={linkedin}/></a> 
     </div>
    </div>
    </footer>


    )
  }
}
export default Footer;


