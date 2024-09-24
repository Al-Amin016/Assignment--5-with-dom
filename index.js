const modal = document.getElementById('my_modal_1')
console.log(modal);
const doneteBtn = document.getElementsByClassName('donatebtn');
for(let donete of doneteBtn){
    donete.addEventListener('click', function(e){
        const myAmount = parseFloat(document.getElementById('myAmount').innerText);
        const donetAmount = parseFloat(e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText);
        const donetInput = parseFloat(e.target.parentNode.parentNode.parentNode.childNodes[8].childNodes [3].value);
        const donetBalance = donetAmount + donetInput ;
       
        

       

        if(isNaN(donetInput) || typeof donetInput !== 'number' || donetInput <= 0 || myAmount < donetInput){
            alert('error')
            return
        } 
        document.getElementById('myAmount').innerText = myAmount - donetInput .toFixed(2);

        const placeName = e.target.parentNode.parentNode.parentNode.childNodes[3].innerText;
        e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText = donetBalance.toFixed(2);
        e.target.parentNode.parentNode.parentNode.childNodes[8].childNodes [3].value = '';
        createHistory(donetInput, placeName)
        modal.showModal()
    })
 
}


const blogBtn = document.getElementById('blogBtn').addEventListener('click', function(){
    window.location.href ='./blog.html'
})


// history section
document.getElementById('historyBtn').addEventListener('click', function(){
    document.getElementById('card-section').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
})


// Back in donet page : donet button
    document.getElementById('donation').addEventListener('click', function(){
    document.getElementById('card-section').classList.remove('hidden')
    document.getElementById('history').classList.add('hidden');
})


    function createHistory(inputNumber, donetPlaseName){
    const history = document.getElementById('history');
    const div = document.createElement('div');
    
    const date = new Date();
    let text = date.toString();

    div.innerHTML = `
    <div class="px-6 py-8 mt-6 border-2 border-solid border-gray-300 rounded-lg">
           <h2 class="text-2xl font-bold ">${inputNumber} Taka is ${donetPlaseName}</h2>
           <p class=" mt-2 text-lg">Date : ${text}</p>
       </div>
    `
    
    history.appendChild(div)
}