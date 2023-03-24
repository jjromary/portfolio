import { styled } from "..";

export const HomeContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center', 
  margin: '0 auto',
  gap: '3rem',
  width: '82%',  
})

export const SkillsContainer = styled('div', {
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

export const SkillsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '40px',
  width: '100%',
})

export const SkillList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '2rem',
  flexWrap: 'wrap',
  marginTop: '2rem',
})

export const SkillStatus = styled('div',{
  fontSize: '1rem'
})
export const SkillImgs = styled('div',{
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  flexWrap: 'wrap',
})

export const ProjectContent = styled('div', {
  display:' flex',
  flexDirection: 'row',
  alignItems: "center",
  gap: '1rem',
  justifyContent: 'center', 
  flexWrap: 'wrap', 
  minHeight: 656,
  width: '100%',
  marginLeft: 'auto',
})

export const Project = styled('a', {
  display: 'flex',
  flexDirection: 'column',
  border: '1px solid #7289DA',
  borderRadius: 8,
  cursor: 'pointer',
  padding: '0.25rem',
  maxWidth: 600,

  img: {
    objectFit: 'cover',
    borderRadius: 8,
  },

  footer: {
    display: ' flex',
    flexDirection: 'column',
    padding: '0.25rem',
    
    strong: {
      fontSize: '1.5rem',
    },
    
    span: {
      fontSize: "1rem",
      color: '$subText'
    }

  }
})