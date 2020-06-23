// chap 21-25

// task 1

var fName, lName
fName = prompt("enter first name ")
lName = prompt("enter last name ")
var fullName = fName + " " + lName
document.write("<br> Good Day " + fullName)

// task 2

var ph = prompt("enter your favourite mobile phone model ")
document.write("<br> My favourite phone is: " + ph)
document.write("<br> length of string: " + ph.length)

// task 3

var s = "Pakistani"
i = s.indexOf("n")
document.write("<br>string: " + s)
document.write("<br>index of 'n': " + i)

// task 4

var h = 'Hello World'
i = h.lastIndexOf("l")
document.write("<br>string: " + h)
document.write("<br>Last index of 'l': " + i)

// task 5

var s = "Pakistani"
var c = s.charAt(3)
document.write("<br>string: " + s)
document.write("<br>character at index 3: " + c)

// task 6

var fName, lName
fName = prompt("enter first name ")
lName = prompt("enter last name ")
var fullName = fName.concat(" ",lName)
document.write("<br> Good Day " + fullName)

// task 7

var c = "Hyderabad"
var a = c.replace("Hyder", "Islam")
document.write("<br>City: " + c)
document.write("<br>After replacement: " + a)

// task 8

var message = "Ali and Sami are best friends. They play cricket and football together"
var m = message.replace(/and/g,"&")
document.write("<br>" + m)

// task 9

var n = '472'
document.write("<br>value: " + n)
document.write("<br>type: " + typeof n) 
document.write("<br>value: " + Number(n))
document.write("<br>type: " + typeof Number(n))

// task 10

var a = prompt("enter any word")
b = a.toUpperCase()
document.write("<br>user input: " + a)
document.write("<br>upper case: " + b)

// task 11

var a = prompt("enter any word")
var fCh = a.charAt(0)
fCh = fCh.toUpperCase()
var aCh = a.slice(1)
aCh = aCh.toLowerCase()
var w = fCh.concat(aCh) 
document.write("<br>user input: " + a)
document.write("<br>title case: " + w)

// task 12

var num = 35.36
var s = String(num)
for(var i = 0; i <= 4; i++)
{
    if(s[i] === ".")
    {
        s = s.replace(".","")
    }
    
}
document.write("<br>Number: " + num)
document.write("<br>result: " + s)

// task 13
// codes of ! . , @
var f = 'n'
var u = prompt("enter username: ")

for(var i = 0; i < u.length; i++)
{
    if(u.charCodeAt(i) === 33 )
    {
        f = 'y'
        alert("please enter a valid username ")
    }
    else if(u.charCodeAt(i) === 44 )
    {
        f = 'y'
        alert("please enter a valid username ")
    }
    else if(u.charCodeAt(i) === 46 )
    {
        f = 'y'
        alert("please enter a valid username ")
    }
    else if(u.charCodeAt(i) === 64 )
    {
        f = 'y'
        alert("please enter a valid username ")
    }
}
if(f == 'n'){
document.write(u)
}

// task 14

var a = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var b = prompt('search bakery item: ')
b = b.toLowerCase()
var flag = false
for(var i=0; i<a.length; i++)
{
    if(a[i] === b)
    {
        flag = true
        document.write("<br>" + b + " is available at index " + i + " in our bakery ")
    }
}
if(flag === false)
{
    document.write("<br>Sorry! " + b + " is not available in our bakery ")
}

// task 15

var alph = 'no', num = 'no'
var p = prompt("enter password: ")
for(var i = 0; i < p.length; i++)
{
    
    for(var j = 48; j <= 57; j++)
    {
        if(p.charCodeAt(i) === j)
        {

            num = 'yes'
        }
        
    }
}
    
for(var a = 0; a < p.length; a++)
{
    for(k = 97; k <= 122; k++)
    {
        if(p.charCodeAt(a) === k)
        {
            alph = 'yes'
        }
        
    }
}

if(p.length < 6)
    {
        document.write('<br>entered password: ' + p)
        document.write('<br>password cannot be less than 6 characters')
        document.write('<br>please enter a valid password')
    }
else if(alph === 'no')
{
    document.write('<br>entered password: ' + p)
    document.write('<br>password must have alphabets ')
    document.write('<br>please enter a valid password')
    
}
else if(num === 'yes')
{
    document.write('<br>entered password: ' + p)
    document.write('<br>password cannot be started with a number')
    document.write('<br>please enter a valid password')
    
}

// task 16

var university = 'University of Karachi'
var arr = university.split('')
for(i = 0; i < arr.length; i++)
{
document.write("<br>" + arr[i])
}

// task 17

var s = "Pakistan"
document.write("<br>user input: " + s)
document.write("<br>last character of input: " + s[s.length-1])

// task 18

var a =  'The quick brown fox jumps over the lazy dog', c = 0
a = a.toLowerCase()
for(i = 0; i < a.length; i++)
{
    if(a.slice(i,i + 3) === 'the')
    {
        c += 1
    }
}
document.write("<br>text: " + a)
document.write("<br>there are " + c + " occurrences of the word" )

