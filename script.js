function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/avatar-light.png")
    img.setAttribute("alt", 'Foto de perfil 1')
  }else{
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "Foto de perfil 2")
  }
}
/* explicação da alteração da imagem ao final */

/* Primeira maneira de ser feito:
  function toogleMode(){
    const html = document.documentElement;
    if(html.classList.contains('light')){
      html.classList.remove('light')
    }else{
      html.classList.add('light')
  }
}
1 - função com nome padrão
2 - constante = variavel
3 - pega todo o html e analisa os seus elementos (document.documentElement)
4 - se no html, tiver (contains) uma classe (classList) chamada "light" = no html, dentre as classes, aquela chamada "light" será removida (remove)
5 - se não tiver, então será adicionada (add)
 */

/* Segunda maneira de ser feito: é o jeito que eu deixei finalizado
 1 - criar a function
2 - criar a variavel
3 - atribuir a propriedade "toggle"
essa propriedade automaticamente ja identifica a presença ou ausencia da classe (classList) "light" e adiciona ou remove conforme o necessário */

/* alterar imagem:
crie uma condição
se (if) no html conter (contain) na lista de classes (classList) a classe 'light', atribuir (setAttribute) a imagem (img), utilizando src para localizar ela
se não, atribuir a outra imagem */
