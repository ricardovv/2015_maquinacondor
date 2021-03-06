<!-- PHP PARA ACCESO A SITIO - - - - - - - - - - - - - - - - - - - - - - - - - - - -->
<!-- inicia sesion -->
<?php session_start(); 

if(!isset($_SESSION['UserData']['Username'])){
    header("location:index.php");
    exit;
}
?>


 
<html>
<head>

<title>-MáquinaCondor</title>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,700italic,400italic|Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
<!-- <link rel="icon" href="img/favicon.ico" type="image/x-icon">-->
<link rel="stylesheet" type="text/css" href="_css/style.css">

<script language="javascript" type="text/javascript" src="_lib/p5.js"></script>
<script language="javascript" type="text/javascript" src="_lib/p5.dom.js"></script>
<!--<script language="javascript" src="libraries/p5.sound.js"></script>-->
<!--<script language="javascript" type="text/javascript" src="scriptapi.js"></script>-->
<script language="javascript" type="text/javascript" src="script.js"></script>
<!-- <script language="javascript" type="text/javascript" src="scriptapi_money.js"></script> -->
<!-- <script language="javascript" type="text/javascript" src="scriptapi_periodico.js"></script>
 -->
 

</head>

<body>

<div id="salir"><a href="index.php">salir</a></div>
<div id="wrap">
<!-- dejar para que se abran los popups
 --><div id="cajaOverlay" onclick="cerrar()"> </div>
  <!--  <button onclick="cambiaTodo()">Cambia texto</button>solo como prueba -->


    <div id="header"> 
      <H1>Máquina Condor | Demian Schopf</H1>
      <div id="navtop">
        <a class="tooltipHeader" onclick="mostrar(1)">info</a> | <a class="tooltipHeader" onclick="mostrar(2)">artista</a>  

      </div><!--cierre navtop--> 
    </div><!-- cierre header -->

    <div id="sobreobra" class="headerSobre">
        <H2>Sobre la Obra</H2>
        <p><b>Máquina Cóndor (v 1.5)</b> es un generador de textos constituido por varios motores de búsqueda y un ‘motor de escritura’. Ahí convergen cuatro variables:
        </p> 
        <p>
        A): datos entregados por un motor de búsqueda que examina permanentemente las actualizaciones del periódico The New York Times. Ahí se rankean 369 palabras clave relacionadas con la guerra y la economía. 
        </p>
        <p>
        B): los valores de compra y venta de una selección de divisas relacionadas con países en donde hay, o hubo, guerras y conflictos políticos por motivos económicos; por ejemplo: del Dólar estadounidense respecto al Dinar iraquí, del Riyal saudí en relación a la Libra siria, del Euro en relación al Boliviano o de la Libra esterlina en relación al Peso argentino, etc. 
        </p>
        <p>
        C): un número que expresa la cantidad de personas asesinadas por drones en distintos países del medio oriente y que se inserta automáticamente en los versos generados por la máquina.
        </p>
        <p>
        D): un motor de escritura que opera con una estrofa del soneto De la Ambición Humana (1623) –de Luís de Góngora (1561-1627)– donde se insertan dinámicamente palabras del léxico de la anatomía. Esas palabras están hipervinculadas y conducen a páginas donde pueden verse: 1): los datos de las dos primeras variables (A y B) y 2): una página donde se publica regularmente la cantidad de decesos por ataques de drones (C). Conjugadas en la estrofa las palabras remiten a imágenes asociables a: i)– una disección a secas, ii)– una autopsia por muerte por envenenamiento, iii)– una necropsia por fallecimiento por esterilización y iv)– variaciones en torno al motivo del verso utilizado –incluyendo sus palabras originales– que es un memento mori y una vanitas. En los términos confluyen, a veces, la arquitectura y la anatomía ( ‘bóveda y ‘nervadura’) o ésta última y la geografía (‘cuenca’, ‘fosa’…).Las coyunturas son más de dos. No puedo enumerarlas todas. Abundan citas a otros autores; pueden ser literales o tergiversaciones: ‘tala’ en el primer caso (Gabriela Mistral) o ‘llagar’ y ‘nínfulo’ (Mistral y Nabokov respectivamente). 
        </p> 
        <p>
        La coyuntura entre el orden de las 369 palabras en el ranking y las relaciones de compra y venta de las divisas decide qué palabra se instala en qué verso. La cantidad de los muertos se agrega en secuencia. Si para Vostell las grandes esculturas del Siglo XX fueron el automóvil, el jet y el televisor, quizás las de ahora sean el smartphone, el dron y todos los objetos –servidores, satélites y cables submarinos– que constituyen la base material de internet. 
        </p> 
        <p>
        No existe, por otra parte, el azar en Máquina Cóndor. Todo es causal. Podemos imaginarla como una especie de termómetro muy exacto, como un memorial vivo o como una estructura relacional en base a nodos que están siendo modificando permanentemente por la contingencia. Ahí todo es en tiempo real, instantáneo y responde a relaciones de causa y efecto donde se conjugan, de-nuevo, la guerra y la economía, lo sigiloso del dron con el anonimato de quién desaparece incógnito en una cifra y, ante todo, la tortura con la scientĭa y la tékne y, por supuesto, bios y logos.
        </p>

        <button class="button" onclick="cerrar()">Cerrar</button>
    </div><!-- cierre sobre obra -->


    <div id="sobreartista" class="headerSobre"> 
        <H2>Sobre el Artista</H2>
        <p>              
        <b>Demian Schopf</b> nace en 1975 en Frankfurt am Main, Alemania. Es licenciado en Bellas Artes por la Universidad Arcis, Magíster en Artes por la Universidad de Chile y Doctor en Filosofía con mención en Estética y Teoría del Arte en la misma casa de estudios. Fue becario de CONICYT entre 2008 y 2012 (con Beca para Estudios de Doctorado en Chile). Obtuvo la Beca FONDART en nueve oportunidades, la beca del Servicio de Intercambio Académico Alemán --DAAD-- en dos (para realizar estudios en la Kunsthochschule für Medien en Colonia, Alemania; en los seminarios de Siegfried Zielinski y Jürgen Klauke).
        </p> 
        <p>
        Además, obtuvo una beca de Creación e Investigación Artística de la Fundación Andes (2005) y una beca de la Fundación Amigos del Arte (2006). En 2007 obtuvo el premio ALTAZOR por su obra “Máquina Cóndor”, y en 2009 uno de los premios Vida 12.0 en Madrid, otorgado por la Fundación Telefónica (por su obra “Máquina de Coser”).
        </p> 
        <p>
        En 2013 realizó una residencia en el Zentrum Für Kunst und Medientechnologie (ZKM) en Karlsruhe, Alemania. Ha expuesto sus obras en 12 exposiciones individuales en museos y galerías en Chile, Alemania, Italia, Argentina y Paraguay. Destacan: "Máquina Cóndor" (2006), Galería Gabriela Mistral, Santiago, "Los Coros Menores" (2011), Museo de Arte Contemporáneo, Santiago, “los Tíos del Diablo” (2013), Galería Patricia Ready, Santiago y "La Revolución Silenciosa" (2002) Centro Cultural de España en Buenos Aires (ICI) y en el Museo del Barro, Asunción, Paraguay y “La Nave” en 2015 en el Museo Nacional de Bellas Artes en Santiago de Chile.
        </p>
        <p>
        Ha participado en más de 40 exposiciones colectivas en galerías, museos y bienales en Alemania, Suecia, Italia, Suiza, España, Estados Unidos, Nueva Zelanda, Brasil, Argentina, Colombia, Chile, Perú y Egipto. Destacan: III Bienal del Mercosur (2002), así como muestras en el Spazio Oberdan (Milán, 2009), Kunstraum Kreuzberg / Bethanien (Berlín, 2012), el Instituto Cervantes de Nueva York (Nueva York, 2015), el Immigration Museum (Melbourne, 2015) y la National Gallery (Auckland, 2016).
        </p>
        <button class="button" onclick="cerrar()">Cerrar</button>
    </div><!-- cierre sobre artista -->

 

    <div id="poemacaja">
