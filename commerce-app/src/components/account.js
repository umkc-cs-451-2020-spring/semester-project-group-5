import React from "react";
import {Button, Table} from "react-bootstrap";
import "./account.css";

export default function Account() {
return (
    <div className='Account'>
        <div className = 'header'>
            <h4>Account #****8989 -- Primary Savings</h4> 
            <h6>Current Balance: $5500.00</h6>
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
                <tr>
                    <td>1</td>
                    <td>Starbucks POS</td> 
                    <td>-$10.00</td>
                    <td>Coffee</td> 
                    <td>01/26/2020</td>
                    <td>$5310.00</td>
                    <td><Button>Edit</Button>{' '}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Vietnamese Cafe</td> 
                    <td>-$20.00</td>
                    <td>Food</td> 
                    <td>02/02/2020</td>
                    <td>$5290.00</td>
                    <td><Button>Edit</Button>{' '}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Beauty Salon</td> 
                    <td>-$50.00</td>
                    <td>Products</td> 
                    <td>03/08/2020</td>
                    <td>$5240.00</td>
                    <td><Button>Edit</Button>{' '}</td>
                </tr>


                <tr>
                    <td>4</td>
                    <td>Cinema</td> 
                    <td>-$20.00</td>
                    <td>Entertainment</td> 
                    <td>03/22/2020</td>
                    <td>$5220.00</td>
                    <td><Button>Edit</Button>{' '}</td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Salary</td> 
                    <td>$500.00</td>
                    <td>University of Missouri- Kansas City Payroll</td> 
                    <td>04/10/2020</td>
                    <td>$5720.00</td>
                    <td><Button>Edit</Button>{' '}</td>
                </tr>

                <tr>
                    <td>6</td>
                    <td>ST. Lukes Hospital</td> 
                    <td>-$200.00</td>
                    <td>Health</td> 
                    <td>04/26/2020</td>
                    <td>$5520.00</td>
                    <td><Button>Edit</Button>{' '}</td>
                </tr>
               
            </tbody>
            
            
        </Table>
        <div> <Button variant="link" id="right-panel-link">Download Transactions in a CSV File</Button> </div>
    </div>

);
}