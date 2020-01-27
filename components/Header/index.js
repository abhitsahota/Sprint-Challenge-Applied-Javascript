// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function Header() {
    const headcomponent = document.createElement('div');
    const date = document.createElement('span');
    const pagetitle = document.createElement('h1');
    const temp = document.createElement('span');

    
    headcomponent.appendChild(date);
    headcomponent.appendChild(pagetitle);
    headcomponent.appendChild(temp);

    headcomponent.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    date.textContent = 'SMARCH 28, 2020';
    pagetitle.textContent = 'Lambda Times';
    temp.textContent = '98°'

    return headcomponent;
}

document.querySelector('.header-container').appendChild(Header())