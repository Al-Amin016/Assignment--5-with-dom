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




// // fani section
// const faniDonetBtn =document.getElementById('fani-donet-btn')
// .addEventListener('click',function (){

//     const faniAddMany = parseFloat(document.getElementById('faniAddMany').value)
//     const faniAmount = parseFloat(document.getElementById('faniAmount').innerText)
//     const faniNewMany = faniAmount + faniAddMany;
// const cummillaBalance = document.getElementById('faniAmount').innerText = faniNewMany.toFixed(2)

// const myAmount = parseFloat(document.getElementById('myAmount').innerText);
// const newBalace = myAmount - faniAddMany ;
// document.getElementById('myAmount').innerText = newBalace.toFixed(2);
 
// const yourdonate = parseFloat(document.getElementById('yourdonate').innerText = faniAddMany.toFixed(2))

// if(faniAddMany > 0 ){
//     yourdonate
// }
// else{
//     alert ('erro')
// }
// return


// })


// //  cummilla cection

// const CumillaDonetMany = document.getElementById('CumillaDonetMany').addEventListener('click', function(){

//     const yourdonate = parseFloat(document.getElementById('yourdonate').innerText = cummillahAddMany.toFixed(2))
//     if(cummillahAddMany > 0)
//         yourdonate
//     else{
//         alert ('error')
//         return
//     }
    
// const cummillahAddMany = parseFloat(document.getElementById('cummillahAddMany').value);
// const cummillaAount = parseFloat(document.getElementById('cummillaAount').innerText);

// const addNewMany = cummillaAount + cummillahAddMany
// const sumBlanace = document.getElementById('cummillaAount').innerText = addNewMany;

// const myAmount = parseFloat(document.getElementById('myAmount').innerText);
// const newBalace = myAmount - cummillahAddMany ;
// document.getElementById('myAmount').innerText = newBalace.toFixed(2);






// })

// // nokhaly section


// const nokhalyDonetBtn = document.getElementById('nokhalyDonetBtn').addEventListener('click', function(){
    
// const noakhaliAddMany = parseFloat(document.getElementById('noakhaliAddMany').value);
// const noakhaliAmount = parseFloat(document.getElementById('noakhaliAmount').innerText);




// const addBalance = noakhaliAmount + noakhaliAddMany;
// const sumBlanace = document.getElementById('noakhaliAmount').innerText = addBalance.toFixed(2)

// const myAmount = parseFloat(document.getElementById('myAmount').innerText);
// const newBalace = myAmount - noakhaliAddMany ;
// document.getElementById('myAmount').innerText = newBalace.toFixed(2);


// const yourdonate = parseFloat(document.getElementById('yourdonate').innerText = noakhaliAddMany.toFixed(2))

// if(noakhaliAddMany > 0 ){
//     sumBlanace
// }
// else(
//     alert('error')
// )
// return

// })

// // tutton section, donation
// // donet section,  block

// const donation = document.getElementById('donation').addEventListener('click', function(){
//         const block1 = document.getElementById('block1');
//         block1.style.display ='block'
//         block1.removeAttribute("disabled")

//         const block2 = document.getElementById('block2');
//         block2.remove ('disabled')

//         const block3 = document.getElementById('nokhalyDonetBtn');
//         block3.style.display = true
        
// })