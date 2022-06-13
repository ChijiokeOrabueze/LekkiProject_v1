import React from 'react';
import { useLocation } from 'react-router-dom';
import AddProperty from './AddProperty';




const UpdateProperty = () => {
    const location = useLocation();
    const id = location.state.id;
  return (
    <AddProperty 
        update = {true}
        propId = {id}
        propData = {location.state.propertyData}/>
  )
}

export default UpdateProperty
