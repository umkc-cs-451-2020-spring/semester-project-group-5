import React from 'react';
import './dashboard.css';
import { Container, Row, Col, Table } from 'react-bootstrap';


export default function Dashboard() {
    return(
      <div className="Dashboard">
          <h4>Hello, John Apple.</h4>
          <h6><i>Your total balance is $25855.88</i></h6>
          <Table responsive>
                <thead>
                    <tr>
                        <th>Account #:</th>
                        <th colSpan="2"></th>
                        <th><a href="a1">*******1234</a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>04/18/20</td>
                        <td>Starbucks</td>
                        <td>-$7.82</td>
                        <td>Liberty, MO</td>
                    </tr>
                    <tr>
                        <td>04/17/20</td>
                        <td>Target</td>
                        <td>-$61.97</td>
                        <td>Mission, KS</td>
                    </tr>
                    <tr>
                        <td>04/15/20</td>
                        <td>Amazon</td>
                        <td>-$29.34</td>
                        <td>Kansas City, MO</td>
                    </tr>
                    <tr>
                        <td>04/11/20</td>
                        <td>Money Transfer</td>
                        <td>+$1750.00</td>
                        <td>Kansas City, MO</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>Total:</th>
                        <th></th>
                        <th>$1567.32</th>
                        <th></th>
                    </tr>
                </thead>
          </Table>
          <Table Responsive>
                <thead>
                    <tr>
                        <th>Account #:</th>
                        <th colSpan="2"></th>
                        <th><a href="a2">*******4567</a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>04/15/20</td>
                        <td>Direct Deposit</td>
                        <td>+$967.32</td>
                        <td>Kansas City, MO</td>
                    </tr>
                    <tr>
                        <td>04/08/20</td>
                        <td>Direct Deposit</td>
                        <td>+$910.17</td>
                        <td>Kansas City, MO</td>
                    </tr>
                    <tr>
                        <td>04/01/20</td>
                        <td>Direct Deposit</td>
                        <td>+1017.82.94</td>
                        <td>Kansas City, MO</td>
                    </tr>
                    <tr>
                        <td>03/23/20</td>
                        <td>Direct Deposit</td>
                        <td>+$896.48</td>
                        <td>Kansas City, MO</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>Total:</th>
                        <th></th>
                        <th>$12895.72</th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
            <Table Responsive>
                <thead>
                    <tr>
                        <th>Account #:</th>
                        <th colSpan="2"></th>
                        <th><a href="a3">*******6789</a></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>04/14/20</td>
                        <td>PayPal Transfer</td>
                        <td>+300.00</td>
                        <td>Kansas City, MO</td>
                    </tr>
                    <tr>
                        <td>04/12/20</td>
                        <td>IRS TREAS TR</td>
                        <td>+$1200.00</td>
                        <td>Kansas City, MO</td>
                    </tr>
                    <tr>
                        <td>04/11/20</td>
                        <td>Money Transfer</td>
                        <td>-$1750.00</td>
                        <td>Kansas City, MO</td>
                    </tr>
                    <tr>
                        <td>04/10/20</td>
                        <td>Check Deposit</td>
                        <td>+275.00</td>
                        <td>Kansas City, MO</td>
                    </tr>
                </tbody>
                <thead>
                    <tr>
                        <th>Total:</th>
                        <th></th>
                        <th>$11392.84</th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
      </div>
    );
}