<!-- <a href="" id="envia" onclick="abreVentana()"> | PARA PASAR VALOR | </a> -->
      <div id="poema">
        <p> <a id="palabra1Div" onclick="abreVentana(1)" target="_parent">Mariposas</a> no sólo no <a id="palabra2Div" onclick="abreVentana(2)">cobardes</a> </p>   
        <p> mas <a id="nombreADiv">3341</a> <a id="palabra3Div" onclick="abreVentana(3)">temerarias</a> <a id="palabra4Div" onclick="abreVentana(4)">fatalmente</a> <a id="palabra5Div" onclick="abreVentana(5)">ciegas</a></p>
        <p> lo que las <a id="palabra6Div" onclick="abreVentana(6)">llamas</a> a los <a id="palabra7Div" onclick="abreVentana(7)">Fénix</a> aún le niegan</p>
        <p> quieren <a id="palabra8Div" onclick="abreVentana(8)">obstinadas</a> que a sus <a id="palabra9Div" onclick="abreVentana(9)">alas</a> guarden</p>
      </div> <!--poema -->
 


      <div id="monedas">
<!-- 
        <div id="moneda2" >Moneda2x</div>  
        <div id="moneda3" >Moneda3x</div>  
        <div id="moneda4" >Moneda4x</div>  
        <div id="moneda5" >Moneda5x</div>  
        <div id="moneda6" >Moneda6x</div>  
        <div id="moneda7" >Moneda7x</div>  
        <div id="moneda8" >Moneda8x</div>  
        <div id="moneda9" >Moneda9x</div> 
        <div id="moneda10" >Moneda10x</div>
        <div id="moneda11" >Moneda11x</div> 
        <div id="moneda12" >Moneda12x</div>  
        <div id="moneda13" >Moneda13x</div>  
        <div id="moneda14" >Moneda14x</div>  
        <div id="moneda15" >Moneda15x</div>  
        <div id="moneda16" >Moneda16x</div>  
        <div id ="numero" >numero</div> 
 -->
      </div>


    </div><!--  cierre poemacaja-->



    <div id="counterPoema">
      <p>Dentro de <a id="outputTiempo">x </a> segundos Máquina Cóndor generará un nuevo poema. Para conocer las razones haga click sobre alguna de las palabras destacadas en color <b>naranja</b>.</p>  
    </div><!--  cierre counterPoema-->


</div><!--  cierre wrap -->

</body>
</html>