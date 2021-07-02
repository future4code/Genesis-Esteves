import React, { useState } from "react"


export function Main () {
    const [page, setPage] = useState(true)
    function trocaDEPagina (){
        setPage (!page)
    }

  return <div>
      page?
     <Choose/>
     :
         
  </div>
}