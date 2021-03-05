import React, { Component } from 'react';

class Toc extends Component {

  //새로운 porps와 state 바뀐값을 매개변수로 받음
    shouldComponentUpdate(newProps, newState){
      console.log('shouldComponetUpate'
      ,newProps.data
      ,this.props.data
      );
      if(this.props.data === newProps.data){
        return false;
      }      
      return true;
    }

    render(){
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length){
        lists.push(
          <li key={data[i].id}>
            <a 
              href={"/content/"+data[i].id}
              data-id={data[i].id}
              onClick={function(e){
                e.preventDefault();
                this.props.onChangePage(e.target.dataset.id);
              }.bind(this)}
            >{data[i].title}</a>
          </li>)
        i = i + 1;
      }

      return (
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      );
    }
  }

export default Toc;