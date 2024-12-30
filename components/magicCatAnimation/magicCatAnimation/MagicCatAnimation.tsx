import { keyframes } from '@emotion/react';
import { styled } from '@mui/material';

const animatedCat = keyframes`
0%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-01.png)}
8%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-02.png)};
16%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-03.png)};
24%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-04.png)};
32%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-05.png)};
40%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-06.png)};
48%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-07.png)};
56%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-08.png)};
64%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-09.png)};
72%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-10.png)};
80%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-11.png)};
88%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-12.png)};
96%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-13.png)};
100%{background-image:url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-14.png)};`;

const AnimatedCat = styled('div')({
  margin: 'auto',
  backgroundImage: `url(${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/headerAnimation/heidi-01.png)`,
  animationName: animatedCat,
  animationDuration: '2.5s',
  animationIterationCount: '1',
  backgroundSize: 'cover',
  height: 200,
  width: 220,
  alignItems: 'center',
  animationPlayState: 'running',
  '&:hover': {
    animationIterationCount: '2'
  }
});

const MagicCatAnimation = () => {
  return <AnimatedCat />;
};

export default MagicCatAnimation;
