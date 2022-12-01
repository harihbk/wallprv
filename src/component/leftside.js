import { Typography } from '@mui/material'
import React, { useState , useReducer , useContext } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import { IconButton } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';
import CloseIcon from '@mui/icons-material/Close';
import { ProductReducer } from "./store/productreducer"
import  ProductContext  from "./store/context"


function Checkboxfn(props) {
    const { _data } = props

    return (
        <>
            {_data.length > 0 && _data.map(a => (
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label={a} />
                </FormGroup>
            ))}

        </>

    );
}

function Radiofn(props) {
    const { _data, fn } = props

    const handleChange = (event) => {
        fn(_data.title, event.target.value);

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

            {_data.arr.length > 0 && _data.arr.map((a, i) => (
                <Tooltip title={a}>
                    {/* <Box style={{ backgroundColor : a }}></Box> */}
                    <Radio {...controlProps(i)} className={a} style={{ backgroundColor : a }}/>
                </Tooltip>
            ))}


        </>

    );
}

export default function Leftside() {

    //const [ productstate , dispatch ] = useReducer(ProductReducer,[])
    const [ test , setTest ] = useContext(ProductContext);
    const [ access , setAccess ] = React.useState([]);


    const filterProduct = (a,p) => {

        if(access.includes(p)){
            let al = [...access]
            var index = al.indexOf(p);
                if (index !== -1) {
                al.splice(index, 1);
                setAccess(al)
                }
        } else {
          let al = [...access]
          al.push(p)
          setAccess(al)
        }

       
    }

    React.useEffect(()=>{
       
        setTest(access)
    },[access])

    const [fmenuOpen, setFmMenuOPen] = useState(false);

    const [product, setProduct] = React.useState({
        "Appael": [],
        "Accessories": ['Bags', 'T-shirts', 'Round Neck Half Sleeve - 160 GSM', 'Mobiles', 'Fashions', 'Womens Tops',
            'Socks', 'Wall Art', 'Face Masks', 'Laptop Sleeve', 'Notebooks', 'Shoes', 'Beauty', 'Pins', 'Sunglasses', 'Keychains', 'Planners'],
        'Home & Living': []
    })

    const [filter, setFilter] = React.useState({
        quick: {
            title: "How quickly can I sell it?",
            type: 'checkbox',
            arr: ['Instantly', 'Request']
        },
        color: {
            title: "Colors",
            type: 'radio',
            arr: ['Tomato', 'Orange', 'DodgerBlue', 'MediumSeaGreen',
                'Gray', 'SlateBlue', 'Violet', 'LightGray',
                'Black', 'Green', 'Blue', 'DarkBlue',
                'Red', 'Pink', 'Maroon', 'Darkmagenta'],
            checked: 12
        },
        order: {
            title: "Min. orders required",
            arr: ['No Minimums', 'Up to 300', 'More than 300'],
            type: 'checkbox'
        },
        price: {
            title: 'Base Price',
            type: 'slider',
            arr: [0, 66]
        },
        product: {
            title: "Production method",
            type: "checkbox",
            arr: ['Printed on demand', 'Embroidered (stitched)', 'All over printed']
        },
        special: {
            title: 'Special features',
            type: 'checkbox',
            arr: ['Inclusive sizing']
        }
    })

    const updateradio = (a, i) => {
        if (a == "Colors") {
            setFilter(prev => ({ ...prev, color: { ...prev.color, checked: Number(i) } }))
        }
    }

    const toggleMenu = () => {
        setFmMenuOPen( fmenuOpen ? false : true );
    }


    return (
        <React.Fragment>
            <IconButton className={`menuButton ${fmenuOpen ? 'icon_open' : 'icon_close'}`} onClick={()=> toggleMenu()  } >
                { fmenuOpen ? (
                    <CloseIcon sx={{ color: "000" }}  />
                ) : (
                    <TuneIcon sx={{ color: "000" }} />
                ) }
            </IconButton>
    
            <Box sx={{ padding: 5 }} className={`sidebar ${fmenuOpen ? 'menuopen' : 'menuclose'}`}>
               
                <Box className='productFilter'>
                    <Typography >All Products</Typography>

                    {Object.keys(product).map(a => (
                        <Box className='listitem' >
                            <Typography pl={1}>{a}</Typography>
                            {
                                product[a].length > 0 && product[a].map(p => (
                                    <>
                                   
                                    { access.includes(p) && 
                                        <Typography pl={4} onClick={()=>filterProduct(a,p)} style={{ background : 'aliceblue' }} >{p}</Typography>
                                    }
                                    { !access.includes(p) && 
                                        <Typography pl={4} onClick={()=>filterProduct(a,p)}  >{p}</Typography>
                                    }
                                    </>
                                ))
                            }
                        </Box>
                    ))}
                </Box>


                {Object.keys(filter).map(a => (
                    <Box className='filterSection' >
                        <Typography className='filterTitle' pl={1}>{filter[a].title}</Typography>

                        {filter[a].type == "checkbox" &&
                            <Box style={{ marginLeft : 6 }}>
                                <Checkboxfn _data={filter[a].arr} />
                            </Box>
                        }


                        {filter[a].type == "radio" &&
                            <Box style={{ display: 'flex', flexWrap: 'wrap', columnGap :7, rowGap : 7 }} className='colors_button'>
                                <Radiofn _data={filter[a]} fn={updateradio} />
                            </Box>
                        }

                        {
                            filter[a].type == "slider" && 
                            <Box style={{ marginLeft : 6 }}>
                            <Slider
                                min={18}
                                max={90}
                                ValueLabelComponent={0}
                                defaultValue={40}
                            />
                            </Box>
                        }

                    </Box>
                ))}


            </Box>
        </React.Fragment>
    )
}
