import React from 'react'

const Transactions = ({ transactions }) => {
    return (
        <div>
            <center><h1>Transactions</h1></center>
            <div className="card">
                {transactions.map((item, index) => (
                    <div className="card-body">
                        <span key={index} className="card-subtitle mb-2 text-muted">transactionTotal: {item.transactionTotal}</span>
                        {item.posId.map((c, i) => (
                            <div className="card-body">
                                <span key={i} className="card-subtitle mb-2 text-muted">PosId: {c}</span>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Transactions