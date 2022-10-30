const  API_URL = "https://jsonplaceholder.typicode.com"; 
const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if(this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.response);
        console.log(data);
        
        //const HTMLResponse = document.querySelectorAll("#app");
    
        /*const tpl = data.map((comment) => {
            return `<li>${comment.name}📧${comment.email}</li>`;
        });
        HTMLResponse.innerHTML = `<ol>${tpl}</ol>`; */
   
    }
}



xhr.addEventListener("load", onRequestHandler); 
xhr.open(`GET`, `${API_URL}/comments`); 
xhr.send();
