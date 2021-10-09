import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import imgjs from "../images/javascript.png";
import imgReact from "../images/reactjs.png";
import imgVue from "../images/vuejs.png";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Javascript",
        description: "javascript description",
        image: imgjs,
      },
      {
        id: 2,
        name: "React Js",
        description: "React Js description",
        image: imgReact,
      },
      {
        id: 3,
        name: "Vue Js",
        description: "Vue Js description",
        image: imgVue,
      },
    ],
  };
  render() {
    const { skills } = this.state;
    return (
      <MainLayout>
        <div style={styleHome}>
          <h3>Home Page</h3>
          <div style={containerHome}>
            {skills.map((item) => (
              <div key={item.id} style={cardHome}>
                <Link to={`/detail/${item.id}`}>
                  <img src={item.image} alt={item.name} style={imgHome} />
                  <p style={{fontWeight:"bold",textAlign:"center", textDecoration: "none"}}>{item.name}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </MainLayout>
    );
  }
}

const styleHome = {
  position: "relative",
  padding: "0 6rem",
};
const containerHome = {
  display: "flex",
  justifyContent: "space-between",
};
const cardHome = {
  width: "20%",
  height: "15rem",
  textAlign: "center"
};
const imgHome = {
  width: "auto",
  height: "100px",
};
