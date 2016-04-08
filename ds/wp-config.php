<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link https://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dschopf');

/** MySQL database username */
define('DB_USER', 'demianschopf2');

/** MySQL database password */
define('DB_PASSWORD', 'Trewako0744');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'NPYfm|br0$sJ+w8#{3VlW<9T^G-LeiX0M^;F{P+vliJk0.7F@xwF#7hw`;-HP)~(');
define('SECURE_AUTH_KEY',  ';lBd`pgjl]jeOM`Rz|Q~Hi B=>+-XxrL3R-h[(Y@iI?eLE$|AT;S(83oQLMIF`FN');
define('LOGGED_IN_KEY',    '2cmqADzK|%.)wo=h[t2alS&VAS-Q UuH%BmpU:d|*ysT ?a+{hviRlPWsYV5Y/c#');
define('NONCE_KEY',        'Edv(FFPuQMn}&{a&fv/;4X{f2#QEIm|Bi~m]-3`a>K8q|pax2|Qv2#)Mwn]rdjV#');
define('AUTH_SALT',        'y ]OqS#6dK|-z,y-1]!O1Tw0:!E3b(;^-o?g ~qfUd5fS+OS`KP@l|(5&8&}v[&}');
define('SECURE_AUTH_SALT', 'rK{3_8T8N^~hfq0Qa`+MM]L=/W6ES]4|VaS^7Fd,5:, :^Ve^0d)v}^f-ZvZr_~;');
define('LOGGED_IN_SALT',   'Ae:mI~Ihq5pV9g9XbUoAe$} F8K)Z?Sk;9wq<G+Bk7`.36wJ8V{_PA;aN9!3{t@l');
define('NONCE_SALT',       '4x_p`TU+,k1C_!mFtVxzD)Him~^s~Cz=xc9/G+@iD<`TC{ xt6.tIZr_[==Y+b;s');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
