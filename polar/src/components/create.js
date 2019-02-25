import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Create extends Component {
    constructor(props){
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeHobbies = this.onChangeHobbies.bind(this);
        this.onFileChange=this.onFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.base64Var = '';

        this.state = {
            username: '',
            hobbies: '',
            avatar : null,
            avatar_holder : null,
        }
    }
    onChangeUserName(e) {
        this.setState({
          username: e.target.value
        });
      }
      onChangeHobbies(e) {
        this.setState({
          hobbies: e.target.value
        })  
      }
      onFileChange(e){
        
        if(e.target.files[0].size > 102400) {
            alert ("Image too big (max 1MB)");
            this.setState({
                avatar_holder : '',
            })
        }
        
        else if(e.target.files[0].size<102400)
        {
            this.setState({
                avatar_holder : e.target.value,
            })
            let img = e.target.files[0];
            this.setState({
                avatar_holder : e.target.value,
            })
            let reader = new FileReader();
            reader.onload = (function(e){
            this.base64Var = e.target.result;
            }).bind(this);
            reader.readAsDataURL(img);
            while(reader.result == null){}
        }
        
      }

      onSubmit(e) {
          if((this.state.username === ''||(this.state.hobbies === '')))
          {
              alert('Please donot leave name or hobbies blank');
          }
          else
            {
                e.preventDefault();
                const obj = {
                    username: this.state.username,
                    hobbies: this.state.hobbies,
                    avatar: this.base64Var,
                };
                axios.post('http://localhost:4000/user/add', obj)
                .then((response)=>this.setState({
                    username: '',
                    hobbies: '',
                    avatar : null,
                    avatar_holder : '',
                    }),
                  this.base64Var = '' 
                );
                
            }
      }
     
    render() {
        return (
            <div className="container">
                <div style={{marginTop: 10}}>
                    <h3>Add New User</h3>
                    <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username:  </label>
                        <input 
                            type="text" 
                            className="form-control" 
                            value={this.state.username}
                            onChange={this.onChangeUserName}
                            />
                    </div>
                    <div className="form-group">
                        <label>Hobbies: </label>
                        <input type="text" 
                            className="form-control"
                            value={this.state.hobbies}
                            onChange={this.onChangeHobbies}
                            />
                    </div>
                    <div className="form-group">
                        <label>Avatar:  </label>
                        <input 
                            type="file"
                            accept="image/x-png,image/jpeg"
                            className="form-control"
                            value = {this.state.avatar_holder}
                            onChange={this.onFileChange} 
                            />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Register User" className="btn btn-primary"/>
                    </div>
                </form>
                </div>
            </div>
            
        )
    }
}