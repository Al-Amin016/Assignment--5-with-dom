const modal = document.getElementById('my_modal_1')
console.log(modal);
const doneteBtn = document.getElementsByClassName('donatebtn');
for(let donete of doneteBtn){
    donete.addEventListener('click', function(e){
        
        const myAmount = parseFloat(document.getElementById('myAmount').innerText);
        const donetAmount = parseFloat(e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText);
        const donetInput = parseFloat(e.target.parentNode.parentNode.parentNode.childNodes[8].childNodes [3].value);
        const donetBalance = donetAmount + donetInput ;
       
        document.getElementById('myAmount').innerText = myAmount - donetInput .toFixed(2);

      console.log('hwllo woard')
        if(donetInput > 0  || donetInput === Number){
            e.target.parentNode.parentNode.parentNode.childNodes[1].childNodes[3].innerText = donetBalance.toFixed(2);
        }
        else {
            alert('error')
            return
        }
        modal.showModal()
    })
 
}


const blogBtn = document.getElementById('blogBtn').addEventListener('click', function(){
    window.location.href ='./blog.html'
})


// history section
document.getElementById('historyBtn').addEventListener('click', function(){
    document.getElementById('card-section').classList.add('hidden')
    document.getElementById('history').classList.remove('hidden')
})


// Back in donet page : donet button
const donation = document.getElementById('donation').addEventListener('click', function(){
    document.getElementById('card-section').classList.remove('hidden')
})
