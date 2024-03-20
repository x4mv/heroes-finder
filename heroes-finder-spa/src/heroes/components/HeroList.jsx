import { getHeroesByPublisher } from '../helpers'
import PropTypes from 'prop-types'

export const HeroList = ({publisher}) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
    <>
        {
            heroes.map( hero => (
                <li key={hero.id}>{hero.superhero}</li>
            ))
        }
        
    </>
  )
}

HeroList.propTypes = {
    publisher: PropTypes.string,
}
