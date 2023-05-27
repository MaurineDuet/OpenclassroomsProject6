import '../style/index.css'
import '../style/banner.css'

/* Code pour permetttre la mise en place de la bannière */

/* Définition des éléments composants la bannière */

function Banner(props) {
  const { title, backgroundImage } = props;

/* Chemin pour chercher l'image de la bannière + ajout du titre si nécessaire */

  return (
    <div className="banner" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;
