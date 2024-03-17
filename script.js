document.getElementById("Name").onclick = function(){
    let fullName = "Waseem Abbas";
    alert(fullName)
    let statement = "alert ('Waseem Abbas')"
    document.getElementById("Statement").innerHTML = statement;
}
document.getElementById("Number").onclick = function(){
    alert(123)
    let statement = "alert (0123456789)"
    document.getElementById("Statement").innerHTML = statement;
}
document.getElementById("Variable").onclick = function(){
    let html = "<ul><li> A variable name can't contain any space.</li><li> A variable name can only letter, number, dollar sign and underscore.</li><li> Thought a variable name can't be any of javaScript's keywords, it can contain keywords For example,<code> user alert</code> and<code> myvar</code> are legal</li> <li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>, if you assign the string Floribundas to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty.</li>"
    document.getElementById("Statement").innerHTML =""
    document.getElementById("output").innerHTML = html;
}
document.getElementById("camelCase").onclick =function(){
    let html ="<h3>Examples</h3> <ul> <li><code>user</code></li> <li><code>userResponse</code></li> <li><code>userResponseTime</code></li> <li><code>userResponseTimeLimit</code></li> </ul>"
    document.getElementById("Statement").innerHTML =""
    document.getElementById("output").innerHTML = html 
}
document.getElementById("Sum").onclick = function(){
    let num1 = 10
    let num2 = 5
    let sum = num1 + num2
    document.getElementById("output").innerHTML = "<p class='text-center'>" + sum +  "</p>"
    let statement = "<p class='text-center'>let num1 =" + num1 + ";<br>let num2 =" + num2 + ";<br>let sum = num1 + num2; </p>"
    document.getElementById("Statement").innerHTML = statement
}
document.getElementById("Subsctract").onclick = function(){
    let num1 = 10
    let num2 = 5
    let subsctract = num1 - num2
    document.getElementById("output").innerHTML = "<p class='text-center'>" + subsctract +  "</p>"
    let statement = "<p class='text-center'> let num1 =" + num1 + ";<br>let num2 =" + num2 + ";<br>let subsctract = num1 - num2; </p>"
    document.getElementById("Statement").innerHTML = statement
}
document.getElementById("Multiply").onclick = function(){
    let num1 = 10
    let num2 = 5
    let multiply = num1 * num2
    document.getElementById("output").innerHTML = "<p class='text-center'>" + multiply +  "</p>"
    let statement = "<p class='text-center'>let num1 =" + num1 + ";<br>let num2 =" + num2 + ";<br>let multiply = num1 * num2;</p>"
    document.getElementById("Statement").innerHTML = statement
}
document.getElementById("Divide").onclick = function(){
    let num1 = 10
    let num2 = 5
    let divide = num1 / num2
    document.getElementById("output").innerHTML = "<p class='text-center'>" + divide +  "</p>"
    let statement = "<p class='text-center'>let num1 =" + num1 + ";<br>let num2 =" + num2 + ";<br>let divide = num1 / num2; </p>"
    document.getElementById("Statement").innerHTML = statement
}
document.getElementById("Calculate").onclick = function(){
    var calculate = 36 / 6 * 3 + 2 ** 4 -(3+5);
    document.getElementById("output").innerHTML ="<p class='text-center'>"+ calculate +"</p>"
    let statement = "let calculate = 36 / 6 * 3 + 2 ** 4 -(3+5);"
    document.getElementById("Statement").innerHTML = statement
}
document.getElementById("clearStatement").onclick = function(){
    document.getElementById("Statement").innerHTML =""
}
document.getElementById("clearOutput").onclick = function(){
    document.getElementById("output").innerHTML =""
}