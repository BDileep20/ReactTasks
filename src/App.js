import React, { useState, useEffect } from "react";
import Header from "./ContactApp/Header";
import AddContact from "./ContactApp/AddContact";
import ContactList from "./ContactApp/ContactList";
import { v4 as uuidv4 } from "uuid";
import { Route, Routes } from "react-router-dom";
import ContactDetail from "./ContactApp/ContactDetail";
import DeletePage from "./ContactApp/Delete";
// import ImageSlider from "./Corousal/ImageSlider"
// import CakeContainer from "./Redux-Demo/React-Redux/CakeContainer"
// import HookCakeShop from "./Redux-Demo/React-Redux/HookCakeShop"
// import IceCreamContainer from "./Redux-Demo/React-Redux/IceCreamContainer"
// import NewCakeContainer from "./Redux-Demo/React-Redux/newCakeContainer"
// import ItemContainer from "./Redux-Demo/React-Redux/ItemContainer"
// import UserContainer from "./Redux-Demo/React-Redux/userContainer"

// import ContextParent from "./component/functional/newHooks/contextRender/ContextParent"
// import ChildA from './component/functional/newHooks/contextRender/ContextChild'
// import ParentFour from "./component/functional/newHooks/ParentRender"
// import ParentTwo from "./component/functional/newHooks/ParentRender"
// import ParentThree from "./component/functional/newHooks/ParentRender"
// import { GrandParent } from "./component/functional/newHooks/GrandParent"
// import ParentOne from "./component/functional/newHooks/ParentRender"
// import ChildOne from './component/functional/newHooks/ChildRender'
// import { ArrayStateRender } from "./component/functional/newHooks/ArrayStateRender"
// import { ImmutabilityState } from "./component/functional/newHooks/ImmutabilityState"
// import { UsereducerRender } from "./component/functional/newHooks/UsereducerRender"
// import Render from "./component/functional/newHooks/Render"
// import Form from "./component/functional/newHooks/costumHooks/Form"
// import CounterTwo from "./component/functional/newHooks/costumHooks/CounterTwo"
// import CounterOne from "./component/functional/newHooks/costumHooks/CounterOne"
// import DocTitle from "./component/functional/newHooks/costumHooks/DocTitle"
// import DocTitleOne from "./component/functional/newHooks/costumHooks/DocTitleOne"
// import ClassTimer from "./component/functional/newHooks/UseCallback/ClassTimer"
// import HookTime from "./component/functional/newHooks/UseCallback/HookTime"
// import UseRefHook from "./component/functional/newHooks/UseCallback/UseRefHook"
// import ParentCom from "./component/functional/newHooks/UseCallback/ParentCom"
// import Usememo from "./component/functional/newHooks/UseCallback/Usememo"
// import DataFetchOne from "./component/functional/newHooks/useReducer/DataFetchOne"
// import DataFetchTwo from "./component/functional/newHooks/useReducer/DataFetchTwo"
// import ComponentA from "./component/functional/newHooks/useReducer/ComponentA"
// import CounterThree from "./component/functional/newHooks/useReducer/CounterThree"
// import CounterOne from "./component/functional/newHooks/useReducer/CounterOne"
// import CounterTwo from "./component/functional/newHooks/useReducer/CounterTwo"
// import ComponentC from "./component/functional/newHooks/contextApi/componentC"
// import DataFetching from "./component/functional/newHooks/DataFetch"

