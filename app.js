// const List = props => (
//     <ul>
//         {
//             props.items.map((item, index) => <li key={index}>{item}</li>)
//         }
//     </ul>
// );

// console.log('~~~~', React.Component)
// class Todo extends React.Component {
 
//     constructor(props) {
//         super(props);
//         this.state = {
//             term: '', //store our passed value to our input
//             items: [] //store every item we passed through our todo list
//         };
//     }

//     onChange = (e) => {
//         this.setState({term: e.target.value});
//     }

//     onSubmit = (e) => {
//         e.preventDefault()
//         this.setState({
//             term: '',
//             items: [...this.state.items, this.state.term]
//         });
//     }

//     render() {
//         return (
//             <div>
//                 <form className="App" onSubmit={this.onSubmit}>
//                     <input value={this.state.term} onChange={this.onChange} />
//                     <button>Submit</button>
//                 </form> 

//                 <List items={this.state.items} />     
//             </div>
//         );
//     }
// }

// ReactDOM.render(<Todo />, document.getElementById('root'))