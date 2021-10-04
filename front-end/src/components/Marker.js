const InfoWindow = (props) =>
  props.show ? (
    <div style={{ width: 100, height: 100 }}>Info window</div>
  ) : null;

const Marker = ({ handleMarkerClick, show }) => {
  return (
    <div>
      <div>
        <InfoWindow show={show} />
      </div>
      <button onClick={handleMarkerClick}>
        <img src="https://img.icons8.com/doodle/48/000000/marker--v1.png" className='marker' />
      </button>
    </div>
  );
};

//change style to position absolute

export default Marker;
