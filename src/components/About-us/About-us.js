import React from "react";
import url from "../../server_url/server_url";
class AboutUs extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            about:'I am ABout us :Abhivirus',
            loading:true
        };
    }

    componentWillMount() {
        console.log(this.props);
        fetch(url.url+"/about")
            .then(res=>res.text())
            .then(result=>{
                console.log(result);
                this.setState({
                    about:result,
                    loading:false
                });
            })
            .catch();
    }

    render() {
        return this.state.loading?(
            <div>Loading.....</div>
        ):(
            <div>
                <h2>About Us</h2>
                {
                    this.state.about
                }
            </div>
        );
    }
}
export default AboutUs;