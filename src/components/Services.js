import React, { Component } from 'react'
import Title from './Title'
import {FaPiggyBank, FaCoins} from 'react-icons/fa';
import { AiTwotoneBank } from "react-icons/ai"
import { GiTakeMyMoney } from "react-icons/gi";


export default class Services extends Component {
    state = {
        services: [
            {
                icon: <AiTwotoneBank/>,
                title: "Safe banking ",
                info: 
                    " With samrat finance banking, you can feel absolutely assured for your value."
            },
            {
                icon: <GiTakeMyMoney/>,
                title: "high Return rates",
                info:
                 "Starts with assured 8% to Live value (variable profit depending on commerce of organization)" 
            },
            {
                icon: <FaPiggyBank/>,
                title: "new piggy valley",
                info:
                    "Amazingly from toddlers to senior citizens with high rate of returs catering to your interests"
            },
            {
                icon: <FaCoins/>,
                title: "long term savings",
                info: 
                    "Plans for long term savings yield our customers a high return value on their investment with us"
            }
        ]
    }
    render() {
        return (
            <section className = "services">
                <Title title = "services"/>
                <div className = "services-center">
                    {this.state.services.map((item, index )=> {
                        return <article key={index} className="service">
                        <span>{item.icon}</span>
                        <h6>{item.title}</h6>
                        <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
