async function display(){
  let pokemon=await fetch(`https://pokeapi.co/api/v2/pokemon`)
let pokemon_name=await pokemon.json()
// console.log(pokemon_name)
var dis_cont=document.getElementById("tab");
let pokemon_local=localStorage.getItem("pk")?JSON.parse(localStorage.getItem("pk")):[];
if(pokemon_local.length==0){
  pokemon_name.results.forEach(e => {
      var cont_div=document.createElement("div")
      cont_div.setAttribute("id","dis_cont")
      var  pokemon_name_dis=document.createElement("b")
      pokemon_name_dis.innerText=e.name;
      cont_div.append(pokemon_name_dis)
      dis_cont.append(cont_div)
      pokemon_local.push(e.name)
      localStorage.setItem("pk",JSON.stringify(pokemon_local))
  });
 
  
}
else{
  // dis_cont.innerHTML=""
  // console.log(pokemon_local)
  pokemon_local.forEach(e => {
      var cont_div=document.createElement("div")
      cont_div.setAttribute("id","dis_cont")
      var  pokemon_name_dis=document.createElement("b")
      pokemon_name_dis.innerText=e;
      cont_div.append(pokemon_name_dis)
      dis_cont.append(cont_div)
  });
}
}
display()


function get() {





} 