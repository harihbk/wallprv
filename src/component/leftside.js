import { Typography } from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Checkboxfn(props){
   const { _data } = props
  
    return (
        <>
         { _data.length > 0 && _data.map(a=>(
            <FormGroup>
                <FormControlLabel control={<Checkbox  />} label={a} />
            </FormGroup>
         ))}
       
        </>
       
    );
}

function Radiofn(props){
    const { _data , fn} = props

    const handleChange = (event) => {
        fn(_data.title,event.target.value);
        
      };

    const controlProps = (item) => ({
        checked: _data.checked === item,
        onChange: handleChange,
        value: Number(item),
        name: 'color-radio-button-demo',
        inputProps: { 'aria-label': item },
      });

      
    return (
        <>
        
         { _data.arr.length > 0 && _data.arr.map((a,i)=>(
              <Radio {...controlProps(i)}/>
         ))}
        
       
        </>
       
    );
}

export default function Leftside() {

    const [ product , setProduct ] = React.useState({
        "Appael" : [],
        "Accessories" : ['Hats','Stickers','Phone Accessories','Bags','Hair Accessories','Desk Mats',
        'Socks','Wall Art','Face Masks','Laptop Sleeve','Notebooks','Shoes','Beauty','Pins','Sunglasses','Keychains','Planners'],
        'Home & Living':[]
    })

    const [ filter , setFilter ] = React.useState({
        quick : {
            title : "How quickly can I sell it?",
            type : 'checkbox',
            arr : ['Instantly','Request']
        },
        color : {
            title : "Colors",
            type : 'radio',
            arr : ['background-color:Tomato','background-color:Orange','background-color:DodgerBlue','background-color:MediumSeaGreen',
        'background-color:Gray','background-color:SlateBlue','background-color:Violet','background-color:LightGray',
    
        'background-color:Tomato','background-color:Orange','background-color:DodgerBlue','background-color:MediumSeaGreen',
        'background-color:Gray','background-color:SlateBlue','background-color:Violet','background-color:LightGray'],
        checked : 12
        },
        order : {
            title : "Min. orders required",
            arr : ['No Minimums','Up to 300','More than 300'],
            type : 'checkbox'
        },
        price : {
            title : 'Base Price',
            type : 'slider',
            arr : [0,66]
        },
        product : {
            title : "Production method",
            type : "checkbox",
            arr : ['Printed on demand','Embroidered (stitched)','All over printed']
        },
        special : {
            title : 'Special features',
            type : 'checkbox',
            arr : ['Inclusive sizing']
        }
    })

    const updateradio = (a,i) => {
        if(a == "Colors"){
            setFilter(prev=>({...prev, color : { ...prev.color , checked : Number(i) }}))
        }
       
    }


  return (
      <React.Fragment>
        <Typography variant="h6">All Products</Typography>

        {  Object.keys(product).map(a=>(
            <>
             <Typography pl={1}>{a}</Typography>
             {  product[a].length > 0 && product[a].map(p=>(
                    <Typography pl={4}>{p}</Typography>
             ))}
            </> 
        )) }

          
        {  Object.keys(filter).map(a=>(
            <>
             <Typography pl={1}>{filter[a].title}</Typography>

             { filter[a].type == "checkbox" && 
                <Checkboxfn _data = {filter[a].arr}/>
             }


            { filter[a].type == "radio" && 
            <Box style={{ display:'flex', flexWrap :'wrap' }}>
                <Radiofn _data = {filter[a]} fn={updateradio}/>
            </Box>
             }

             {
                 filter[a].type == "slider" &&
                 <Slider
                 min={18}
                 max={90}
                 ValueLabelComponent={0} 
                 defaultValue={40}
                 />
             }

            </> 
        )) }


    </React.Fragment>
  )
}
