import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Title from './Title'

//get all unioque values from types etc.
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
}

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets,
        familyInsurance
    } = context;

    //get unique types
    let types = getUnique(rooms, 'type')

    types =  ['all', ...types];
    //map types to jsx
    types = types.map((item, index) => {
        return <option value = {item} key = {index}>
            {item}
        </option>
    })

    // let people = getUnique(rooms, 'capacity');
    // people = people.map((item, index) => {
    //     return <option value = {item} key = {index}>
    //         {item}
    //         </option>
    // })
    return(
        <section className = "filter-container">
            <Title title = "search for policies" />
            <form className = "filter-form">
{/* type */}
                <div className = "form-group">
                    <label htmlFor= "type">policy target</label>
                    <select name = "type"
                    id = "type"
                    value= {type}
                    className = "form-control"
                    onChange = {handleChange} >
                        {types} 
                    </select>
                </div>
{/* //guests */}
                {/* <div className = "form-group">
                    <label htmlFor= "capacity">guests</label>
                    <select name = "capacity"
                    id = "capacity"
                    value= {capacity}
                    className = "form-control"
                    onChange = {handleChange} >
                        {people} 
                    </select>
                </div> */}

{/* money field */}
                <div className = "form-group">
                    <label htmlFor = "price">
                        Yearly pay ${price}
                    </label>
                    <input type = "range" name = "price"
                        min= {minPrice} max = {maxPrice} 
                        id = "price" value= {price}
                        onChange = {handleChange} className = "form-control" />
                </div>
{/* size field */}
                <div className = "form-group">
                    <label htmlFor = "size">Time frame</label>
                    <div className = "size-inputs">
                        <input type = "number" name = "minSize" 
                        id = "size" value = {minSize} onChange = {handleChange}
                        className = "size-input" />

                        <input type = "number" name = "maxSize" 
                        id = "size" value = {maxSize} onChange = {handleChange}
                        className = "size-input" />
                    </div>
                </div>

{/* extras field */}
                {/* <div className = "form-group">
                    <div className = "single-extra">
                        <input type = "checkbox" name = "breakfast"
                            id = "breakfast" checked = {breakfast} onChange = {handleChange}
                        />
                        <label htmlFor = "breakfast">
                            breakfast
                        </label>
                    </div>
                </div> */}
                <div className = "form-group">
                    <div className = "single-extra">
                        <input type = "checkbox" name = "familyInsurance"
                            id = "familyInsurance" checked = {familyInsurance} onChange = {handleChange}
                        />
                        <label htmlFor = "familyInsurance">
                            Family Insurance
                        </label>
                    </div>
                </div>
            </form>
        </section>
    )
}