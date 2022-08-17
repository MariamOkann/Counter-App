let count = 0

    let output = document.getElementById('increament')
    let saveEl = document.getElementById('save-el')

    function increamentbutton(){
        count += 1
        output.innerHTML = count
    }
    function decrease(){
        count -=1
        output.innerHTML=count
    }
    function save(){
        saveVar= (' '+ count +' '+ '- ')
        console.log(saveVar)
        saveEl.textContent += saveVar
        console.log(count)
        count = 0
        output.textContent = 0 
    }