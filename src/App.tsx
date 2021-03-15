import React, { ChangeEvent, useState, useReducer, Component } from 'react';
import { getFinanceDataFailure, getFinanceDataRequest, getFinanceDataSuccess } from './actions';
import { reducer, initialState } from './reducer';
import { LabelBig, InputField} from './styled';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const App = () => {
  const [ticker, setTicker] = useState('');
  const [text, setText] = useState('Search stock by ticker symbol.');
  const [state, dispatch] = useReducer(reducer, initialState);

  function loadData() {
    /* Make a GET request to IEX Cloud API */
    const url = `https://sandbox.iexapis.com/stable/stock/${ticker}/quote?token=Tsk_678b4f8a0c3b4032b11c7568fb24dc17`;

    dispatch(getFinanceDataRequest());

    fetch(url)
      .then(response => response.json())
      .then(result => {
        console.log(result);

        dispatch(getFinanceDataSuccess(result));
      })
      .catch(e => {

        console.log(e);
        dispatch(getFinanceDataFailure(e));
        setText('Invalid ticker symbol.');
      });
  }

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {

    if (e.key === 'Enter') {

      handleSearchClick();
    }
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {

    const { value } = e.target;

    setTicker(value);
  }

  const handleSearchClick = () => {
    loadData();
  }

  const abbreviate_number = function(num: number, fixed: number) {

    if (num === null) { return null; } // terminate early

    if (num === 0) { return '0'; } // terminate early

    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show

    let b = (num).toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(+(b[1]).slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
        d = +c < 0 ? c : Math.abs(+c), // enforce -0 is 0
        e = d + ['', 'K', 'M', 'B', 'T'][k]; // append power

    return e;
  }

  return (
    <Container fluid="md">
      <Row className='mb-5 mt-5'>
        <Col>
          <InputField
            type="text"
            value={ticker}
            onChange={handleInputChange}
            onKeyUp={handleKeyUp}
          />

          <Button
            variant="dark"
            type="button"
            onClick={handleSearchClick}
            style={{display: 'flex', justifySelf: 'center'}}
          >
            SEARCH
      </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          {state.data ?

            <Card style={{ width: '36rem', boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)' }}>

              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title style={{ fontSize: '36px', color: '#000' }}>{state.data.symbol}</Card.Title>
                  </Col>
                  <Col>
                    <Card.Title style={{ fontSize: '36px', color: '#000' }}>{state.data.latestPrice}</Card.Title>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Card.Title style={{ fontSize: '18px', color: '#888888' }}>{state.data.companyName}</Card.Title>
                  </Col>
                  <Col>
                    <Card.Title style={{ fontSize: '18px', color: (state.data.changePercent > 0 ? '#27AE60' : '#EB5757') }}>{(state.data.changePercent * 100).toFixed(2) + '%'}</Card.Title>
                  </Col>
                </Row>

                <hr />

                <Row className="mb-3">
                  <Col>
                    <Row>
                      <Col>Mkt Cap</Col>
                      <Col>{abbreviate_number(state.data.marketCap, 2)}</Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>Prev Close</Col>
                      <Col>{state.data.previousClose}</Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Row>
                      <Col>P/E Ratio</Col>
                      <Col>{state.data.peRatio}</Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>52-wk high</Col>
                      <Col>{state.data.week52High}</Col>
                    </Row>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col>
                    <Row>
                      <Col>Avg. Volume</Col>
                      <Col>{abbreviate_number(state.data.avgTotalVolume, 2)}</Col>
                    </Row>
                  </Col>
                  <Col>
                    <Row>
                      <Col>52-wk low</Col>
                      <Col>{state.data.week52Low}</Col>
                    </Row>
                  </Col>
                </Row>

              </Card.Body>
            </Card>
            :
            <LabelBig>{text}</LabelBig>
          }
        </Col>
      </Row>
    </Container>
  );
}

export default App;