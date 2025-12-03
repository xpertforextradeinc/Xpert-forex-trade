<?php
/**
 * The base configuration for WordPress
 *
 * This file contains the following configurations:
 * - Database settings
 * - Secret keys and salts
 * - Third-party API keys (Pinterest, Paystack, Exness)
 * - WordPress debugging settings
 *
 * SECURITY NOTICE:
 * All sensitive data is loaded from environment variables.
 * Never commit actual credentials to version control.
 *
 * @package WordPress
 */

// ** Database settings - Get these from environment variables ** //
/** The name of the database for WordPress */
define( 'DB_NAME', getenv( 'DB_NAME' ) ?: '' );

/** Database username */
define( 'DB_USER', getenv( 'DB_USER' ) ?: '' );

/** Database password */
define( 'DB_PASSWORD', getenv( 'DB_PASSWORD' ) ?: '' );

/** Database hostname */
define( 'DB_HOST', getenv( 'DB_HOST' ) ?: 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', getenv( 'DB_CHARSET' ) ?: 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', getenv( 'DB_COLLATE' ) ?: '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * These are loaded from environment variables for security.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         getenv( 'AUTH_KEY' ) ?: '' );
define( 'SECURE_AUTH_KEY',  getenv( 'SECURE_AUTH_KEY' ) ?: '' );
define( 'LOGGED_IN_KEY',    getenv( 'LOGGED_IN_KEY' ) ?: '' );
define( 'NONCE_KEY',        getenv( 'NONCE_KEY' ) ?: '' );
define( 'AUTH_SALT',        getenv( 'AUTH_SALT' ) ?: '' );
define( 'SECURE_AUTH_SALT', getenv( 'SECURE_AUTH_SALT' ) ?: '' );
define( 'LOGGED_IN_SALT',   getenv( 'LOGGED_IN_SALT' ) ?: '' );
define( 'NONCE_SALT',       getenv( 'NONCE_SALT' ) ?: '' );
/**#@-*/

/**
 * Third-party API Keys
 *
 * These keys are loaded from environment variables for security.
 * Never hardcode API keys in source code.
 */

/** Pinterest API Key */
define( 'PINTEREST_API_KEY', getenv( 'PINTEREST_API_KEY' ) ?: '' );

/** Paystack API Keys */
define( 'PAYSTACK_PUBLIC_KEY', getenv( 'PAYSTACK_PUBLIC_KEY' ) ?: '' );
define( 'PAYSTACK_SECRET_KEY', getenv( 'PAYSTACK_SECRET_KEY' ) ?: '' );

/** Exness API Keys */
define( 'EXNESS_API_KEY', getenv( 'EXNESS_API_KEY' ) ?: '' );
define( 'EXNESS_API_SECRET', getenv( 'EXNESS_API_SECRET' ) ?: '' );

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = getenv( 'DB_TABLE_PREFIX' ) ?: 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', filter_var( getenv( 'WP_DEBUG' ) ?: 'false', FILTER_VALIDATE_BOOLEAN ) );
define( 'WP_DEBUG_LOG', filter_var( getenv( 'WP_DEBUG_LOG' ) ?: 'false', FILTER_VALIDATE_BOOLEAN ) );
define( 'WP_DEBUG_DISPLAY', filter_var( getenv( 'WP_DEBUG_DISPLAY' ) ?: 'false', FILTER_VALIDATE_BOOLEAN ) );

/**
 * Additional security settings
 */
define( 'DISALLOW_FILE_EDIT', filter_var( getenv( 'DISALLOW_FILE_EDIT' ) ?: 'true', FILTER_VALIDATE_BOOLEAN ) );
define( 'FORCE_SSL_ADMIN', filter_var( getenv( 'FORCE_SSL_ADMIN' ) ?: 'true', FILTER_VALIDATE_BOOLEAN ) );

/* Add any custom values between this line and the "stop editing" line. */

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
