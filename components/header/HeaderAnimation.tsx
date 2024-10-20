import { keyframes, styled } from '@mui/system';
const animatedCat = keyframes`
0% { background-image: url('image/headerAnimation/headerAnimation.webp'
)}
15% { background-image: url('image/headerAnimation/headerAnimation2.webp'
)}
30% { background-image: url('image/headerAnimation/headerAnimation3.webp'
)}
45% { background-image: url('image/headerAnimation/headerAnimation4.webp'
)}
60% { background-image: url('image/headerAnimation/headerAnimation5.webp'
)}
75% { background-image: url('image/headerAnimation/headerAnimation6.webp'
)}
90% { background-image: url('image/headerAnimation/headerAnimation7.webp'
)}
100% { background-image: url('image/headerAnimation/headerAnimation8.webp'
)}

`;

const AnimatedCat = styled('div')({
  backgroundImage: 'url(image/headerAnimation/headerAnimation8.webp)',
  animationName: animatedCat,
  animationDuration: '1.5s',
  animationIterationCount: '1',
  backgroundSize: 'cover',
  height: 300,
  width: 400,
  animationPlayState: 'running',
  zIndex: 1,
  '@media (prefers-reduced-motion: reduce)': {
    animation: 'none'
  }
});

const HeaderAnimation = () => {
  return <AnimatedCat />;
};

export default HeaderAnimation;
