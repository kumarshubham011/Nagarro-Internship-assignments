let type=document.querySelectorAll('.type');
let statuss=document.querySelectorAll('.status');
let teams=document.querySelectorAll('.teams');
let image=document.querySelectorAll('.image');
let image1=document.querySelectorAll('.image1');


const apikey = "70fb72e4-41eb-4713-be25-67c89aeaac08";
const cricapiurl = "https://api.cricapi.com/v1/cricScore?apikey=" + apikey;


let maindata = document.getElementsByClassName(".cards");
const xhr = new XMLHttpRequest();
xhr.open("GET", cricapiurl, true);

xhr.onload = () =>{
    if (xhr.status === 200) {
        let users = JSON.parse(xhr.responseText);
        teamdata = fetcheddata.data;
        teamdata = teamdata.slice(34, 82)

        for(let i in users)
        { 
            if(i < 5){
                image[i].src=users[i].t1img;
                //    image1[i].src=data.data[i].teamInfo[1].img;
                //    type[i].innerText=data.data[i].name;
                //    statuss[i].innerText=data.data[i].venue;
                //    teams[i].innerText=data.data[i].date;
            }

        }

    }
  
    }; 
xhr.send();