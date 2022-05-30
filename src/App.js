import logo from './logo.svg';
import './App.css';
import * as mutations from './graphql/mutations';
import * as queries from './graphql/queries';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


async function gqlCreate() {
  console.log('Create pressed');
  const userData = {
    Name: "Messi",
    Phone_Number: "12345678910"
  }
  try {
    const userDetails = await API.graphql({ query: mutations.createTodo, variables: { input: userData } })
    console.log(userDetails)
  }
  catch (error) {
    console.log(error)
  }
}

async function gqlRead() {
  console.log('Read pressed');
  const userDataRead = {
    Name: "Messi",
    Phone_Number: "12344864"
  }
  try {
    const userDetailsRead = await API.graphql({ query: queries.getTodo, variables: { input: userDataRead } })
    console.log(userDetailsRead)
  }
  catch (error) {
    console.log(error)
  }


}

async function gqlUpdate() {
  console.log('Update pressed');

  const userDataUpdate = {
    Name: "Messi",
    Phone_Number: "12344864"
  }
  try {
    const userDetailsUpdate = await API.graphql({ query: mutations.updateTodo, variables: { input: userDataUpdate } })
    console.log(userDetailsUpdate)
  }
  catch (error) {
    console.log(error)
  }
}

function gqlDelete() {
  console.log('Delete pressed');
}




function App() {
  return (
    <div className="App">
      <header className="App-header">


        <p>
          Ritam Sanyal CRUD
        </p>

        <button onClick={gqlCreate}>Create</button>
        <button onClick={gqlRead}>Read</button>
        <button onClick={gqlUpdate}>Update</button>
        <button onClick={gqlDelete}>Delete</button>


        <a>
          {/*className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"*/
          }
        </a>

      </header>
    </div>
  );
}


export default App;
