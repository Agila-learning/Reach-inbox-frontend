import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const CustomTextEditor = () => {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());

  const handleChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const handleSave = () => {
    // Logic to save the editor content
    const contentState = editorState.getCurrentContent();
    const text = contentState.getPlainText();
    console.log('Saving text:', text);
  };

  const handleInsertVariable = () => {
    const variableText = 'Your variable text here';
    const newEditorState = EditorState.push(
      editorState,
      variableText,
      'insert-characters'
    );
    setEditorState(newEditorState);
  };

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      handleChange(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <div>
      <div>
        <button onClick={handleSave}>Save</button>
        <button onClick={handleInsertVariable}>Insert Variable</button>
      </div>
      <div style={{ border: '1px solid #ccc', padding: '10px' }}>
        <Editor
          editorState={editorState}
          onChange={handleChange}
          handleKeyCommand={handleKeyCommand}
        />
      </div>
    </div>
  );
};

export default CustomTextEditor;
