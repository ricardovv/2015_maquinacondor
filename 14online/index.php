
<?php session_start(); 
/* desde arriba se inicia la sesion */
  
  /* verifica si son los mismos datos */  
  if(isset($_POST['Submit'])){
    /* array username y password */
    $logins = array('nahuel' => 'arauko68');
    
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
<link rel="stylesheet" type="text/css" href="_css/style_home.css">

<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,700italic,400italic|Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
<style type="text/css">




</style>
</head>

<body>
<div class="container text-center" id="error">
  <div class="row">
    <div class="col-md-12">
      <p class="lead">maquinacondor.com | v 1.5 </p>


      <form action="" method="post" name="Login_Form">
        Ingrese la password para acceder:<br>
        <table width="300" border="0" cellpadding="1" cellspacing="1" class="Table">
          <?php if(isset($msg)){?>
          <tr>
            <td colspan="2" align="left" valign="top"><?php echo $msg;?></td>
          </tr>
          <?php } ?>
          <tr>
            <td align="left" valign="top">Nombre usuario</td>
            <td><input name="Username" type="text" class="Input"></td>
          </tr>
          <tr>
            <td align="left">Password</td>
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



