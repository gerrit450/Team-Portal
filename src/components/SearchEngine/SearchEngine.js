
import 'assets/css/SearchEngine.css';
import Articles from './Articles.json';
import {useState} from 'react';
import Popup from 'reactjs-popup';

function SearchEngine() {

  const [searchTerm, setSearch] = useState('');
  return (
    <div className="News">

      <div className='search' style={{fontFamily: 'poppins bold'}}>
      <label style={{fontSize: '20px', paddingRight: '15px', paddingTop: '25px', paddingBottom: '45px'}}>Search: </label><input id='search' placeholder='Article...' onChange={event => setSearch(event.target.value)}/>
      <table className='newsTable'>
                  <tr style={{color: 'white', textAlign: 'left'}}>
                  <td style={{paddingLeft: '8px'}}>Title</td>
                  <td>Description</td>
                  <td>Date</td>
                  <td>Priority</td>
                  </tr>
                  
      {Articles.filter((value) =>
      {
        if(searchTerm == "")
        {
          return value;
        }
        else if(value.Body.toLocaleLowerCase().includes(searchTerm.toLowerCase()) || value.Title.toLocaleLowerCase().includes(searchTerm.toLowerCase())) // searches via JSON through title or body
        {
          return value;
        }
      }).map((article,key) =>
      {
        return (
          <>
              <tr>
              
                  <td className='data' style={{textAlign: 'left', padding: '10px', background: 'white', color: 'black', fontFamily: 'sans-serif', fontWeight: 'bold',}}>
                      <a href="https://google.com">{article.Title}
                      </a>
                    </td>
                  <td style={{textAlign: 'left', background: 'white', color: 'black'}}>{article.Body}</td>
                  <td style={{textAlign: 'left', background: 'white', color: 'black'}}>{article.Date}</td>
                  <td style={{textAlign: 'left', background: 'white', color: 'black'}}>{article.Priority}</td>
              </tr>
            {/* <p onClick style={{textAlign: 'left', padding: '10px', background: 'white', color: 'black'}}>{article.Title}</p> */}
          </>
        );
      })}
      </table>
      </div>
    </div>
  );
}

export default SearchEngine;
