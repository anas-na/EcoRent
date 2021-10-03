import loadingGif from '../styles/media/loading.gif' 

const loadingScreen = () => {
    return <div className='loadingContainer'><img src={loadingGif} alt='loading...' /></div>
}


export default loadingScreen 