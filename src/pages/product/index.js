import { ProductFrame, MyCarousel } from '@/components';

import Box from '@mui/material/Box';

const Product = () => {
  const productData = [
    {
      name: 'Mackbeth',
      writer: 'William Shakespeare',
      edition: 1945,
      image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg  ',
    },
    {
      name: 'Godan',
      writer: 'Munshi Premchand',
      edition: 1999,
      image: 'https://i.pinimg.com/474x/35/0d/bf/350dbfb02daeb8ffd652e659dfb71014--free-ebooks-a-novel.jpg',
    },
    {
      name: 'Paradise Lost',
      writer: 'John Miltion',
      edition: 1945,
      image: 'https://i.pinimg.com/originals/45/c8/56/45c85657b03ed2f47a610792c0c9109a.jpg',
    },
    {
      name: 'Mackbeth',
      writer: 'William Shakespeare',
      edition: 1945,
      image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg  ',
    },
    {
      name: 'Godan',
      writer: 'Munshi Premchand',
      edition: 1999,
      image: 'https://i.pinimg.com/474x/35/0d/bf/350dbfb02daeb8ffd652e659dfb71014--free-ebooks-a-novel.jpg',
    },
    {
      name: 'Paradise Lost',
      writer: 'John Miltion',
      edition: 1945,
      image: 'https://i.pinimg.com/originals/45/c8/56/45c85657b03ed2f47a610792c0c9109a.jpg',
    },
    {
      name: 'Mackbeth',
      writer: 'William Shakespeare',
      edition: 1945,
      image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg  ',
    },
    {
      name: 'Godan',
      writer: 'Munshi Premchand',
      edition: 1999,
      image: 'https://i.pinimg.com/474x/35/0d/bf/350dbfb02daeb8ffd652e659dfb71014--free-ebooks-a-novel.jpg',
    },
    {
      name: 'Paradise Lost',
      writer: 'John Miltion',
      edition: 1945,
      image: 'https://i.pinimg.com/originals/45/c8/56/45c85657b03ed2f47a610792c0c9109a.jpg',
      price:250
    },
    {
      name: 'Mackbeth',
      writer: 'William Shakespeare',
      edition: 1945,
      image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg  ',
      price:250
    },
    {
      name: 'Godan',
      writer: 'Munshi Premchand',
      edition: 1999,
      image: 'https://i.pinimg.com/474x/35/0d/bf/350dbfb02daeb8ffd652e659dfb71014--free-ebooks-a-novel.jpg',
      price:250
    },
    {
      name: 'Paradise Lost',
      writer: 'John Miltion',
      edition: 1945,
      image: 'https://i.pinimg.com/originals/45/c8/56/45c85657b03ed2f47a610792c0c9109a.jpg',
      price:250
    },
    {
      name: 'Mackbeth',
      writer: 'William Shakespeare',
      edition: 1945,
      image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg  ',
      price:250
    },
    {
      name: 'Godan',
      writer: 'Munshi Premchand',
      edition: 1999,
      image: 'https://i.pinimg.com/474x/35/0d/bf/350dbfb02daeb8ffd652e659dfb71014--free-ebooks-a-novel.jpg',
      price:250
    },
    {
      name: 'Paradise Lost',
      writer: 'John Miltion',
      edition: 1945,
      image: 'https://i.pinimg.com/originals/45/c8/56/45c85657b03ed2f47a610792c0c9109a.jpg',
    },
    {
      name: 'Mackbeth',
      writer: 'William Shakespeare',
      edition: 1945,
      image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg',
    },
    {
      name: 'Godan',
      writer: 'Munshi Premchand',
      edition: 1999,
      image: 'https://i.pinimg.com/474x/35/0d/bf/350dbfb02daeb8ffd652e659dfb71014--free-ebooks-a-novel.jpg',
    },
    {
      name: 'Paradise Lost',
      writer: 'John Miltion',
      edition: 1945,
      image: 'https://i.pinimg.com/originals/45/c8/56/45c85657b03ed2f47a610792c0c9109a.jpg',
    },
  ];
  const images = [
    {
      image: 'https://i.pinimg.com/736x/f7/93/d4/f793d46a755c59750616ae8ce7f1ce84.jpg',
      caption: 'King lear by William Shakespeare',
    },
    {
      image: 'https://i.pinimg.com/originals/45/c8/56/45c85657b03ed2f47a610792c0c9109a.jpg',
      caption: 'Image 2',
    },
    {
      image: 'https://i.pinimg.com/474x/35/0d/bf/350dbfb02daeb8ffd652e659dfb71014--free-ebooks-a-novel.jpg',
      caption: 'Image 3',
    },
    {
      image: 'https://i.pinimg.com/736x/01/61/28/016128391cd5de7d8b886cb3a8322df3.jpg',
      caption: 'Image 4',
    },
  ];
  
  return (
    //   // console.log('LOG ~ file: index.js:26 ~ returnproductData.map ~ item:', item);
    <Box>
      {/* <Navbar /> */}
      <div className='productPage' style={{ marginTop: '10px' }}>
        <MyCarousel carousel={images}/>
        <ProductFrame product={productData} />
      </div>
      {/* <Text data="helloText"/> */}
    </Box>
  );
};
export default Product;
