export const filter = (color: string, thickness: number) => {
  return `drop-shadow(${thickness}px 0 0 ${color}) 
          drop-shadow(0 ${thickness}px 0 ${color}) 
          drop-shadow(-${thickness}px 0 0 ${color}) 
          drop-shadow(0 -${thickness}px 0 ${color})`;
};
