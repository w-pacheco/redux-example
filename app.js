/**
 * app.js
 * @author Wilfredo Pacheco
 */

import './node_modules/jquery/dist/jquery.js';
import './node_modules/bootstrap/dist/js/bootstrap.js';
import './node_modules/redux/dist/redux.js'
import './node_modules/pace-js/pace.js';

const { origin, hostname, port } = location;

export const localhost = hostname === '127.0.0.1' 
|| port === '8080' 
|| origin.includes('localhost') 
|| origin.includes('127.');

export const Title = 'redux-example';
export const Icon = 'cloud-fill';
export const logoURL = `src/Libraries/Bootstrap-icons/${Icon}.svg`;

;[ // CSS;
    './node_modules/bootstrap/dist/css/bootstrap.css',
    // './node_modules/jqcloud-npm/dist/jqcloud.css',
    // './src/Libraries/bootstrap/bootstrap.css',
    // './src/Libraries/jqcloud/jqcloud.css',
    // './src/Libraries/DataTables/dataTables.css',
    // './src/Libraries/pace-js/center-simple.css',
    // './src/Libraries/pace-js/flash.css',
].forEach(function(href){
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', href);
    document.head.append(link);
});

;[ // Scripts;
    // './src/Libraries/docToText/docToText.js',
].forEach(function(src){
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', src);
    document.body.append(script);
});

async function init(){

    document.title = Title;
        
    Object.assign(window, {
        // Web,
        // TaskCustomerRequests,
        // Route,
    });

}

window.onload = init;