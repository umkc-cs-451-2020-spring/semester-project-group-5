import React from 'react';
import './dashboard.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import theFrontApi from '../api';
// import theFrontApi from '../api';

function createTransactionRow(transaction) {
    var sign = transaction.transaction_type == 'CR' ? '-' : '+';

    return (
    <tr>
        <td>{transaction.created_at}</td>
        <td>{transaction.description}</td>
        <td>{sign + '$' + transaction.amount}</td>
        <td>{transaction.state}</td>
    </tr>
    );
}

export default function Dashboard() {
    const account = { balance: '100.00' };
    // const transactions = [];
    const transactions = [
        {
            created_at: '04/18/20',
            description: 'Starbucks',
            amount: '7.82',
            state: 'MO',
            transaction_type: 'CR',
        },
        {
            created_at: '04/17/20',
            description: 'Target',
            amount: '10.00',
            state: 'MO', 
            transaction_type: 'CR',
        },
        {
            created_at: '04/15/20',
            description: 'Amazon',
            amount: '29.34',
            state: 'MO',
            transaction_type: 'CR',
        },
        {
            created_at: '04/11/20',
            description: 'Money Transfer',
            amount: '1750.00',
            state: 'MO',
            transaction_type: 'DR',
        }
    ];

    return(
      <div className="Dashboard">
          <h4>Hello, John Apple.</h4>
          <h6><i>{'Your total balance is $' + account.balance}</i></h6>
          <Table responsive>
                <thead>
                    <tr>
                        <th>Account #:</th>
                        <th colSpan="2"></th>
                        <th><a href="a1">*******1234</a></th>
                    </tr>
                </thead>
                <tbody>
                    { transactions.map(transaction => createTransactionRow(transaction)) }
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