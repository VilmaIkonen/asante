// import React, { useState } from 'react';
// import { Button } from '@material-ui/core';
// import FileBase from 'react-file-base64';
// import useStyles from './stylesForm';

// // hidden button to style filebase input:
// const HiddenButton = ({postData, setPostData}) => {

//   const classes = useStyles();
  
//   // create reference to hidden filebase element:
//   const hiddenFileReference = React.useRef(null);

//   // when button clicked --> click hidden filebase:
//   const handleClick = event => {
//     hiddenFileReference.current.click();
//   }

//   const handleChange = event => {
//     const fileUpLoaded = event.target.files[0];
//   }
  
//   return (
//     <>
//       <Button>Upload a file</Button>
//       <div className={classes.fileInput} style={{display: 'none'}}>
//         <FileBase 
//           type='file'
//           multiple={false}
//           onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
//         />        
//       </div>
//     </>
//   )
// }

// export default HiddenButton;
