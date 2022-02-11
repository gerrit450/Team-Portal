import React from 'react';
import Popup from 'reactjs-popup';

export default function ()
{
  return(
  <Popup trigger={<a>Here</a>} modal>
    <div>
      <p>Here we are</p>
    </div>
  </Popup>
);
}