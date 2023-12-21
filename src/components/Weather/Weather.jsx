import PropTypes from 'prop-types';
import CurrentWeatherData from './CurrentWeatherData';

const Weather = ({ weatherData = {} }) => {
    const { location, current } = weatherData || {}
    const locationMetaData = ['name', 'region', 'country']
    return (
        <>
            {Object.entries(location).map(p => {
                return locationMetaData.includes(p[0]) && (
                    <span>{p[1]} </span>
                )
            })}
            <CurrentWeatherData data={current} />
        </>
    )
}

Weather.propTypes = {
    weatherData: PropTypes.object.isRequired
}

export default Weather