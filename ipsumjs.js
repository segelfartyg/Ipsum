
// VARIABLES

var input1;

let Samuel = "Samuel"; 
paragraphchosen = false;
var pinfo = document.getElementById("descr");
var input11;
var error = false;
var parts4 = document.getElementsByClassName("parts4");
var parts3 = document.getElementById("samuelpic");
var parts = document.getElementsByClassName("parts");
// VARIABLES CONTAINING VERBS AND NOUNS FROM SEPARATE JS FILES

const nouns = _nouns;
const verbs = _verbs; 


// SAVES PARAGRAPH INPUT IN VARIABLE AND MANIPULATES IT WITH FURTHER FUNCTIONS, BEFORE SHOWING RESULT IN TEXTBOX PARAGRAPH

function OnClickFunction()
{

input1 = document.getElementById("paragraph1");

var input2 = WhichTextBox();


if(paragraphchosen)
{


    pinfo.style.color = "rgb(250, 162, 0)";
    pinfo.innerHTML = "PRESS SAMUEL TO AMPLIFY IPSUM";


    var Textbox = document.getElementById("textbox");
    Textbox.innerHTML = "(This is where your text will be generated)";
 
    Textbox.style.fontWeight = "bold";

    parts4[0].style.display = "none";

    parts4[0].style.animation = "back 5s forwards";
    parts[0].style.animation = "back 5s forwards";
            parts[1].style.animation = "back 5s forwards";
            parts3.style.animation = "back 5s forwards";
    
    input1.value = 0;
    Samuel = "Samuel";
    input2.value = "";
    paragraphchosen = false;
    DeHoverEffect();    
}
else
{
            if(input1.value > 0)
            {

                if(input2.value.length > 0 && input2.value.length < 15)
                {
                var str = input2.value;
                str = str[0].toUpperCase() + str.slice(1);
                Samuel = str; 
                }


            Textbox = document.getElementById("textbox");
            Textbox.innerHTML = "";
            Textbox.style.fontWeight = "normal";
            Textbox.innerHTML = CalcText(input1.value);

            var border = document.getElementById("samuelpic")


            border.src="ipsumsource/samuel111.png";
            
            parts4[0].style.display = "block";
            parts4[0].style.animation = "error 1s forwards";
            parts4[0].style.animation = "flyin 1s forwards";

                setTimeout(() => {
                    parts4[0].style.animation = "none";
                    parts4[0].style.animation = "error 1s forwards";

                }, 1000);

            parts[0].style.animation = "error  1s forwards";
            parts[1].style.animation = "error  1s forwards";
            parts3.style.animation = "error 1s forwards";
     
            pinfo.style.color = "green";
            pinfo.innerHTML = "HAVE A NICE DAY. PRESS SAMUEL TO GENERATE AGAIN";
           
            paragraphchosen = true;

            }
            else
            {
            Textbox = document.getElementById("textbox");
            //Textbox.innerHTML = "(Please select number of paragraphs before asking Samuel to amplify ispum)";
            Textbox.style.fontWeight = "bold";
            input11 = document.getElementsByClassName("input1");
       
            
               

                if(error){
                    
                    input11[0].style.animation = "shake 1s forwards";
                   
                    
                }
                else{

                    for(var i = 0; i < input11.length; i++){

                        input11[i].style.animation = "dance 0.75s forwards";
                       
                    }


                }
                
                setTimeout(() => {
                    input11[0].style.animation = "red 0.1s forwards"; 
                
            error = true;
                }, 750);



            }
}

}
// CALCULATES EACH PARAGRAPH THROUGH FOR-LOOPS, AND CREATING THEM FOR THE SPECIFIED PARAGRAPHS

function CalcText(_paragraphs)
{

    var result = " ";
    for(var i = 0; i < _paragraphs; i++)
    {
   
		var pl = ParagraphLength()
		
        for(var j = 0; j < pl; j++)
        {
                var verb = verbs[RandomVerb()].indicative.present[2];
        		var noun = nouns[RandomNoun()];


            result = result + " " + Samuel + " " + verb + " " + noun + ".";
            
        }
        result = result + "<br/>" + "<br/>";    
    }
    return result;
}

// GENERATES A RANDOM LENGTH FOR EACH PARAGRAPH 

function ParagraphLength()
{
    let plength = Math.floor(Math.random() * 30) + 10;
    return plength;
}


// FUNCTION FOR CHANGING THE PAGE WHEN HOVERING THE PICTURE

function HoverEffect()
{
    if(!paragraphchosen)
    {
    var border = document.getElementById("samuelpic")
    border.src="ipsumsource/samuelnot.png";
    }
}


// FUNCTION FOR CHANGING BACK THE PICTURE WHEN MOVING AWAY FROM IT WITH THE CURSOR

function DeHoverEffect()
{
    if(!paragraphchosen)
    {
    var border = document.getElementById("samuelpic")
    border.src="ipsumsource/samueloil.png";
    }
}


// FUNCTION FOR GENERATING A RANDOM NUMBER TO CHOOSE SPECIFIK VERB OR NOUN

function RandomVerb()
{
    let plength = Math.floor(Math.random() * 634);
    return plength;
}

function RandomNoun()
{
    let plength = Math.floor(Math.random() * 993);
    return plength;
}


function WhichTextBox()
{

var first = document.getElementById("name1");
var second = document.getElementById("name2");

if(first.value > second){
    return first;
}
else{
    return second;
}

}






//       |D
//      /|\
//     / | \
//    /  |  \
//   /___|___\
//  <=========> ==========
//   \_______/  ||SAMUEL||

