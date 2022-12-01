import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Leftside from '../../component/leftside';
import { Grid } from '@mui/material';
import Rightside from '../../component/rightside';
import Header from '../../component/Header';
import { useLocation, useNavigate } from "react-router-dom";


export default function ProductDetail(props) {
    const stateData = useLocation();
    const {state} = stateData;

    const [product, setProduct] = useState(state)
    console.log(product);
    const navigate = useNavigate();

    const changeImg = (img) =>{
        setProduct({
            ...product,
            image : img
        })
    }

    return (
        <>
            <Box >
                <Header />
            </Box>
            <Box  style={{ maxWidth: 1000, margin: 'auto', padding : 10 }}>
                    <Box style={{ marginBottom : 10, cursor : 'pointer', zIndex : 1, position : 'relative' }} onClick={ ()=> navigate('/') }>
                        <svg height="9" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" overflow="visible" role="img">
                            <path stroke="currentColor" stroke-width="2" d="M18 1L2 16l16 15" fill="none" fill-rule="evenodd" vector-effect="non-scaling-stroke"></path>
                        </svg> Back
                    </Box>

                <Grid container columnSpacing={{ xs: 1, sm: 5, md: 5 }} rowSpacing={5}>
                    <Grid item md={6} sm={12}>
                        <Box>
                            <Box className='product_image' >
                                <img src={require(`../../assets/${product?.image}`)} width={"100%"} height={"100%"} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={5} sm={12}>
                        <Box className='product_detail'>
                            <Box className='subtitle' style={{ opacity: .6 }}>{product?.text}</Box>
                            <h2 className='product_title' style={{ marginTop: 0 }}>{product?.h1text}</h2>
                            {
                                product.images != 'name' &&
                                <Box className="product_colors">
                                    {product.images?.length > 0 && product.images.map((data, index) => (
                                        <Box key={index} style={{ backgroundColor: data.color }} onMouseEnter={() => changeImg(data.img)}></Box>
                                    ))}
                                </Box>
                            }
                            {
                                product.images == 'name' &&
                                <Box className="procucttype">
                                    {product.images.length > 0 && product.images.map((data, index) => (
                                        <Box key={index}  >{data.name}</Box>
                                    ))}
                                </Box>
                            }

                            <Box sx={{ marginBottom: 2, marginTop: 3 }}>Stylish joggers that can be worn day and night. Slim fit and tight ankle cuffs. </Box>
                            <Box sx={{ marginBottom: 2 }}>
                                <ul>
                                    <li>65% cotton, 35% polyester</li>
                                    <li>Midweight Fleece (8.5 oz) </li>
                                    <li>The model is 5'11'' and is wearing a size M. XS–2XL</li>
                                </ul>
                            </Box>

                            <Box className='product_price'>$27.95</Box>

                            <Button className='customize_button'>Signup to Customize</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
