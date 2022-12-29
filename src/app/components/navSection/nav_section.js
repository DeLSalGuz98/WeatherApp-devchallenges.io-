import React, { useContext} from 'react';
import './navSection.css'

import { CloseSection } from './closeSection/closeSection';
import { SearchSection } from './searchSection/searchSection';
import { SelectSection } from './selectSection/selectSection';

import { navContext } from '../../context/navContext';

export function NavSection() {
    const {statusNav} = useContext(navContext)
    
    return(
        <div className={`section-nav ${statusNav===true?'nav-deploy':'nav-undeploy'}`}>
            <CloseSection/>
            <SearchSection/>
            <SelectSection/>
            <div id="nav-citys-selected" className="nav-citys-section">
                {/* <div className="city-selected">
                    <p>Barcelona</p>
                </div>
                <div className="city-selected">
                    <p>Long Beach</p>
                </div> */}
            </div>
        </div>
    )
}

// class NavSection extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             cityOptionsDeployment: false,
//             displayProtertyCss: "none",
//             cityName: ""
//         };
//         this.UndeployNav = this.UndeployNav.bind(this);
//         this.ShowCityOptions = this.ShowCityOptions.bind(this);
//         this.SearchCityWeather = this.SearchCityWeather.bind(this);

//         this.handleChange = this.handleChange.bind(this);
//     }
//     UndeployNav(e){
//         this.props.UndeployNav();
//         e.preventDefault();
//     }
//     ShowCityOptions(){
//         if(this.state.cityOptionsDeployment === false){
//             this.setState({
//                 cityOptionsDeployment: true,
//                 displayProtertyCss: "block"
//             });
//         }else{
//             this.setState({
//                 cityOptionsDeployment: false,
//                 displayProtertyCss: "none"
//             });
//         }
//     }
//     handleChange(e){
//         this.setState({
//             cityName: e.target.value
//         });
//     }
//     SearchCityWeather(){
//         this.props.SearchCityWeather(this.state.cityName)
//         this.setState({
//             cityName: ""
//         });
//         this.NewCitySelected();
//     }
//     NewCitySelected(){
//         let nameCity =  this.state.cityName[0].toLocaleUpperCase() + this.state.cityName.slice(1);
        
//         let container = document.getElementById("nav-citys-selected");

//         let element = document.createElement("div");
//         element.setAttribute("class", "city-selected");
        
//         let text = document.createElement("p");
//         text.appendChild(document.createTextNode(nameCity));

//         element.appendChild(text);
//         container.appendChild(element);

//     }
//     render(){
//         return(
//             <div className="section-nav">
//                 <div className="nav-close-section">
//                     <a href="#" onClick={this.UndeployNav}>
//                         <i className="fas fa-times"></i>
//                     </a>
//                 </div>
//                 <div className="nav-search-section">
//                     <div className="search-container">
//                         <i className="fas fa-search"></i>
//                         <input type="text" placeholder="search location" onChange={this.handleChange} value={this.state.cityName}/>
//                     </div>
//                     <button onClick={this.SearchCityWeather}>Search</button>
//                 </div>
//                 <div className="nav-select-section">
//                     <div className="select-container" onClick={this.ShowCityOptions}>
//                         <div className="option-selected" >
//                             <div className="name-city">
//                                 <p>London</p>
//                             </div>
//                             <i className="fas fa-chevron-right"></i>        
//                         </div>
//                         <div className="options" style={{display: this.state.displayProtertyCss}}>
//                             <div className="name-city">
//                                 <p>Lima</p>
//                             </div>
//                             <div className="name-city">
//                                 <p>Moscu</p>
//                             </div>
//                             <div className="name-city">
//                                 <p>Long Beach</p>
//                             </div>
//                             <div className="name-city">
//                                 <p>Barcelona</p>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 <div id="nav-citys-selected" className="nav-citys-section">
//                     {/* <div className="city-selected">
//                         <p>Barcelona</p>
//                     </div>
//                     <div className="city-selected">
//                         <p>Long Beach</p>
//                     </div> */}
//                 </div>
//             </div>
//         );
//     }
// }

// export default NavSection;