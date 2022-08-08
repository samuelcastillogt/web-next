import React from 'react';
import { db } from '../../libs/db';
export const getServerSideProps = async(context)=>{
    const id = context.query.id
    const data = await db.getProduct(id)
    return {
        props:{
            state: data
        }
    }
 }
const Producto = ({state}) => {
    console.log(state)
    return (
        <div className='main'>
            Este es el deatalle
        </div>
    );
};
export default Producto;