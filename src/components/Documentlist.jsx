import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import docservices from '../services/docservices';
import { Link } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';

const Documentlist = () => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getdocuments();
  }, []);

  const getdocuments = async () => {
    try {
      const data = await docservices.getalldocuments();
      console.log(data.docs);
      setDocuments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.error('Error fetching documents:', error);
    } finally {
      setLoading(false);
    }
  };

 

  const deletedocument = async (id) => {
    await docservices.deletedocument(id);
    getdocuments();
  };

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : documents.length > 0 ? (
        <Box style={{ display: 'flex', flexWrap: 'wrap' }}>
          {documents.map((doc, index) => (
            <Card key={index} sx={{ maxWidth: 345, margin: 2 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  <h2>{doc.cardname}</h2>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${doc.docpara}`.slice(3, 25)}...
                </Typography>
              </CardContent>
              <CardActions>
                <Link to={`/quill/${doc.id}`} style={{ textDecoration: 'none' }}>
                  <Button size="small">View / Edit</Button>
                </Link>
                <Button onClick={(e) => deletedocument(doc.id)} size="small">
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      ) : (
        <Typography variant="body2">No documents available</Typography>
      )}
    </>
  );
};

export default Documentlist;