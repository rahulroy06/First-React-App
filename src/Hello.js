import React from 'react';
import './Hello.css';

function Hello({name}) {
  return<div>
            <div>
                <p>Hello WORLD <p className="myname"><strong> {name} </strong></p></p>
                <ul>
                <li>First</li>
                <li>Second</li>
                <li>Third</li>
                <li>Fourth {10-6} </li>
                </ul>
            </div>  
        </div>
}

export default Hello;
