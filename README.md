
# Install
**npm**
```bash
npm install input-notify
```
# Basic Setup
####
Grab the compiled JS/CSS from the /dist directory, load them into your web page, and everything should work!<br>
```Remember to load the plugin code after loading JQuery.```
###
###
**HTML file**
```html
<form>
  <div id='js-note'>
    <input type="text" placeholder="Name *">
  </div>
  <div id="js-note1">
    <input type="text" placeholder="Email *">
  </div>
  <div id='js-note2'>
    <textarea rows="9" placeholder="Message *"></textarea>
  </div>
  <div class="mb-4 text-right">
    <button class="c-btn" id="js-send">Send</button>
  </div>
</form>
```
###
###
**Javascript file**
```js
$(document).ready(function() {
  $('#js-note').inputNotify('This field is required',1000);
  //Notify message: 'This field is required'. Time in miliseconds to hide after: 1000
  
  $('#js-note2').inputNotify('Please enter a valid email address',2000,{color: '#fff', background: '#ed8936'});
  // color: '#fff' Set color text for alert
  //background: '#ed8936' Set background color for alert
  
  $('#js-note1').inputNotify('Please enter a valid email address',1500,{color: '#333', background: 'yellow', icon: 'success'});
  // icon: 'success' Set icon for alert
  //'success' or 'error' or another icon you set
  
});
```

# Features
A plugin to show customizable notifications.
<ul>
  <li>Custom notify<strong> background color</strong>, <strong>text color</strong> , and <strong>icon</strong> </li>
  <li>Set time(miliseconds) to hide after show</li>
  <li>Ability to <strong>hack the CSS</strong> to add your own thing</li>
 </ul>
