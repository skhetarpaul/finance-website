import React, { Component } from 'react'
import defaultbcg from '../images2/bcg2.jpg'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context'
import StyledHero from '../components/StyledHero'

export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
        //console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaultbcg
        };
    }
    // componentDidMount() {}
    static contextType = RoomContext;
    render() {
        const {getRoom} = this.context;
        const room  = getRoom(this.state.slug)
        console.log(room);
        if( !room) {
            return(
                <div className = "error">
                    <h3>
                        no such policies could be found...
                    </h3>
                    <Link to = "/services" className = "btn-primary">
                        back to rooms
                    </Link>
                </div>
            );
        }
        const { name,
            description,
            capacity,
            size,
            price,
            extras,
            familyInsurance,
            images } = room;
            
            // const [mainImg, ...defaultImg] = images
            const [...defaultImg] = images
            console.log(images);
            console.log(`${defaultImg} are the images`);
        return (
        <>
            <StyledHero img = {images[0]}>
            {/* <Hero hero= "roomsHero"> */}

                <Banner title = {`${name} Finace`} subtitle = {capacity}>
                    <Link to = "/services" className = "btn-primary">
                        back to services
                    </Link>
                </Banner>
            {/* </Hero> */}
            </StyledHero>
            <section className = "single-room">
                <div className = "single-room-images">
                    {defaultImg.map((item,index) => {
                        return <img key = {index} src = {item} alt = {name} />
                    })}
                </div>
                <div className = "single-room-info">
                    <article className = "desc">
                        <h3>Details</h3>
                        <p>{description}</p>
                    </article>
                    <article className = "info">
                        <h3>info</h3>
                        <h6>price: ${price} per year</h6>
                        <h6>Duration: {size} year plan</h6> 
                        {/* <h6>Max capacity: {capacity > 1 ?`${capacity} people`: `${capacity} person`}</h6> */}
                        <h6>{familyInsurance ? "family insurance provided": "no family insurance"}</h6>
                    </article>
                </div>
            </section>
            <section className = "room-extras">
                <h6>extras</h6>
                <ul className = "extras">
                    {extras.map((item, index) => {
                    return <li key = {index}>- {item}</li>
                    })}
                </ul>
            </section>
        </>
        );
    }
}

