import { useReducer, useState } from "react";
import { formReducer, initialState } from "./formReducer";
import { type } from "@testing-library/user-event/dist/type";
import { data } from "react-router-dom";


export const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState)
  const handleInputChange = (event) => {
    dispatch({
      type: "change_input", data: {
        name: event.target.name,
        value: event.target.value
      }
    })
  }
  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    console.log(tags, tagRef.current.value)
    tags.forEach((t) => {
      dispatch({ type: "add_tag", data: t });
    });
  };
  console.log(state)
  return (
    <div>
      <form>
        <input type="text" placeholder="عنوان" name="title" onChange={handleInputChange}></input>
        <input type="" placeholder=" توضیح" name=" description" onChange={handleInputChange}></input>
        <input type="" placeholder="قیمت" name="price" onChange={handleInputChange}></input>
        <p></p>
        <select name="category" onChange={handleInputChange}>
          <option value={bag}>کیف</option>
          <option value={shoes}>گفش</option>
          <option value={dress}>لباس</option>
        </select>
        <p></p>
        <textarea placeholder="tags" ref={tagRef}>
        </textarea>
        <br></br>
        <button type="button" onClick={handleTags}>انتخاب تگ</button>
        <br></br>
        {state.tag.map((tag) => {
          return
          <button key={tag} onClick={() => dispatch({ type: "remove_tag", data: tag })}>{tag}</button>;
        })}
        <div style={{ marginTop: "20px" }}>
          <button type="button" onClick={dispatch({ type: "increase" })}>+</button>
          تعداد{state.quantity}
          <button type="button" onClick={dispatch({ type: "decrease" })}>-</button>
        </div>
      </form>
    </div >
  );
}