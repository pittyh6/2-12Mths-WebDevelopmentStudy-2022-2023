# Web Developer Study
## 12 months web developer study. I decided to dedicate at least 12 months to learn web development.

![Begin Banner](Documentation/top-1200x350.gif)

* Online courses, challenges and creation of my own projects.

## What I learned/used 
### JQuery 
* JQuery
    * add to html file
        * script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script
    * selectors
        * $('') or $("")
            * $('h1') //for tags
            * $('#nameId') //for ID
            * $('.nameClass') //for CLASS
            * $('h1#heading')
            * inner selectors
                * $('p span')
            * $('ul#list li')// ul which has an id = list
            * :first
            * :last
            * :nth(positionElement)
            * nth-child(3n)//every 3 element is going to be changed
            * :event
            * :odd
            * type
                * :button
                * :submit
                * :text
            * attributes
                * $('[attributeName]')
                    * $('[href]')
            * attribute value
                * $('a[href="link"]')
            * $('*') //everything    
        * this
            * $(this)...... // used in focus  example. Whatever was clicked, that on was selected.  
    * Methods
        * .hide()
        * show()
        * toggle()
        * .fadeOut()
        * .fadeIn()
        * .css('property','value')
            * .css('color', 'red')
        * val() //for the value
        * preventDefault()
     * Events Mouse
        * on('theAction', function(){...})
            $('#btn').on('click',function(){....})
        * click(function(){.....})
        * click(function(e){...}) //get the information about the element
            * e //return everything
            * e.currentTarget// return the element itself
            * e.currentTarget.id //return the id
            * e.currentTarget.innerHTML //return the html text
        * dblclick(function(){.....})
        * hover() //mouseenter()+ mouseleave()
        * mouseenter()
        * mouseleave()
        * mousemove()
        * mouseup()
        * mousedown()
        * focus()
        * blur // the oposite to focus()
        * keyup
        * change() //The change event is sent to an element when its value changes.
        * submit //The submit event is sent to an element when the user is attempting to submit a form.
    * .ready()//run when document is ready
        * $(document).ready(function(){....})


![End Banner](Documentation/botton-1200x350.gif)