ch 26-30

// task 1

var n = prompt('enter positive float num ')
var r = Math.round(n)
var f = Math.floor(n)
var c = Math.ceil(n)
document.write("<br>number: " + n)
document.write("<br>round off value : " + r)
document.write("<br>floor value: " + f)
document.write("<br>ceil value: " + c)


// task 2

var n = prompt('enter negative float num ')
var r = Math.round(n)
var f = Math.floor(n)
var c = Math.ceil(n)
document.write("<br>number: " + n)
document.write("<br>round off value : " + r)
document.write("<br>floor value: " + f)
document.write("<br>ceil value: " + c)

// task 3

var n = -5
var a = Math.abs(n)
document.write("<br>absolute value of " + n + " is " + a)

// task 4

var d = Math.random()
var i = (d*6)+1
var n = Math.floor(i)
document.write("<br>" + d)
document.write("<br>" + i)
document.write("<br>random dice value " + n)

// task 5

var a = Math.random()
var b = (a*2)+1
var c = Math.floor(b)
if(c === 1)
{
    document.write("<br>" + c)
    document.write("<br>random coin value: Tails")
}
else if(c === 2)
{
    document.write("<br>" + c)
    document.write("<br>random coin value: Heads")
}

// task 6

var a = Math.random()
var b = (a * 100) + 1
var c = Math.floor(b)
document.write("<br> random number between 1 and 100: " + c)

// task 7

var w = prompt('enter your weight in kilograms ')
for(i = 0; i < w.length; i++)
{
    if(w[i] === 'k' || w[i] === 'K')
    {
        var w2 = w.slice(i, i.length) 
        var w3 = w2.replace(w2,'kilograms')
        w = w.replace(w2,w3)
    }
}
document.write("<br> the weight of user is: " + w)

// task 8

var secret = Math.random()
secret = (secret*10)+1
secret = Math.floor(secret)
var u = +prompt('enter number ')
if(u === secret)
{
    document.write("<br>Congrats ")
}
else
{
    document.write("<br>try again " + secret)
}

ch 31-34

// task 1

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var d = new Date()

var day = d.getDay()
var m = d.getMonth()
var date = d.getDate()
var y = d.getFullYear()
var hr = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()

document.write("<br> " + dayNames[day] + ' ' + months[m] + ' ' + date + ' ' + y + ' ' + hr + ':' + min + ':' + sec + ' GMT + 0500 (PKT)')

// task 2

var months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
var d = new Date()
var m = d.getMonth()

alert('current month: ' + months[m])

// task 3

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var d = new Date()
var day = d.getDay()

alert('Today is ' + dayNames[day])

// task 4

var d = new Date()
var day = d.getDay()

if(day === 6 || day === 0)
{
    alert("It's Fun Day")
}

// task 5

var d = new Date()
var date = d.getDate()

if(date < 16 )
{
    document.write("First fifteen days of the month")
}
else
{
    document.write("Last fifteen days of the month")
}

// task 6

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

var d = new Date()

var day = d.getDay()
var m = d.getMonth()
var date = d.getDate()
var y = d.getFullYear()
var hr = d.getHours()
var min = d.getMinutes()
var sec = d.getSeconds()

var ms = d.getTime()

document.write("<br>Current date: " + dayNames[day] + ' ' + months[m] + ' ' + date + ' ' + y + ' ' + hr + ':' + min + ':' + sec + ' GMT + 0500 (PKT)')
document.write("<br>Elapsed miliseconds since Jan 01, 1970: " + ms)
document.write("<br>Elapsed minutes since Jan 01, 1970: " + ms/(1000*60))

// task 7

var d = new Date()
var hr = d.getHours()

if(hr > 0 && hr < 12)
{
    document.write("<br> It's AM")
}
else{
    document.write("<br> It's PM")
}

// task 8

var laterDate = new Date("December 31, 2020 00:00:00")

document.write("<br>" + laterDate)

// task 9

var Ramzan = new Date("June 18, 2015")
var t = Ramzan.getTime()

var Today = new Date()
var T = Today.getTime()

var diff = T - t
var days = diff/(1000*60*60*24) 
days = Math.floor(days)

document.write("<br>" + days + " days have passed since 1st Ramzan, 2015")

// task 10

var reff = new Date("Dec 05, 2015 22:50:16")
var T = reff.getTime()

var begg = new Date("Jan 01, 2015 00:00:00")
var t = begg.getTime()

var diff = T - t
diff = diff/1000

document.write("<br> On reference date " + reff + ",<br> " + diff + " seconds had passed since beginning of 2015")

// task 11

var today = new Date()
var hr = today.getHours()

var before = new Date()
before.setHours(hr-1)

document.write("<br>Current date: " + today)
document.write("<br>1 hour ago: " + before)

// task 12

