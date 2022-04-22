import spinner from './spinner.gif'

const Loading = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
            <h1>Fetching Data</h1>
        </div>
    )
}

export default Loading