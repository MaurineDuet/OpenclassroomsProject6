import '../style/index.css'
import '../style/banner.css'

function Banner(props) {
  const { title, backgroundImage } = props;

  // const handleError = (event) => {
  //   console.error(`Error loading background image: ${event.target.src}`);
  // };

  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      {title && <h1>{title}</h1>}
      {/* <img src={backgroundImage} alt="" onError={handleError}/> */}
    </div>
  );
}

export default Banner;
