function toggleMode() {
  const html = document.documentElement
 // if (html.classList.contains('light')) {
 //  html.classList.remove('light')
 // } else {
 //  html.classList.add('light')
 // } Isso acima é a mesma coisa que a em baixo 
 html.classList.toggle("light")

 
 // pegar a tag img
 const img = document.querySelector("#profile img")
 //subistituir a imagem
if(html.classList.contains("light"))
 // se tiver light mode, adicionar a img light
img.setAttribute("src", "./Mobile/avatar-light.png")
// se nao tiver, manter img normal
else {
img.setAttribute("src", "./Mobile/Avatar.png")
} 

}
