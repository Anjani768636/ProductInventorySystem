import React from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import '../AddProducts/content.css'

import Navbar from '../Header/header';

class Dashboard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            chatData: [
                ["productName", "quantity"]
            ],
            barData: [
                ["Category", "quantity"]
            ]

        }
    }
    componentWillMount() {
        this.getAllProducts()
    }

    getAllProducts = () => {
        axios.get("http://localhost:3000/allProducts").then(response => {

            this.setState({ products: response.data })

            this.state.products.map(pr => {
                return this.state.chatData.push([pr.name, parseInt(pr.quantity)]) &&
                    this.state.barData.push([pr.category, parseInt(pr.quantity)]);
            })
        }, error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <center className="chart">
                    <div >
                        <Chart
                            width={'620px'}
                            height={'400px'}
                            chartType="PieChart"
                            data={this.state.barData}
                            options={{
                                title: 'Top Categories', is3D: true,
                            }}
                            rootProps={{ 'data-testid': '1' }}>
                        </Chart>

                        <Chart
                            width={'500px'}
                            height={'300px'}
                            chartType="Histogram"
                            data={this.state.chatData}
                            options={{
                                title: 'Product Details',
                                legend: { position: 'none' },
                                // colors: ['orange'],
                                // histogram: { lastBucketPercentile: 5 },
                                // vAxis: { scaleType: 'mirrorLog' },
                            }}
                            rootProps={{ 'data-testid': '1' }}>
                        </Chart>
                    </div>
                </center>

            </div>
        );
    }
}

export default Dashboard;