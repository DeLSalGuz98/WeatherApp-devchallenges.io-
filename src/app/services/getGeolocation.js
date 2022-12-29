export function GetGeolocation() {
    const promesa = new Promise((resolve, reject)=>{
        navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

        function successCallback(position){   
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            resolve({lat: lat,lon: lon});            
        }

        function errorCallback(error) {
            const message = 'ERROR(' + error.code + '): ' + error.message;
            console.warn(message);
            reject(message);
        }
    });
    return promesa;
}