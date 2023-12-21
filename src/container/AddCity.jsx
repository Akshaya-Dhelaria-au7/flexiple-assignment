import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../components/Loader/Loader";
import Weather from "../components/Weather/Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const AddCity = () => {
    const city = localStorage.getItem('cityName')
    const [cityName, setCityName] = useState(city ? city : '');
    const [weatherData, setWeatherData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    console.log(process.env.REACT_API_KEY)

    const fetchWeather = async () => {
        setLoading(true)
        setTimeout(async () => {
            try {
                localStorage.setItem('cityName', cityName)
                const { data } = await axios.get(`http://api.weatherapi.com/v1/current.json?q=${cityName}&days=7`, {
                    headers: {
                        key: '132c8f83e3f944eaa7e155006231912',
                        days: 7
                    }
                })
                console.log('data received is', data)
                setWeatherData({ ...data })
                if (error) setError();
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setError(error.response?.data?.error?.message ?? 'Something Went Wrong!!')
            }
        }, 100)
    }

    useEffect(() => {
        if (city && !weatherData) fetchWeather()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [city])

    return (
        <>
            <div className="search-input-div">
                <input placeholder="Enter City Name" defaultValue={cityName} type='text' name='cityName' onChange={(event) => setCityName(event.target.value)} />
                <button className='search-button' disabled={!cityName} onClick={fetchWeather}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </div>
            {loading && <Loader />}
            {error && <p>{error}</p>}
            {weatherData && <Weather weatherData={weatherData} />}
        </>
    )
}

export default AddCity;