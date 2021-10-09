import React from 'react'
import MainLayout from "../layouts/MainLayout";
import notFoundImg from "../images/404.jpg";

const NotFound = () => {
    return (
        <MainLayout>
            <div style={container}>
                <img style={{width:"250px"}} src={notFoundImg} alt="" />
            </div>
        </MainLayout>
    )
}

export default NotFound

const container = {
    padding: "0 6rem",
    textAlign: "center"
  };
  