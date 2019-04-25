import React,{Component} from "react";
import url from '../../server_url/server_url';
class UsersList extends Component{
    constructor(props) {
        super(props);
        this.state={
            users:[],
            loading:true
        };
    }

    componentDidMount() {
        fetch(url.url)
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                this.setState({
                    users:result,
                    loading:false
                })
            })
            .catch(err=>console.log("error occurred:"+err));
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
                alert(result);
                return result;
            })
    };
    handleDelete=(id)=>{
        fetch(url.url+"?id="+id,{
            method:"delete"
        })
            .then(res=>res.json())
            .then(result=>{
                console.log(result);
                this.setState({
                    users:result,
                    loading:false
                })
            })
            .catch(err=>console.log("error occurred:"+err));
    }
    render() {
        let users=this.state.users;
        return this.state.loading?(<div>Loading.....</div>):(
            <div>
                <table>
                    <caption><h1>Users Data</h1></caption>
                    <thead>
                    <tr>
                        <th>ID</th> <th>Name</th> <th>Username</th> <th>Email</th> <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        users.map(row=>{
                            return(
                                <tr>
                                    <td>{row.id}</td> <td>{row.name}</td> <td>{row.username}</td> <td>{row.email}</td>
                                    <td style={{cursor:"pointer",color:"red"}} onClick={()=>this.handleDelete(row.id)}>
                                    <i className="fas fa-trash"></i></td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }

}
export default UsersList;