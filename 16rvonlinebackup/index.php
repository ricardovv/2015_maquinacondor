<?php 
session_start(); 
  if(isset($_POST['Submit'])){
    $logins = array('nahuel' => 'arauko68');
    $Username = isset($_POST['Username']) ? $_POST['Username'] : '';
    $Password = isset($_POST['Password']) ? $_POST['Password'] : '';
    if (isset($logins[$Username]) && $logins[$Username] == $Password){
      $_SESSION['UserData']['Username']=$logins[$Username];
      header("location:home.php");
      exit;
    } else {
      $msg="<span style='color:red'>Datos de acceso no válidos, intente nuevamente.</span>";
    }
  }
?>
<!-- CIERRE PHP PARA ACCESO A SITIO - - - - - - - - - - - - - - - - - - - - - - - - - - - -->


<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="content-type" content="text/html; charset=utf-8" >
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Demian Schopf | Máquina Condor v 1.5</title>
	<link rel="icon" href="_img/favicon.ico" type="image/x-icon">
	<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,700italic,400italic|Open+Sans+Condensed:300,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" media="screen" href="_css/style_home.css">
</head>

<body>
<div id="container">

      <h1>maquinacondor.com | v 1.5 </h1>

      <form action="" method="post" name="Login_Form">
        Ingrese la password para acceder:<br><br>
        <table width="100%" border="0" cellpadding="1" cellspacing="1" class="Table">
          <?php if(isset($msg)){?>
          <tr>
            <td colspan="1" align="left" valign="top"><?php echo $msg;?></td>
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

</body>
</html>



