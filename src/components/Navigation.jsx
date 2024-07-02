import { Link } from "react-router-dom";
import { Draw1 } from "./Draw1";
import { Draw2 } from "./Draw2";
import { Draw3 } from "./Draw3";
import { Draw4 } from "./Draw4";
import { Draw5 } from "./Draw5";
import { Draw6 } from "./Draw6";

export const Navigation = () => {
  return (
    <div>
        <Link to= "/draw1">
            <figure>
                <Draw1 />
                <figcaption> Starry night </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw2">
            <figure>
                <Draw2 />
                <figcaption> Antibes seen from the Salis Gardens </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw3">
            <figure>
                <Draw3 />
                <figcaption> Morning in a pine forest </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw4">
            <figure>
                <Draw4 />
                <figcaption> The artist's garden at Giverny </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw5">
            <figure>
                <Draw5 />
                <figcaption> The wave </figcaption>
            </figure>  
        </Link>
        <Link to= "/draw6">
            <figure>
                <Draw6 />
                <figcaption> Cotopaxi </figcaption>
            </figure>  
        </Link>
    </div>
  )
}
