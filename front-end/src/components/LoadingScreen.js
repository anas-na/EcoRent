import loadingGif from '../styles/media/loading.gif' 

const LoadingScreen = () => {
    return <div className='loadingContainer'><img src={loadingGif} alt='loading...' /></div>
}


export default LoadingScreen;