// import IntervalCounterHook from "./component/functional/newHooks/IntervalCounterHook"
// import IntervalConter from "./component/functional/newHooks/IntervalConter"
// import UseEffect from "./component/functional/newHooks/UseEffect"
// import MouseContainer from "./component/functional/newHooks/MouseContainer"
// import ClassCounter1 from "./component/functional/newHooks/ClassCounter1"
// import ArrayHook from "./component/functional/newHooks/ArrayHook"
// import InputFields from "./component/functional/newHooks/InputFields"
// import HookCounter from "./component/functional/newHooks/HookCounter"
// import PostList from "./component/class/stateup.js/contextapi/PostList"
// import Postform from "./component/class/stateup.js/contextapi/Postform"
// import ComponentB from "./component/class/stateup.js/contextapi/componentB"
// import Counter from "./component/class/stateup.js/Counter"
// import ClickCounter from "./component/class/stateup.js/clickCounter"
// import HoverCounter from "./component/class/stateup.js/HoverCounter"
// import Memoparent from "./component/class/stateup.js/memoparent"
// import Refdemo from "./component/class/stateup.js/refdemo"
// import Focusref from "./component/class/stateup.js/Focusref"
// import LifecycleA from "./component/class/stateup.js/lifecyclemethods/lifecycleA"
// import Form from "./component/class/stateup.js/form"
// import Parentcomponent from "./component/class/stateup.js/parent"
// import NameList from "./component/class/stateup.js/ListMap"
// import MyComponent from "./onlypractice/classcom"
// import Colorchange from "./onlypractice/classcom"
// import SearchComponent from "./component/functional/reduxpractice/dispatch"
// import Count from "./component/functional/reduxpractice/dispatch"

const App = () => {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const AddContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };
  const removeContact = (id) => {
    const newContact = contacts.filter((cont) => {
      return cont.id !== id;
    });
    setContacts(newContact);
  };
  useEffect(() => {
    const retrieve = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieve) setContacts(retrieve);
  }, []);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  return (
    <>
      {/* <Count/> */}
      {/* <SearchComponent/> */}
      {/* <MyComponent />
<Colorchange/> */}
      {/* <Parentcomponent/> */}
      {/* <NameList/> */}
      {/* <Form/> */}
      {/* <LifecycleA/> */}
      {/* <Memoparent/> */}
      {/* <Refdemo/> */}
      {/* <Focusref/> */}
      {/* <ClickCounter/>
<HoverCounter/> */}
      {/* <Counter render={(count,IncrementCount)=>(<ClickCounter count={count} IncrementCount={IncrementCount}/>)}/> */}
      {/* <Counter render={(count,IncrementCount)=>(<HoverCounter count={count} IncrementCount={IncrementCount}/>)}/> */}
      {/* <ComponentB/> */}
      {/* <PostList/> */}
      {/* <Postform/> */}
      {/* <HookCounter/> */}
      {/* <InputFields/> */}
      {/* <ArrayHook/>  */}
      {/* <ClassCounter1/> */}
      {/* <UseEffect/> */}
      {/* <MouseContainer/> */}
      {/* <IntervalConter/> */}
      {/* <IntervalCounterHook/> */}
      {/* <DataFetching/> */}
      {/* <ComponentC/> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <ComponentA/> */}
      {/* <DataFetchOne/> */}
      {/* <DataFetchTwo/> */}
      {/* <ParentCom/> */}
      {/* <Usememo/> */}
      {/* <UseRefHook/> */}
      {/* <ClassTimer/> */}
      {/* <HookTime/> */}
      {/* <DocTitle/> */}
      {/* <DocTitleOne/> */}
      {/* <CounterOne/> */}
      {/* <CounterTwo/> */}
      {/* <Form/> */}
      {/* <Render/> */}
      {/* <UsereducerRender/> */}
      {/* <ImmutabilityState/> */}
      {/* <ArrayStateRender/> */}
      {/* <ParentOne>
  <ChildOne/>
</ParentOne> */}
      {/* <GrandParent/> */}
      {/* <ParentTwo/> */}
      {/* <ParentThree/> */}
      {/* <ParentFour/> */}
      {/* <ContextParent>
  <ChildA/>
</ContextParent> */}
      {/* <CakeContainer/>
<HookCakeShop/>
<IceCreamContainer/>
<NewCakeContainer/>
<ItemContainer cake/>
<ItemContainer /> */}
      {/* <UserContainer/> */}
      {/* <ImageSlider/> */}

      <div className="ui container">
        <Header />
        <Routes>
            <Route path="/" element={<ContactList contact={contacts} getContactId={removeContact} />} />
            <Route path="/add" element={<AddContact AddContactHandler={AddContactHandler} />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
            <Route path="/delete/:id" element={<DeletePage deleteContact={removeContact} />} />
        </Routes>
        {/* <AddContact AddContactHandler={AddContactHandler}/> */}
        {/* <ContactList contacts={contacts} getContactId={ removeContact}/> */}
      </div>
    </>
  );
};
export default App;
