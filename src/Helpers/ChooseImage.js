// Images
import Tyranitar from "../img/tyranitar.png";
import Cloyster from "../img/cloyster.png";


function ChooseImage(inputFromPopup) {
    let toBeAddedImage;
    switch (inputFromPopup) {
        case ("Tyranitar"):
            toBeAddedImage = Tyranitar;
            break;
        case ("Cloyster"):
            toBeAddedImage = Cloyster;
            break;
    }
    return toBeAddedImage;
}

export default ChooseImage;