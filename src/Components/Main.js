import 'bootstrap/dist/css/bootstrap.min.css';
import GetAdvice from '../Services/DataServices'
import { useState, useEffect } from "react";
import { Container } from 'react-bootstrap'
import Icon from '../Assets/icon-dice.svg'
import AppCss from '../App.css'
import {Row, Col} from 'react-bootstrap'

export default function Main(){
    
    const [advice, SetAdvice] = useState('');
    const [id, SetId] = useState('')
  
    const RenderAdvice = async () => {
        const data = await GetAdvice()
        SetAdvice(data.advice);
        SetId(data.id);
        console.log(data.advice)
        console.log(data.id)
        console.log(data);
    }

    useEffect(() => {
        RenderAdvice()
    },[])
    
    return(
        <div className='Cuz'>
            <div className='cuzAdviceColor'>
                <Row>
                    <Col className='hi'>
                        <h6 className='ADV'>ADVICE # {id}</h6>
                        <h1 className='ADGH'>"{advice}"</h1>
                        <div className='dCuz'>
                        <img className='imgCuz' src={Icon} alt="Dice" onClick={() => RenderAdvice()}/>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    );
}

