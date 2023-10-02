import React from 'react';

const Scroll = (props) => {
    return (
        <div className="flex justify-center">
            <div  style={{overflowY: 'scroll', border: '3px solid #0F2027', width: '85%', height: '800px', scrollbarWidth: 'thin', scrollbarColor: '#2C5364 #0F2027'}}>
                {props.children}
            </div>
        </div>
    );
}

export default Scroll;