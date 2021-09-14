import React from 'react';

const Form = props => {
    return (
        <form className="wrapper">
            <label htmlFor="country">Select a country to view cases:</label>
            <select onChange={(event) => props.userSelection(event.target.value)} name="country" id="country">
                {
                    props.countrySelection.map((value, index) => {
                        return <option key={index} value={value}>{value}</option>
                    })
                }
            </select>
        </form>
    )
}

export default Form;