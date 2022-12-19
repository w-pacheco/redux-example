/**
 * app.js
 * @author Wilfredo Pacheco
 */

import './node_modules/jquery/dist/jquery.js';
import './node_modules/bootstrap/dist/js/bootstrap.js';
import './node_modules/redux/dist/redux.js'
import './node_modules/pace-js/pace.js';
import reducer from './src/reducers.js';

const { createStore } = Redux;
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
].forEach(function(href){
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', href);
    document.head.append(link);
});

;[ // Scripts;

].forEach(function(src){
    const script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', src);
    document.body.append(script);
});

async function init(){

    document.title = Title;
    
    $(document.body)
    .hide()
    .append(/*html*/`
    <div class="d-flex justify-content-center mt-3">
        <div class="card border-primary mb-3">
            <div class="card-header">TODOs</div>
            <div class="card-body text-primary">
              <h5 class="card-title">Primary card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              <form class="row g-3 align-items-center">
              
                <div class="col-10">
                  <label class="visually-hidden" for="inlineFormSelectPref">Preference</label>
                  <input type="text" class="form-control form-control-sm" id="inputTODO" placeholder="enter todo...">
                </div>
              
                <div class="col">
                  <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                </div>
              </form>


              <div class="mt-5">
                <ul id="display-list" class="list-group list-group-flush">
                    <li class="list-group-item">An item</li>
                    <li class="list-group-item">A second item</li>
                    <li class="list-group-item">A third item</li>
                </ul>
              </div>
            </div>
        </div>
    </div>`)
    .fadeIn();
    
    const store = createStore(reducer);
    const SubmitBtn = document.querySelector('button[type="submit"]');
    const InputEl = document.querySelector('input#inputTODO');
    const DisplayEl = document.querySelector('ul#display-list');

    SubmitBtn.addEventListener('click', function (event){
        event.preventDefault();
        event.stopPropagation();
        console.info(InputEl.value);
        console.info(event);
    });

    const elements = {
        store,
        createStore,
        localhost,
        SubmitBtn,
        DisplayEl,
        // Web,
        // TaskCustomerRequests,
        // Route,
    }
        
    Object.assign(window, elements);

}

window.onload = init;