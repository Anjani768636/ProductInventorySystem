import React from 'react';
import  axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { Chart } from "react-google-charts";
import './products.css';
import ProductDetails from './productdetails';
var unique=[];
class Dashboard extends React.Component {
    
    state={
        products:[],
        chart1:[["category","quantity"]],
        selectedCategory:'',
        unique:[]
    }

    componentDidMount(){
       console.log("inside dash")
        this.getProducts();
    }
    getProducts(){
        axios.get('http://localhost:3000/arrayOfProducts')
            .then((response)=>{
                console.log(response)
                console.log(response.data)
                this.setState({products: response.data},()=>{

                    var myArray=[];
                    this.state.products.map(p=>{
                    myArray.push(p.category)
                    })
                   unique = myArray.filter((v, i, a) => a.indexOf(v) === i); 
                        console.log(unique)
                        this.setState({unique:unique})
                        var products=[]
                    unique.map(c=>{
                        console.log("loop"+c)
                     products= this.state.products.filter(p=>
                            p.category==c)
                            console.log(products)
                      var sum1=0
                     var sum= products.map(p=>{
                        return sum1=sum1+p.qty
                      })
                      console.log(sum1)
                      this.state.chart1.push([c,sum1])
                      })
                      
                 console.log(this.state.chart1)

                
                })
                

            }, (error)=>{
                console.log(error)
            })
    }

onChangeHandler(event)
{
this.setState({selectedCategory:event.target.value})
console.log(event.target.value)
var myArray=[];
              
var products=[]
                //     this.state.unique.map(c=>{
                //         console.log("loop"+c)
                //      products= this.state.products.filter(p=>
                //             p.category==c)
                //             console.log(products)
                //       var sum1=0
                //      var sum= products.map(p=>{
                //         return sum1=sum1+p.qty
                //       })
                //       console.log(sum1)
                //       if(c===event.target.value){
                //       this.state.chart1.push([c,sum1])}
                //       })
                      
                //  console.log(this.state.chart1)

}


    render() { 
       return(
   <div>
<div className="container">
 {/* <div>
                <label className="sct">Select Category:</label>
                <select name="category" style={{width:"200px"}} onChange={this.onChangeHandler.bind(this)}>
                {this.state.unique.map(o=>(
               <option value={o}>{o}</option>
                ) )}
                
                </select>
           </div>  */}
<Chart
          chartType="Bar"
          data={this.state.chart1}
          width="90%"
          height="300px"
          legendToggle
        />

</div>


       </div>

        
      


         );
    }
}
 
export default Dashboard;