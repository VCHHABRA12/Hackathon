//List Books Code(Hackathon-1)
 

// Variables Used
const url = "https://www.anapioficeandfire.com/api/books";
let book_name=[];
let book_isbn=[];
let book_numberofpages=[];
let book_authors=[];
let book_publishers_name=[];
let book_Released_date=[];
let book_characters=[];
let book_chars=[];
let book_characters_url=[];

// tags variables
let h1_tag;
let Input_tag;
let btn_tag;
let div1_tag;
let div2_tag;
let div3_tag;
let div4_tag;
let div5_tag;
let div6_tag;
let div7_tag;
let div8_tag;
let div9_tag;
let div10_tag;

//create HTML elements 
function create_html_element(){
// create h1
h1_tag= document.createElement("h1");
h1_tag.innerText= "Books.com";
document.body.appendChild(h1_tag);


// create input tag
Input_tag= document.createElement("input");
Input_tag.setAttribute("type","search");
Input_tag.setAttribute("id","findInput");
Input_tag.setAttribute("value","");
Input_tag.setAttribute("placeholder","Enter a text to Search..");
document.body.appendChild(Input_tag);

//Create a button tag
btn_tag=document.createElement("button");
btn_tag.innerText="Find Text";
btn_tag.onclick=FindNext;
document.body.appendChild(btn_tag);

//Create ten divisions
div1_tag=document.createElement("div");
div2_tag=document.createElement("div");
div3_tag=document.createElement("div");
div4_tag=document.createElement("div");
div5_tag=document.createElement("div");
div6_tag=document.createElement("div");
div7_tag=document.createElement("div");
div8_tag=document.createElement("div");
div9_tag=document.createElement("div");
div10_tag=document.createElement("div");

div1_tag.setAttribute("id","first");
div2_tag.setAttribute("id","second");
div3_tag.setAttribute("id","third");
div4_tag.setAttribute("id","fourth");
div5_tag.setAttribute("id","fifth");
div6_tag.setAttribute("id","sixth");
div7_tag.setAttribute("id","seventh");
div8_tag.setAttribute("id","eighth");
div9_tag.setAttribute("id","ninth");
div10_tag.setAttribute("id","tenth");

document.body.appendChild(div1_tag);
document.body.appendChild(div2_tag);
document.body.appendChild(div3_tag);
document.body.appendChild(div4_tag);
document.body.appendChild(div5_tag);
document.body.appendChild(div6_tag);
document.body.appendChild(div7_tag);
document.body.appendChild(div8_tag);
document.body.appendChild(div9_tag);
document.body.appendChild(div10_tag);

}

function add_style(){
// styling h1 tag
h1_tag.style.color= "darkmagenta"
h1_tag.style.fontStyle= "italic";

// styling input tag
Input_tag.style.width="50%";
Input_tag.style.fontSize="16px";
Input_tag.style.padding="12px 20px 12px 40px";
Input_tag.style.border="2px solid black";
Input_tag.style.marginBottom="12px";
Input_tag.style.backgroundColor="aliceblue";
Input_tag.style.color= "black";
Input_tag.style.borderRadius="20px";

// styling div tag
const div_styling= document.getElementsByTagName("div");
for(let i=0; i<div_styling.length; i++){
  div_styling[i].style.height="300px";
  div_styling[i].style.alignItems="left";
  div_styling[i].style.textAlign="left";
  div_styling[i].style.color="darkmagenta";
  div_styling[i].style.backgroundColor="aliceblue";
  div_styling[i].style.fontSize="25px";
  div_styling[i].style.margin="auto auto auto auto";
  div_styling[i].style.border="2px solid burlywood";
  div_styling[i].style.fontFamily="'Courier New', Courier, monospace";
  div_styling[i].style.borderRadius="20px";
}

// button tag styling
btn_tag.style.color="darkmagenta";
btn_tag.style.borderStyle="groove";
btn_tag.style.backgroundColor="aliceblue";
btn_tag.style.textAlign="center";
btn_tag.style.display="inline-block";
btn_tag.style.fontSize="20px";
btn_tag.style.size="20px";
btn_tag.style.borderRadius="10%";

}

// Function to find Text. 
  function FindNext () {
    var str = document.getElementById ("findInput").value;
    if (str == "") {
        alert ("Please enter some text to search!");
        return;
    }
    
    if (window.find) {        
        var found = window.find (str);
        if (!found) {
            alert ("The following text was not found:\n" + str);
        }
    }
    else {
        alert ("Your browser does not support this example!");
    }
    
}


// Function to display data on the browser.
function display_data(){
    let arr=["first","second","third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth"];
    let count=1;
    for(let i=0; i<arr.length;i++){     
            document.getElementById(arr[i]).innerHTML= 
             `${count++}. Book Name:${book_name[i]}<br/>ISBN:${book_isbn[i]}<br/> Number of pages:${book_numberofpages[i]}<br/> Authors:${book_authors[i]}<br/> Publihshers:${book_publishers_name[i]}<br/> Released Date:${book_Released_date[i]}<br/> `;
          }
}

// Function to fetch data from API.
async function Fetch_data(url) {
  let data = await fetch(url);
  if (data.ok) {
    return data.json();
  } else {
    return data.status;
  }
}


// call create_element function to create HTML elements using DOM.
create_html_element();
// call to add style to HTML elements.
add_style();
// calling fetch_data function to get data from the API.
Fetch_data(url)
  .then(function (value) {
    for(var i=0;i<value.length;i++){
        try{
            book_name.push(value[i].name);
            book_isbn.push(value[i].isbn);
            book_numberofpages.push(value[i].numberOfPages);
            book_authors.push(value[i].authors);
            book_publishers_name.push(value[i].publisher);
            book_Released_date.push(value[i].released);
            book_characters_url.push(value[i].characters);
            
            }
        catch(e){
                alert ("Error in calling API" );
                }
            } 

            // get characters five urls and store in book_chars
            for(let i=0;i<book_characters_url.length;i++){

              for(let j=0;j<5;j++){
                  book_chars.push(book_characters_url[i][j]);
              }
              
          }
           
          
    // calling display_data function
    display_data();
    
})
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("fetch() worked successfully !");
  });

  
