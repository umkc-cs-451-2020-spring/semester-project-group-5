import React, {useState, useEffect} from "react";
import {Button, Table} from "react-bootstrap";
import {Link} from 'react-router-dom';
import "./account.css";
import { theFrontApi } from '../api';
import userTracker from '../utils/user-tracker';

function createTransactionRow(transaction) {
    var sign = transaction.transaction_type == 'CR' ? '-' : '+';

    return (
    <tr>
        <td>{transaction.id}</td>
        <td>{transaction.description}</td>
        <td>{sign + '$' + transaction.amount}</td>
        <td>{transaction.category}</td>
        <td>{transaction.created_at.slice(0,10)}</td>
        <td>{transaction.end_balance}</td>
        <td><Button>Edit</Button>{' '}</td>
    </tr>
    );
}

export default function Account(props) {
    const account_number = props.match.params.account_number;
    const [user, setUser] = userTracker();
    const [transactions, setTransactions] = useState([]);
    const [account, setAccount] = useState({});
    const FileDownload = require('js-file-download');

    async function getTransactions() {
        let resp = await theFrontApi.getTransactions({account_number: account_number});
        console.log({account_number: account_number});
        setTransactions(resp.data.transactions);
    }

    async function getAccount() {
        let resp = await theFrontApi.getAccount(user().id, {account_number: account_number});
        console.log({account_number: account_number});
        setAccount(resp.data);
    }

    useEffect(() => {
        getTransactions();
        getAccount();
    }, []);


    function downloadTransactions() {
        const payload = {account_number : account_number};
        theFrontApi.exportTransactions(payload)
        .then((resp) => {
            FileDownload(resp.data, `Transactions-${account.name}.csv`);
        })
    }

    return (
        <div className='Account'>
            <div className = 'header'>
                <h4>{`Account ${account_number} -- ${account.name}`}</h4> 
                <h6><i>{`Current Balance: $${account.balance}`}</i></h6>
            </div>
            <Table bordered striped>
                <thead> 
                    <tr>
                        <th>Transaction Number</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                        <th>End Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => createTransactionRow(transaction))}
                </tbody>
            </Table>
            <div className='text-center'>
                <Link to={`/account/${account_number}/settings`}>Settings</Link> | <Button onClick={downloadTransactions} variant="link">Download Transactions in a CSV File</Button>
            </div>
        </div>
    );
}