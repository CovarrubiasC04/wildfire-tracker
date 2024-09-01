import loader from './loading-gif.gif'

const Loader = () => {
  return (
        <div className = "loader" >
            <img src = {loader} alt = "Loading"/>
            <h1>Fetching Data...</h1>
        </div>
  )
}

export default Loader
