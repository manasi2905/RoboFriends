import React from 'react';

const Card = ({name, email, id}) => {
    //const Card = (props) => {
    // you can destructue it above or inside
    // otherwise you will have to write props.name, props.email and props.id
    //const {name, email, id} = props;
    return(
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img 
                //make sure to use backtics to recognise src as javascript
                src={`https://robohash.org/${id}200x200`} 
                alt='robots' />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;