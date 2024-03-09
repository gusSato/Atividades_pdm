// rfce: react function component export
import React from 'react'

function Feedback({funcaoOk, funcaoNOK, textoOk, textoNOk}) {
  return (
    <div className='d-flex justify-content-evenly m-2'>
      {/* button[type=button].btn.btn-2 */}
      <button type="button" className='btn btn-primary'onClick={() => funcaoOk()}>
        {textoOk}
      </button>
      <button type="button" className="btn btn-danger" onClick={function() {funcaoNOK()}}>
        {textoNOk}
      </button>
    </div>
  )
}

export default Feedback