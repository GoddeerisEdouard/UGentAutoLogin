# UGent Auto Login Extension
![Extension icon](icons/icon.png)  
**Why does this exist?**  
you reopen your browser and notice you have to log in to all Ugent-related tabs again.  
This automates clicking "login" on every [login screen](#auto-login-screens).  
This happens in the background, the extension **will not** move your mouse.

**Table of Contents**
* [Installation guide](#installation-guide)
    + [Chrome](#chrome)
    + [Firefox](#firefox)
* [Auto login screens](#auto-login-screens)
* [Manual exceptions](#manual-exceptions)
    + [Microsoft 2FA](#microsoft-2fa)
    + [no saved microsoft account](#no-saved-microsoft-account)
* [Bugs or Feature Requests](#bugs-or-feature-requests)

## Installation guide
Download as zip.  

### Chrome
extract zip.
go to `chrome://extensions/` and make sure developer mode is enabled.  
"load extracted extension" and select the folder.

### Firefox
go to `about:debugging#/runtime/this-firefox` click "Load temporary add-on..."  
And select the zip.  

Downside: This temporary extension expires in 24 hours...  

Alternative: `<published firefox add-on link here>`  
This never expires.

## Auto login screens
The login portals you'd see when you're logged out.  
All these login buttons will automatically be clicked.  
**TimeEdit**  
url: `https://cloud.timeedit.net/*`  
![Login TimeEdit](images/timeEdit_login.png)


**Ufora**  
url: `https://elosp.ugent.be/*`  
![Ufora login](images/ufora_login.png)

**Microsoft**  
url: `https://login.microsoftonline.com/*`  
![microsoft choose account](images/microsoft_online_auto_login.png)  
The first account always gets chosen.


## Manual exceptions
These are login screens that **cannot be automated**

### Microsoft 2FA
Sometimes, after choosing your account, you'll have to use 2FA to log in again.  
This is because your session token expired.  
That can't be automated. And has to be done every once in a while.  
![Microsoft choose account login](images/microsoft_online_login.png)


![Microsoft login needs password](images/microsoft_online_password_required.png)  
after filling in the password, microsoft might ask for 2FA  
![auth code microsoft login](images/microsoft_online_auth_code.png)  
This still requires manual work

### no saved microsoft account
![Microsoft email login screen](images/microsoft_online_no_automatic_login.png)  
This means you don't have an account ready to be signed into.  

=> log in to `https://login.microsoftonline.com/` with your UGent account & make sure to "remember" the account.

## Bugs or Feature Requests
Please **create an Issue** for bugs or feature requests.  
Pull Requests are always welcome.
