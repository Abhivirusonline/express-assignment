import React,{Component} from "react";
import url from '../../server_url/server_url';
import styled from "styled-components";

class AddUser extends Component{
    constructor(props) {
        super(props);
    this.state={
        user_info:{},
        status:""
    };
    }
    handleAddUser=(e,user)=>{
        e.preventDefault();
        fetch(url.url,{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                "Content-Type":"application/json"
            }
        })
            .then(res=>{
                return res.text();
            })
            .then(result=>{
                if(result==="user exist"){
                    alert(result);
                    this.setState({
                        status:"not submitted"
                    })
                    return result;
                }
               this.setState({
                   user_info:{},
                   status:"submitted"
               })
            })
    };
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            status:"submitting"
        },
            this.handleAddUser(e,this.state.user_info)
        )
    }
    handleChange=(e)=>{
        let newUser={};
        newUser[e.target.name]=e.target.value;
        this.setState({
            user_info:{
                ...this.state.user_info,
                ...newUser
            }
            })
    }
    render() {
        return(
            <AddUserWrapper>
                <div className={"AddUser"}>
                    <label>User Information entry form </label>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.user_info.name} name={"name"} placeholder={"Enter Full Name here"} onChange={this.handleChange} required/>
                        <input type="text" value={this.state.user_info.username} name={"username"} placeholder={"Enter username here"} onChange={this.handleChange} required/>
                        <input type="email" value={this.state.user_info.email} name={"email"} placeholder={"Enter email here"} onChange={this.handleChange}/>
                        <input type="submit" value={"Add User"}/>
                        {this.state.status}
                    </form>
                </div>
            </AddUserWrapper>
        );
    }
}
export default AddUser;

const AddUserWrapper=styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  padding: 10px;
  box-sizing:border-box;
  max-width: 500px;
  margin: 1.2rem auto;
  input{
  font-size:18px;
  display:block;
  padding:8px 16px;
  margin-bottom:5px;
  width:100%;
  max-width:434px;
  border-radius:2px;
  border:1px solid #ccc;
  }
  input[type="submit"]{
  color:red;
  width:100%;
  padding:8px 20px;
  cursor:pointer;
  }
`;