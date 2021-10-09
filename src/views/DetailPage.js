import React, { Component } from 'react'
import MainLayout from '../layouts/MainLayout'
import imgjs from "../images/javascript.png";
import imgReact from "../images/reactjs.png";
import imgVue from "../images/vuejs.png";
import { Link } from 'react-router-dom';

export default class DetailPage extends Component {
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
    componentDidMount(){
        const id = this.props.match.params.id
        const data = this.state.skills.find(item => item.id === parseInt(id))
        this.setState({ data }) 
    }
    render() {
        const { data } = this.state
        console.log(data)
        return (
            <MainLayout>
                <div style={container}>
                    {data && (
                        <>
                        <h3>{data.name}</h3>
                        <div style={wrapper}>
                            <img style={{height: "200px"}} src={data.image} alt={data.name} />
                            <p>{data.description}</p>
                            <Link to="/">Back Home</Link>
                        </div>
                        </>
                    )
                    }
                </div>
            </MainLayout>
        )
    }
}

const container = {
    padding: "0 6rem",
  };
const wrapper = {
    textAlign: "center",
  };
  