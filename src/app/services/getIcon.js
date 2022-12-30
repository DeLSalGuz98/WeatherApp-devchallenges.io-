export function GetIcons(key) {
    let imageDirection= "";
    switch (key) {
        case "few clouds":
                imageDirection = "./img/LightCloud.png";
            break;
        case "clear sky":
                imageDirection = "./img/Clear.png";
            break;
        case "scattered clouds":
                imageDirection = "./img/HeavyCloud.png";
            break;
        case "broken clouds":
                imageDirection = "./img/HeavyCloud.png";
            break;
        case "overcast clouds":
                imageDirection = "./img/HeavyCloud.png";
            break;
        case "shower rain":
                imageDirection = "./img/HeavyRain.png";
            break;
        case "light rain":
                imageDirection = "./img/LightRain.png";
            break;
        case "moderate rain":
                imageDirection = "./img/Shower.png";
            break;
        case "rain":
                imageDirection = "./img/Shower.png";
            break;
        case "thunderstorm":
                imageDirection = "./img/Thunderstorm.png";
            break;
        case "snow":
                imageDirection = "./img/Snow.png";
            break;
        case "mist":
                imageDirection = "./img/HeavyCloud.png";
            break;
        default:
            break;
    }
    return imageDirection;
}