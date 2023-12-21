import './loader.css'

const Loader = () => {
    return (
        <div className="loader">
            <img alt="loader" src="/loader.svg" width={140} height={140} style={{ background:'lightGrey'}} />
        </div>
    )
}

export default Loader;