const products = [
  {id:1,title:"Nikon",price:300.0,quantity:3},
  {id:2,title:"Apple",price:300.0,quantity:4},
  {id:3,title:"Iphone",price:3000.0,quantity:5},
  {id:4,title:"Shoes",price:150.0,quantity:8},
  {id:5,title:"Books",price:200.0,quantity:12},
  {id:6,title:"Nike",price:400.0,quantity:13},
]

export default {
  getPruducts(fn){
    setTimeout(()=>fn(products),100);
  }
}
