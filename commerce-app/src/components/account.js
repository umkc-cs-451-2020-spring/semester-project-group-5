import React from "react";
import {Button, Table} from "react-bootstrap";
import "./account.css";
import theFrontApi, { getTransaction } from '../api';

function createTransactionRow(transaction) {
    var sign = transaction.transaction_type == 'CR' ? '-' : '+';

    return (
    <tr>
        <td>{transaction.account_transaction_id}</td>
        <td>{transaction.description}</td>
        <td>{sign + '$' + transaction.amount}</td>
        <td>{transaction.category}</td>
        <td>{transaction.created_at}</td>
        <td>{transaction.end_balance}</td>
        <td><Button>Edit</Button>{' '}</td>
    </tr>
    );
}

export default function Account() {
    const account_number = '558836379';
    const transactions = [
    
    {
        account_transaction_id: '1',
        description: 'Starbucks POS',
        amount: '10.00',
        category: 'Coffee',
        created_at: '01/26/2020',
        end_balance: '5310.00',
        transaction_type:'CR',
    },
    {
        account_transaction_id: '2',
        description: 'Vietnamese Cafe',
        amount: '20.00',
        category: 'Food',
        created_at: '02/02/2020',
        end_balance: '5290.00',
        transaction_type:'CR',
    }
];



return (
    <div className='Account'>
        <div className = 'header'>
            <h4>Account</h4> 
            <h6><i>Current Balance</i></h6>
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
        <div> <Button variant="link" id="right-panel-link">Download Transactions in a CSV File</Button> </div>
    </div>

);
}