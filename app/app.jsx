var MyComponent = require('./components/testComponent/component.jsx');


/**
 * Application state
 * ...
 */


/**
 * Boot
 */
jQuery(document).ready(function () {

    ReactDOM.render(<MyComponent  />, document.getElementById('testing'));

});