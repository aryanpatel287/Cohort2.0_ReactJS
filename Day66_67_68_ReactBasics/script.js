import box from './test.js'


let elem = React.createElement('h1', null, "hellooo I am aryan")
let parent = React.createElement('div',{id:'parent'},[elem,box])
let root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(parent)