import React from 'react'

const Third = (props) => {
  const data = props.data;

  return (
    <>
    {data.map((single)=>{
      const {name,image,para,W,D,H} = single;
      return(
        <div className='listbox'>
          <img src={image} alt="" className='listimg'/>
          <div className="listbox1">
            <div>
              <h1 className="listh11">The</h1>
              <h1 className="listh1">{name}</h1>
              <p className="listp">{para}</p>
            </div>
            <div>
              <h2 className="listh2">dimensions</h2>
              <div className="listbox2">
                <p className="listp">W: {W}cm  </p>
                <p className="listp">D: {D}cm  </p>
                <p className="listp">H: {H}cm  </p>
              </div>
            </div>
          </div>
        </div>
      )
    })}
    </>
  )
}

export default Third