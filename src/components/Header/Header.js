import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import "./Header.css";

const Header=()=>{
    return(
        <HeaderWrapper>
            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/AddUser"}>Add User</Link>
                <Link to={"about-us"}>About us</Link>
            </nav>
        </HeaderWrapper>
    );
}
export default Header;

const HeaderWrapper=styled.div`
background-color:#4080ff;
font-size:18px;
padding:5px;
a{
color:#fff;
padding:5px;
text-decoration:none;
}

`;