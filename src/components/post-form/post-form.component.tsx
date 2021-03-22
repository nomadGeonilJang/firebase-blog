import React, { useRef, useState } from "react";
import styled from "styled-components";

import FormInput from "components/form-input/form-input.component";
import color from "utils/them/color";
import { storageService } from "utils/firebase/myfirebase";
function PostForm() {

  const fileRef = useRef<HTMLInputElement>( null );
  

  const [ { title, post, imageUrl }, setPostFormState ] = useState( {
    title: "",
    post: "",
    imageUrl: ""
  } );

  const handleChangeInput = ( event:React.ChangeEvent<HTMLInputElement| HTMLTextAreaElement> ) => {
    const { name, value } = event.target;
    setPostFormState( prev => ( { ...prev, [ name ]: value } ) );
  }; 

  const handleSelectFile = async ( event:React.ChangeEvent<HTMLInputElement> ) => {
    const file = event.target.files![ 0 ]!;

    const storageRef = storageService.ref();
    const uploadFileName = `${Date.now()}-${file.name}`;
    const imageRef = storageRef.child( `images/${uploadFileName}` );

    try {
      const snapShot = await imageRef.put( file );
      const imageUrl = await snapShot.ref.getDownloadURL();
      setPostFormState( prev => ( { ...prev, imageUrl } ) );
    } catch ( error ) {
      alert( error.message );
    }
    
    
    setPostFormState( prev => ( { ...prev, file: file.name } ) );
    const img = document.querySelector( "#preview" ) as HTMLImageElement;
    img.src = URL.createObjectURL( file );
    img.onload = function (){
      URL.revokeObjectURL( img.src );
    };
  };

  const handleUploadPost = ( event:React.FormEvent ) => {
    event.preventDefault();
    
    
    console.log( { title, post, imageUrl } );

    
  };


  return (
    <PostFormContainer>
      <form onSubmit={handleUploadPost}>
        <FormInput name="title" type="text" label="Title" value={title} onChange={handleChangeInput}/>
        <textarea name="post" id="post" cols={50} rows={10} value={post} placeholder="Content.." onChange={handleChangeInput}></textarea>
        <button type="submit">Upload</button>
      </form>
      <input ref={fileRef} type="file" style={{ display: "none" }} onChange={handleSelectFile} accept="image/*"/>
      <img id="preview"></img>
      <button type="button" id="file-btn" onClick={() => {
        fileRef.current?.click();
      }}>파일 올리기</button>
    </PostFormContainer>
  );

}


const PostFormContainer = styled.article`
textarea{
    resize:none;
    padding:5px;
    border-radius:5px;
}

form{
    button{
        width:100%;
        height:48px;
        font-size:1.5rem;
    }
}

#file-btn{
    background-color:${color.red};
}
`;
export default PostForm;