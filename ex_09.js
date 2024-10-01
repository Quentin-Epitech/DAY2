const div = []
function operation(a,b,cal){
		let vre=a + cal + b
    vre.toString()
    div.push(vre)
    
}
operation(23,98,"-")
console.log(div[0])
