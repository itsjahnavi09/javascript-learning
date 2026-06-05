fetch("https://tle.ivanstanojevic.me/api/tle/?ref=freepublicapis.com")
.then(response => response.json())
.then(data => {
    data.member.forEach(satellite =>{
        console.log("Name:" + satellite.name);
        console.log("Satellite ID: " + satellite.satelliteId);
        console.log("Date" + satellite.date);

    });
})
.catch(error => {
    console.log(error)

})