import React from "react";
// import BookList from "./components/bookslist";
// import ShirtList from "./components/shirtlist";
// import LinkedList from "./components/linklist";

  // HOOkS :   //   

// import Usestate from "./components/hooks/Usestate";
// import ButtonUstate from "./components/hooks/ButtonUstate";
// import UseStateArray from "./components/hooks/usestate/useStateArray";
// import UseEffectComponent from "./components/hooks/UseEffect";
// import UsingUseEffect from "./components/hooks/anotherUseEffect";
// import UseReff from "./components/hooks/UseReff";
// import UseRefExampple from "./components/hooks/UseReffAnother";
// import CleanUp from "./components/hooks/useRef/CleanUp";
// import Navbar from "./components/hooks/contextapi/propsdrilling/Navbar";
// import SecondNavbar from "./components/hooks/contextapi/usecontext/Navbar2";
// import Counter from "./components/hooks/reducer/ReducerBasic";
// import ReducerMethod from "./components/hooks/reducer/ReducerMethod";
// import CostumToggle from "./components/costumHook/toggle";
// import TAskUseEffect from "./components/costumHook/UseEffect";
// import TaskFetchCompo from "./components/hooks/fetchcomponent/UseEffect";
// import store from "./components/store/store";
// import { Provider } from "react-redux";
// import Counter from "./components/store/Counter";
import Navbar from "./components/Navbar";
import CreateRouter from "./components/router";


function App() {
  return (
    <div className="App">
      {/* <h1 style={ {textAlign : 'center'}}>Amazon Best Sellers</h1>
      <BookList/>
      <ShirtList/>
     <LinkedList />  */}

    {/* Hooks */}

     {/* <Usestate /> */}
     {/* <ButtonUstate /> */}
     {/* <UseStateArray /> */}
     {/* <UseEffectComponent /> */}
     {/* <UsingUseEffect /> */}
     {/* <UseReff /> */}
     {/* <UseRefExampple /> */}
     {/* <CleanUp /> */}
     {/* <Navbar /> */}
     {/* <SecondNavbar /> */}
     {/* <Counter /> */}
     {/* <ReducerMethod /> */}
     {/* <CostumToggle /> */}
     {/* <TAskUseEffect /> */}
     {/* <TaskFetchCompo /> */}
    
     {/* <Provider store={store}>
        <Counter />
     </Provider> */}

     <Navbar/>
     <CreateRouter />
      
    </div>
  );
}
export default App;
