import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '90%',
  maxWidth: 1180,
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '48px',
  
  span: {
    color: '$purple',
    fontSize: '40px',
  }
})

export const Description = styled('div', {
  fontSize: '1rem',
  color:'$subText',
  maxWidth: 568,
  textAlign: 'center',
  marginTop: '0.5rem',
})
