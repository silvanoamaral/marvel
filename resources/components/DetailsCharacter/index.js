import React from 'react'

import './DetailsCharacter.scss'

const DetailsCharacter = (props) => {
  const { results } = props.props
  console.log(results)
  return (
    <>  
      {
        results.map(el => {
          return (
            <div className="character" key={ el.id }>
              <figure>
                <img src={`${ el.thumbnail.path }.${ el.thumbnail.extension }`} alt={ el.name } />
              </figure>
              <div className="character__details">
                <div className="container">
                  <div className="content">
                    <h2>{ el.name }</h2>
                    {
                      el.description !== '' ? <p>{el.description}</p> : null
                    }
                  </div>                  
                </div>         
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default DetailsCharacter
