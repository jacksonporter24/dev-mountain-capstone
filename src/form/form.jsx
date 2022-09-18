import { useState } from 'react';


function Form({handleTitleInput, handleDescriptionInput, handleClick}) {

  return (

    <form>
    <p>INPUT TITLE:</p>
    <input
      type="text"
      id="title-input"
      name="title-input"
      onChange={handleTitleInput}
    ></input>
    <p>INPUT DESCRIPTION</p>
    <input
      type="text"
      id="desc-input"
      name="desc-input"
      onChange={handleDescriptionInput}
      // value={newDescription} //this would be required without useState
    ></input>
    <button onClick={handleClick}>Click</button>
    </form>
  )
}

export default Form