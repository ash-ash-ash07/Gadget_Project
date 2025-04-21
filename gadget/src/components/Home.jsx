import { Grid } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
  var[crd,setCrd]=useState([])
  axios.get('https://fakestoreapi.com/products')
  .then((response)=>{
    console.log(response.data)
    setCrd(response.data)
  })
  return (
    <div>
      <br/><br/>
      <h2>Available Products</h2>
      <Grid container spacing={2}>
        {crd.map((val)=>{
          return(
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 400 }}
        image={val.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Shop Now</Button>
      </CardActions>
    </Card>
  </Grid>
       )
    })}
        </Grid>
    </div>

  )
}

export default Home