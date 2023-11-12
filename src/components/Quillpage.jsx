import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import docservices from '../services/docservices';

const Quillpage = () => {
  const { id } = useParams();
  const [editorHtml, setEditorHtml] = useState('');
 const navigate = useNavigate()
  useEffect(() => {
    const fetchDocument = async () => {
        try {
            const documentData = await docservices.getdocument(id);
            const documentContent = documentData.data().docpara;
            setEditorHtml(documentContent);
        } catch (error) {
            console.error('Error fetching document:', error);
        }
    };

    fetchDocument();
}, [id]);


const saveChanges = async () => {
  try {
      // Update the document in Firestore with the new content
      await docservices.updatedocument(id, { docpara: editorHtml });
      alert('Changes saved successfully');
      navigate('/')
  } catch (error) {
      console.error('Error saving changes:', error);
      alert('Error saving changes. Please try again.');
  }
};

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

 

  return (
    <div>
      <ReactQuill
        theme="snow"
        value={editorHtml}
        onChange={handleEditorChange}
      />
      <button style={{border:'none',outline:'none',padding:'10px',borderRadius:'5px',backgroundColor:'gold',fontWeight:'bold',color:'black'}} onClick={saveChanges}>Save Changes</button>
    </div>
  );
};

export default Quillpage;