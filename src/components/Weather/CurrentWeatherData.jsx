import './weather.css'

const CurrentWeatherData = ({ data }) => {
    const meta = {
        feelslike_c: 'Feels Like',
        condition: 'Condition',
        temp_c: 'Temperature',
        humidity: 'Humidity (in percentage)',
        wind_dir: 'Wind Direction',
        vis_km: 'Visibility (in kms)',
        uv: 'UV'
    }

    const arr = ['feelslike_c', 'temp_c', 'humidity', 'wind_dir', 'vis_km', 'uv', 'condition']

    const metaData = Object.entries(data).reduce((acc, curr) => {
        if (curr[0] === 'condition') {
            acc.push({ label: meta[curr[0]], className: 'normal', value: curr[1].text, icon: curr[1].icon })
        }
        else if (arr.includes(curr[0])) {
            acc.push({ label: meta[curr[0]], className: ['temp_c', 'feelslike_c'].includes(curr[0]) ? 'temperature' : 'normal', value: curr[1] })
        }

        return acc;
    }, [])


    console.log(metaData, 'metaData')
    return (
        <>
            <div className='card'>
                {metaData.map(p => {
                    return (
                        <>
                            {p.icon && 
                            <>
                            <img src={p.icon} alt="John" style={{ width: '50%', height: '50%' }} />
                            <hr />
                            </>
                            }
                            <p className="title">{p.label}</p>
                            <span className={p.className}>{p.value}</span>
                            {' '}
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default CurrentWeatherData;