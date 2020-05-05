import React, {useState, useEffect} from 'react';
import './dashboard.css';
import { Container, Row, Col, Table } from 'react-bootstrap';
import userTracker from '../utils/user-tracker';
import { theFrontApi } from '../api';

function TransactionRow(props) {
    let transaction = props.transaction;
    var sign = transaction.transaction_type == 'CR' ? '-' : '+';

    return (
    <tr>
        <td>{transaction.created_at.slice(0,10)}</td>
        <td>{transaction.description}</td>
        <td>{sign + '$' + transaction.amount}</td>
        <td>{transaction.state}</td>
    </tr>
    );
}

function AccountTable(props) {
    let account = props.account;
    const [user, setUser] = userTracker();
    const [transactions, setTransactions] = useState([]);

    async function getTransactions(){
        let resp = await theFrontApi.getTransactions({account_number: account.account_number});
        setTransactions(resp.data.transactions);
    }

    useEffect(() => {
        getTransactions();
    }, []);

    return(
        <Table Responsive>
            <thead>
                <tr>
                    <th>Account #:</th>
                    <th colSpan="2"></th>
                    <th><a href={`/accounts/${account.account_number}`}> *****${props.account.account_number % 10_000} </a></th>
                </tr>
            </thead>
            <tbody>
                { transactions.map(transaction => <TransactionRow transaction={transaction} />) }
            </tbody>
            <thead>
                <tr>
                    <th>Total:</th>
                    <th></th>
                    <th>{ account.balance }</th>
                    <th></th>
                </tr>
            </thead>
        </Table>
    );
}

export default function Dashboard(props) {
    const [user, setUser] = userTracker();
    const [accounts, setAccounts] = useState([]);

    async function getAccounts() {
        let resp = await theFrontApi.getAccountIndex(user().id);
        setAccounts(resp.data.accounts);
    }

    function accountSum() {
        var sum = 0.0;
        accounts.forEach((account) => {
            sum += parseFloat(account.balance);
        })

        return sum;
    }

    useEffect(() => {
        getAccounts();
    }, []);

    return(
      <div className="Dashboard">
            <h4>{`Hello, ${user().first_name} ${user().last_name}!`}</h4>
            <h6><i>{`Your total balance is $${accountSum()}`}</i></h6>
            {accounts.map(account => <AccountTable account={account} />)}
      </div>
    );
}