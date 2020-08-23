import React from 'react';
import Chart from "react-google-charts";
import axios from 'axios';
import './dashboard.css'
import Header from '../Header/header';

var unique = [];
const pieOptions = {
    title: "",
    pieHole: 0.6,
    slices: [
        {
            color: "#2BB673"
        },

        {
            color: "#d91e48"
        },

        {
            color: "#007fad"
        },
        {
            color: "#e9a227"
        }
    ],

    legend: {
        position: "bottom",
        alignment: "center",
        textStyle: {
            color: "233238",
            fontSize: 14
        }
    },

    tooltip: {
        showColorCode: true
    },

    chartArea: {
        left: 0,
        top: 0,
        width: "100%",
        height: "90%"
    },

    fontName: "Roboto"

}

class Dashboard extends React.Component {

    state = {
        products: [],
        chart1: [["category", "quantity"]],
        selectedCategory: '',
        unique: [],
        filter: [],
        copy: [],
        final: []
    }

    componentDidMount() {
        console.log("inside dash")
        this.getProducts();
    }

    getProducts() {
        axios.get('http://localhost:3000/allProducts')
            .then((response) => {
                console.log(response)
                console.log(response.data)
                this.setState({ products: response.data }, () => {
                    var myArray = [];
                    this.state.products.map(p => {
                        myArray.push(p.category)
                    })
                    unique = myArray.filter((v, i, a) => a.indexOf(v) === i);
                    console.log(unique)
                    this.setState({ unique: unique })
                    var products = []
                    unique.map(c => {
                        console.log("loop" + c)
                        products = this.state.products.filter(p =>
                            p.category === c)
                        console.log(products)
                        var sum1 = 0
                        var sum = products.map(p => {
                            return sum1 = parseInt(sum1) + parseInt(p.quantity)
                        })
                        console.log(sum1)
                        this.state.chart1.push([c, sum1])
                    })
                    console.log(this.state.chart1)
                    this.setState({ copy: this.state.chart1 })
                })
            }, (error) => {

                console.log(error)

            })

    }
    onChangeHandler(event) {
        event.preventDefault()
        var value = event.target.value
        if (value === "All") {
            this.setState({ chart1: this.state.copy })
        }
        else {
            console.log(event.target.value)
            var result = this.state.copy.filter(p => p[0] === value)
            console.log(result)
            var final = [["category", "quantity"]]
            final.push(result[0])
            console.log(final)
            this.setState({ chart1: final })
        }

    }

    render() {
        return (
            <div>
                <Header></Header>
                <center>
                    <div>
                        <label>Select Category:</label>
                        <select name="category" style={{ width: "200px" }} onChange={this.onChangeHandler.bind(this)}>
                            <option value="All">All</option>
                            {this.state.unique.map(o => (
                                <option value={o}>{o}</option>
                            ))}
                        </select>
                        <br /><br />
                        <div>

                            <Chart
                                chartType="PieChart"
                                options={pieOptions}
                                data={this.state.chart1}
                                width="80%"
                                height="300px"
                                legendToggle
                                style={{ padding: '0px', marginBottom: '100px' }}
                                graph_id="PieChart"
                            />
                            <Chart
                                chartType="Bar"
                                data={this.state.chart1}
                                width="70%"
                                height="300px"
                                legendToggle
                                style={{ padding: '0px', marginTop: '50px' }}
                            />

                        </div>
                    </div>
                </center>

            </div>
        );
    }
}

export default Dashboard;