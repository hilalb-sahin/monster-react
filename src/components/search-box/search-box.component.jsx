import  React,{ Component } from "react";
import './search-box.css'

class SearchBox extends Component{

  render(){
    return(
        <input 
        //now you can target search-box 
            className = {`search-box ${this.props.className}`}
            type = 'search' 
            placeholder= {this.props.placeholder} 
            onChange = {this.props.onChangeHandler}/>
        )
    }
}

export default SearchBox;