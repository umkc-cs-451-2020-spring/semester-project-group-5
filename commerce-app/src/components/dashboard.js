import React, {useState} from 'react';
import './dashboard.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import userTracker from '../utils/user-tracker';
import { theFrontApi } from '../api';

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



export default function Dashboard(props) {
    // const [user, setUser] = userTracker();
    // async function getUserAccounts() {
    //     let index = await theFrontApi.getAccountIndex(user().id);
    //     return index;
    // }
    // async function setTransactions(account) {
    //     return await theFrontApi.getTransactions(account.account_number);
    // }
    // console.warn(getUserAccounts());
    // const accountsIndex = getUserAccounts().data;
    const transactions = [
        // [
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
            transaction_type: 'DR',}
        // ],
        // [{
        //     created_at: '04/20/20',
        //     description: 'Donut Shop',
        //     amount: '42.00',
        //     state: 'MO',
        //     transaction_type: 'CR',
        // },
        // {
        //     created_at: '04/19/20',
        //     description: 'PayPal',
        //     amount: '225.00',
        //     state: 'MO', 
        //     transaction_type: 'DR',
        // },
        // {
        //     created_at: '04/16/20',
        //     description: 'Walmart',
        //     amount: '50.64',
        //     state: 'MO',
        //     transaction_type: 'CR',
        // },
        // {
        //     created_at: '04/14/20',
        //     description: 'Bath & Body Works',
        //     amount: '49.87',
        //     state: 'MO',
        //     transaction_type: 'CR',
        // }]
    ];
    const accounts = ['*******0510', '********1927', '*******8234']
    const totals = ['1920.43', '209.71', '378.90']

    function createAccountTable(account) {
        // const transactions = setTransactions(account);
        return(
            <Table Responsive>
                <thead>
                    <tr>
                        <th>Account #:</th>
                        <th colSpan="2"></th>
                        <th><a href="api/users/1/accounts"> *******0510 </a></th>
                    </tr>
                </thead>
                <tbody>
                    { transactions.map(transaction => createTransactionRow(transaction)) }
                </tbody>
                <thead>
                    <tr>
                        <th>Total:</th>
                        <th></th>
                        <th>{ totals.map(total)}</th>
                        <th></th>
                    </tr>
                </thead>
            </Table>
        );
    
    }

    return(
      <div className="Dashboard">
            {/* <h4>{`Hello, ${user().first_name} ${user().last_name}!`}</h4> */}
            <h4>"Hello, Bobby Bob"</h4>
            <h6><i>"Your total balance is $877.71"</i></h6>
            
            {accounts.map(account => createAccountTable(account))}


      </div>
    );
}