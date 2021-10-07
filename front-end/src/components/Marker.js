
// const InfoWindow = ({ show, item }) =>
//   show ? (
//     <div style={{ width: 50, height: 50 }}>{item.name} {item.location} ${item.price}</div>
//   ) : null;

const Marker = ({ handleMarkerClick, show, item }) => {
  return (
    <div>
      {/* <div>
        <InfoWindow show={show} item={item}/>
      </div> */}
      {/* <button onClick={handleMarkerClick}> */}
        <img src="https://img.icons8.com/doodle/48/000000/marker--v1.png" className='marker' />
      {/* </button> */}
    </div>
  );
};

//change style to position absolute

export default Marker;
