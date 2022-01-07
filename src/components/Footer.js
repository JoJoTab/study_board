import React from 'react';
import { useSelector } from 'react-redux'

import ButtonHome from './ButtonHome';
import ButtonWrite from './ButtonWrite';
 
function Footer() {

    // store 의 상태가 바뀔 때마다 상태를 받아온다.
    const uri = useSelector(state => state.uriReducer.inputData)
 
    // 받아온 상태가 '/BoardNew' 가 아닐때만 버튼을 보여준다.
    return(
        <div>
            <hr />
            <nav>
                <ul>
                    <li><ButtonHome /></li>
                    {uri !== '/BoardNew' ? <li><ButtonWrite /></li> : <li></li> }
                </ul>
            </nav>
        </div>
    );
}
 
export default Footer;