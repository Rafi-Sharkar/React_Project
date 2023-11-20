import React from 'react';
import './Question.css';
import Options from './Options';

export default function Question() {
  return (
    <div className='Qbody'>
        <h6 className='Qno'>Question</h6>
        <h5 className='Qname'>কোন দেশ থেকে ‘আরব বসন্ত’ এর সূচনা হয়?</h5>
        <Options />
    </div>
  )
}
