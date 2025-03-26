import React from 'react'
import PropTypes from 'prop-types'

const Formimg = ({handleSubmit}) => {
 
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label
          className="w-75"
          style={{
            display: "inline-flex",
            alignItems: "center",
          }}
        >
          {" "}
          Buscar: <input className=" w-100 m-3" type="text" name="inputText"  onClick={(e) => e.target.select()}/>{" "}
          <button type="submit" className="btn btn-outline-dark m-2">
            <span className="material-symbols-outlined ">search</span>
          </button>
        </label>
      </form>
    </>
  )
}

Formimg.propTypes = {
    handleSubmit:PropTypes.func
}

export default Formimg
