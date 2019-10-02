import React, { Component } from 'react'
import { Link } from "react-router-dom"

import './MarvelList.scss'
class MarvelList extends Component {
  componentDidMount() {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  render() {
    const { results } = this.props.marvel

    return (
      <div className="marvel">
        <ul className="marvel__list">
          {
            results.map(el => {
              return <li key={ el.id } className="marvel__list--item">
                <Link to={`/character/${ el.id }`}>
                  <div className="card__thumb">
                    <figure>
                      <img src={`${ el.thumbnail.path }.${ el.thumbnail.extension }`} alt={ el.name } />
                    </figure>
                  </div>
                  <div className="card__info">
                    <p>{ el.name }</p>                  
                  </div>
                </Link>
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MarvelList