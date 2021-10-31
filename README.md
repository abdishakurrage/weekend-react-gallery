# Project Name
Weekend React Gallery

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Phase 1:
npx cra
cd into folder & test
create \_template component
test a Body component in App
create a list component & test passing props
create a item component & test passing props
map thru array in list to create items

Phase 2:
conditional rendering in item component
test with more data

Phase 3:
set up a server
add axios
get data from server (instead of an array in App.js)
start server with npm run server (within project folder)
start client with npm run client (also within project folder)
in App.js add the following to make a GET call with AXIOS:

    import axios from "axios";

--- start CC/WC stuff ---

axios.get( '/items' ).then( (response)=>{
console.log(response.data);
} ).catch( (err)=>{
console.log( err );
alert( 'problem!' );
})

run this on page load
import { useEffect } from "react";

-think of this as your new $(document).ready()

useEffect( ()=>{
console.log( 'component loaded' );
})

update to make aios call whenpage loads:
useEffect( ()=>{
console.log( 'component loaded' );
getItems();
}, []);
add items:
const[items, setItems] = useState( [] );
-set items in get call:

const getItems=()=>{
axios.get( '/items' ).then( (response)=>{
console.log(response.data);
setItems( response.data );
}).catch((err)=>{
alert('nope');
console.log(err);
})
}


Additional README details can be found [here](https://github.com/PrimeAcademy/readme-template/blob/master/README.md).
