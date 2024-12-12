//Pseudocode

//Begin call the function
Function GenerateNameTag(names, role):

//fun decorative border
border = "******************"

//alignment the name, role and border's width
maxWidth = Length(border) - 4 // Adjust for padding
centeredName = CenterAlign(names, maxWidth)
centerRole = CenterAlign(role, maxWidth)

//create the name tag with borders and centered text
nameTag = border + "*\n" + 

         "* " + centeredNames + "*\n"+
 
         "* " + centeredRole + "*\n"+
         border

Return nameTag
End Function



**************************************

* Allen Otero

*Production Specialist

**************************************







 'use strict'

function GenerateNameTag(names, role){
    //decorative fun border
    const border = "********************************";

    //calculate the maxium width for text aligment
    const maxWidth = border.length - 4; // padding adjustment

    //center aling the names and role within the border's width
    const centeredName = CenterAlign(names, maxWidth);
    const centeredRole = CenterAlign(role, maxWidth);

    //Create the name tag with borders and center text
    const nameTag = `${border} \n`+
                    `* ${centeredName} *\n` +
                    `* ${centeredRole} *\n` +
                    `* ${border}`;
                    
    return nameTag;
}

function CenterAlign(text, width){
    //padding for both sides to center the text
    constPadding = Math.max(0, (width- text.lenght)/2);
    const leftPadding =" ".repeat(Math.floor(padding));

    return leftPadding + text + rightPadding;
}

// Example 
 const names = "Allen Otero";
 const role = "Production Specialist";
 const nameTag = generateNameTag(names, role);
 console.log(nameTag)


 const names = "Kenny Dunn";
 const role = "Engineer";
 const nameTag = generateNameTag(names, role);
 console.log(nameTag)