var today = new Date()
var yr = today.getFullYear()

var before = new Date()
before.setFullYear(yr-100)

document.write("<br>Current date: " + today)
alert("100 years back: " + before)

// task 13

var age = prompt("what's your age?")
var d = new Date()
var yr = d.getFullYear()
var birth = yr - age

document.write("<br>Your age is: " + age)
document.write("<br>Your birth year is: " + birth)

// task 14

var Customer = "waleed"
var d = new Date()
var m = d.getMonth()
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
var units = 200
var perUnit = 16
var late = 350
var net = units*perUnit
var Gross = late+net

document.write("<br><h1>K-Electric Bill </h1> ")
document.write("<br>Customer name: " + Customer )
document.write("<br>Current month: " + months[m] )
document.write("<br>Number of units: " + units )
document.write("<br>Charges per unit: " + perUnit )
document.write("<br><br>Net Amount Payable (within Due Date) " + net)
document.write("<br>Late Payment Surcharge: " + late )
document.write("<br>Gross Amount Payable (after Due Date): " + Gross )

chap 35-38

// task 1

function showDate()
{
    var d = new Date()
    document.write("<br>" + d)
}

showDate()

// task 2

function greet(f,l)
{
    document.write("<br>Good day " + f + " " + l)   
}

greet('waleed','ali')

// task 3

function sum(a,b)
{
    c = a + b
    document.write("<br>" + c)      
}

sum(77,23)

// task 4

function calc(a,op,b)
{
    if(op === '+')
    {
        c = a + b
        document.write(c)
    }
    else if(op === '-')
    {
        c = a - b
        document.write(c)
    }
    else if(op === '*')
    {
        c = a * b
        document.write(c)
    }
    else if(op === '/')
    {
        c = a / b
        document.write(c)
    }
    else if(op === '%')
    {
        c = a % b
        document.write("<br>" + c)
    }
}

calc(4,'%',8)

// task 5

function sqr(x)
{
    y = Math.pow(x,2)
    document.write("<br>" + y)
}

sqr(3)

// task 6

function fact(a)
{   
    var b = a
    for(var i = a-1; i > 0; i--)
    {
        var b = b * i
        
    }
    document.write("<br>factorial of " + "<b>" + a + "</b>" + " is " + "<b>" + b + "</b>")
}

fact(7)

// task 7

function count(a,b)
{
    if(a < b){
    for(i = a; i <= b; i++)
    {
        document.write("<br>" + i)
    }}
    else if(a > b){
    for(i = a; i >= b; i--)
    {
        document.write("<br>" + i)
    }}
}

count(2,29)

// task 8

function  calculateHypotenuse(b,p)
{
    function calculateSquare(x)
    {
        y = Math.pow(x,2)
     return y   
    }

    h = calculateSquare(b) + calculateSquare(p)
    h = calculateSquare(h)
    c
}

calculateHypotenuse(2,2)

// task 9

function area(w,h)
{
    a = w*h
    return a
 
}

var A = area(5,5)
document.write("<br>area: " + A)

// task 10

function pal(a)
{
    var b=0
    for(var i = 0; i < a.length; i++ )
    {
        if(a[i] === a[a.length-1-i])
        {
            b++
            var flag = b
        }
    }
    if(flag === a.length)
    {
        document.write("<br> palindrome")
    }
    else{
        document.write("<br>not palindrome")}
}

pal('madam')

// task 11

function upp(a)
{
    var b = a.split(" ")
    var c = []
    for(var i=0; i<b.length; i++)
    {
        c.push(b[i].charAt(0).toUpperCase() + b[i].slice(1) )
        document.write(" " + c[i])
    }
    
    
}

upp("the quick brown fox")

// task 12

function long(text)
{

    var arrOfText = text.split(' ')
    for(var i = 0; i < arrOfText.length; i++)
    {
        for(var j = i+1; j < arrOfText.length; j++)
        {
            if(arrOfText[i].length < arrOfText[j].length)
            {
                var temp = arrOfText[j]
                arrOfText[j] = arrOfText[i]
                arrOfText[i] = temp
            }
        }
        
    }
    var longest = arrOfText[0]
    document.write("<br>longest text is: " + longest)
}

long( "Web Development Tutorial")

//  task 13

function numOfOccurences(a,b)
{

    var occ = 0
    a = a.toLowerCase()
    for(i = 0; i < a.length; i++ )
    {
        if(a[i] === b)
        {
            occ += 1
        }
    }
    if(occ === 0)
    {
        document.write("<br>letter not found ")   
    }
    else{
        document.write("<br>number of occurences: " + occ)
    }
}

numOfOccurences('heybrother','e')

// task 14

function calcCircumference(r)
{
    var c = 2*(3.142)*r
    document.write("<br>Circumference is: " + c)
}

calcCircumference(3)

function calcArea(r)
{
    var a = (3.142)*Math.pow(r,2)
    document.write("<br>Area is circle: " + a)
}

calcArea(2)