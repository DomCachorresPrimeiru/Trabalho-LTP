let json ="https://www.luizpicolo.com.br/api.json";
let XHR = new XMLHttpRequest();


XHR.open("GET",json);
XHR.responstype = "JSON"
XHR.send()

 XHR.onload= function() {
	 let noticias = XHR.response;
	 
 class Noticia{
  constconstructor(titulo, Data_de_publicação, resumo, autor){
    this.titulo = titulo,
    this.Data_de_publicação = Data_de_publicação,
    this.resumo = resumo,
    this.autor = autor
	
  }
mostrarNoticia(){
    return ` <div class="bodypricipal">
             <div class="bodynoticia"
            <h1 class=tituloNoticia>${this.titulo}</h1> 
            <h2>${this.Data_de_publicação} <h2> 
            <h3>${this.resumo}</h3>
            <p>${this.autor}</p> 
           </div>
           </div>
`;
  }
}

	 class NoticiaDestaque extends Noticia{
	constructor(titulo, Data_de_publicação, resumo, autor, imagem){
		super(titulo, Data_de_publicação, resumo, autor)

		this.imagem = imagem;
		
    
	}
		 mostrarPricipal(){
    return ` <div class="bodypricipal">
             <div class="bodynoticia">
            <img src="${this.imagem}" id="img"/>
            <h1 class=tituloNoticia>${this.titulo}</h1> 
            <h2>${this.Data_de_publicação} <h2> 
            <h3>${this.resumo}</h3>
            <p>${this.autor}</p> 
           </div>
           </div>
`;
  }
}
	
  const elemento = document.getElementById('Noticia');
		 
 let noticiaDestaque = new NoticiaDestaque(
    noticias.articles[0].urlToImage,
     noticias.articles[0].publishedAt,
    noticias.articles[0].url,
    noticias.articles[0].title,
    noticias.articles[0].author,
   noticias.articles[0].description);
	 
  elemento.insertAdjacentHTML('afterbegin', noticiaDestaque.mostrarNoticia());
	 
 console.log(noticiaDestaque);

  noticias.articles.forEach(noticia =>{
    let noticiaNova = new Noticia(noticia.title ,noticia.name, noticia.publishedAt, noticia.url, noticia.title, noticia.author);
    local.insertAdjacentHTML('beforeend', noticiaNova. mostrarPricipal() );
    console.log(noticia)
  })
  
};