import React from 'react'
import Transactions from './transactions';

const TransactionInfo = ({ transactionInfo }) => {
    return (
        <div>
            <center><h1>Transaction Info</h1></center>
            <div className="card">
                <div className="card-body">
                    <h6 className="card-title mb-2 text-muted">Foo: {transactionInfo.foo}</h6>
                    <h6 className="card-title mb-2 text-muted">Year: {transactionInfo.year}</h6>
                    <h6 className="card-title mb-2 text-muted">Date: {transactionInfo.date}</h6>
                    {transactionInfo.importSum.map((amount, index) => (
                        <div className="card-body">
                            <span key={index} className="card-subtitle mb-2 text-muted">ImportSum: {amount}</span>
                        </div>
                    ))}
                    {transactionInfo.count.map((count, index) => (
                        <div className="card-body">
                            <span key={index} className="card-subtitle mb-2 text-muted">Count: {count}</span>
                        </div>
                    ))}
                    <Transactions transactions={transactionInfo.transactions} />
                </div>
            </div>
        </div>
    )
};

export default TransactionInfo