import { Typography } from '@mui/material'
import React from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';

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

    const [product, setProduct] = React.useState({
        "Appael": [],
        "Accessories": ['Hats', 'Stickers', 'Phone Accessories', 'Bags', 'Hair Accessories', 'Desk Mats',
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


    return (
        <React.Fragment>
            <Box sx={{ padding: 5 }} className='sidebar'>

                <Box className='productFilter'>
                    <Typography >All Products</Typography>

                    {Object.keys(product).map(a => (
                        <Box className='listitem'>
                            <Typography pl={1}>{a}</Typography>
                            {
                                product[a].length > 0 && product[a].map(p => (
                                    <Typography pl={4}>{p}</Typography>
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
