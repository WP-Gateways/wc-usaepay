=== Payment Gateway for USAePay on WooCommerce ===
Contributors: mohsinoffline
Donate link: https://wpgateways.com/support/send-payment/
Tags: USAePay, payment gateway, woocommerce, secure, blocks
Plugin URI: https://wpgateways.com/products/usaepay-payment-gateway-woocommerce/
Author URI: https://wpgateways.com/
Requires at least: 4.4
Tested up to: 7.0
Requires PHP: 5.6
Stable tag: 4.2.2
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html

This Payment Gateway For WooCommerce extends the functionality of WooCommerce to accept payments from credit/debit cards using the USAePay payment gateway. Since customers will be entering credit cards directly on your store you should sure that your checkout pages are protected by SSL.

== Description ==

[USAePay](https://www.usaepay.info/) Payment Gateway allows you to accept credit cards from all over the world on your websites and deposit funds automatically into your merchant bank account.

[WooCommerce](https://woocommerce.com/) is one of the oldest and most powerful e-commerce solutions for WordPress. This platform is very widely supported in the WordPress community which makes it easy for even an entry level e-commerce entrepreneur to learn to use and modify.

#### FREE Pro Version Features
* **Easy Install**: Like all WP Gateways add-ons, this plugin installs with one click. After installing, you will have only a few fields to fill out before you are ready to accept credit cards on your store.
* **Secure Credit Card Processing**: Securely process credit cards without redirecting your customers to the gateway website.
* **Refund via Dashboard**: Process full or partial refunds, directly from your WordPress dashboard! No need to search order in your USAePay account.
* **Authorize Now, Capture Later**: Optionally choose only to authorize transactions, and capture at a later date.
* **Restrict Card Types**: Optionally choose to restrict certain card types and the plugin will hide its icon and provide a proper error message on checkout.
* **Gateway Receipts**: Optionally choose to send receipts from your USAePay merchant account.
* **Logging**: Enable logging so you can debug issues that arise if any.

> #### Advanced Version Features
> * Everything that is in the Free Pro version plus...
> * **Process Subscriptions:**  Use with  [WooCommerce Subscriptions](https://woocommerce.com/products/woocommerce-subscriptions/)  extension to **create and manage products with recurring payments**  — payments that will give you residual revenue you can track and count on.
> * **Setup Pre-Orders:**  Use with  [WooCommerce Pre-Orders](https://woocommerce.com/products/woocommerce-pre-orders/)  extension so customers can order products before they’re available by submitting their card details. The card is then automatically charged when the pre-order is available.
> * **ACH Payments:**  Fully supports eCheck payments via ACH network.
> * **Pay via Saved Cards or Accounts:** Enable option to use saved card or echeck (ACH) account details on the gateway servers for quicker checkout. No sensitive card data is stored on the website!
> * **Shipping Fields:**  Pass shipping address to USAePay.
> * **Tax and Shipping Charge Fields:**  Pass dedicated tax and shipping charge fields to USAePay.
>
> [Click here](https://wpgateways.com/products/usaepay-payment-gateway-woocommerce/) for Pricing details.

#### Requirements
* Active  [USAePay](https://www.usaepay.info/)  account – Sign up for a sandbox account  [here](https://developer.usaepay.com/_developer/app/register)  if you need to test.
* [**WooCommerce**](https://woocommerce.com/)  version 3.3.0 or later.
* A valid SSL certificate is required to ensure your customer credit card details are safe and make your site PCI DSS compliant. This plugin does not store the customer credit card numbers or sensitive information on your website.
#### Extend, Contribute, Integrate
Visit the [plugin page](https://wpgateways.com/products/usaepay-payment-gateway-woocommerce/) for more details. Contributors are welcome to send pull requests via [Bitbucket repository](https://bitbucket.org/pledged/wc-usaepay/).

For custom payment gateway integration with your WordPress website, please [contact us here](https://wpgateways.com/support/custom-payment-gateway-integration/).

#### Disclaimer
This plugin is not affiliated with or supported by USAePay, WooCommerce.com or Automattic. All logos and trademarks are the property of their respective owners.

== Installation ==

Easy steps to install the plugin:

1. Upload `wc-usaepay-payment-gateway` folder to the `/wp-content/plugins/` directory.
2. Activate the plugin (WordPress -> Plugins).
3. Go to the WooCommerce settings page (WordPress -> WooCommerce -> Settings) and select the Payments tab.
4. Under the Payments tab, you will find all the available payment methods. Find the 'USAePay' link in the list and click it.
5. On this page you will find all the configuration options for this payment gateway.
6. Enable the method by using the checkbox.
7. Enter the USAePay account details (Source Key, Pin).

**IMPORTANT:** Live merchant accounts cannot be used in a sandbox environment, so to test the plugin, please make sure you are using a separate sandbox account. If you do not have a sandbox account, you can sign up for one from <https://developer.usaepay.com/_developer/app/register>. Check the USAePay testing guide from <https://help.usaepay.info/developer/reference/testcards/> to generate various test scenarios before going live.

That's it! You are ready to accept credit cards with your USAePay payment gateway now connected to WooCommerce.

== Frequently Asked Questions ==

= Which API method does this plugin use? =
Since version 4.0.0, the plugin uses the latest USAePay  [REST API](https://help.usaepay.info/api/rest/).

= Is SSL Required to use this plugin? =
A valid SSL certificate is required to ensure your customer credit card details are safe and make your site PCI DSS compliant. This plugin does not store the customer credit card numbers or sensitive information on your website.

== Changelog ==

= 4.2.2 =
* Added backward compatibility for refunds
* Added minor improvements in code base
* Updated "WC tested up to" header to 10.7
* Updated compatibility info to WordPress 7.0

= 4.2.1 =
* Added "Capture authorized transaction on status change" option
* Set order status to Failed only once on unsuccessful capture from Edit Order screen
* Added filter for capturing on order status change
* Mentioned authorized and captured amounts in order note
* Fixed PHP notice on loading translation
* Fixed issue with data erasure
* Fixed gateway log URL
* Updated "WC tested up to" header to 10.0
* Updated compatibility info to WordPress 6.8

= 4.2.0 =
* Added checkout block payments support
* Added minor improvements in code base
* Fixed Customer Receipt sending issue
* Updated "WC tested up to" header to 9.2
* Updated compatibility info to WordPress 6.6

= 4.1.2 =
* Added merchant account notice
* Saved card type to order meta
* Updated "WC tested up to" header to 8.0
* Updated compatibility info to WordPress 6.3

= 4.1.1 =
* Fixed processing cancel payment
* Updated "WC tested up to" header to 7.7

= 4.1.0 =
* Added AVS and CVV responses to order notes
* Added Line Items option to plugin settings
* Made compatible with WooCommerce HPOS
* Changed filter naming for gateway request parameters
* Capture or void payment if the order is authorized regardless of whether it was changed from on-hold or not
* Saved "authcode" from transaction response to order meta
* Fixed occasional fatal error during WooCommerce upgrade
* Updated "WC tested up to" header to 7.5
* Updated compatibility info to WordPress 6.2

= 4.0.1 =
* Fixed PHP notices
* Updated "WC tested up to" header to 6.7
* Updated compatibility info to WordPress 6.0

= 4.0.0 =
* Removed deprecated Authorize.Net AIM code
* Implemented REST API integration
* Made Pin setting field mandatory since it is required with REST API
* Added filters for USAePay request parameters and transaction POST URL

= 3.5 =
* Fixed compatibility issues with other payment gateway plugins

= 3.2.1 =
* Compatible to WooCommerce 2.3.x
* Compatible to WordPress 4.x

= 3.0 =
* Compatible to WooCommerce 2.2.2
* Compatible to WordPress 4.0

= 2.0 =
* Compatible to WooCommerce 2.1.1
