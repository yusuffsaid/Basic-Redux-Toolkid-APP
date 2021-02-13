import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectWords, addNewASYNC } from "../feature/wordSlice";
import "./styles.css";
const AddWord = (props) => {
  const [folderName, setFolderName] = useState("Please enter folder name");
  const [inputFields, setInputFields] = useState([
    { english: "", turkish: "" },
  ]);
  const data = useSelector(selectWords);
  const dispatch = useDispatch();
  const ref = useRef()
  const inputChangeHandle = (event, index) => {
    const data = [...inputFields];
    data[index][event.target.name] = event.target.value;

    setInputFields(data);
  };

  const addInput = async (event) => {
    event.preventDefault();
    await setInputFields([...inputFields,{ english: "", turkish: "" }]);
    ref.current.previousElementSibling.children[1].children[0].firstChild.focus()
    // console.log(event.target.parentElement.firstChild.focus());
  };
  const deleteInput = (event, index) => {
    event.preventDefault();
    const data = inputFields.filter((f, i) => i !== index);
    setInputFields(data);
  };
  const submitHandle = async (event) => {
    event.preventDefault();
    const data = { name: folderName, words: inputFields };

    await dispatch(addNewASYNC(data));

    setInputFields([{ english: "", turkish: "" }]);

    setFolderName("Please enter folder name");
  };
  const changeFolder = (event) => {
    setFolderName(event.target.value.toUpperCase());
  };

  const onKeyHandle = (event) => {
    if (event.key === "Enter"){addInput(event)}
  };

  return (
    <div className="formcontainer">
      <form onSubmit={(e) => submitHandle(e)} autoComplete="off">
        <input
          name="folderName"
          className="folder-name"
          value={folderName}
          onChange={(e) => changeFolder(e)}
          onClick={(e) => e.target.select()}
        ></input>
        {inputFields.map((field, index) => (
          <div className="input-grp" key={index}>
            <div className="input-header">
              <h6>{index + 1}</h6>
              <button onClick={(e) => deleteInput(e, index)} style={{cursor:"pointer"}}>
                <i className="fas fa-trash-alt"></i>
              </button>
              <span className="hr"> </span>
            </div>

            <div className="input-side">
              <div className="input-side-grp">
                <input
                  onChange={(e) => inputChangeHandle(e, index)}
                  name="english"
                  value={field.english}
                  onKeyDown={(e) => onKeyHandle(e, index)}
                />
                <div>English</div>
              </div>
              <div className="input-side-grp">
              <input
                onChange={(e) => inputChangeHandle(e, index)}
                name="turkish"
                value={field.turkish}
                onKeyDown={(e) => onKeyHandle(e, index)}
              />
              <div>Turkish</div>
              </div>

             
            </div>
            {/* <button className="ekle" onClick={(e) => addInput(e, index)}>
              +
            </button>
            <button className="sil" onClick={(e) => deleteInput(e, index)}>
              {" "}
              -
            </button> */}
          </div>
        ))}
        <button ref={ref} className ="new-cart" onClick={(e) => addInput(e)}>ADD NEW CART</button>
        <button className="add-cart" type="submit">ALL ADD</button>
        {/* <button className="gonder" to="/" type="submit">EKLE</button> */}
      </form>
    </div>
  );
};
export default AddWord;
