import { Link } from "react-router-dom";
import { Draw1 } from "./Draw1";
import { Draw2 } from "./Draw2";
import { Draw3 } from "./Draw3";
import { Draw4 } from "./Draw4";
import { Draw5 } from "./Draw5";
import { Draw6 } from "./Draw6";

export const Navigation = () => {
  return (
    <div className="container mt-4 father">
        <Link to= "/draw1"className="links">
            <figure className="image-size">
                <Draw1 />
                <figcaption> Starry night </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw2"className="links">
            <figure className="image-size">
                <Draw2 />
                <figcaption> Antibes seen from the Salis Gardens </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw3"className="links">
            <figure className="image-size">
                <Draw3 />
                <figcaption> Morning in a pine forest </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw4"className="links">
            <figure className="image-size">
                <Draw4 />
                <figcaption> The artist's garden at Giverny </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw5"className="links">
            <figure className="image-size">
                <Draw5 />
                <figcaption> The wave </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw6"className="links">
            <figure className="image-size">
                <Draw6 />
                <figcaption> Cotopaxi </figcaption>
            </figure>  
        </Link>
    </div>
  )
}
