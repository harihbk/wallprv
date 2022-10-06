import React from 'react'
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

export default function Rightside() {
  const [data, setData] = React.useState([
    {
      image: 'image1.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product1/img1.jpeg',
          color: 'rgb(26, 102, 51)'
        },
        {
          img: 'product1/img2.jpeg',
          color: 'rgb(173, 216, 230)'
        },
        {
          img: 'product1/img3.jpeg',
          color: 'rgb(163, 0, 27)'
        },
      ]

    },
    {
      image: 'image2.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product2/img1.jpeg',
          color: 'rgb(255, 240, 239)'
        },
        {
          img: 'product2/img2.jpeg',
          color: 'rgb(254, 251, 224)'
        },
        {
          img: 'product2/img3.jpeg',
          color: 'rgb(229, 242, 250)'
        },
      ]
    },
    {
      image: 'image3.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product3/img1.jpeg',
          color: 'rgb(162, 49, 43)'
        },
        {
          img: 'product3/img2.jpeg',
          color: 'rgb(38, 61, 45)'
        },
        {
          img: 'product3/img3.jpeg',
          color: 'rgb(255, 169, 19)'
        },
      ]
    },
    {
      image: 'image4.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product4/img1.jpeg',
          color: 'rgb(162, 49, 43)'
        },
        {
          img: 'product4/img2.jpeg',
          color: 'rgb(38, 61, 45)'
        },
        {
          img: 'product4/img3.jpeg',
          color: 'rgb(255, 169, 19)'
        },
      ]
    },
    {
      image: 'image5.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product5/img1.jpeg',
          color: '#fff'
        },
        {
          img: 'product5/img2.jpeg',
          color: 'rgb(57, 53, 58)'
        },
      ]
    },
    {
      image: 'image6.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product6/img1.jpeg',
          color: 'rgb(29, 33, 43)'
        },
        {
          img: 'product6/img2.jpeg',
          color: 'rgb(60, 61, 64)'
        },
        {
          img: 'product6/img3.jpeg',
          color: 'rgb(0, 0, 0)'
        },
      ]
    },{
      image: 'image1.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product1/img1.jpeg',
          color: 'rgb(26, 102, 51)'
        },
        {
          img: 'product1/img2.jpeg',
          color: 'rgb(173, 216, 230)'
        },
        {
          img: 'product1/img3.jpeg',
          color: 'rgb(163, 0, 27)'
        },
      ]

    },
    {
      image: 'image2.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product2/img1.jpeg',
          color: 'rgb(255, 240, 239)'
        },
        {
          img: 'product2/img2.jpeg',
          color: 'rgb(254, 251, 224)'
        },
        {
          img: 'product2/img3.jpeg',
          color: 'rgb(229, 242, 250)'
        },
      ]
    },
    {
      image: 'image3.jpeg',
      text: 'Yupoong 6245CM',
      h1text: 'Embroidered Dad Hat',
      from: 'From $15.95',
      min: 'no minimum',
      color: ['background-color: rgb(0, 0, 0)', 'background-color: rgb(57, 53, 58)', 'background-color: rgb(65, 84, 70)'
        , 'background-color: rgb(26, 102, 51)'
      ],
      images: [
        {
          img: 'product3/img1.jpeg',
          color: 'rgb(162, 49, 43)'
        },
        {
          img: 'product3/img2.jpeg',
          color: 'rgb(38, 61, 45)'
        },
        {
          img: 'product3/img3.jpeg',
          color: 'rgb(255, 169, 19)'
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
    <Box sx={{ padding: 2, marginTop : 3, marginRight: 2  }}>
      <div class="sc-fThYeS dgrySd">
        <h2 class="sc-BrFsL jkqQKF">{data.length} products</h2>
        <div data-testid="ProductsMenubar.Widget[Sort]"><div data-testid="dropdown" class="sc-egNfGp dhPHE">
          
          <button class="sc-hKdnnL eAXNjJ"><span>Sort by:</span>Recommended<svg height="12" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" overflow="visible" role="img"><path stroke="currentColor" stroke-width="2" d="M1 8l15 16L31 8" fill="none" fill-rule="evenodd" vector-effect="non-scaling-stroke"></path></svg></button></div></div></div>
      <Grid container spacing={4}>
        {data.map((a, i) => (
          <>
            <Grid item md={4}>
              <Box className="productcard">
                <Box className="productimg">
                  <img src={require(`../assets/${a.image}`)} width={"100%"} height={"100%"} />
                </Box>
                <Box className="product_caption">
                  <Typography className="type">{a.text}</Typography>
                  <Typography className="title">{a.h1text}</Typography>
                  <Box className="pricegroup" style={{ display: 'flex', columnGap: 10 }}>
                    <Typography className="price">{a.from}</Typography>
                    <Typography className="limit">{a.min}</Typography>
                  </Box>
                  <Box class="product_colors">
                    {a.images.length > 0 && a.images.map((data, index) => (
                      <Box key={index} style={{ backgroundColor: data.color }} onMouseEnter={() => changeImg(i, data.img)}></Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
          </>
        ))}
      </Grid>
    </Box>
  )
}
