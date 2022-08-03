let add=document.querySelector(".add_btn");
var arr=[];
let all_notes=document.querySelector(".all_notes");//all_notes
let title=document.querySelector("#title");
let desc=document.querySelector('#desc');
add.addEventListener('click',(e)=>
{
    e.preventDefault();
    add_note();
});
if(arr.length==0)
{
    document.getElementById("demo").style.display="block";
}

function add_note()//obj
{
    let card=document.createElement("div");
    card.classList.add("card");///card
    let titleVal=title.value;
    let descVal=desc.value;
    title.value="";
    desc.value="";
    var today=new Date();
    var month="";
    switch(today.getMonth())
    {
        case 1:month='January';
                break;
        case 2:month='February';
                break;
        case 3:month='March';
                break;
        case 4:month='April';
                break;
        case 5:month="June";
                break;
        case 6:month="July";
                break;
        case 7:month="August";
                break;
        case 8:month="September";
                break;
        case 9:month="October";
                break;
        case 10:month="November";
                break;
        default:month="December";
    }
    if(!titleVal && !descVal)
    {
       return alert("Please enter the tilte and note ,then click onto add note button");
    }
    if(!titleVal)
    {
        return alert("Please Enter the title also ");
    }
    if(titleVal)
    {
        card.innerHTML=`
                        <input type="checkbox" class="check">
                        <h3 class="t">${titleVal}</h3>
                        <p class="n">${descVal}</p>
                        <button class="delete">Delete</button>
                        <button class="edit">Edit Note</button>
                        <p class='date'>${today.getDate()} ${month} ${today.getFullYear()}
    ${today.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>`;
        //all_notes.appendChild(card);
        all_notes.appendChild(card);
        updateLS();
    }
    let del=card.querySelector(".delete");
    del.addEventListener("click",()=>
    {
        card.remove();
    });

    let t=document.querySelector(".t");
    let n=document.querySelector(".n");
    let ed_btn=card.querySelector('.edit');
    ed_btn.addEventListener('click',()=>{
    document.getElementById("title").value=card.querySelector('.t').innerHTML;
    document.getElementById("desc").value=card.querySelector('.n').innerHTML;
    card.style.display='none';
    //document.getElementById('note');
});

}

function updateLS()
{
    let card=document.querySelectorAll(".card");
    var arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[1].innerText,
            desc:element.children[2].innerText
        })
    });
    if(arr.length!=0)
{
    document.getElementById("demo").style.display="none";
}
    localStorage.setItem("notes", JSON.stringify(arr));
}

//checkbox delete
/*
let d=document.querySelector(".more_del");
d.addEventListener("click",(e)=>
{
    /*
    e.preventDefault();
    let b=document.querySelector(".card");
    let check=document.querySelector(".check")
    if(check.checked==false)
    {
        return alert("please first select the checkbox that you want to delete");
    }
    else{
        if(check.checked==true)
            {    
                b.style.display="hidden";
            }
        }
        
});

let search=document.getElementsByClassName("search_btn");
search[0].addEventListener("click",(e)=>
{

    if(document.getElementById("search").innerHTML=="")
    {
        return alert("Please first enter something....");
    }

});
*/

