/** 
<<<<<<< HEAD
 * 1. Implemente uma função que troque a cor de fundo da página, modificando o background-color do body */
function alterarFundo(cor) {
    let fundo = document.querySelector("body")
    fundo.style.backgroundColor = cor;
}
 
 /* 2. Implemente uma função que troque a fonte dos títulos da página (se limite à fontes de sistema para simplificação) */
function alterarTitulo(fonte) {
    let titulos = document.querySelectorAll("h2")
    titulos.forEach(titulos => {
        titulos.style.fontFamily = fonte;
    })
}

 /* 3. Implemente uma função que remove a seção de meta informações dos artigos (autor, data de publicação, comentários) */
function removerMeta() {
    let meta = document.querySelectorAll(".meta")
    meta.forEach(metas => {
        metas.remove()
    })
}

 /* 4. Implemente uma função que insira um emoji, passado via parâmetro, antes de todos os primeiros parágrafos dos artigos */
function inserirEmoji(emoji) {
    const artigos = document.querySelectorAll("article");
 
    artigos.forEach(artigo => {
        const primeiroParagrafo = artigo.querySelector("p");
 
         primeiroParagrafo.textContent = emoji + " " + primeiroParagrafo.textContent;
    });
}

 /* 5. Implemente uma função que insira um aviso, no topo da listagem de artigos:
 *		<div class="alert">
 *			<p>⚠️ Atenção: os textos abaixos são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programção. Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.</p>
 * 		</div> 
=======
 * 1. Implemente uma função que troque a cor de fundo da página, modificando o background-color do body
 * 2. Implemente uma função que troque a fonte dos títulos da página (se limite à fontes de sistema para simplificação)
 * 3. Implemente uma função que remove a seção de meta informações dos artigos (autor, data de publicação, comentários)
 * 4. Implemente uma função que insira um emoji, passado via parâmetro, antes de todos os primeiros parágrafos dos artigos
 * 5. Implemente uma função que insira um aviso, no topo da listagem de artigos:
 * 
 *	<div class="alert">
 *		<p>⚠️ Atenção: os textos abaixos são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programção. Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.</p>
 *	</div> 
>>>>>>> e47ef42a01f2484867a41553c177a5d4c584c8d1
 */

 function adicionarAviso(){
    let artigo = document.querySelectorAll("article")
 
    let texto = `
    <div class="alert">
            <p>⚠️ Atenção: os textos abaixos são excertos gerados com IA apenas porque são exemplos de preenchimento para uma atividade de programção. Leia, escreva, estude: não terceirize sua humanidade para uma máquina espertinha de autocompletar.</p>
    </div>
    `
   
    artigo.forEach(art =>{
        art.insertAdjacentHTML("beforebegin", texto)
    })
 
}
 
alteraFundo()
alteraTitulos("Arial");
removeMeta()
inserirEmoji("❤️")
adicionarAviso()
