import  React, { Component } from 'react';
import './card-style.css';




class CardList extends Component{
    
    render(){
      //renders twice, because you call it once in app , the other?  idk.
        console.log(this.props)
        console.log('render')
        return(
            <div className = 'card-list'> {this.props.filteredMonsters.map((monster)=> {
                const { name, email, id } = monster;
                return(
                <div className='card-container' key={id}> 
                    <img alt ={`monster${monster.name}`} src ={`https://robohash.org/${monster.id}?set1=set2&size=160x160`}></img>
                <h2>{name} </h2>
                <p>{email}</p>
                </div>
            )})} </div>
        )
    }
}
// i want you to export this by default 
export default CardList;