// const imgElement = document.getElementById("photo");
// const nomElement = document.getElementById("nom");
// const jobElement = document.getElementById("job");
// const inElement = document.getElementById("in");
// const facebookElement = document.getElementById("facebook");
// const twiterElement = document.getElementById("twiter");
const card = document.getElementById("card");

const getData = async () => {
  try {
    const response = await fetch(
      `https://reqres.in/api/users?page=1`

    );
    const data = await response.json();
    console.log(data);

 


    for (let index = 0; index < data.data.length; index++) {
      const element = data.data[index];
      
      card.innerHTML+=`
      <div id="card">

      <div id="miniCard">

            <img src="${element.avatar}" alt="" id="photo">

            <div class="identite">
                <p id="nom">${element.first_name} ${element.last_name}</p>
                <p id="job">${element.email}</p>
            </div>

            <div class="resaux">
                <img src="https://assets.stickpng.com/images/6297a2f1e01809629f113598.png" alt="" width="20">
                <img src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="" width="18">
                <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" width="18">
            </div>

        </div>

    </div>`;




      
      

      
    }
      
  } catch (error) {
    console.log(error);
  }



};

getData();


