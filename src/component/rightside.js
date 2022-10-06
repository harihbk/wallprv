import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Rightside() {
  const [ data , setData ] = React.useState([
      {
          image : 'image1.jpeg',
          text : 'Yupoong 6245CM',
          h1text : 'Embroidered Dad Hat',
          from : 'From $15.95',
          min : 'no minimum',
          color : ['background-color: rgb(0, 0, 0)','background-color: rgb(57, 53, 58)','background-color: rgb(65, 84, 70)'
        ,'background-color: rgb(26, 102, 51)'
        ]
    },
      {
        image : 'image2.jpeg',
        text : 'Yupoong 6245CM',
        h1text : 'Embroidered Dad Hat',
        from : 'From $15.95',
        min : 'no minimum',
        color : ['background-color: rgb(0, 0, 0)','background-color: rgb(57, 53, 58)','background-color: rgb(65, 84, 70)'
      ,'background-color: rgb(26, 102, 51)'
      ]
    },
    {
        image : 'image3.jpeg',
        text : 'Yupoong 6245CM',
        h1text : 'Embroidered Dad Hat',
        from : 'From $15.95',
        min : 'no minimum',
        color : ['background-color: rgb(0, 0, 0)','background-color: rgb(57, 53, 58)','background-color: rgb(65, 84, 70)'
      ,'background-color: rgb(26, 102, 51)'
      ]
    },
    {
        image : 'image4.jpeg',
        text : 'Yupoong 6245CM',
        h1text : 'Embroidered Dad Hat',
        from : 'From $15.95',
        min : 'no minimum',
        color : ['background-color: rgb(0, 0, 0)','background-color: rgb(57, 53, 58)','background-color: rgb(65, 84, 70)'
      ,'background-color: rgb(26, 102, 51)'
      ]
    },
    {
        image : 'image5.jpeg',
        text : 'Yupoong 6245CM',
        h1text : 'Embroidered Dad Hat',
        from : 'From $15.95',
        min : 'no minimum',
        color : ['background-color: rgb(0, 0, 0)','background-color: rgb(57, 53, 58)','background-color: rgb(65, 84, 70)'
      ,'background-color: rgb(26, 102, 51)'
      ]
    },
    {
        image : 'image6.jpeg',
        text : 'Yupoong 6245CM',
        h1text : 'Embroidered Dad Hat',
        from : 'From $15.95',
        min : 'no minimum',
        color : ['background-color: rgb(0, 0, 0)','background-color: rgb(57, 53, 58)','background-color: rgb(65, 84, 70)'
      ,'background-color: rgb(26, 102, 51)'
      ]
    }
  ])

console.log(data);
  return (
    <Grid container spacing={4}>

           { data.map((a,i)=>(
               <>
                 <Grid item md={4}>
                     <Box>
                       <img src={require(`../assets/${a.image}`)} width={"100%"} height={"100%"}/>
                       <Typography>{a.text}</Typography>
                       <Typography>{a.h1text}</Typography>
                       <Typography>{a.from}</Typography>
                       <Typography>{a.min}</Typography>
                       {/* <Typography>{a.text}</Typography> */}
                     </Box>
                 </Grid>
               </>
           )) }

    </Grid>
  )
}
