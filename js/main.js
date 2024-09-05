/// make api to obj
let repo = new XMLHttpRequest();
repo.open("GET","https://jsonplaceholder.typicode.com/posts",true);
repo.send();
repo.onreadystatechange = function () {

    if(repo.readyState === 4 && repo.status === 200 ) {
        // console.log(this.responseText);
          let objJs = JSON.parse(this.responseText);

       // create div inside parent
        for(let i = 0;i < objJs.length; i++) {
        //    console.log(objJs[i]);

           // create container to  allObject
           let container = document.querySelector(".container");

           let allDiv = document.createElement("div");

           // create Div to object
           let side_1 = document.createElement("div");
           let txt_1 = document.createTextNode(`userId: ${objJs[i].userId}`);

           let side_2 = document.createElement("div");
           let txt_2 = document.createTextNode(`id: ${objJs[i].id}`);

           let side_3 = document.createElement("div");
           let txt_3 = document.createTextNode(`title: ${objJs[i].title}`);

           let side_4 = document.createElement("div");
           let txt_4 = document.createTextNode(`body: ${objJs[i].body}`);

           // Append txt_1 to side_1
           side_1.appendChild(txt_1);

           // Append txt_2 to side_2
           side_2.appendChild(txt_2);

            // Append txt_3 to side_3
            side_3.appendChild(txt_3);
           
            // Append txt_4 to side_4
            side_4.appendChild(txt_4);

            // append side_1 , side_2 ,side_3, side_4  TO container
            allDiv.appendChild(side_1);
            allDiv.appendChild(side_2);
            allDiv.appendChild(side_3);
            allDiv.appendChild(side_4);
            container.appendChild(allDiv)

        }
    }
}

