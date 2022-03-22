import React from 'react'
import '../index.css';

export default function Search_Bar() {
    return (
        <div className='container p-5'>
            <input type="text" id='keyword' placeholder="Search the Best Result" autoComplete='off' />
        </div>
    )
}

export function Search() {
    let k = String(document.getElementById('keyword').value);

    if (k.length != 0) {
        alert("Input is Successful");
    }
    else {
        alert("Input is Not Successful")
    }
}