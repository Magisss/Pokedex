import React from 'react'
import { Link } from 'react-router-dom';

const PokemonThumb = ({ id, image, name, type, }) => {
    const style = `thumb-container ${type}`;
    return (
        <Link to={`details/${name.charAt(0).toLowerCase() + name.slice(1)}`}>
            <button>
                <div className={style}>
                    <div className="number"><small>{type}</small></div>
                    <img src={image} alt={name} />
                    <div className="detail-wrapper">
                        <h3>{name}</h3>
                    </div>
                </div>
            </button>
        </Link>
    )
}

export default PokemonThumb