
// function onStartUp () {
//     let res_msg = document.createElement('div');
//     res_msg.innerHTML = "I am ChatBot. How may I help?";
//     res_msg.setAttribute("class", "left");
//     document.querySelector('.msg_area').appendChild(res_msg);
//     res_msg.style.innerHTML = "padding:0; margin:0;";

//     let req_msg = document.createElement('div');
//     req_msg.innerHTML = "Hello";
//     req_msg.setAttribute("class", "right");
//     document.querySelector('.msg_area').appendChild(req_msg);
    
// let res_msg2 = document.createElement('div');
//     res_msg2.innerHTML = "Good evening!";
//     res_msg2.setAttribute("class", "left");
//     document.querySelector('.msg_area').appendChild(res_msg2);
    
// }



let send = document.querySelector("#send");
send.addEventListener("click", async (e) => {
    e.preventDefault();
    let req = document.querySelector('#text').value;
    if (req == undefined || req == ""){

    } else {
        let res = "";
        await axios.get(`https://api.monkedev.com/fun/chat?msg=${req}`).then(data => {
            res = JSON.stringify(data.data.response)
        });

        let msg_req = document.createElement("div");
        let msg_res = document.createElement("div");

        let Con1 = document.createElement("div");
        let Con2 = document.createElement("div");

        Con1.setAttribute("class", "msgCon1");
        Con2.setAttribute("class", "msgCon2");

        msg_req.innerHTML = req;
        msg_res.innerHTML = res;

        msg_req.setAttribute("class", "right");
        msg_res.setAttribute("class", "left");

        let message = document.querySelector(".msg_area");
        message.appendChild(Con1);
        message.appendChild(Con2);

        Con1.appendChild(msg_req);
        Con2.appendChild(msg_res);

        document.querySelector("#text").value = "";
    }
    });

// let inputContainer = document.querySelector(".userInput");
// let inputField = document.querySelector("#userInput");
// let rows = 1;

// function isOverflown(element) {
//     return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
// };

// inputField.addEventListener('keypress', function (){
// console.log('button pressed')

//     if(isOverflown(inputField)){
//         console.log('too much text');
//         inputContainer.style.bottom += "5%";
//         inputContainer.style.height += "40px";
//         inputField.style.height += "40px";

//     }
    
// });