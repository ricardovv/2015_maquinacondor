<?php session_start(); 
/* desde arriba se inicia la sesion */
  
  /* verifica si son los mismos datos */  
  if(isset($_POST['Submit'])){
    /* array username y password */
    $logins = array('m' => 'a');
    
    /* verifica y asigna datos ingresados a variables */
    $Username = isset($_POST['Username']) ? $_POST['Username'] : '';
    $Password = isset($_POST['Password']) ? $_POST['Password'] : '';
    
    /* verifica si existen */    
    if (isset($logins[$Username]) && $logins[$Username] == $Password){
      /* si son los datos, verifica crea sesion y redirige a pagina del proyecto  */
      $_SESSION['UserData']['Username']=$logins[$Username];
      header("location:home.php");
      exit;
    } else {
      /* intento fallido, mensaje error */
      $msg="<span style='color:red'>Datos de acceso no válidos, intente nuevamente.</span>";
    }
  }
?>
<!-- CIERRE PHP PARA ACCESO A SITIO - - - - - - - - - - - - - - - - - - - - - - - - - - - -->


<!DOCTYPE html>
<html>
<head>
<title>Demian Shchopf</title>

<meta http-equiv="content-type" content="text/html; charset=utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,700italic,400italic|Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>

<style type="text/css">
body {
  /*background: linear-gradient(90deg, white, gray);*/
  background-image: url('imgHome/imgHome.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}

body, h1, p {
/*  font-family: "Helvetica Neue", "Segoe UI", Segoe, Helvetica, Arial, "Lucida Grande", sans-serif;
*/  
  font-family: 'Open Sans', sans-serif;
  font-weight: normal;
  margin: 0;
  padding: 0;
  text-align: left;
}

.container {
  margin-left:  55%;
  margin-right:  auto;
  margin-top: 15%;
  max-width: 1170px;
  padding-right: 15px;
  padding-left: 15px;
}

.row:before, .row:after {
  display: table;
  content: " ";
}

h1 {
  font-size: 42px;
  font-weight: 300;
  margin: 0 0 20px 0;
red 

.lead ;{letter-spacing:11px
  font-size: 21px;
  font-weight: 200px;
  margin-bottom: 30px;
  border: 0px solid;/*//rv*/
}

p {
  margin: 0 0 10px;
}

a {
  color: #3282e6;
  text-decoration: none;
}
</style>
</head>

<body>
<div class="container text-center" id="error">
  <div class="row">
    <div class="col-md-12">
      <p class="lead">maquinacondor.com | v 1.5 </p>


      <form action="" method="post" name="Login_Form">
        Ingrese la password para acceder:<br>
        <table width="400" border="0" cellpadding="5" cellspacing="1" class="Table">
          <?php if(isset($msg)){?>
          <tr>
            <td colspan="2" align="center" valign="top"><?php echo $msg;?></td>
          </tr>
          <?php } ?>
          <tr>
            <td align="right" valign="top">Nombre usuario</td>
            <td><input name="Username" type="text" class="Input"></td>
          </tr>
          <tr>
            <td align="right">Password</td>
            <td><input name="Password" type="password" class="Input"></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td><input name="Submit" type="submit" value="Login" class="Button3"></td>
          </tr>
        </table>
      </form>



    </div>
  </div>

</div>

</body>
</html>



