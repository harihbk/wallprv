import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useNavigate } from "react-router-dom";

const colorsObj = {
  navyblue : '#153084',
  royalblue : '#214ED3',
  sandal : '#A89166',
  white : '#fff',
  black : '#000',
  blue : '#0000FF',
  red : '#DC143C',
  maroon : '#800000',
  grey : '#808080',
  mint : '#3EB489',
  lilac : '#C8A2C8',
  pink : '#FF92A5',
  purple : '#800080',
  olivegreen : '#6b8e23',
  kiwigreen : '#b0bf1a',
  yellow : '#ffff00'
}
export default function Rightside(props) {
  let navigate = useNavigate();

  const [data, setData] = React.useState([
    {
      image: 'totebag/kakki.png',
      text: 'Bags',
      h1text: 'Tote Bag',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'totebag/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'totebag/kakki.png',
          color: colorsObj.sandal,
          colorName : 'Sandal'
        },
      ]

    },
    {
      image: 'regular_tshirt/kiwi_green.png',
      text: 'T-shirts',
      h1text: 'Regular T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'regular_tshirt/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'regular_tshirt/grey.png',
          color: colorsObj.grey,
          colorName : 'Grey'
        },
        {
          img: 'regular_tshirt/kiwi_green.png',
          color: colorsObj.kiwigreen,
          colorName : 'Kiwi Green'
        },
        {
          img: 'regular_tshirt/maroon.png',
          color: colorsObj.maroon,
          colorName : 'Maroon'
        },
      ]
    },
    {
      image: 'oversized_tshirt/black.png',
      text: 'T-Shirts',
      h1text: 'Oversized T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'oversized_tshirt/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'oversized_tshirt/navyblue.png',
          color: colorsObj.navyblue,
          colorName : 'Navy Blue'
        },
        {
          img: 'oversized_tshirt/taupe.png',
          color: colorsObj.sandal,
          colorName : 'Sandal'
        },
        {
          img: 'oversized_tshirt/white.png',
          color: colorsObj.white,
          colorName : 'White'
        },
      ]
    },
    {
      image: 'womens_tshirt/grey.png',
      text: 'Round Neck Half Sleeve - 160 GSM',
      h1text: 'Women T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'womens_tshirt/grey.png',
          color: colorsObj.grey,
          colorName : 'Grey'
        },
        {
          img: 'womens_tshirt/lilac.png',
          color: colorsObj.lilac,
          colorName : 'Lilac'
        },
        {
          img: 'womens_tshirt/mint.png',
          color: colorsObj.mint,
          colorName : 'Mint'
        },
        {
          img: 'womens_tshirt/white.png',
          color: colorsObj.white,
          colorName : 'White'
        },
        {
          img: 'womens_tshirt/navyblue.png',
          color: colorsObj.navyblue,
          colorName : 'Bavy blue'
        },
        {
          img: 'womens_tshirt/royalblue.png',
          color: colorsObj.royalblue,
          colorName : 'Royal blue'
        },
      ]
    },
    {
      image: 'sweat_tshirt/white.jpg',
      text: 'T-shirts',
      h1text: 'Sweat shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'sweat_tshirt/black.jpg',
          color: colorsObj.black,
          colorName : 'black'
        },
        {
          img: 'sweat_tshirt/grey.jpg',
          color: colorsObj.grey,
          colorName : 'grey'
        },
        {
          img: 'sweat_tshirt/maroon.jpg',
          color: colorsObj.maroon,
          colorName : 'maroon'
        },
        {
          img: 'sweat_tshirt/white.jpg',
          color: colorsObj.white,
          colorName : 'White'
        },
        {
          img: 'sweat_tshirt/navyblue.jpg',
          color: colorsObj.navyblue,
          colorName : 'Bavy blue'
        },
        {
          img: 'sweat_tshirt/royalblue.jpg',
          color: colorsObj.royalblue,
          colorName : 'Royal blue'
        },
        {
          img: 'sweat_tshirt/red.jpg',
          color: colorsObj.red,
          colorName : 'red'
        },
      ]

    },
    {
      image: 'iphone13_case/silicon.png',
      text: 'Mobiles',
      h1text: 'iPhone 13 Pro',
      from: 'From $15.95',
      min: 'no minimum',
      producttype : 'name',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'iphone13_case/silicon.png',
          color: colorsObj.black,
          name : 'Silicon Case'
        },
        {
          img: 'iphone13_case/glass.png',
          color: colorsObj.black,
          name : 'Glass Case'
        },
        {
          img: 'iphone13_case/hard.png',
          color: colorsObj.black,
          name : 'Hard Case'
        },
        {
          img: 'iphone13_case/bumbercase.png',
          color: colorsObj.black,
          name : 'Bumber Case'
        },
      ]
    },
    {
      image: 'hoodie/maroon.png',
      text: 'Fashions',
      h1text: 'Hoodie',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'hoodie/black.png',
          color: colorsObj.black,
          colorName : 'black'
        },
        {
          img: 'hoodie/grey.png',
          color: colorsObj.grey,
          colorName : 'grey'
        },
        {
          img: 'hoodie/maroon.png',
          color: colorsObj.maroon,
          colorName : 'maroon'
        },
        {
          img: 'hoodie/white.png',
          color: colorsObj.white,
          colorName : 'White'
        },
        {
          img: 'hoodie/navyblue.png',
          color: colorsObj.navyblue,
          colorName : 'Bavy blue'
        },
        {
          img: 'hoodie/royalblue.png',
          color: colorsObj.royalblue,
          colorName : 'Royal blue'
        },
        {
          img: 'hoodie/red.png',
          color: colorsObj.red,
          colorName : 'red'
        },
      ]
    },
    {
      image: 'crop_tops/lilac.png',
      text: 'Womens Tops',
      h1text: 'Crop Tops',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'crop_tops/black.png',
          color: colorsObj.black,
          colorName : 'black'
        },
        {
          img: 'crop_tops/grey.png',
          color: colorsObj.grey,
          colorName : 'grey'
        },
        {
          img: 'crop_tops/lilac.png',
          color: colorsObj.lilac,
          colorName : 'lilac'
        },
        {
          img: 'crop_tops/white.png',
          color: colorsObj.white,
          colorName : 'White'
        },
        {
          img: 'crop_tops/mint.png',
          color: colorsObj.mint,
          colorName : 'Mint'
        },
        {
          img: 'crop_tops/navyblue.png',
          color: colorsObj.navyblue,
          colorName : 'Navy blue'
        },
        {
          img: 'crop_tops/red.png',
          color: colorsObj.red,
          colorName : 'red'
        },
        {
          img: 'crop_tops/yellow.png',
          color: colorsObj.yellow,
          colorName : 'yellow'
        },
      ]
    },
    {
      image: 'totebag/kakki.png',
      text: 'Bags',
      h1text: 'Tote Bag',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'totebag/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'totebag/kakki.png',
          color: colorsObj.sandal,
          colorName : 'Sandal'
        },
      ]

    },
    {
      image: 'regular_tshirt/maroon.png',
      text: 'T-shirts',
      h1text: 'Regular T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'regular_tshirt/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'regular_tshirt/grey.png',
          color: colorsObj.grey,
          colorName : 'Grey'
        },
        {
          img: 'regular_tshirt/kiwi_green.png',
          color: colorsObj.kiwigreen,
          colorName : 'Kiwi Green'
        },
        {
          img: 'regular_tshirt/maroon.png',
          color: colorsObj.maroon,
          colorName : 'Maroon'
        },
      ]
    },
    {
      image: 'oversized_tshirt/black.png',
      text: 'T-Shirts',
      h1text: 'Oversized T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'oversized_tshirt/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'oversized_tshirt/navyblue.png',
          color: colorsObj.navyblue,
          colorName : 'Navy Blue'
        },
        {
          img: 'oversized_tshirt/taupe.png',
          color: colorsObj.sandal,
          colorName : 'Sandal'
        },
        {
          img: 'oversized_tshirt/white.png',
          color: colorsObj.white,
          colorName : 'White'
        },
      ]
    },
    {
      image: 'womens_tshirt/grey.png',
      text: 'Round Neck Half Sleeve - 160 GSM',
      h1text: 'Women T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'womens_tshirt/grey.png',
          color: colorsObj.grey,
          colorName : 'Grey'
        },
        {
          img: 'womens_tshirt/lilac.png',
          color: colorsObj.lilac,
          colorName : 'Lilac'
        },
        {
          img: 'womens_tshirt/mint.png',
          color: colorsObj.mint,
          colorName : 'Mint'
        },
        {
          img: 'womens_tshirt/white.png',
          color: colorsObj.white,
          colorName : 'White'
        },
        {
          img: 'womens_tshirt/navyblue.png',
          color: colorsObj.navyblue,
          colorName : 'Bavy blue'
        },
        {
          img: 'womens_tshirt/royalblue.png',
          color: colorsObj.royalblue,
          colorName : 'Royal blue'
        },
      ]
    },
    {
      image: 'totebag/kakki.png',
      text: 'Bags',
      h1text: 'Tote Bag',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'totebag/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'totebag/kakki.png',
          color: colorsObj.sandal,
          colorName : 'Sandal'
        },
      ]

    },
    {
      image: 'regular_tshirt/kiwi_green.png',
      text: 'T-shirts',
      h1text: 'Regular T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'regular_tshirt/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'regular_tshirt/grey.png',
          color: colorsObj.grey,
          colorName : 'Grey'
        },
        {
          img: 'regular_tshirt/kiwi_green.png',
          color: colorsObj.kiwigreen,
          colorName : 'Kiwi Green'
        },
        {
          img: 'regular_tshirt/maroon.png',
          color: colorsObj.maroon,
          colorName : 'Maroon'
        },
      ]
    },
    {
      image: 'oversized_tshirt/black.png',
      text: 'T-Shirts',
      h1text: 'Oversized T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'oversized_tshirt/black.png',
          color: colorsObj.black,
          colorName : 'Black'
        },
        {
          img: 'oversized_tshirt/navyblue.png',
          color: colorsObj.navyblue,
          colorName : 'Navy Blue'
        },
        {
          img: 'oversized_tshirt/taupe.png',
          color: colorsObj.sandal,
          colorName : 'Sandal'
        },
        {
          img: 'oversized_tshirt/white.png',
          color: colorsObj.white,
          colorName : 'White'
        },
      ]
    },
    {
      image: 'womens_tshirt/grey.png',
      text: 'Round Neck Half Sleeve - 160 GSM',
      h1text: 'Women T-shirt',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'womens_tshirt/grey.png',
          color: colorsObj.grey,
          colorName : 'Grey'
        },
        {
          img: 'womens_tshirt/lilac.png',
          color: colorsObj.lilac,
          colorName : 'Lilac'
        },
        {
          img: 'womens_tshirt/mint.png',
          color: colorsObj.mint,
          colorName : 'Mint'
        },
        {
          img: 'womens_tshirt/white.png',
          color: colorsObj.white,
          colorName : 'White'
        },
        {
          img: 'womens_tshirt/navyblue.png',
          color: colorsObj.navyblue,
          colorName : 'Bavy blue'
        },
        {
          img: 'womens_tshirt/royalblue.png',
          color: colorsObj.royalblue,
          colorName : 'Royal blue'
        },
      ]
    },
  ]);

  const changeImg = (index, img) => {
    let data1 = JSON.parse(JSON.stringify(data));
    data1[index].image = img;
    setData(data1);
  }

  console.log(data);
  return (
    <Box sx={{ padding: 2, paddingX : { xs : 3, md: 10 } , marginTop : 3, marginBottom : 10, marginRight: 2  }}>
      <div className="sc-fThYeS dgrySd">
        <h2 className="sc-BrFsL jkqQKF">{data.length} products</h2>
        <div data-testid="ProductsMenubar.Widget[Sort]"><div data-testid="dropdown" className="sc-egNfGp dhPHE">
          
          <button className="sc-hKdnnL eAXNjJ"><span>Sort by:</span>Recommended</button></div></div></div>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={3}>
        {data.map((a, i) => (
          <>
            <Grid item md={3} sm={6} xs={6} >
              <Box className="productcard" >
                <Box className="productimg " onClick={ () => navigate('/productdetail', { state : a }) } height={{  xs: 200, md: 300  }} style={{ backgroundColor : '#30302f'}}>
                  <img src={require(`../assets/${a.image}`)} width={"100%"} height={"100%"} />
                </Box>
                <Box className="product_caption">
                  <Typography className="type">{a.text}</Typography>
                  <Typography className="title">{a.h1text}</Typography>
                  <Box className="pricegroup" style={{ display: 'flex', columnGap: 10 }}>
                    <Typography className="price">{a.from}</Typography>
                    <Typography className="limit">{a.min} {a.producttype}</Typography>
                  </Box>
                  { 
                    a.producttype != 'name' && 
                    <Box className="product_colors">
                      {a.images.length > 0 && a.images.map((data, index) => (
                        <Box key={index} style={{ backgroundColor: data.color }} onMouseEnter={() => changeImg(i, data.img)}></Box>
                      ))}
                    </Box>
                  }
                  { 
                    a.producttype == 'name' && 
                    <Box className="procucttype">
                      {a.images.length > 0 && a.images.map((data, index) => (
                        <Box key={index}  onMouseEnter={() => changeImg(i, data.img)}>{data.name}</Box>
                      ))}
                    </Box>
                  }
                </Box>
              </Box>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  )
}
